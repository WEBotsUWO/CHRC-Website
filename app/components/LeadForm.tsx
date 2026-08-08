"use client";

import { FormEvent, useState } from "react";

const hostedFormEndpoint = process.env.NEXT_PUBLIC_FORM_ENDPOINT;

const disciplines = [
  "Mechanical",
  "Electrical",
  "Software",
  "Controls",
  "Design / Business",
];

export function LeadForm() {
  const [state, setState] = useState<"idle" | "sending" | "success" | "error">(
    "idle"
  );
  const [error, setError] = useState("");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("sending");
    setError("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      university: formData.get("university"),
      program: formData.get("program"),
      teamSize: formData.get("teamSize"),
      startingPoint: formData.get("startingPoint"),
      disciplines: formData.getAll("disciplines"),
      message: formData.get("message"),
      consent: formData.get("consent") === "on",
      companyWebsite: formData.get("companyWebsite"),
    };

    try {
      const endpoint = hostedFormEndpoint ?? "/api/leads";
      const requestPayload = hostedFormEndpoint
        ? {
            ...payload,
            disciplines: payload.disciplines.join(", "),
            companyWebsite: undefined,
            _honey: payload.companyWebsite,
            _subject: `New CHRC team lead: ${payload.university || "University not provided"}`,
            _template: "table",
          }
        : payload;
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "content-type": "application/json",
          accept: "application/json",
        },
        body: JSON.stringify(requestPayload),
      });
      const result = (await response.json()) as { error?: string };

      if (!response.ok) {
        throw new Error(result.error ?? "We couldn't send your details.");
      }

      form.reset();
      setState("success");
    } catch (submissionError) {
      setState("error");
      setError(
        submissionError instanceof Error
          ? submissionError.message
          : "We couldn't send your details."
      );
    }
  }

  if (state === "success") {
    return (
      <div className="form-success" role="status">
        <span className="success-mark" aria-hidden="true" />
        <p className="section-label">Submission received</p>
        <h2>Thanks. We received your information.</h2>
        <p>
          A CHRC organizer will reach out to help you plan your first campus
          meeting and next steps.
        </p>
        <button
          type="button"
          className="button button-quiet"
          onClick={() => setState("idle")}
        >
          Send another response
        </button>
      </div>
    );
  }

  return (
    <form className="lead-form" onSubmit={submit}>
      <div className="form-heading">
        <p className="section-label">Start a team</p>
        <h2>Join the movement.</h2>
        <p>
          Tell us about your university, your current team size, and where you
          are starting. One person is enough to submit.
        </p>
      </div>

      <div className="form-grid">
        <label>
          <span>Full name *</span>
          <input name="name" autoComplete="name" required placeholder="Alex Chen" />
        </label>
        <label>
          <span>University email *</span>
          <input
            name="email"
            type="email"
            autoComplete="email"
            required
            placeholder="alex@university.ca"
          />
        </label>
        <label>
          <span>Phone <small>Optional</small></span>
          <input
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="+1 416 555 0123"
          />
        </label>
        <label>
          <span>University *</span>
          <input
            name="university"
            autoComplete="organization"
            required
            placeholder="Your university"
          />
        </label>
        <label>
          <span>Program and year <small>Optional</small></span>
          <input name="program" placeholder="Mechatronics, 3rd year" />
        </label>
        <label>
          <span>Expected team size *</span>
          <select name="teamSize" required defaultValue="">
            <option value="" disabled>Select a range</option>
            <option value="just-me">Just me for now</option>
            <option value="2-5">2 to 5 people</option>
            <option value="6-10">6 to 10 people</option>
            <option value="11-20">11 to 20 people</option>
            <option value="20+">20+ people</option>
          </select>
        </label>
      </div>

      <fieldset>
        <legend>Where are you starting? *</legend>
        <div className="choice-grid">
          <label className="choice-card">
            <input type="radio" name="startingPoint" value="new" required />
            <span>
              <strong>Starting from zero</strong>
              <small>I want help finding people and forming a club.</small>
            </span>
          </label>
          <label className="choice-card">
            <input type="radio" name="startingPoint" value="existing" />
            <span>
              <strong>Existing club or team</strong>
              <small>We may be ready to add CHRC to our plans.</small>
            </span>
          </label>
          <label className="choice-card">
            <input type="radio" name="startingPoint" value="faculty" />
            <span>
              <strong>Faculty / university support</strong>
              <small>I can help students build a team on campus.</small>
            </span>
          </label>
        </div>
      </fieldset>

      <fieldset>
        <legend>Disciplines represented <small>Select any</small></legend>
        <div className="check-grid">
          {disciplines.map((discipline) => (
            <label className="check-pill" key={discipline}>
              <input type="checkbox" name="disciplines" value={discipline} />
              <span>{discipline}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <label className="message-label">
        <span>What would help you get moving? <small>Optional</small></span>
        <textarea
          name="message"
          rows={5}
          placeholder="Tell us what you're excited about, what resources you have, or what feels unclear."
        />
      </label>

      <label className="honeypot" aria-hidden="true">
        Company website
        <input name="companyWebsite" tabIndex={-1} autoComplete="off" />
      </label>

      <label className="consent-row">
        <input type="checkbox" name="consent" required />
        <span>
          I agree that CHRC may contact me about starting or joining a university
          team. We won&apos;t sell or share my details.
        </span>
      </label>

      {state === "error" && (
        <p className="form-error" role="alert">
          {error} You can also email us at{" "}
          <a href="mailto:canadianhumanoidroboticscomp@gmail.com">
            canadianhumanoidroboticscomp@gmail.com
          </a>
          .
        </p>
      )}

      <button
        type="submit"
        className="button button-primary submit-button"
        disabled={state === "sending"}
      >
        {state === "sending" ? "Sending..." : "Submit team interest"}
      </button>
    </form>
  );
}
