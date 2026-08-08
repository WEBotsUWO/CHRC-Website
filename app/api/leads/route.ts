import { teamLeads } from "@/db/schema";

type LeadPayload = {
  name?: unknown;
  email?: unknown;
  phone?: unknown;
  university?: unknown;
  program?: unknown;
  teamSize?: unknown;
  startingPoint?: unknown;
  disciplines?: unknown;
  message?: unknown;
  consent?: unknown;
  companyWebsite?: unknown;
};

function clean(value: unknown, max = 240) {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as LeadPayload;

    if (clean(payload.companyWebsite)) {
      return Response.json({ ok: true }, { status: 201 });
    }

    const name = clean(payload.name, 120);
    const email = clean(payload.email, 200).toLowerCase();
    const phone = clean(payload.phone, 50);
    const university = clean(payload.university, 180);
    const program = clean(payload.program, 160);
    const teamSize = clean(payload.teamSize, 40);
    const startingPoint = clean(payload.startingPoint, 40);
    const message = clean(payload.message, 2000);
    const consent = payload.consent === true;
    const disciplines = Array.isArray(payload.disciplines)
      ? payload.disciplines
          .filter((item): item is string => typeof item === "string")
          .slice(0, 8)
          .map((item) => clean(item, 60))
      : [];

    if (!name || !university || !teamSize || !startingPoint || !consent) {
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

    const { ensureLeadSchema, getDb } = await import("@/db");
    await ensureLeadSchema();
    const db = getDb();
    await db.insert(teamLeads).values({
      id: crypto.randomUUID(),
      name,
      email,
      phone: phone || null,
      university,
      program: program || null,
      teamSize,
      startingPoint,
      disciplines: JSON.stringify(disciplines),
      message,
      consent,
    });

    return Response.json({ ok: true }, { status: 201 });
  } catch {
    return Response.json(
      {
        error:
          "Something went wrong while saving your details. Please try again.",
      },
      { status: 500 }
    );
  }
}
