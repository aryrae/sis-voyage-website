"use client";
import { useState, type FormEvent } from "react";

const TRIP_TYPES = [
  "Holy Land pilgrimage",
  "Reformation Europe heritage",
  "Pauline Greece + Turkey",
  "Mission trip (Africa / LatAm / Asia)",
  "Destination wedding",
  "Honeymoon",
  "Corporate retreat / offsite",
  "Family reunion",
  "Safari / wildlife",
  "Luxury bespoke",
  "Cruise (any kind)",
  "Cultural / heritage / roots",
  "Other / not sure",
];

export default function InquiryForm() {
  const [trip, setTrip] = useState(TRIP_TYPES[0]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [org, setOrg] = useState("");
  const [groupSize, setGroupSize] = useState("");
  const [travelWindow, setTravelWindow] = useState("");
  const [budget, setBudget] = useState("");
  const [message, setMessage] = useState("");
  const [lang, setLang] = useState<"EN" | "FR">("EN");
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(e: FormEvent) {
    e.preventDefault();

    // MVP: opens user's mail client with a pre-filled message to hello@sisvoyage.com
    // (which forwards to Gmail per Porkbun setup).
    // TODO: swap for a Resend / Web3Forms API route once an API key is configured.

    const subject = `New trip inquiry — ${trip} — ${name || "anonymous"}`;
    const body = [
      `From: ${name} <${email}>`,
      org ? `Organization: ${org}` : null,
      `Language preference: ${lang}`,
      `Trip type: ${trip}`,
      groupSize ? `Group size: ${groupSize}` : null,
      travelWindow ? `Travel window: ${travelWindow}` : null,
      budget ? `Budget signal: ${budget}` : null,
      ``,
      `Message:`,
      message || "(no additional message)",
      ``,
      `— Sent from sisvoyage.com inquiry form`,
    ]
      .filter(Boolean)
      .join("\n");

    const mailto = `mailto:hello@sisvoyage.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="glass-strong rounded-3xl p-8 text-center">
        <div className="font-[var(--font-display)] text-2xl text-[var(--color-ink-900)] mb-3">
          Your email client is opening.
        </div>
        <p className="text-[var(--color-ink-700)] mb-4">
          If nothing happened, please email{" "}
          <a className="text-[var(--color-amber-deep)] font-semibold" href="mailto:hello@sisvoyage.com">
            hello@sisvoyage.com
          </a>{" "}
          directly. We&apos;ll reply within one business day.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="cta-secondary rounded-xl px-5 py-2 text-sm"
        >
          Send another inquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="glass-strong rounded-3xl p-6 sm:p-8 space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <Field label="Your name" required>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="form-input"
            placeholder="Jane Smith"
          />
        </Field>
        <Field label="Email" required>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-input"
            placeholder="jane@church.org"
          />
        </Field>
      </div>

      <Field label="Church / company / organization (optional)">
        <input
          type="text"
          value={org}
          onChange={(e) => setOrg(e.target.value)}
          className="form-input"
          placeholder="First Baptist Round Rock"
        />
      </Field>

      <Field label="Trip type" required>
        <select
          value={trip}
          onChange={(e) => setTrip(e.target.value)}
          className="form-input"
        >
          {TRIP_TYPES.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </Field>

      <div className="grid sm:grid-cols-3 gap-4">
        <Field label="Approx. group size">
          <input
            type="text"
            value={groupSize}
            onChange={(e) => setGroupSize(e.target.value)}
            className="form-input"
            placeholder="25 · solo · 2 · 12-18"
          />
        </Field>
        <Field label="Travel window">
          <input
            type="text"
            value={travelWindow}
            onChange={(e) => setTravelWindow(e.target.value)}
            className="form-input"
            placeholder="Oct 2027 · spring 2026"
          />
        </Field>
        <Field label="Budget signal">
          <input
            type="text"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            className="form-input"
            placeholder="$4-5K/pax · open"
          />
        </Field>
      </div>

      <Field label="What you'd like us to know">
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={5}
          className="form-input resize-y"
          placeholder="The destination(s) you're considering, the occasion, any special requirements, what would make this trip a success…"
        />
      </Field>

      <div className="flex items-center gap-4 pt-2">
        <div className="flex items-center gap-2 text-sm text-[var(--color-ink-700)]">
          <span>Reply in:</span>
          <button
            type="button"
            onClick={() => setLang("EN")}
            className={`px-3 py-1 rounded-lg text-xs font-semibold transition ${
              lang === "EN"
                ? "bg-[var(--color-amber-brand)]/20 text-[var(--color-amber-deep)]"
                : "text-[var(--color-ink-500)] hover:text-[var(--color-ink-900)]"
            }`}
          >
            English
          </button>
          <button
            type="button"
            onClick={() => setLang("FR")}
            className={`px-3 py-1 rounded-lg text-xs font-semibold transition ${
              lang === "FR"
                ? "bg-[var(--color-amber-brand)]/20 text-[var(--color-amber-deep)]"
                : "text-[var(--color-ink-500)] hover:text-[var(--color-ink-900)]"
            }`}
          >
            Français
          </button>
        </div>
        <button type="submit" className="cta-primary rounded-xl px-6 py-3 ml-auto">
          Send inquiry
        </button>
      </div>

      <p className="text-xs text-[var(--color-ink-500)] pt-1 leading-relaxed">
        Your inquiry opens an email to <span className="font-semibold">hello@sisvoyage.com</span>.
        We don&apos;t store form data on this site, share your info, or add you to marketing lists.
      </p>

      <style>{`
        .form-input {
          width: 100%;
          background: rgba(255, 255, 255, 0.7);
          border: 1px solid rgba(184, 137, 58, 0.18);
          border-radius: 0.75rem;
          padding: 0.65rem 0.85rem;
          font-size: 0.9rem;
          color: var(--color-ink-900);
          outline: none;
          transition: border-color 0.15s ease, box-shadow 0.15s ease;
          font-family: inherit;
        }
        .form-input:focus {
          border-color: var(--color-amber-brand);
          box-shadow: 0 0 0 3px rgba(184, 137, 58, 0.18);
        }
        .form-input::placeholder { color: var(--color-ink-500); }
      `}</style>
    </form>
  );
}

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="text-xs uppercase tracking-wider text-[var(--color-ink-500)] font-semibold mb-1.5 block">
        {label} {required && <span className="text-[var(--color-rose-deep)]">*</span>}
      </span>
      {children}
    </label>
  );
}
