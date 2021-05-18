/* Change this file to get your personal Portfolio */

// Summary And Greeting Section

import emoji from "react-easy-emoji";

const illustration = {
  animated: true // set to false to use static SVG
};

const greeting = {
  username: "Abbas Bandar",
  title: "Hi all, I'm Abbas",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1R6PWdJ8dxIgYpNZZqC5yKox1p5JKqjEr/view?usp=sharing",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/abbasspark",
  linkedin: "https://www.linkedin.com/in/abbas-bandar/",
  gmail: "abbasbandar@gmail.com",
  gitlab: "https://gitlab.com/abbasbandar",
  facebook: "https://www.facebook.com/abbasbandar",
  medium: "https://medium.com/@abbasbandar",
  stackoverflow: "https://stackoverflow.com/users/15948184/abbas-bandar",
  // Instagram and Twitter are also supported in the links!
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ Strapi / Digital Ocean"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "LIU University",
      logo: require("./assets/images/Lebanese_International_University_logo.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "October 2010 - August 2013",
      desc: ""
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Project Manager",
      company: "COETI S.R.L-Classic TV",
      companylogo: require("./assets/images/classictv.jpeg"),
      date: "April 2018 – Juli 2020",
      desc: `In April 2018, I was offered a position as a software developer and IT manager at COETI S.R.L in Ciudad del Este, Paraguay. I explored a completely new domain: IPTV and VOD system management. I was ultimately responsible for 25 online Linux servers and the smooth running of the entire related system. In this context, I work with various international companies, e.g. with CYMTV from Rotterdam, the Netherlands, and SuperTV from Brazil / China.`
    },
    {
      role: "Front-End Developer",
      company: "Al Oumara Bakery",
      companylogo: require("./assets/images/aloumara.jpg"),
      date: "November 2016 – March 2018",
      desc: `I took a
      position as a software developer and IT manager at Al Oumara Bakery & Sweets in
      Beirut, Lebanon. There, I managed to set up my own IT and development
      department. I was also involved in setting up a completely new branch for the
      company at a different location, where I was responsible for the entire reorganization
      of the system. In addition, I networked the various locations (three in total) using
      newly developed software`
    },
    {
      role: "Software Engineer",
      company: "Webshortcut-UnoDotNet",
      companylogo: require("./assets/images/unodotnet.jpg"),
      date: "Spetember 2012 – Spetember 2016",
      desc: `I started my first job as a software developer during my studies in 2012 at
      WebShortCut in Beirut, Lebanon. There, I learned how to apply the skills I had
      acquired during my studies and gained a lot of practical experience. My tasks there
      were mainly in the areas of project management and problem solving.`
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/classictvmodern.jpeg"),
      projectName: "Classic TV",
      projectDesc: "IPTV and VOD App works on android box"
    },
    {
      image: require("./assets/images/sparkpos.png"),
      projectName: "Spark POS",
      projectDesc:
        "Point of sale desktop application already introduced in market",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://sparkpos.netlify.app/"
        }
      ]
    },
    {
      image: require("./assets/images/SparkflixWeb.png"),
      projectName: "Spark Flix",
      projectDesc: "Watch Movies Online Free on Spark Flix ",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://sparkflix.netlify.app/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Core Solutions of Microsoft SharePoint Server 2013",
      subtitle: ".",
      image: require("./assets/images/sharepoint.png"),
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1EF5s4N-_Pqc7LwqCY5JIyTD9YVDQKABf/view?usp=sharing"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+49-1631300978",
  email_address: "abbasbandar@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "abbas_bandar", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
