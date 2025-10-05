import { SemesterData } from "@/components/SemesterCard";

export const firstYearRoadmap: SemesterData[] = [
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

export const secondYearRoadmap: SemesterData[] = [
  {
    semester: 3,
    title: "Restart & Catch Up",
    focus: "Build Foundation + Start Coding Seriously",
    learningObjectives: [
      "Pick C++ or Java and stick to it",
      "Learn basics: arrays, strings, recursion, linked list, stack, queue",
      "Solve 100+ problems on LeetCode/GFG this semester",
      "HTML, CSS, JavaScript - catch up on basics",
      "Make 2-3 small projects (Portfolio site, To-do list, Calculator)"
    ],
    dsaTopics: ["Arrays", "Strings", "Recursion", "Linked Lists", "Stacks", "Queues"],
    projects: [
      "Portfolio Website",
      "To-Do List App",
      "Calculator App"
    ],
    expectedOutput: "100-150 DSA problems done + 1 portfolio website + 1 mini JS project on GitHub",
    isLocked: false,
    completionPercentage: 0
  },
  {
    semester: 4,
    title: "Intermediate DSA + Backend Basics",
    focus: "Advanced Data Structures & Full-Stack",
    learningObjectives: [
      "Trees, Graphs, Dynamic Programming basics",
      "250-300 problems solved by end of 4th sem",
      "Learn React.js (frontend library)",
      "Start backend (Node.js + Express OR Java Spring Boot)",
      "Learn SQL (MySQL/PostgreSQL)"
    ],
    dsaTopics: ["Trees", "Graphs", "Dynamic Programming", "Advanced DSA"],
    projects: [
      "Full-Stack Blog App",
      "Notes App with Backend",
      "Authentication System"
    ],
    expectedOutput: "1 full-stack project deployed online + 300 DSA problems solved",
    isLocked: false,
    completionPercentage: 0
  },
  {
    semester: 5,
    title: "Resume Projects + Internship Applications",
    focus: "Strong Projects & Career Preparation",
    learningObjectives: [
      "Advanced topics (DP, Tries, Segment Trees)",
      "Reach 400-500 problems solved",
      "Build 2 strong projects (E-commerce app, Chat app, etc.)",
      "Contribute to open source / hackathons",
      "Start applying for internships (LinkedIn, Internshala, startups)"
    ],
    dsaTopics: ["DP", "Tries", "Segment Trees", "Advanced Graphs"],
    projects: [
      "E-commerce Application",
      "Chat Application",
      "Open Source Contributions"
    ],
    expectedOutput: "Resume with 3 strong projects + internship experience or open-source contributions",
    isLocked: false,
    completionPercentage: 0
  },
  {
    semester: 6,
    title: "Placement Prep + Internship/Jobs",
    focus: "Interview Ready & Core CS",
    learningObjectives: [
      "Revise everything, focus on mock tests",
      "Goal: 600+ problems solved",
      "Study OS, DBMS, CN, OOP (important for interviews)",
      "Work on Major Project (can be used as final year project too)",
      "Apply for summer internships + off-campus jobs"
    ],
    dsaTopics: ["Mock Tests", "Revision", "Interview Prep"],
    projects: [
      "Major Project (Resume-worthy)",
      "Interview Prep Portfolio"
    ],
    expectedOutput: "Placement-level coding skills + Internship/job secured OR interviews lined up",
    isLocked: false,
    completionPercentage: 0
  },
  {
    semester: 7,
    title: "Placements Full Swing",
    focus: "Job Applications & Final Project",
    learningObjectives: [
      "Give as many mock interviews + aptitude tests as possible",
      "Apply for on-campus & off-campus companies",
      "Just manage final project & exams"
    ],
    dsaTopics: ["Mock Interviews", "Aptitude Tests", "Revision"],
    projects: [
      "Final Year Project",
      "Placement Preparation"
    ],
    expectedOutput: "Job offers incoming",
    isLocked: false,
    completionPercentage: 0
  },
  {
    semester: 8,
    title: "Job Offer or Backup Plan",
    focus: "Secure Career Path",
    learningObjectives: [
      "If not placed, prepare for GATE / higher studies / certifications",
      "Complete final year project"
    ],
    dsaTopics: ["GATE Prep", "Certifications"],
    projects: [
      "Final Year Project Completion",
      "Certification Projects"
    ],
    expectedOutput: "Job offer in hand OR clear backup plan",
    isLocked: false,
    completionPercentage: 0
  }
];

export const thirdYearRoadmap: SemesterData[] = [
  {
    semester: 5,
    title: "Resume Building Mode",
    focus: "Strong Projects + Advanced DSA",
    learningObjectives: [
      "Revise basics (arrays, strings, linked list, stack, queue, trees)",
      "Learn advanced: Graphs, DP, Heaps, Tries",
      "Target: 400-500 solved problems by end of this semester",
      "Learn Operating Systems + DBMS + OOP (must for interviews)",
      "Start Computer Networks basics",
      "Build 2 strong projects (Full-stack / ML / App Dev)",
      "Start applying for internships (Dec-Jan window)",
      "Join hackathons & open-source events"
    ],
    dsaTopics: ["Graphs", "DP", "Heaps", "Tries", "Advanced DSA"],
    projects: [
      "E-commerce site with login/cart",
      "Chat application with real-time messaging",
      "AI/ML project (image classifier, sentiment analysis)"
    ],
    expectedOutput: "Resume with 2 strong projects + 400+ DSA problems solved + Internship applications started",
    isLocked: false,
    completionPercentage: 0
  },
  {
    semester: 6,
    title: "Placement Prep Begins",
    focus: "Internship/Placement Prep + Major Project",
    learningObjectives: [
      "Practice 2-3 problems daily on LeetCode",
      "Do mock coding contests (Codeforces/CodeChef)",
      "Reach 600+ solved problems by end of semester",
      "Revise OS, DBMS, CN, OOP thoroughly",
      "Study System Design basics (scalability, APIs, caching)",
      "Start your final year major project (choose something big & resume-worthy)",
      "Do a summer internship after 6th sem (very important)",
      "Polish resume, GitHub, LinkedIn"
    ],
    dsaTopics: ["Mock Contests", "System Design", "Interview Prep"],
    projects: [
      "Online exam portal",
      "Social media clone",
      "ML project with deployment",
      "Major Project (Final Year)"
    ],
    expectedOutput: "Internship offer in hand + 600+ DSA problems solved + Major project started & in progress",
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
      "Company-Specific Prep"
    ],
    expectedOutput: "Placement-ready profile + offers incoming",
    isLocked: false,
    completionPercentage: 0
  },
  {
    semester: 8,
    title: "Career Launch or Higher Studies",
    focus: "Secure Your Future",
    learningObjectives: [
      "If placed - work on final year project only",
      "If not placed - keep applying off-campus",
      "Prepare for GATE, GRE, or certifications if higher studies"
    ],
    dsaTopics: ["Revision", "GATE/GRE Prep"],
    projects: [
      "Final Year Project",
      "Certification Projects"
    ],
    expectedOutput: "Either job offer OR higher studies plan secured",
    isLocked: false,
    completionPercentage: 0
  }
];

export const fourthYearRoadmap: SemesterData[] = [
  {
    semester: 7,
    title: "Placements Focus",
    focus: "Placement Season + Major Project Progress",
    learningObjectives: [
      "Focus on revision, not new topics",
      "Daily 2-3 problems (arrays, strings, DP, trees, graphs)",
      "Do mock interviews & coding contests",
      "Revise OOP, OS, DBMS, CN - be able to explain concepts + write SQL queries",
      "Start building your final year capstone project (should be resume-worthy)",
      "Apply to on-campus companies (service & product based)",
      "Start off-campus applications (LinkedIn, Naukri, company portals)",
      "Practice aptitude + HR interview questions"
    ],
    dsaTopics: ["Revision", "Mock Interviews", "Coding Contests"],
    projects: [
      "E-learning platform",
      "Social media app",
      "AI/ML project with deployment",
      "Final Year Capstone Project"
    ],
    expectedOutput: "Resume updated with projects + internship + At least 1-2 interview experiences + Major project in progress",
    isLocked: false,
    completionPercentage: 0
  },
  {
    semester: 8,
    title: "Final Push - Secure Career",
    focus: "Job OR Higher Studies",
    learningObjectives: [
      "If placed - relax a bit, just maintain academics",
      "If not placed - keep applying to off-campus jobs daily",
      "Do mock interviews with friends/seniors",
      "Complete & polish final year project",
      "Prepare PPT + demo (sometimes companies ask)",
      "GATE prep (if aiming for PSU/M.Tech)",
      "GRE/TOEFL/IELTS (if MS abroad)",
      "Certifications (Cloud, ML, Data Science) if planning specialization",
      "Improve communication, teamwork, presentation (important in HR rounds)"
    ],
    dsaTopics: ["DSA Revision", "GATE/GRE Prep", "Mock Interviews"],
    projects: [
      "Final Project Completion",
      "Project Demo & PPT",
      "Certification Projects"
    ],
    expectedOutput: "Job offer in hand OR solid plan for higher studies + Final project submitted & demo-ready",
    isLocked: false,
    completionPercentage: 0
  }
];

export function getSemestersForYear(year: number): SemesterData[] {
  switch (year) {
    case 1:
      return firstYearRoadmap;
    case 2:
      return secondYearRoadmap;
    case 3:
      return thirdYearRoadmap;
    case 4:
      return fourthYearRoadmap;
    default:
      return firstYearRoadmap;
  }
}

export function getYearDescription(year: number): { title: string; description: string; focus: string } {
  switch (year) {
    case 1:
      return {
        title: "Complete 8-Semester Roadmap",
        description: "Full roadmap from 1st to 8th semester covering HTML/CSS/JS → DSA → React → Backend → Projects → Placements",
        focus: "Building strong foundation from scratch"
      };
    case 2:
      return {
        title: "Starting Fresh from 2nd Year",
        description: "Catch-up roadmap from 3rd semester onwards. Focus on building foundation + serious coding practice",
        focus: "Restart & Catch Up - Build foundation quickly"
      };
    case 3:
      return {
        title: "3rd Year - Resume Building Mode",
        description: "Focus on 5th & 6th semester with strong projects, advanced DSA, and internship preparation",
        focus: "Strong Projects + Advanced DSA + Internships"
      };
    case 4:
      return {
        title: "Final Year - Placements & Career",
        description: "7th & 8th semester focus on placements, final year project, and securing your career path",
        focus: "Placements Focus + Final Project + Job/Higher Studies"
      };
    default:
      return {
        title: "Complete Roadmap",
        description: "Full comprehensive roadmap for B.Tech students",
        focus: "Complete journey to placement success"
      };
  }
}
