/** English content. Edit the text here; the components only handle layout. */
import type {SiteContent} from "../types";
import {
  buildRoles,
  caseStudyStack,
  contact,
  images,
  links,
  skillItems,
  socials
} from "./shared";

export const en: SiteContent = {
  locale: "en",

  profile: {
    ...contact,
    jobTitle: "Senior Backend and Full-Stack Developer",
    headline:
      "Engineering scalable software solutions for real\u2011world business challenges.",
    intro:
      "For more than 10 years I have built services, APIs and data pipelines for e-commerce, streaming, ERP and retail, in Node.js, TypeScript and Go. I am looking for a senior backend or full-stack role, full-time or freelance, 100% remote.",
    location: "Mönchengladbach, Germany",
    availability: "Full-time or freelance, 100% remote (home office)",
    languages: ["Arabic (native)", "English (fluent)", "German (B1)"],
    photo: images.photo,
    socials,
    stats: [
      {value: "10+", label: "years building backend systems"},
      {value: "25+", label: "backend services owned at Reuter.de"},
      {value: "10M+", label: "records migrated between data stores"},
      {value: "3", label: "continents worked on"}
    ]
  },

  about: [
    "I started writing business software in Beirut in 2012, while I was still studying computer science. A few years later I set up the IT and development department of a bakery chain there and connected its three locations with software I wrote.",
    "In 2018 I moved to Paraguay and into IPTV and video on demand, building the systems that manage and deliver streams. Since 2020 I have lived in Germany, where I build backend services and data migration engines for the Reuter.de online shop.",
    "Alongside my job I build my own product, Spark Technology, a streaming platform that operators run under their own brand."
  ],

  roles: buildRoles({
    reuter: {
      title: "Senior Backend Developer (Specialist)",
      company: "Reuter.de",
      location: "Germany",
      summary:
        "Backend specialist in a team of 50, working on the e-commerce system behind the Reuter.de online shop.",
      highlights: [
        "Own more than 25 backend services, built on Node.js and FeathersJS.",
        "Built process engines that migrated more than 10 million records from Solr, MySQL and Elasticsearch.",
        "Design and build the APIs that expose these services to the rest of the system."
      ]
    },
    freelance: {
      title: "Freelance Developer",
      company: "Freelance",
      location: "Germany",
      summary:
        "Moved to Germany and worked as a freelance developer during my first year here.",
      highlights: [
        "Freelance development work for clients.",
        "Relocation and integration in Germany."
      ]
    },
    coeti: {
      title: "Node.js Developer and IT Manager",
      company: "COETI S.R.L. (Classic TV)",
      location: "Ciudad del Este, Paraguay",
      summary:
        "Moved into IPTV and video on demand, building the systems that manage and deliver streams.",
      highlights: [
        "Built a microservice-based streaming CMS and the APIs around it.",
        "Worked with international partners, including CYMTV in Rotterdam and SuperTV in Brazil and China.",
        "Ran the company's IT systems alongside development."
      ]
    },
    "al-oumara": {
      title: "Backend Developer and IT Manager",
      company: "Al Oumara Bakery & Sweets",
      location: "Beirut, Lebanon",
      summary:
        "Set up the company's own IT and development department from scratch.",
      highlights: [
        "Reorganised the full system landscape for a newly opened branch.",
        "Connected all three locations with newly developed in-house software."
      ]
    },
    webshortcut: {
      title: "Software Developer",
      company: "WebShortCut (UnoDotNet)",
      location: "Beirut, Lebanon",
      summary:
        "First developer role, started during my computer science degree, working on ERP business software.",
      highlights: [
        "Turned university knowledge into four years of practical product work.",
        "Took on project coordination and problem solving for customer projects."
      ]
    }
  }),

  skillGroups: [
    {area: "Languages", items: skillItems.languages},
    {area: "Backend", items: skillItems.backend},
    {area: "Frontend", items: skillItems.frontend},
    {area: "Data", items: skillItems.data},
    {area: "Infrastructure", items: skillItems.infrastructure},
    {
      area: "Domains",
      items: [
        "IPTV and VOD streaming",
        "Content management systems",
        "ERP and billing",
        "Warehouse and POS",
        "CRM and HR"
      ]
    }
  ],

  caseStudy: {
    name: "Spark Technology",
    kind: "White-label video streaming platform",
    lead: "My own product. Broadcasters, telecoms and event organisers install it on their own servers and run a streaming service under their own brand: live channels, catch-up and a film and series library, in TV and phone apps that carry their name.",
    problem:
      "Operators who want their own streaming service often end up renting someone else's platform, with its branding, its servers and its bandwidth bill. Spark Technology lets them own the whole thing. The hard part was selling and licensing it worldwide without ever being able to switch a customer's viewers off.",
    image: images.sparkTechnologyImage,
    imageAlt:
      "Spark Technology home page showing the TV app, phone app and control panel",
    link: {label: "Visit spark-system.de", url: links.sparkTechnology},
    parts: [
      {
        title: "Control panel",
        description:
          "Channels with an automatic programme guide, the video library, subscribers, plans, prepaid codes, resellers, servers and alerts."
      },
      {
        title: "Hybrid delivery network",
        description:
          "An ingest server packages each channel once, relay servers sit close to viewers, and viewers' devices can pass pieces of video to each other to cut bandwidth cost."
      },
      {
        title: "Branded apps",
        description:
          "Android TV, Fire TV and phone apps built automatically for each brand, with the name, colours and artwork set in the panel."
      },
      {
        title: "Licensing and billing service",
        description:
          "Issues licences, takes each installation's daily check-in, and bills monthly or yearly by card, crypto or bank transfer, with tax-correct invoices."
      },
      {
        title: "Customer portal and back office",
        description:
          "Operators manage their installations, invoices and apps themselves. I see every installation, its plan, usage and version."
      }
    ],
    decisions: [
      {
        title: "An unpaid licence never stops viewers",
        description:
          "A lapsed licence only freezes growth: no new subscribers beyond the plan and no new servers. Channels, videos and apps that already run keep running."
      },
      {
        title: "Licences survive real-world operations",
        description:
          "Each installation proves its licence with a signed daily check-in and has an offline grace period, so moving servers, restoring a backup or a short outage on my side never locks an operator out."
      },
      {
        title: "Shared video cannot be tampered with",
        description:
          "A device accepts a piece of video from another device only if it matches a fingerprint signed by the operator's servers. Viewers choose whether their device helps."
      },
      {
        title: "Invoices a tax office accepts",
        description:
          "Invoices are archival PDFs with an embedded e-invoice (ZUGFeRD), with EU VAT handled through VIES checks and the one-stop-shop scheme. The output is checked against the official validators."
      },
      {
        title: "Prices and plans are data, not code",
        description:
          "Plans, limits, prices per currency and tax rates are edited in the back office. Nothing about what a customer pays is hardcoded."
      }
    ],
    stack: caseStudyStack,
    factsNote: "The licensing and billing service alone:",
    facts: [
      {value: "170", label: "API endpoints, defined in OpenAPI"},
      {value: "54", label: "database tables"},
      {value: "1,000+", label: "automated Go tests"}
    ],
    caption:
      "Video never passes through my servers. The operator's installation only talks to the licensing service for its daily check-in.",
    diagram: {
      label:
        "Architecture: the licensing service exchanges a daily signed check-in with the operator's own servers, which deliver video to viewers' TV and phone apps. Viewers' devices can also share video pieces with each other.",
      licensing: {
        title: "Licensing service",
        subtitle: "Run by Spark Technology",
        items: [
          "Licence API",
          "Customer portal",
          "Back office",
          "Billing and app-build workers"
        ]
      },
      operator: {
        title: "Operator's installation",
        subtitle: "On the operator's own servers",
        items: [
          "Control panel",
          "Ingest server",
          "Relay servers",
          "Subscribers and resellers"
        ]
      },
      viewers: {
        title: "Viewers",
        subtitle: "Apps under the operator's brand",
        items: [
          "Android TV and Fire TV apps",
          "Phone apps",
          "Devices share video pieces"
        ]
      },
      checkIn: "daily signed\ncheck-in",
      video: "live, catch-up,\non demand"
    }
  },

  products: [
    {
      name: "Classic TV",
      kind: "IPTV and VOD platform",
      description:
        "Live TV and video on demand for Android TV boxes, with the management system and APIs that feed the app.",
      stack: ["Node.js", "Streaming CMS", "Android TV"]
    },
    {
      name: "Spark POS",
      kind: "Point-of-sale desktop application",
      description:
        "A point-of-sale system for shops and restaurants covering sales, inventory, purchasing, vouchers and reporting. Already on the market.",
      stack: ["Desktop", "Inventory", "Reporting"],
      link: {label: "sparkpos.netlify.app", url: links.sparkPos}
    }
  ],

  sideProjects: [
    {
      name: "PixelForge",
      description: "50+ free image tools that run entirely in the browser.",
      link: {label: "pixel-forge.win", url: links.pixelForge}
    },
    {
      name: "PrimeBeat",
      description:
        "40+ free calculators for loans, mortgages, investments and business.",
      link: {label: "primebeat.win", url: links.primeBeat}
    },
    {
      name: "CVCraft",
      description: "Free resume and cover letter builder with PDF export.",
      link: {label: "cv-craft.win", url: links.cvCraft}
    },
    {
      name: "StormZone",
      description: "Free browser games portal for desktop and mobile.",
      link: {label: "stormzone.win", url: links.stormZone}
    }
  ],

  credentials: [
    {
      title: "Bachelor of Science in Computer Science",
      issuer: "Lebanese International University (LIU)",
      period: "2010 – 2013",
      logo: images.liuLogo
    },
    {
      title: "Core Solutions of Microsoft SharePoint Server 2013",
      issuer: "Microsoft",
      period: "Certificate, 2015",
      logo: images.sharepointLogo,
      link: {label: "View certificate", url: links.sharepointCertificate}
    }
  ],

  ui: {
    skipToContent: "Skip to content",
    switchToLight: "Switch to light theme",
    switchToDark: "Switch to dark theme",
    switchLanguage: "Auf Deutsch anzeigen",
    sectionsLabel: "Sections",
    metaDescription:
      "Abbas Bandar is a senior backend and full-stack developer in Germany with 10+ years of experience building backend systems for e-commerce, streaming and business software in Node.js, TypeScript and Go. Open to remote roles.",
    nav: {
      experience: "Experience",
      caseStudy: "Case study",
      skills: "Skills",
      projects: "Projects",
      contact: "Contact"
    },
    hero: {
      contactMe: "Contact me",
      viewCv: "View my CV",
      basedIn: "Based in",
      openTo: "Open to",
      languages: "Languages",
      photoAlt: "Portrait of Abbas Bandar",
      now: "Now"
    },
    about: {title: "About me"},
    experience: {
      title: "Experience",
      lead: "Four employers and a year of freelancing, on three continents, since 2012.",
      hint: "Select a block to see what I did there.",
      now: "Now",
      present: "Present",
      timelineLabel: "Career timeline"
    },
    caseStudy: {
      prefix: "Case study",
      problem: "The problem",
      built: "What I built",
      fit: "How the pieces fit",
      decisions: "Decisions behind it",
      builtWith: "Built with"
    },
    skills: {
      title: "Skills",
      lead: "The tools I use every day, and the kinds of systems I know from the inside."
    },
    projects: {
      title: "Projects",
      lead: "Other products I built for employers and for myself.",
      products: "Earlier products",
      sideProjects: "Side projects"
    },
    credentials: {title: "Education and certificates"},
    contact: {
      title: "Have a project or a role in mind?",
      lead: "Tell me what you are building and I will get back to you.",
      copy: "Copy address",
      copied: "Address copied",
      email: "Email",
      phone: "Phone",
      profiles: "Profiles",
      backToTop: "Back to top",
      form: {
        name: "Your name",
        email: "Your email address",
        message: "Message",
        send: "Send message",
        sending: "Sending…",
        success:
          "Thank you. Your message is on its way and I will reply by email.",
        error:
          "The message could not be sent. Please write to me directly at the address shown here.",
        privacy:
          "Your details are sent to me through Netlify and used only to reply to you."
      }
    },
    tagsLabel: "Technologies and focus"
  }
};
