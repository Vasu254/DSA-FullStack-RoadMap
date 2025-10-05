import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Minus, Code2, Folder } from "lucide-react";
import { useState } from "react";

interface ProgressTrackerProps {
  problemsSolved: number;
  projectsBuilt: number;
  onUpdateProblems: (value: number) => void;
  onUpdateProjects: (value: number) => void;
}

export default function ProgressTracker({
  problemsSolved,
  projectsBuilt,
  onUpdateProblems,
  onUpdateProjects
}: ProgressTrackerProps) {
  const [problemsInput, setProblemsInput] = useState("");
  const [projectsInput, setProjectsInput] = useState("");

  const handleAddProblems = () => {
    const num = parseInt(problemsInput) || 1;
    if (num > 0) {
      onUpdateProblems(problemsSolved + num);
      setProblemsInput("");
    }
  };

  const handleAddProject = () => {
    onUpdateProjects(projectsBuilt + 1);
  };

  const handleSubtractProblems = () => {
    if (problemsSolved > 0) {
      const num = parseInt(problemsInput) || 1;
      onUpdateProblems(Math.max(0, problemsSolved - num));
      setProblemsInput("");
    }
  };

  const handleSubtractProject = () => {
    if (projectsBuilt > 0) {
      onUpdateProjects(projectsBuilt - 1);
    }
  };

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      <Card className="p-6" data-testid="card-problems-tracker">
        <div className="mb-4 flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-chart-4">
            <Code2 className="h-6 w-6 text-white" />
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-foreground">
              Problems Solved
            </h3>
            <p className="text-2xl font-bold text-chart-4">{problemsSolved}</p>
          </div>
        </div>
        
        <div className="flex gap-2">
          <Input
            type="number"
            placeholder="Add amount"
            value={problemsInput}
            onChange={(e) => setProblemsInput(e.target.value)}
            className="flex-1"
            min="1"
            data-testid="input-problems"
          />
          <Button
            onClick={handleAddProblems}
            size="icon"
            data-testid="button-add-problems"
          >
            <Plus className="h-4 w-4" />
          </Button>
          <Button
            onClick={handleSubtractProblems}
            size="icon"
            variant="outline"
            disabled={problemsSolved === 0}
            data-testid="button-subtract-problems"
          >
            <Minus className="h-4 w-4" />
          </Button>
        </div>
      </Card>

      <Card className="p-6" data-testid="card-projects-tracker">
        <div className="mb-4 flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-chart-2">
            <Folder className="h-6 w-6 text-white" />
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-foreground">
              Projects Built
            </h3>
            <p className="text-2xl font-bold text-chart-2">{projectsBuilt}</p>
          </div>
        </div>
        
        <div className="flex gap-2">
          <Button
            onClick={handleAddProject}
            className="flex-1"
            data-testid="button-add-project"
          >
            <Plus className="mr-2 h-4 w-4" />
            Add Project
          </Button>
          <Button
            onClick={handleSubtractProject}
            size="icon"
            variant="outline"
            disabled={projectsBuilt === 0}
            data-testid="button-subtract-project"
          >
            <Minus className="h-4 w-4" />
          </Button>
        </div>
      </Card>
    </div>
  );
}
