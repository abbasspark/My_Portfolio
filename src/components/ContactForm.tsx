import {useState} from "react";
import type {FormEvent} from "react";
import {useSite} from "../i18n";

type Status = "idle" | "sending" | "sent" | "failed";

/** Must match the name of the static form in index.html. */
const FORM_NAME = "contact";

/**
 * Contact form handled by Netlify Forms: the fields are posted to the site
 * itself and Netlify stores the submission and notifies the owner.
 */
export default function ContactForm() {
  const {site} = useSite();
  const text = site.ui.contact.form;
  const [status, setStatus] = useState<Status>("idle");

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const body = new URLSearchParams();
    data.forEach((value, key) => {
      if (typeof value === "string") {
        body.append(key, value);
      }
    });

    setStatus("sending");
    try {
      const response = await fetch("/", {
        method: "POST",
        headers: {"Content-Type": "application/x-www-form-urlencoded"},
        body: body.toString()
      });
      if (!response.ok) {
        throw new Error(
          `Form submission failed with status ${response.status}`
        );
      }
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("failed");
    }
  };

  if (status === "sent") {
    return (
      <p className="form__status form__status--success" role="status">
        {text.success}
      </p>
    );
  }

  return (
    <form className="form" name={FORM_NAME} onSubmit={submit}>
      <input type="hidden" name="form-name" value={FORM_NAME} />
      {/* Honeypot: hidden from people, filled in by bots. */}
      <p className="form__trap" aria-hidden="true">
        <label>
          Leave this field empty
          <input
            type="text"
            name="bot-field"
            tabIndex={-1}
            autoComplete="off"
          />
        </label>
      </p>

      <div className="form__row">
        <label className="form__field">
          <span>{text.name}</span>
          <input type="text" name="name" autoComplete="name" required />
        </label>
        <label className="form__field">
          <span>{text.email}</span>
          <input type="email" name="email" autoComplete="email" required />
        </label>
      </div>
      <label className="form__field">
        <span>{text.message}</span>
        <textarea name="message" rows={5} required />
      </label>

      <div className="form__footer">
        <button
          type="submit"
          className="button contact__primary"
          disabled={status === "sending"}
        >
          {status === "sending" ? text.sending : text.send}
        </button>
        <p className="form__privacy">{text.privacy}</p>
      </div>

      {status === "failed" && (
        <p className="form__status form__status--error" role="alert">
          {text.error}
        </p>
      )}
    </form>
  );
}
