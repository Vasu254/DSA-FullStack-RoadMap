import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, CheckCircle2, Circle } from "lucide-react";

export interface Milestone {
  id: number;
  semester: number;
  title: string;
  description: string;
  isCompleted: boolean;
  isMajor: boolean;
}

interface MilestoneTimelineProps {
  milestones: Milestone[];
}

export default function MilestoneTimeline({ milestones }: MilestoneTimelineProps) {
  return (
    <div className="w-full">
      <div className="mb-8 text-center">
        <h2 className="mb-3 font-heading text-3xl font-semibold text-foreground">
          Your Milestone Timeline
        </h2>
        <p className="text-muted-foreground">
          Track your progress from learning to placement success
        </p>
      </div>

      <div className="relative space-y-6">
        <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-border md:left-8" />

        {milestones.map((milestone, index) => (
          <div key={milestone.id} className="relative flex gap-4 md:gap-6">
            <div className="relative z-10 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border-4 border-background md:h-16 md:w-16">
              {milestone.isMajor ? (
                <div className={`flex h-full w-full items-center justify-center rounded-full ${
                  milestone.isCompleted ? "bg-chart-3" : "bg-chart-3/30"
                }`}>
                  <Star className={`h-6 w-6 md:h-8 md:w-8 ${
                    milestone.isCompleted ? "fill-white text-white" : "text-chart-3"
                  }`} />
                </div>
              ) : (
                <div className={`flex h-full w-full items-center justify-center rounded-full ${
                  milestone.isCompleted ? "bg-primary" : "bg-muted"
                }`}>
                  {milestone.isCompleted ? (
                    <CheckCircle2 className="h-6 w-6 text-white md:h-7 md:w-7" />
                  ) : (
                    <Circle className="h-5 w-5 text-muted-foreground md:h-6 md:w-6" />
                  )}
                </div>
              )}
            </div>

            <Card className={`hover-elevate flex-1 p-6 transition-all ${
              milestone.isCompleted ? "border-primary/30 shadow-md" : ""
            }`}>
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div className="flex-1">
                  <div className="mb-2 flex flex-wrap items-center gap-2">
                    <Badge variant="default" className="bg-primary text-xs">
                      Sem {milestone.semester}
                    </Badge>
                    {milestone.isMajor && (
                      <Badge className="bg-chart-3 text-white text-xs">
                        Major Milestone
                      </Badge>
                    )}
                  </div>
                  <h3 className="mb-2 font-heading text-lg font-semibold text-foreground">
                    {milestone.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {milestone.description}
                  </p>
                </div>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}
