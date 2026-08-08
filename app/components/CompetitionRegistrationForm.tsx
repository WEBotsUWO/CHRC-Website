"use client";

import { FormEvent, useState } from "react";

const hostedFormEndpoint = process.env.NEXT_PUBLIC_FORM_ENDPOINT;

export function CompetitionRegistrationForm() {
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
      teamName: formData.get("teamName"),
      university: formData.get("university"),
      contactName: formData.get("contactName"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      facultyAdvisor: formData.get("facultyAdvisor"),
      teamSize: formData.get("teamSize"),
      teamStatus: formData.get("teamStatus"),
      notes: formData.get("notes"),
      consent: formData.get("consent") === "on",
      companyWebsite: formData.get("companyWebsite"),
    };

    try {
      const endpoint = hostedFormEndpoint ?? "/api/registrations";
      const requestPayload = hostedFormEndpoint
        ? {
            ...payload,
            companyWebsite: undefined,
            _honey: payload.companyWebsite,
            _subject: `New CHRC 2027 registration: ${payload.teamName || "Team not provided"}`,
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
        throw new Error(result.error ?? "We couldn't send your registration.");
      }

      form.reset();
      setState("success");
    } catch (submissionError) {
      setState("error");
      setError(
        submissionError instanceof Error
          ? submissionError.message
          : "We couldn't send your registration."
      );
    }
  }

  if (state === "success") {
    return (
      <div className="form-success" role="status">
        <span className="success-mark" aria-hidden="true" />
        <p className="section-label">Registration received</p>
        <h2>Your CHRC 2027 interest is recorded.</h2>
        <p>
          The CHRC team will contact your primary representative with the next
          registration steps and competition package updates.
        </p>
        <button
          type="button"
          className="button button-quiet"
          onClick={() => setState("idle")}
        >
          Register another team
        </button>
      </div>
    );
  }

  return (
    <form className="lead-form registration-form" onSubmit={submit}>
      <div className="form-heading">
        <p className="section-label">CHRC 2027</p>
        <h2>Register your team&apos;s interest.</h2>
        <p>
          This form is for established or forming university and college teams
          planning to enter the Humanoid Hand Competition.
        </p>
      </div>

      <div className="form-grid">
        <label>
          <span>Team or club name *</span>
          <input name="teamName" required placeholder="Campus Robotics Club" />
        </label>
        <label>
          <span>University or college *</span>
          <input
            name="university"
            autoComplete="organization"
            required
            placeholder="Your university or college"
          />
        </label>
        <label>
          <span>Primary contact *</span>
          <input
            name="contactName"
            autoComplete="name"
            required
            placeholder="Alex Chen"
          />
        </label>
        <label>
          <span>School email *</span>
          <input
            name="email"
            type="email"
            autoComplete="email"
            required
            placeholder="alex@school.ca"
          />
        </label>
        <label>
          <span>
            Phone <small>Optional</small>
          </span>
          <input
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="+1 416 555 0123"
          />
        </label>
        <label>
          <span>
            Faculty advisor <small>Optional</small>
          </span>
          <input name="facultyAdvisor" placeholder="Name or not confirmed" />
        </label>
        <label>
          <span>Expected team size *</span>
          <select name="teamSize" required defaultValue="">
            <option value="" disabled>
              Select a range
            </option>
            <option value="1">1 person</option>
            <option value="2-5">2 to 5 people</option>
            <option value="6-10">6 to 10 people</option>
            <option value="11-20">11 to 20 people</option>
            <option value="20+">20+ people</option>
          </select>
        </label>
        <label>
          <span>Current status *</span>
          <select name="teamStatus" required defaultValue="">
            <option value="" disabled>
              Select your status
            </option>
            <option value="recognized-club">Recognized campus club</option>
            <option value="existing-team">Existing technical team</option>
            <option value="forming">Team is currently forming</option>
          </select>
        </label>
      </div>

      <label className="message-label">
        <span>
          Notes for the CHRC team <small>Optional</small>
        </span>
        <textarea
          name="notes"
          rows={5}
          placeholder="Tell us about your team, current resources, or questions about CHRC 2027."
        />
      </label>

      <label className="honeypot" aria-hidden="true">
        Company website
        <input name="companyWebsite" tabIndex={-1} autoComplete="off" />
      </label>

      <label className="consent-row">
        <input type="checkbox" name="consent" required />
        <span>
          I agree that CHRC may contact me about CHRC 2027 registration and
          competition updates. CHRC will not sell or share my details.
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
        {state === "sending" ? "Sending..." : "Submit CHRC 2027 registration"}
      </button>
    </form>
  );
}
