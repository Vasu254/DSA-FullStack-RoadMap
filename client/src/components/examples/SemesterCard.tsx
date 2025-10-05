import SemesterCard from '../SemesterCard';

export default function SemesterCardExample() {
  const mockData = {
    semester: 3,
    title: "Frontend Libraries",
    focus: "React.js & State Management",
    learningObjectives: [
      "Learn React.js (most demanded)",
      "Master state management (Redux/Context API)",
      "Connect React with simple APIs (REST/JSON)"
    ],
    dsaTopics: ["Stacks", "Queues", "Linked Lists", "Trees"],
    projects: [
      "Blog application with React",
      "E-commerce frontend",
      "Interactive dashboard"
    ],
    expectedOutput: "A React project (Blog app, E-commerce frontend)",
    isLocked: false,
    completionPercentage: 45
  };

  return <SemesterCard data={mockData} />;
}
