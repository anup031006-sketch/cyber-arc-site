/**
 * ─────────────────────────────────────────────
 *  EDIT EVERYTHING ABOUT THE SITE FROM THIS FILE
 * ─────────────────────────────────────────────
 */

export const profile = {
  name: "Anupam Gope",
  role: "BTech AI/ML Student",
  tagline: "Building. Learning. Creating with AI.",
  heroDescription:
    "I'm a BTech Artificial Intelligence & Machine Learning student at Sanskriti University, exploring AI, coding, web development and creative technology.",
  about:
    "I'm Anupam Gope, a BTech Artificial Intelligence & Machine Learning student at Sanskriti University. I'm currently exploring AI, coding and modern web development. I enjoy turning ideas into working digital experiences and experimenting with AI-assisted development. My goal is to continuously improve my technical skills, build meaningful projects and grow into a strong technology professional.",
  whatsNext:
    "I'm currently at the beginning of my AI/ML journey. I'm focused on learning, building projects and developing strong technical skills. This portfolio will evolve as I learn and create more.",
};

export type Project = {
  title: string;
  description: string;
  tags: string[];
  /** Live project URL. Leave empty ("") to hide the View Project button. */
  url: string;
  /** Optional GitHub repo URL. Leave empty ("") to hide the GitHub button. */
  github?: string;
};

/** Add a new project by appending an object here. */
export const projects: Project[] = [
  {
    title: "Campus Data",
    description:
      "A web-based project focused on presenting and organizing campus-related information through a modern digital interface.",
    tags: ["Web", "AI-assisted Development"],
    url: "",
    github: "",
  },
  {
    title: "Quantum Vibe Check",
    description:
      "An experimental web project exploring an interactive digital experience with a futuristic concept.",
    tags: ["Web", "Experimental"],
    url: "",
    github: "",
  },
];

/** Skills I actually have right now. */
export const currentSkills = [
  { name: "AI-assisted Web Development", note: "Building real websites with AI tools" },
  { name: "Coding", note: "Learning the fundamentals, step by step" },
  { name: "Editing", note: "Photo & video editing" },
];

/** Things I'm learning. Move an item up to currentSkills when ready. */
export const learningSkills = [
  "Artificial Intelligence",
  "Machine Learning",
  "Programming",
  "Web Development",
];

export const education = [
  {
    place: "Sanskriti University",
    title: "BTech — Artificial Intelligence & Machine Learning",
    status: "Currently pursuing",
    active: true,
  },
  {
    place: "St. Joseph's Convent High School",
    title: "Class 10 and Class 12",
    status: "Completed",
    active: false,
  },
];

export const socials = {
  instagram: "https://instagram.com/natty.anup_03",
  /** Add your links here to switch them from "Coming soon" to real links. */
  github: "",
  linkedin: "",
};

export const contact = {
  /**
   * Paste a form endpoint here to make the contact form send messages,
   * e.g. Formspree: "https://formspree.io/f/xxxxxxx".
   * While this is empty the form validates but tells visitors it isn't connected yet.
   */
  formEndpoint: "",
  /** Optional fallback email address shown as a mailto link. */
  email: "",
};
