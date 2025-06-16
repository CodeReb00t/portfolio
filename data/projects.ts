export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  category: string;
  date: string;
  github?: string;
  demo?: string;
  image: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Shedly – Agile Workflow & Client Management",
    description:
      "A cloud-native full-stack platform for agile project tracking and client management with Gantt charts and modular APIs.",
    longDescription:
      "Engineered and deployed a full-stack project management dashboard used by 10+ active users for agile task tracking, team collaboration, and project reporting. Includes Gantt chart visualizations, project-client associations, and modular API endpoints. Hosted on AWS using EC2, RDS, and S3.",
    technologies: [
      "Next.js",
      "Tailwind CSS",
      "Redux Toolkit",
      "Node.js",
      "Express",
      "Prisma",
      "PostgreSQL",
      "AWS",
    ],
    category: "Full Stack",
    date: "2025",
    github: "https://github.com/CodeReb00t/Shedly",
    demo: "https://main.dbadtie57oyg2.amplifyapp.com/",
    image:
      "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800",
    featured: true,
  },
  {
    id: 2,
    title: "DBackend – Backend Acceleration Kit",
    description:
      "Open-source modular backend framework to speed up MVP development for startups and indie devs.",
    longDescription:
      "Designed a production-ready backend framework to streamline MVP creation. Features core modules with JWT authentication and MongoDB integration. Documented for quick onboarding and used by a growing community with 390+ weekly downloads on npm.",
    technologies: ["Node.js", "Express.js", "MongoDB", "JWT"],
    category: "Backend",
    date: "2025",
    github: "https://github.com/CodeReb00t/dbackend",
    demo: "https://dbackend-docs.vercel.app/",
    image:
      "https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=800",
    featured: true,
  },
  {
    id: 3,
    title: "CampusOS – Modular Campus Utilities App",
    description:
      "Mobile-first ecosystem combining mess menu viewer, announcements, and campus tools for students.",
    longDescription:
      "Developed a modular React Native mobile app centralizing campus services like digitized mess menus, real-time alerts, and more. Seamlessly integrated micro-apps using Expo Router and Redux Toolkit for state management and navigation. Adopted daily by 5+ students.",
    technologies: [
      "React Native",
      "Expo Router",
      "Redux Toolkit",
      "NativeWind",
    ],
    category: "Mobile App",
    date: "2025",
    demo: "https://expo.dev/accounts/devansh_19/projects/CampusOS/builds/455af80c-4ca3-4f85-810e-5f6c6390c508",
    image:
      "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800",
    featured: true,
  },
];

export const projectCategories = [
  "All",
  "Full Stack",
  "Frontend",
  "Backend",
  "Mobile App",
];
