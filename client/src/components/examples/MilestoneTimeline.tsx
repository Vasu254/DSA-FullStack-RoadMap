import MilestoneTimeline from '../MilestoneTimeline';

export default function MilestoneTimelineExample() {
  const mockMilestones = [
    {
      id: 1,
      semester: 2,
      title: "DSA Foundation Complete",
      description: "Completed arrays, strings, recursion, and OOP basics. Solved 50+ problems on LeetCode.",
      isCompleted: true,
      isMajor: false
    },
    {
      id: 2,
      semester: 4,
      title: "Full-Stack Project Delivered",
      description: "Built and deployed a complete full-stack application with authentication and CRUD operations.",
      isCompleted: true,
      isMajor: true
    },
    {
      id: 3,
      semester: 6,
      title: "Internship Secured",
      description: "Landed summer internship at a tech startup. Resume strong with 3-4 solid projects.",
      isCompleted: false,
      isMajor: true
    },
    {
      id: 4,
      semester: 7,
      title: "Placement Ready",
      description: "500+ DSA problems solved. Final capstone project complete. Offers incoming!",
      isCompleted: false,
      isMajor: true
    }
  ];

  return <MilestoneTimeline milestones={mockMilestones} />;
}
