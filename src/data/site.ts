import type { Accent } from "@/lib/projects";

export const profile = {
  name: "Mohamed Alaa",
  firstName: "Mohamed",
  role: "Instructional Designer",
  currentRole: "Senior Instructional Designer at Selah El Telmeez",
  location: "Cairo, Egypt",
  email: "muhamed.a.rashed@gmail.com",
  linkedin: "https://www.linkedin.com/in/mohamed-alaa-rashed/",
  cvUrl: "/Mohamed Alaa.pdf",
  avatar: "/img/portrait-dark.png",
};

export const navLinks = [
  { href: "/#work", label: "Work" },
  { href: "/#playground", label: "Playground" },
  { href: "/#process", label: "Process" },
  { href: "/#services", label: "Services" },
  { href: "/#about", label: "About" },
];

export const heroFacts = [
  { value: "3+", label: "years designing learning" },
  { value: "7", label: "projects you can play on this site" },
  { value: "6 hrs", label: "to build a 48-level math game with AI" },
];

export const clients = [
  "Selah El Telmeez",
  "Skilldi",
  "Learnkhana",
  "General Authority for Military Industries",
  "Nafham",
];

export interface ProcessStep {
  title: string;
  body: string;
  output: string;
  accent: Accent;
  link?: { href: string; label: string };
}

export const processSteps: ProcessStep[] = [
  {
    title: "Analyse",
    body: "Who are the learners, what should they be able to do afterwards, and what is getting in the way? Everything after this answers those questions.",
    output: "Audience profile + measurable objectives",
    accent: "sun",
  },
  {
    title: "Storyboard",
    body: "Every screen, interaction, voice line and feedback message is written down and agreed before anything gets built. No surprises later.",
    output: "A storyboard stakeholders can sign off",
    accent: "coral",
    link: { href: "/projects/SB/Water cycle.pdf", label: "See a real storyboard" },
  },
  {
    title: "Build",
    body: "Articulate Storyline, HTML & JavaScript, or AI-assisted game builds — whatever fits the learners, the deadline and the budget.",
    output: "Clickable prototype → full module",
    accent: "teal",
  },
  {
    title: "Test & ship",
    body: "Reviewed with subject experts, fixed, packaged as SCORM and tested on the actual LMS — progress, scores and completion all tracked.",
    output: "SCORM 1.2 / 2004 package, LMS-ready",
    accent: "lilac",
  },
];

export interface Service {
  title: string;
  icon: "FileText" | "MonitorPlay" | "Gamepad2" | "Package" | "Settings2";
  pitch: string;
  includes: string[];
  tools: string[];
  accent: Accent;
}

export const services: Service[] = [
  {
    title: "Interactive e-learning courses",
    icon: "MonitorPlay",
    pitch: "From raw content to a polished, responsive course with scenarios, interactions and knowledge checks.",
    includes: ["Needs analysis & objectives", "Scenario & interaction design", "Responsive, accessible build"],
    tools: ["Storyline 360", "Captivate", "JavaScript"],
    accent: "coral",
  },
  {
    title: "Learning games",
    icon: "Gamepad2",
    pitch: "Game mechanics with a learning job to do — levels, rewards and feedback that keep learners playing and practising.",
    includes: ["Game mechanic design", "Progressive difficulty", "AI-assisted rapid builds"],
    tools: ["HTML5 / JS", "Storyline", "Claude & ChatGPT"],
    accent: "leaf",
  },
  {
    title: "Storyboarding",
    icon: "FileText",
    pitch: "The blueprint: learning flow, screens, voice-over, interactions and assessments, so everyone agrees before development starts.",
    includes: ["Narrative & learning flow", "Interaction specs", "Assessment planning"],
    tools: ["Word", "PowerPoint", "Illustrator"],
    accent: "sun",
  },
  {
    title: "SCORM packaging",
    icon: "Package",
    pitch: "Standards-compliant packages that track progress, scores and completion — tested across LMS platforms.",
    includes: ["SCORM 1.2 & 2004", "Completion & score rules", "Cross-LMS testing"],
    tools: ["Storyline", "Captivate", "iSpring"],
    accent: "sky",
  },
  {
    title: "LMS setup & support",
    icon: "Settings2",
    pitch: "Choosing, configuring and branding a learning platform, then training the people who run it.",
    includes: ["Platform selection", "Configuration & branding", "Admin training & docs"],
    tools: ["WordPress", "Canvas", "Schoology"],
    accent: "lilac",
  },
];

export interface TimelineItem {
  role: string;
  org: string;
  period: string;
  body: string;
  current?: boolean;
}

export const experience: TimelineItem[] = [
  {
    role: "Senior Instructional Designer",
    org: "Selah El Telmeez",
    period: "Oct 2024 — Present",
    body: "Design learning experiences with clear objectives, gamification and storyboards, working with subject experts to keep every lesson accurate.",
    current: true,
  },
  {
    role: "E-learning Specialist",
    org: "Skilldi",
    period: "Apr 2023 — Oct 2024",
    body: "Designed and developed e-learning courses in Storyline 360, grounded in audience analysis, learning theory and careful content review.",
  },
  {
    role: "Instructional Designer",
    org: "Learnkhana",
    period: "Aug 2023 — May 2024",
    body: "Wrote storyboards, edited videos and designed interactive online activities for different learning styles.",
  },
  {
    role: "Instructional Design Intern",
    org: "Nafham",
    period: "Aug 2020 — Oct 2020",
    body: "Turned lesson content into storyboards and multimedia as part of the instructional design team.",
  },
];

export const education = {
  degree: "B.Sc. Educational Technology",
  school: "Faculty of Specific Education, Ain Shams University",
  period: "2017 — 2021",
  note: "Graduated with honours. Built a Learning Management System as my graduation project.",
};

export const toolkit: { group: string; items: string[] }[] = [
  { group: "Authoring", items: ["Articulate Storyline", "Adobe Captivate", "SCORM 1.2 / 2004", "LMS platforms"] },
  { group: "Design & media", items: ["Illustrator", "Photoshop", "Premiere", "Camtasia", "Canva"] },
  { group: "Code & AI", items: ["HTML, CSS & JS", "Claude", "ChatGPT", "ElevenLabs"] },
  { group: "Craft", items: ["Storyboarding", "Game-based learning", "Gamification", "UX / UI", "VR, AR & MR"] },
];
