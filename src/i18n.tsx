import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState
} from "react";
import type {ReactNode} from "react";
import {de} from "./data/content.de";
import {en} from "./data/content.en";
import type {Locale, SiteContent} from "./types";

const CONTENT: Record<Locale, SiteContent> = {en, de};

/** German lives under /de/, English at the root. */
function localeFromPath(pathname: string): Locale {
  return /^\/de(\/|$)/.test(pathname) ? "de" : "en";
}

export function pathForLocale(locale: Locale): string {
  return locale === "de" ? "/de/" : "/";
}

interface SiteContextValue {
  site: SiteContent;
  locale: Locale;
  setLocale: (locale: Locale) => void;
}

const SiteContext = createContext<SiteContextValue | null>(null);

export function SiteProvider({children}: {children: ReactNode}) {
  const [locale, setLocaleState] = useState<Locale>(() =>
    localeFromPath(window.location.pathname)
  );

  useEffect(() => {
    document.documentElement.lang = locale;
    document.title = `${CONTENT[locale].profile.name} – ${CONTENT[locale].profile.jobTitle}`;
  }, [locale]);

  useEffect(() => {
    const onPopState = () =>
      setLocaleState(localeFromPath(window.location.pathname));
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    try {
      window.history.pushState(null, "", pathForLocale(next));
    } catch {
      // Some embedded viewers block history changes; the language still switches.
    }
  }, []);

  const value = useMemo(
    () => ({site: CONTENT[locale], locale, setLocale}),
    [locale, setLocale]
  );

  return <SiteContext.Provider value={value}>{children}</SiteContext.Provider>;
}

export function useSite(): SiteContextValue {
  const value = useContext(SiteContext);
  if (!value) {
    throw new Error("useSite must be used inside <SiteProvider>");
  }
  return value;
}
