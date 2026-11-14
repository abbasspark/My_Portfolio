export type Locale = "en" | "de";

/** A calendar month, e.g. {year: 2021, month: 7} for July 2021. */
export interface YearMonth {
  year: number;
  month: number;
}

export interface Link {
  label: string;
  url: string;
}

export type SocialIconName =
  "github" | "linkedin" | "gitlab" | "stackoverflow" | "medium";

export interface SocialLink extends Link {
  icon: SocialIconName;
}

/** The parts of a role that are the same in every language. */
export interface RoleMeta {
  id: string;
  logo: string;
  start: YearMonth;
  /** Leave undefined for the current role. */
  end?: YearMonth;
  stack: string[];
}

/** The translated parts of a role. */
export interface RoleText {
  title: string;
  company: string;
  location: string;
  summary: string;
  highlights: string[];
}

export type Role = RoleMeta & RoleText;

export interface SkillGroup {
  area: string;
  items: string[];
}

export interface Product {
  name: string;
  kind: string;
  description: string;
  stack: string[];
  link?: Link;
}

export interface SideProject {
  name: string;
  description: string;
  link: Link;
}

export interface Credential {
  title: string;
  issuer: string;
  period: string;
  logo: string;
  link?: Link;
}

export interface Profile {
  name: string;
  jobTitle: string;
  headline: string;
  intro: string;
  location: string;
  availability: string;
  languages: string[];
  email: string;
  phone: string;
  cvUrl: string;
  photo: string;
  socials: SocialLink[];
}

export interface TitledText {
  title: string;
  description: string;
}

export interface DiagramBoxText {
  title: string;
  subtitle: string;
  items: string[];
}

export interface CaseStudy {
  name: string;
  kind: string;
  lead: string;
  problem: string;
  image: string;
  imageAlt: string;
  link: Link;
  parts: TitledText[];
  decisions: TitledText[];
  stack: string[];
  factsNote: string;
  facts: {value: string; label: string}[];
  caption: string;
  diagram: {
    label: string;
    licensing: DiagramBoxText;
    operator: DiagramBoxText;
    viewers: DiagramBoxText;
    /** Arrow labels; "\n" starts a new line. */
    checkIn: string;
    video: string;
  };
}

/** Interface text that is not content: labels, headings, button text. */
export interface UiText {
  skipToContent: string;
  switchToLight: string;
  switchToDark: string;
  switchLanguage: string;
  nav: {
    experience: string;
    caseStudy: string;
    skills: string;
    projects: string;
    contact: string;
  };
  hero: {
    emailMe: string;
    viewCv: string;
    basedIn: string;
    openTo: string;
    languages: string;
    photoAlt: string;
  };
  about: {title: string};
  experience: {
    title: string;
    lead: string;
    hint: string;
    now: string;
    present: string;
    timelineLabel: string;
  };
  caseStudy: {
    prefix: string;
    problem: string;
    built: string;
    fit: string;
    decisions: string;
    builtWith: string;
  };
  skills: {title: string; lead: string};
  projects: {
    title: string;
    lead: string;
    products: string;
    sideProjects: string;
  };
  credentials: {title: string};
  contact: {
    title: string;
    lead: string;
    write: string;
    copy: string;
    copied: string;
    email: string;
    phone: string;
    profiles: string;
    backToTop: string;
  };
  tagsLabel: string;
}

/** Everything one language version of the site needs. */
export interface SiteContent {
  locale: Locale;
  profile: Profile;
  about: string[];
  roles: Role[];
  skillGroups: SkillGroup[];
  caseStudy: CaseStudy;
  products: Product[];
  sideProjects: SideProject[];
  credentials: Credential[];
  ui: UiText;
}
