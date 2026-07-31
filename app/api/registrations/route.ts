import { ensureCompetitionRegistrationSchema, getDb } from "@/db";
import { competitionRegistrations } from "@/db/schema";

type RegistrationPayload = {
  teamName?: unknown;
  university?: unknown;
  contactName?: unknown;
  email?: unknown;
  phone?: unknown;
  facultyAdvisor?: unknown;
  teamSize?: unknown;
  teamStatus?: unknown;
  notes?: unknown;
  consent?: unknown;
  companyWebsite?: unknown;
};

function clean(value: unknown, max = 240) {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as RegistrationPayload;

    if (clean(payload.companyWebsite)) {
      return Response.json({ ok: true }, { status: 201 });
    }

    const teamName = clean(payload.teamName, 160);
    const university = clean(payload.university, 180);
    const contactName = clean(payload.contactName, 120);
    const email = clean(payload.email, 200).toLowerCase();
    const phone = clean(payload.phone, 50);
    const facultyAdvisor = clean(payload.facultyAdvisor, 160);
    const teamSize = clean(payload.teamSize, 40);
    const teamStatus = clean(payload.teamStatus, 60);
    const notes = clean(payload.notes, 2000);
    const consent = payload.consent === true;

    if (
      !teamName ||
      !university ||
      !contactName ||
      !teamSize ||
      !teamStatus ||
      !consent
    ) {
      return Response.json(
        { error: "Please complete all required fields." },
        { status: 400 }
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return Response.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    await ensureCompetitionRegistrationSchema();
    const db = getDb();
    await db.insert(competitionRegistrations).values({
      id: crypto.randomUUID(),
      teamName,
      university,
      contactName,
      email,
      phone: phone || null,
      facultyAdvisor: facultyAdvisor || null,
      teamSize,
      teamStatus,
      notes,
      consent,
    });

    return Response.json({ ok: true }, { status: 201 });
  } catch {
    return Response.json(
      {
        error:
          "Something went wrong while saving your registration. Please try again.",
      },
      { status: 500 }
    );
  }
}
