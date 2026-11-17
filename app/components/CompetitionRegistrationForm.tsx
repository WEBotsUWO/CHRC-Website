"use client";

import { FormEvent, useState } from "react";

const hostedFormEndpoint = process.env.NEXT_PUBLIC_FORM_ENDPOINT;

export function CompetitionRegistrationForm() {
  const [state, setState] = useState<"idle" | "sending" | "success" | "error">(
    "idle"
  );
  const [error, setError] = useState("");
  const [hasConsent, setHasConsent] = useState(false);
  const isSending = state === "sending";

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const consent = formData.get("consent") === "on";
    if (!consent || isSending) return;

    setState("sending");
    setError("");

    const teamName = String(formData.get("teamName") ?? "").trim();
    const payload = {
      teamName,
      university: formData.get("university"),
      contactName: formData.get("contactName"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      facultyAdvisor: formData.get("facultyAdvisor"),
      teamSize: formData.get("teamSize"),
      teamStatus: formData.get("teamStatus"),
      notes: formData.get("notes"),
      consent,
      companyWebsite: formData.get("companyWebsite"),
    };

    try {
      const endpoint = hostedFormEndpoint ?? "/api/registrations";
      const requestPayload = hostedFormEndpoint
        ? {
            ...payload,
            companyWebsite: undefined,
            _honey: payload.companyWebsite,
            _subject: `${teamName || "Team not provided"} HAS REGISTERED FOR CHRC 2027`,
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
      setHasConsent(false);
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
        <h2>Thanks for registering for CHRC 2027.</h2>
        <p>
          The CHRC team will email your primary contact with payment instructions
          and updates on the competition package.
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
        <h2>Register your team.</h2>
        <p>
          Students enrolled at a Canadian university or college during the
          2026–27 academic year can enter solo or in a team of up to 20.
          Club membership is optional but encouraged.
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
          </select>
        </label>
        <label>
          <span>Team status *</span>
          <select name="teamStatus" required defaultValue="">
            <option value="" disabled>
              Select your status
            </option>
            <option value="solo-entrant">Solo entrant</option>
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

      <section className="registration-payment" aria-labelledby="registration-payment-heading">
        <h3 id="registration-payment-heading">Registration fee</h3>
        <p>
          A registration fee is required. The CHRC team will email your primary
          contact with payment instructions after you submit this form.
        </p>
      </section>

      <label className="honeypot" aria-hidden="true">
        Company website
        <input name="companyWebsite" tabIndex={-1} autoComplete="off" />
      </label>

      <label className="consent-row">
        <input
          type="checkbox"
          name="consent"
          checked={hasConsent}
          onChange={(event) => setHasConsent(event.currentTarget.checked)}
          required
        />
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
        aria-busy={isSending}
        disabled={!hasConsent || isSending}
      >
        {isSending ? "Sending..." : "Submit CHRC 2027 registration"}
      </button>
    </form>
  );
}
