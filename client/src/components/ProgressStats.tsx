import { Card } from "@/components/ui/card";
import { TrendingUp, Target, Award, Code2 } from "lucide-react";

interface Stat {
  icon: typeof TrendingUp;
  label: string;
  value: string;
  color: string;
}

interface ProgressStatsProps {
  stats: Stat[];
}

export default function ProgressStats({ stats }: ProgressStatsProps) {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <Card
            key={index}
            className="hover-elevate p-6 text-center transition-all"
            data-testid={`card-stat-${index}`}
          >
            <div className={`mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full ${stat.color}`}>
              <Icon className="h-6 w-6 text-white" />
            </div>
            <div className="mb-1 font-heading text-2xl font-bold text-foreground">
              {stat.value}
            </div>
            <div className="text-sm text-muted-foreground">
              {stat.label}
            </div>
          </Card>
        );
      })}
    </div>
  );
}
