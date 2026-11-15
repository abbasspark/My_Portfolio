/** German content. Same structure as content.en.ts. */
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

export const de: SiteContent = {
  locale: "de",

  profile: {
    ...contact,
    jobTitle: "Senior Backend- und Full-Stack-Entwickler",
    headline:
      "Skalierbare Software\u00ADlösungen für reale Geschäfts\u00ADanforderungen.",
    intro:
      "Seit mehr als 10 Jahren entwickle ich Services, APIs und Datenpipelines für E-Commerce, Streaming, ERP und Handel, mit Node.js, TypeScript und Go. Ich suche eine Senior-Position im Backend oder Full-Stack, in Festanstellung oder freiberuflich, zu 100 % remote.",
    location: "Mönchengladbach, Deutschland",
    availability:
      "Festanstellung oder freiberuflich, 100 % remote (Homeoffice)",
    languages: [
      "Arabisch (Muttersprache)",
      "Englisch (fließend)",
      "Deutsch (B1)",
      "Portugiesisch (A1)",
      "Spanisch (A1)"
    ],
    photo: images.photo,
    socials,
    stats: [
      {value: "10+", label: "Jahre Backend-Entwicklung"},
      {value: "25+", label: "verantwortete Backend-Services bei Reuter.de"},
      {value: "10 Mio.+", label: "migrierte Datensätze"},
      {value: "3", label: "Kontinente als Arbeitsort"}
    ]
  },

  about: [
    "2012 habe ich in Beirut angefangen, Unternehmenssoftware zu entwickeln, noch während meines Informatikstudiums. Einige Jahre später habe ich dort bei einer Bäckereikette die IT- und Entwicklungsabteilung aufgebaut und die drei Standorte mit selbst entwickelter Software vernetzt.",
    "2018 bin ich nach Paraguay gezogen und zu IPTV und Video-on-Demand gewechselt: Ich habe die Systeme gebaut, die Streams verwalten und ausliefern. Seit 2020 lebe ich in Deutschland und entwickle Backend-Services und Datenmigrations-Engines für den Onlineshop Reuter.de.",
    "Neben meinem Job entwickle ich mein eigenes Produkt: Spark Technology, eine Streaming-Plattform, die Betreiber unter ihrer eigenen Marke nutzen."
  ],

  roles: buildRoles({
    reuter: {
      title: "Senior Backend-Entwickler (Specialist)",
      company: "Reuter.de",
      location: "Deutschland",
      summary:
        "Backend-Spezialist in einem 50-köpfigen Team für das E-Commerce-System hinter dem Onlineshop Reuter.de.",
      highlights: [
        "Verantwortlich für mehr als 25 Backend-Services auf Basis von Node.js und FeathersJS.",
        "Process Engines entwickelt, die mehr als 10 Millionen Datensätze aus Solr, MySQL und Elasticsearch migriert haben.",
        "Entwurf und Entwicklung der APIs, über die diese Services dem restlichen System zur Verfügung stehen."
      ]
    },
    freelance: {
      title: "Freiberuflicher Entwickler",
      company: "Freiberuflich",
      location: "Deutschland",
      summary:
        "Umzug nach Deutschland und freiberufliche Arbeit als Entwickler im ersten Jahr hier.",
      highlights: [
        "Freiberufliche Softwareentwicklung für Kunden.",
        "Umzug und Integration in Deutschland."
      ]
    },
    coeti: {
      title: "Node.js-Entwickler und IT-Leiter",
      company: "COETI S.R.L. (Classic TV)",
      location: "Ciudad del Este, Paraguay",
      summary:
        "Einstieg in IPTV und Video-on-Demand: Entwicklung der Systeme, die Streams verwalten und ausliefern.",
      highlights: [
        "Ein Streaming-CMS auf Microservice-Basis und die zugehörigen APIs entwickelt.",
        "Zusammenarbeit mit internationalen Partnern, darunter CYMTV in Rotterdam und SuperTV in Brasilien und China.",
        "Neben der Entwicklung die IT-Systeme des Unternehmens betreut."
      ]
    },
    "al-oumara": {
      title: "Backend-Entwickler und IT-Leiter",
      company: "Al Oumara Bakery & Sweets",
      location: "Beirut, Libanon",
      summary:
        "Die eigene IT- und Entwicklungsabteilung des Unternehmens von Grund auf aufgebaut.",
      highlights: [
        "Die gesamte Systemlandschaft für eine neu eröffnete Filiale neu organisiert.",
        "Alle drei Standorte mit neu entwickelter, eigener Software vernetzt."
      ]
    },
    webshortcut: {
      title: "Softwareentwickler",
      company: "WebShortCut (UnoDotNet)",
      location: "Beirut, Libanon",
      summary:
        "Erste Stelle als Entwickler, begonnen während des Informatikstudiums, mit Arbeit an ERP-Unternehmenssoftware.",
      highlights: [
        "Wissen aus dem Studium in vier Jahren praktischer Produktarbeit angewendet.",
        "Projektkoordination und Problemlösung in Kundenprojekten übernommen."
      ]
    }
  }),

  skillGroups: [
    {area: "Programmiersprachen", items: skillItems.languages},
    {area: "Backend", items: skillItems.backend},
    {area: "Frontend", items: skillItems.frontend},
    {area: "Daten", items: skillItems.data},
    {area: "Infrastruktur", items: skillItems.infrastructure},
    {
      area: "Fachgebiete",
      items: [
        "IPTV- und VOD-Streaming",
        "Content-Management-Systeme",
        "ERP und Abrechnung",
        "Lager und Kasse (POS)",
        "CRM und HR"
      ]
    }
  ],

  caseStudy: {
    name: "Spark Technology",
    kind: "White-Label-Plattform für Videostreaming",
    lead: "Mein eigenes Produkt. Sender, Telekommunikationsanbieter und Veranstalter installieren es auf ihren eigenen Servern und betreiben einen Streamingdienst unter ihrer eigenen Marke: Live-Kanäle, Catch-up und eine Film- und Serienbibliothek, in TV- und Smartphone-Apps mit ihrem Namen.",
    problem:
      "Wer einen eigenen Streamingdienst anbieten will, mietet oft die Plattform eines anderen, mit dessen Branding, dessen Servern und dessen Bandbreitenkosten. Mit Spark Technology gehört den Betreibern alles selbst. Die schwierige Aufgabe war, das Produkt weltweit zu verkaufen und zu lizenzieren, ohne jemals die Zuschauer eines Kunden abschalten zu können.",
    image: images.sparkTechnologyImage,
    imageAlt:
      "Startseite von Spark Technology mit TV-App, Smartphone-App und Control Panel",
    link: {label: "spark-system.de besuchen", url: links.sparkTechnology},
    parts: [
      {
        title: "Control Panel",
        description:
          "Kanäle mit automatischem Programmführer, Videobibliothek, Abonnenten, Tarife, Prepaid-Codes, Reseller, Server und Benachrichtigungen."
      },
      {
        title: "Hybrides Auslieferungsnetz",
        description:
          "Ein Ingest-Server bereitet jeden Kanal einmal auf, Relay-Server stehen nah bei den Zuschauern, und die Geräte der Zuschauer können Videosegmente untereinander weitergeben, um Bandbreitenkosten zu senken."
      },
      {
        title: "Apps mit eigener Marke",
        description:
          "Apps für Android TV, Fire TV und Smartphones, automatisch für jede Marke gebaut, mit Name, Farben und Grafiken aus dem Panel."
      },
      {
        title: "Lizenz- und Abrechnungsdienst",
        description:
          "Stellt Lizenzen aus, nimmt den täglichen Check-in jeder Installation entgegen und rechnet monatlich oder jährlich ab, per Karte, Kryptowährung oder Überweisung, mit steuerlich korrekten Rechnungen."
      },
      {
        title: "Kundenportal und Backoffice",
        description:
          "Betreiber verwalten ihre Installationen, Rechnungen und Apps selbst. Ich sehe jede Installation mit Tarif, Nutzung und Version."
      }
    ],
    decisions: [
      {
        title: "Eine unbezahlte Lizenz stoppt nie die Zuschauer",
        description:
          "Eine abgelaufene Lizenz friert nur das Wachstum ein: keine neuen Abonnenten über den Tarif hinaus und keine neuen Server. Kanäle, Videos und Apps, die bereits laufen, laufen weiter."
      },
      {
        title: "Lizenzen überstehen den Betriebsalltag",
        description:
          "Jede Installation weist ihre Lizenz mit einem signierten täglichen Check-in nach und hat eine Offline-Kulanzfrist. Ein Serverumzug, ein eingespieltes Backup oder ein kurzer Ausfall auf meiner Seite sperrt also keinen Betreiber aus."
      },
      {
        title: "Geteiltes Video lässt sich nicht manipulieren",
        description:
          "Ein Gerät nimmt ein Videosegment von einem anderen Gerät nur an, wenn es zu einem Fingerabdruck passt, den die Server des Betreibers signiert haben. Zuschauer entscheiden selbst, ob ihr Gerät mithilft."
      },
      {
        title: "Rechnungen, die das Finanzamt akzeptiert",
        description:
          "Rechnungen sind archivierbare PDFs mit eingebetteter E-Rechnung (ZUGFeRD). Die EU-Umsatzsteuer wird über VIES-Prüfungen und das One-Stop-Shop-Verfahren abgewickelt. Die Ausgabe wird mit den offiziellen Validatoren geprüft."
      },
      {
        title: "Preise und Tarife sind Daten, kein Code",
        description:
          "Tarife, Limits, Preise je Währung und Steuersätze werden im Backoffice gepflegt. Nichts, was ein Kunde zahlt, ist fest im Code hinterlegt."
      }
    ],
    stack: caseStudyStack,
    factsNote: "Allein der Lizenz- und Abrechnungsdienst:",
    facts: [
      {value: "170", label: "API-Endpunkte, definiert in OpenAPI"},
      {value: "54", label: "Datenbanktabellen"},
      {value: "1.000+", label: "automatisierte Go-Tests"}
    ],
    caption:
      "Video läuft nie über meine Server. Die Installation des Betreibers spricht mit dem Lizenzdienst nur für ihren täglichen Check-in.",
    diagram: {
      label:
        "Architektur: Der Lizenzdienst tauscht täglich einen signierten Check-in mit den eigenen Servern des Betreibers aus. Diese liefern Video an die TV- und Smartphone-Apps der Zuschauer. Die Geräte der Zuschauer können Videosegmente auch untereinander teilen.",
      licensing: {
        title: "Lizenzdienst",
        subtitle: "Betrieben von Spark Technology",
        items: [
          "Lizenz-API",
          "Kundenportal",
          "Backoffice",
          "Abrechnung und App-Builds"
        ]
      },
      operator: {
        title: "Installation des Betreibers",
        subtitle: "Auf den Servern des Betreibers",
        items: [
          "Control Panel",
          "Ingest-Server",
          "Relay-Server",
          "Abonnenten und Reseller"
        ]
      },
      viewers: {
        title: "Zuschauer",
        subtitle: "Apps unter der Marke des Betreibers",
        items: [
          "Apps für Android TV und Fire TV",
          "Smartphone-Apps",
          "Geräte teilen Videosegmente"
        ]
      },
      checkIn: "täglicher signierter\nCheck-in",
      video: "Live, Catch-up,\nOn-Demand"
    }
  },

  products: [
    {
      name: "Classic TV",
      kind: "IPTV- und VOD-Plattform",
      description:
        "Live-TV und Video-on-Demand für Android-TV-Boxen, samt Verwaltungssystem und den APIs, die die App versorgen.",
      stack: ["Node.js", "Streaming-CMS", "Android TV"]
    },
    {
      name: "Spark POS",
      kind: "Kassensystem als Desktop-Anwendung",
      description:
        "Ein Kassensystem für Geschäfte und Restaurants mit Verkauf, Lagerverwaltung, Einkauf, Gutscheinen und Auswertungen. Bereits am Markt.",
      stack: ["Desktop", "Lagerverwaltung", "Auswertungen"],
      link: {label: "sparkpos.netlify.app", url: links.sparkPos}
    }
  ],

  sideProjects: [
    {
      name: "PixelForge",
      description:
        "Mehr als 50 kostenlose Bildwerkzeuge, die vollständig im Browser laufen.",
      link: {label: "pixel-forge.win", url: links.pixelForge}
    },
    {
      name: "PrimeBeat",
      description:
        "Mehr als 40 kostenlose Rechner für Kredite, Hypotheken, Geldanlage und Unternehmen.",
      link: {label: "primebeat.win", url: links.primeBeat}
    },
    {
      name: "CVCraft",
      description:
        "Kostenloser Generator für Lebenslauf und Anschreiben mit PDF-Export.",
      link: {label: "cv-craft.win", url: links.cvCraft}
    },
    {
      name: "StormZone",
      description:
        "Kostenloses Portal für Browserspiele auf Desktop und Smartphone.",
      link: {label: "stormzone.win", url: links.stormZone}
    }
  ],

  credentials: [
    {
      title: "Bachelor of Science in Informatik",
      issuer: "Lebanese International University (LIU)",
      period: "2010 – 2013",
      logo: images.liuLogo
    },
    {
      title: "Core Solutions of Microsoft SharePoint Server 2013",
      issuer: "Microsoft",
      period: "Zertifikat, 2015",
      logo: images.sharepointLogo,
      link: {label: "Zertifikat ansehen", url: links.sharepointCertificate}
    }
  ],

  ui: {
    skipToContent: "Zum Inhalt springen",
    switchToLight: "Zum hellen Design wechseln",
    switchToDark: "Zum dunklen Design wechseln",
    switchLanguage: "View in English",
    sectionsLabel: "Abschnitte",
    metaDescription:
      "Abbas Bandar ist Senior Backend- und Full-Stack-Entwickler in Deutschland mit mehr als 10 Jahren Erfahrung in der Entwicklung von Backend-Systemen für E-Commerce, Streaming und Unternehmenssoftware mit Node.js, TypeScript und Go. Offen für Remote-Positionen.",
    nav: {
      experience: "Erfahrung",
      caseStudy: "Fallstudie",
      skills: "Kenntnisse",
      projects: "Projekte",
      contact: "Kontakt"
    },
    hero: {
      contactMe: "Kontakt aufnehmen",
      viewCv: "Lebenslauf ansehen",
      basedIn: "Wohnort",
      openTo: "Offen für",
      languages: "Sprachen",
      photoAlt: "Porträt von Abbas Bandar",
      now: "Aktuell"
    },
    about: {title: "Über mich"},
    experience: {
      title: "Berufserfahrung",
      lead: "Vier Arbeitgeber und ein Jahr als Freiberufler, auf drei Kontinenten, seit 2012.",
      hint: "Wählen Sie einen Block, um zu sehen, was ich dort gemacht habe.",
      now: "Heute",
      present: "heute",
      timelineLabel: "Zeitleiste der Berufserfahrung"
    },
    caseStudy: {
      prefix: "Fallstudie",
      problem: "Das Problem",
      built: "Was ich gebaut habe",
      fit: "Wie die Teile zusammenspielen",
      decisions: "Entscheidungen dahinter",
      builtWith: "Entwickelt mit"
    },
    skills: {
      title: "Kenntnisse",
      lead: "Die Werkzeuge, mit denen ich täglich arbeite, und die Arten von Systemen, die ich von innen kenne."
    },
    projects: {
      title: "Projekte",
      lead: "Weitere Produkte, die ich für Arbeitgeber und für mich selbst gebaut habe.",
      products: "Frühere Produkte",
      sideProjects: "Nebenprojekte"
    },
    credentials: {title: "Ausbildung und Zertifikate"},
    contact: {
      title: "Haben Sie ein Projekt oder eine Stelle im Sinn?",
      lead: "Schreiben Sie mir, woran Sie arbeiten. Ich melde mich bei Ihnen.",
      copy: "Adresse kopieren",
      copied: "Adresse kopiert",
      email: "E-Mail",
      phone: "Telefon",
      profiles: "Profile",
      backToTop: "Nach oben",
      form: {
        name: "Ihr Name",
        email: "Ihre E-Mail-Adresse",
        message: "Nachricht",
        send: "Nachricht senden",
        sending: "Wird gesendet …",
        success:
          "Vielen Dank. Ihre Nachricht ist unterwegs, ich antworte Ihnen per E-Mail.",
        error:
          "Die Nachricht konnte nicht gesendet werden. Bitte schreiben Sie mir direkt an die hier angegebene Adresse.",
        privacy:
          "Ihre Angaben werden über Netlify an mich übermittelt und nur für meine Antwort verwendet."
      }
    },
    tagsLabel: "Technologien und Schwerpunkte"
  }
};
