export interface ProgressData {
  problemsSolved: number;
  projectsBuilt: number;
  semesterProgress: Record<number, number>;
}

export function calculateOverallProgress(data: ProgressData, selectedYear: number): number {
  const totalSemesters = selectedYear === 1 ? 8 : selectedYear === 2 ? 6 : selectedYear === 3 ? 4 : 2;
  
  const semesterProgressSum = Object.values(data.semesterProgress).reduce((sum, val) => sum + val, 0);
  const avgSemesterProgress = semesterProgressSum / totalSemesters;
  
  const problemsTarget = selectedYear === 1 ? 600 : selectedYear === 2 ? 600 : selectedYear === 3 ? 600 : 400;
  const problemsProgress = Math.min((data.problemsSolved / problemsTarget) * 100, 100);
  
  const projectsTarget = selectedYear === 1 ? 8 : selectedYear === 2 ? 6 : selectedYear === 3 ? 4 : 2;
  const projectsProgress = Math.min((data.projectsBuilt / projectsTarget) * 100, 100);
  
  const overallProgress = (avgSemesterProgress * 0.4 + problemsProgress * 0.4 + projectsProgress * 0.2);
  
  return Math.round(overallProgress);
}

export function getMilestonesAchieved(problemsSolved: number, projectsBuilt: number): number {
  let milestones = 0;
  
  if (problemsSolved >= 50) milestones++;
  if (problemsSolved >= 150) milestones++;
  if (problemsSolved >= 300) milestones++;
  if (problemsSolved >= 500) milestones++;
  
  if (projectsBuilt >= 1) milestones++;
  if (projectsBuilt >= 3) milestones++;
  if (projectsBuilt >= 5) milestones++;
  if (projectsBuilt >= 8) milestones++;
  
  return milestones;
}
