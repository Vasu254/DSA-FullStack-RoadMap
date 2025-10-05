import { SemesterData } from "@/components/SemesterCard";

export const semesterRoadmap: SemesterData[] = [
  {
    semester: 1,
    title: "HTML, CSS, JS Fundamentals",
    focus: "Web Development Basics",
    learningObjectives: [
      "Learn HTML, CSS, JS thoroughly",
      "Build 2-3 mini websites (Portfolio, Landing Page, To-Do app)",
      "Start C++/Java/Python basics for DSA foundation"
    ],
    dsaTopics: ["Basic Programming", "Variables", "Loops", "Conditions"],
    projects: [
      "Personal Portfolio Website",
      "Landing Page",
      "To-Do Application"
    ],
    expectedOutput: "GitHub portfolio with simple static websites + coding basics",
    isLocked: false,
    completionPercentage: 0
  },
  {
    semester: 2,
    title: "DSA Start + Problem Solving",
    focus: "Data Structures Foundation",
    learningObjectives: [
      "Start DSA in C++/Java - arrays, strings, recursion, OOP basics",
      "Practice daily on LeetCode / GFG (30-50 problems by end of sem)",
      "Build mini-projects in JS (Weather App using API, Notes App)"
    ],
    dsaTopics: ["Arrays", "Strings", "Recursion", "OOP Basics"],
    projects: [
      "Weather App using API",
      "Notes Application",
      "Simple Calculator"
    ],
    expectedOutput: "Coding profile started + 1-2 interactive JS projects",
    isLocked: false,
    completionPercentage: 0
  },
  {
    semester: 3,
    title: "Frontend Libraries",
    focus: "React.js & State Management",
    learningObjectives: [
      "Learn React.js (most demanded framework)",
      "Master state management (Redux/Context API)",
      "Connect React with simple APIs (REST/JSON)",
      "Continue DSA (stacks, queues, linked list, trees)"
    ],
    dsaTopics: ["Stacks", "Queues", "Linked Lists", "Trees"],
    projects: [
      "Blog Application with React",
      "E-commerce Frontend",
      "Dashboard with API Integration"
    ],
    expectedOutput: "A React project (Blog app, E-commerce frontend)",
    isLocked: false,
    completionPercentage: 0
  },
  {
    semester: 4,
    title: "Backend Development",
    focus: "Node.js/Spring Boot & Databases",
    learningObjectives: [
      "Learn Node.js + Express OR Java Spring Boot",
      "Learn Databases (SQL + MongoDB)",
      "Build full-stack project (Authentication, CRUD apps)",
      "Continue DSA (Graphs, Dynamic Programming)"
    ],
    dsaTopics: ["Graphs", "Dynamic Programming", "Backtracking"],
    projects: [
      "Authentication System",
      "Full-Stack CRUD Application",
      "REST API with Database"
    ],
    expectedOutput: "Full-stack project on GitHub + 200-300 solved problems",
    isLocked: false,
    completionPercentage: 0
  },
  {
    semester: 5,
    title: "Big Projects + Strong Resume",
    focus: "Portfolio Building & Open Source",
    learningObjectives: [
      "Build 2 major projects (Resume-worthy full-stack or ML project)",
      "Learn System Design basics (APIs, scalability)",
      "Contribute to open source (Hacktoberfest, GSOC)",
      "Internship applications (summer internships, startups, freelancing)"
    ],
    dsaTopics: ["Advanced Trees", "Heaps", "Tries", "Segment Trees"],
    projects: [
      "Major Full-Stack Project",
      "ML/AI Project",
      "Open Source Contributions"
    ],
    expectedOutput: "Resume with 3-4 good projects + internship experience",
    isLocked: false,
    completionPercentage: 0
  },
  {
    semester: 6,
    title: "Internships + Placement Prep",
    focus: "Interview Preparation",
    learningObjectives: [
      "Continue internship OR work on major project",
      "Placement prep - Revise OS, DBMS, CN, OOP",
      "Solve 500+ DSA problems by end of sem",
      "Mock interviews + resume building"
    ],
    dsaTopics: ["String Algorithms", "Bit Manipulation", "Math", "Greedy"],
    projects: [
      "Internship Project",
      "System Design Project",
      "Interview Prep Portfolio"
    ],
    expectedOutput: "Strong coding + system knowledge, ready for placements",
    isLocked: false,
    completionPercentage: 0
  },
  {
    semester: 7,
    title: "Placements Full Swing",
    focus: "Job Applications & Final Project",
    learningObjectives: [
      "Apply for on-campus + off-campus jobs",
      "Do mock coding tests daily",
      "Build 1 final capstone project (AI/ML, Full-stack, or IoT)",
      "Strengthen resume + LinkedIn profile"
    ],
    dsaTopics: ["Advanced DP", "Graph Algorithms", "Complex Problems"],
    projects: [
      "Capstone Project (AI/ML/Full-Stack/IoT)",
      "Company-Specific Prep",
      "Mock Interview Projects"
    ],
    expectedOutput: "Placement-ready profile + offers incoming",
    isLocked: false,
    completionPercentage: 0
  },
  {
    semester: 8,
    title: "Backup & Higher Studies/Start Job",
    focus: "Career Launch or Advanced Studies",
    learningObjectives: [
      "If placed - work on final year project only",
      "If not placed - keep applying off-campus",
      "Prepare for GATE, GRE, or certifications if higher studies"
    ],
    dsaTopics: ["Revision", "Advanced Topics", "Interview Prep"],
    projects: [
      "Final Year Project",
      "Certification Projects",
      "Research Work (if applicable)"
    ],
    expectedOutput: "Either job offer OR higher studies plan secured",
    isLocked: false,
    completionPercentage: 0
  }
];

export function getSemestersForYear(year: number): SemesterData[] {
  const startSemester = year;
  return semesterRoadmap.map((sem, index) => ({
    ...sem,
    isLocked: (index + 1) < startSemester
  }));
}
