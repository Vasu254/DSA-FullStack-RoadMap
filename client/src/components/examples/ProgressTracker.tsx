import { useState } from 'react';
import ProgressTracker from '../ProgressTracker';

export default function ProgressTrackerExample() {
  const [problems, setProblems] = useState(45);
  const [projects, setProjects] = useState(2);

  return (
    <ProgressTracker
      problemsSolved={problems}
      projectsBuilt={projects}
      onUpdateProblems={setProblems}
      onUpdateProjects={setProjects}
    />
  );
}
