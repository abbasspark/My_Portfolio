import {useEffect, useState} from "react";
import {useSite} from "../i18n";
import SocialIcon from "./SocialIcon";
import "./Contact.css";

export default function Contact() {
  const {site} = useSite();
  const {profile, ui} = site;
  const year = new Date().getFullYear();
  const phoneHref = `tel:${profile.phone.replace(/\s+/g, "")}`;

  return (
    <footer className="contact" id="contact">
      <div className="container">
        <div className="contact__grid">
          <div className="contact__pitch">
            <h2 className="contact__title">{ui.contact.title}</h2>
            <p className="contact__lead">{ui.contact.lead}</p>
            <div className="contact__actions">
              <a
                className="button contact__primary"
                href={`mailto:${profile.email}`}
              >
                {ui.contact.write}
              </a>
              <CopyEmailButton
                email={profile.email}
                label={ui.contact.copy}
                copiedLabel={ui.contact.copied}
              />
            </div>
          </div>

          <dl className="contact__details">
            <div className="contact__row">
              <dt>{ui.contact.email}</dt>
              <dd>
                <a className="contact__email" href={`mailto:${profile.email}`}>
                  {profile.email}
                </a>
              </dd>
            </div>
            <div className="contact__row">
              <dt>{ui.contact.phone}</dt>
              <dd>
                <a href={phoneHref}>{profile.phone}</a>
              </dd>
            </div>
            <div className="contact__row">
              <dt>{ui.hero.basedIn}</dt>
              <dd>{profile.location}</dd>
            </div>
            <div className="contact__row">
              <dt>{ui.hero.openTo}</dt>
              <dd>{profile.availability}</dd>
            </div>
            <div className="contact__row">
              <dt>{ui.contact.profiles}</dt>
              <dd>
                <ul className="contact__socials">
                  {profile.socials.map(social => (
                    <li key={social.url}>
                      <a href={social.url} target="_blank" rel="noreferrer">
                        <SocialIcon name={social.icon} />
                        {social.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </dd>
            </div>
          </dl>
        </div>

        <div className="contact__bottom">
          <p>
            © {year} {profile.name}
          </p>
          <a href="#top">{ui.contact.backToTop}</a>
        </div>
      </div>
    </footer>
  );
}

interface CopyEmailButtonProps {
  email: string;
  label: string;
  copiedLabel: string;
}

function CopyEmailButton({email, label, copiedLabel}: CopyEmailButtonProps) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) {
      return;
    }
    const timer = window.setTimeout(() => setCopied(false), 2000);
    return () => window.clearTimeout(timer);
  }, [copied]);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
    } catch {
      // Clipboard access can be refused; the address is visible to copy by hand.
      setCopied(false);
    }
  };

  return (
    <button type="button" className="button contact__copy" onClick={copy}>
      <span aria-live="polite">{copied ? copiedLabel : label}</span>
    </button>
  );
}
