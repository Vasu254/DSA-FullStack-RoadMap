import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle2, Circle, Lock, Code2, Layers, Target, TrendingUp, Plus, Minus } from "lucide-react";
import { Progress } from "@/components/ui/progress";

export interface SemesterData {
  semester: number;
  title: string;
  focus: string;
  learningObjectives: string[];
  dsaTopics: string[];
  projects: string[];
  expectedOutput: string;
  isLocked: boolean;
  completionPercentage: number;
}

interface SemesterCardProps {
  data: SemesterData;
  onToggleTask?: (semester: number, taskIndex: number) => void;
  onUpdateProgress?: (semester: number, progress: number) => void;
  currentProgress?: number;
}

export default function SemesterCard({ data, onUpdateProgress, currentProgress = 0 }: SemesterCardProps) {
  const handleIncreaseProgress = () => {
    if (onUpdateProgress && currentProgress < 100) {
      onUpdateProgress(data.semester, Math.min(100, currentProgress + 10));
    }
  };

  const handleDecreaseProgress = () => {
    if (onUpdateProgress && currentProgress > 0) {
      onUpdateProgress(data.semester, Math.max(0, currentProgress - 10));
    }
  };

  return (
    <Card 
      className={`overflow-hidden shadow-md transition-all duration-300 ${
        data.isLocked ? "opacity-60" : "hover:shadow-xl"
      }`}
      data-testid={`card-semester-${data.semester}`}
    >
      {data.isLocked && (
        <div className="absolute inset-0 z-10 flex items-center justify-center backdrop-blur-sm bg-white/60">
          <div className="text-center">
            <Lock className="mx-auto mb-2 h-12 w-12 text-muted-foreground" />
            <p className="font-medium text-muted-foreground">Not Available Yet</p>
          </div>
        </div>
      )}

      <div className="border-b border-card-border bg-gradient-to-r from-primary/10 to-transparent p-6">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="flex-1">
            <div className="mb-2 flex items-center gap-2">
              <Badge variant="default" className="bg-primary">
                Semester {data.semester}
              </Badge>
              {currentProgress > 0 && (
                <Badge 
                  variant="secondary"
                  className="bg-chart-2 text-white"
                >
                  {currentProgress}% Complete
                </Badge>
              )}
            </div>
            <h3 className="mb-1 font-heading text-2xl font-semibold text-foreground">
              {data.title}
            </h3>
            <p className="text-muted-foreground">{data.focus}</p>
          </div>
        </div>
      </div>

      <div className="p-6">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="learning">
            <AccordionTrigger className="font-medium hover:no-underline">
              <div className="flex items-center gap-2">
                <Target className="h-5 w-5 text-chart-1" />
                Learning Objectives
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <ul className="space-y-2 pl-7">
                {data.learningObjectives.map((objective, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-chart-2" />
                    <span className="text-foreground">{objective}</span>
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="dsa">
            <AccordionTrigger className="font-medium hover:no-underline">
              <div className="flex items-center gap-2">
                <Code2 className="h-5 w-5 text-chart-4" />
                DSA Topics
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="flex flex-wrap gap-2 pl-7">
                {data.dsaTopics.map((topic, idx) => (
                  <Badge key={idx} variant="secondary" className="text-xs">
                    {topic}
                  </Badge>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="projects">
            <AccordionTrigger className="font-medium hover:no-underline">
              <div className="flex items-center gap-2">
                <Layers className="h-5 w-5 text-chart-2" />
                Projects
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <ul className="space-y-2 pl-7">
                {data.projects.map((project, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm">
                    <Circle className="mt-0.5 h-4 w-4 flex-shrink-0 text-muted-foreground" />
                    <span className="text-foreground">{project}</span>
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="output">
            <AccordionTrigger className="font-medium hover:no-underline">
              <div className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-chart-3" />
                Expected Output
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <p className="pl-7 text-sm text-foreground">{data.expectedOutput}</p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      {!data.isLocked && (
        <div className="border-t border-card-border bg-muted/30 p-4">
          <div className="mb-3 flex items-center justify-between">
            <span className="text-sm font-medium text-foreground">Progress</span>
            <div className="flex items-center gap-2">
              <Button
                size="sm"
                variant="outline"
                onClick={handleDecreaseProgress}
                disabled={currentProgress === 0}
                className="h-7 w-7 p-0"
                data-testid={`button-decrease-progress-${data.semester}`}
              >
                <Minus className="h-3 w-3" />
              </Button>
              <span className="min-w-[3rem] text-center text-sm font-semibold text-foreground">
                {currentProgress}%
              </span>
              <Button
                size="sm"
                variant="outline"
                onClick={handleIncreaseProgress}
                disabled={currentProgress === 100}
                className="h-7 w-7 p-0"
                data-testid={`button-increase-progress-${data.semester}`}
              >
                <Plus className="h-3 w-3" />
              </Button>
            </div>
          </div>
          <Progress value={currentProgress} className="h-3" />
        </div>
      )}
    </Card>
  );
}
