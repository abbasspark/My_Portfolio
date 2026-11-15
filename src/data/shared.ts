/**
 * Data that is the same in every language: images, links, dates and
 * technology names. The translated text lives in content.en.ts and
 * content.de.ts.
 */
import photo from "../assets/abbas-bandar.webp";
import alOumaraLogo from "../assets/logos/al-oumara.webp";
import classicTvLogo from "../assets/logos/classic-tv.webp";
import freelanceLogo from "../assets/logos/freelance.svg";
import liuLogo from "../assets/logos/liu.webp";
import reuterLogo from "../assets/logos/reuter.webp";
import sharepointLogo from "../assets/logos/sharepoint.webp";
import webshortcutLogo from "../assets/logos/webshortcut.webp";
import sparkTechnologyImage from "../assets/projects/spark-technology.webp";
import type {Role, RoleMeta, RoleText, SocialLink} from "../types";

export const images = {
  photo,
  liuLogo,
  sharepointLogo,
  sparkTechnologyImage
};

/** The month of the first developer job; the years of experience count from here. */
const careerStart = {year: 2012, month: 9};

/** Full years worked since the career started, so the figure never goes stale. */
export function yearsOfExperience(today: Date = new Date()): number {
  const months =
    (today.getFullYear() - careerStart.year) * 12 +
    (today.getMonth() + 1 - careerStart.month);
  return Math.floor(months / 12);
}

export const contact = {
  name: "Abbas Bandar",
  email: "abbasbandar@gmail.com",
  phone: "+49 163 1300978",
  cvUrl: "/Abbas_Bandar_CV.pdf"
};

export const links = {
  sparkTechnology: "https://www.spark-system.de",
  sparkPos: "https://sparkpos.netlify.app/",
  pixelForge: "https://pixel-forge.win/",
  primeBeat: "https://primebeat.win/",
  cvCraft: "https://cv-craft.win/",
  stormZone: "https://stormzone.win/",
  sharepointCertificate: "/microsoft-sharepoint-certificate.jpg"
};

export const socials: SocialLink[] = [
  {label: "GitHub", icon: "github", url: "https://github.com/abbasspark"},
  {
    label: "LinkedIn",
    icon: "linkedin",
    url: "https://www.linkedin.com/in/abbas-bandar/"
  },
  {label: "GitLab", icon: "gitlab", url: "https://gitlab.com/abbasbandar"},
  {
    label: "Stack Overflow",
    icon: "stackoverflow",
    url: "https://stackoverflow.com/users/15948184/abbas-bandar"
  },
  {label: "Medium", icon: "medium", url: "https://medium.com/@abbasbandar"}
];

/** Newest first. The order here is the order on the page. */
const roleMeta: RoleMeta[] = [
  {
    id: "reuter",
    logo: reuterLogo,
    start: {year: 2021, month: 7},
    stack: ["Node.js", "FeathersJS", "Elasticsearch", "Solr", "MySQL"]
  },
  {
    id: "freelance",
    logo: freelanceLogo,
    start: {year: 2020, month: 8},
    end: {year: 2021, month: 6},
    stack: []
  },
  {
    id: "coeti",
    logo: classicTvLogo,
    start: {year: 2018, month: 4},
    end: {year: 2020, month: 7},
    stack: ["Node.js", "Microservices", "IPTV", "VOD"]
  },
  {
    id: "al-oumara",
    logo: alOumaraLogo,
    start: {year: 2016, month: 11},
    end: {year: 2018, month: 3},
    stack: []
  },
  {
    id: "webshortcut",
    logo: webshortcutLogo,
    start: {year: 2012, month: 9},
    end: {year: 2016, month: 9},
    stack: [".NET", "ERP"]
  }
];

export type RoleId =
  "reuter" | "freelance" | "coeti" | "al-oumara" | "webshortcut";

/** Combines the shared role data with one language's text. */
export function buildRoles(texts: Record<RoleId, RoleText>): Role[] {
  return roleMeta.map(meta => ({...meta, ...texts[meta.id as RoleId]}));
}

export const skillItems = {
  languages: ["TypeScript", "JavaScript", "Go", "C#", "SQL", "HTML", "CSS"],
  backend: ["Node.js", "NestJS", "FeathersJS", "Fastify", "GraphQL", "REST"],
  frontend: ["React", "Next.js", "Vite", "Angular"],
  data: [
    "PostgreSQL",
    "MySQL",
    "Microsoft SQL Server",
    "MongoDB",
    "Prisma",
    "Elasticsearch",
    "Solr"
  ],
  infrastructure: [
    "Docker",
    "Linux",
    "Nginx",
    "Cloudflare",
    "GitHub Actions",
    "GitLab CI"
  ]
};

export const caseStudyStack = [
  "Go",
  "PostgreSQL",
  "React",
  "TypeScript",
  "Next.js",
  "OpenAPI",
  "Docker Compose",
  "Stripe",
  "Android"
];
