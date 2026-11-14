import type {MouseEvent} from "react";
import type {Theme} from "../hooks/useTheme";
import {pathForLocale, useSite} from "../i18n";
import type {Locale} from "../types";
import "./Header.css";

interface HeaderProps {
  theme: Theme;
  onToggleTheme: () => void;
}

export default function Header({theme, onToggleTheme}: HeaderProps) {
  const {site, locale, setLocale} = useSite();
  const {ui, profile} = site;
  const otherLocale: Locale = locale === "en" ? "de" : "en";
  const themeLabel = theme === "dark" ? ui.switchToLight : ui.switchToDark;

  const navLinks = [
    {label: ui.nav.experience, href: "#experience"},
    {label: ui.nav.caseStudy, href: "#case-study"},
    {label: ui.nav.skills, href: "#skills"},
    {label: ui.nav.projects, href: "#projects"},
    {label: ui.nav.contact, href: "#contact"}
  ];

  // A real link (for search engines and "open in new tab") that switches
  // in place on a normal click.
  const switchLanguage = (event: MouseEvent<HTMLAnchorElement>) => {
    if (
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.button !== 0
    ) {
      return;
    }
    event.preventDefault();
    setLocale(otherLocale);
  };

  return (
    <header className="header">
      <div className="container header__inner">
        <a className="header__brand" href="#top">
          {profile.name}
        </a>
        <nav className="header__nav" aria-label="Sections">
          {navLinks.map(link => (
            <a key={link.href} className="header__link" href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
        <a
          className="header__lang"
          href={pathForLocale(otherLocale)}
          hrefLang={otherLocale}
          lang={otherLocale}
          aria-label={ui.switchLanguage}
          title={ui.switchLanguage}
          onClick={switchLanguage}
        >
          {otherLocale.toUpperCase()}
        </a>
        <button
          type="button"
          className="header__theme"
          onClick={onToggleTheme}
          aria-label={themeLabel}
          title={themeLabel}
        >
          <ThemeIcon theme={theme} />
        </button>
      </div>
    </header>
  );
}

function ThemeIcon({theme}: {theme: Theme}) {
  if (theme === "dark") {
    // Sun: shown in dark mode, switches to light.
    return (
      <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
        <circle cx="12" cy="12" r="4.5" fill="currentColor" />
        <g stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <path d="M12 2v2.5M12 19.5V22M2 12h2.5M19.5 12H22M4.9 4.9l1.8 1.8M17.3 17.3l1.8 1.8M4.9 19.1l1.8-1.8M17.3 6.7l1.8-1.8" />
        </g>
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
      <path
        fill="currentColor"
        d="M20.5 14.2A8.5 8.5 0 0 1 9.8 3.5a.75.75 0 0 0-.95-.9A9.75 9.75 0 1 0 21.4 15.15a.75.75 0 0 0-.9-.95Z"
      />
    </svg>
  );
}
