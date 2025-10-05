import ProgressStats from '../ProgressStats';
import { TrendingUp, Target, Award, Code2 } from "lucide-react";

export default function ProgressStatsExample() {
  const mockStats = [
    {
      icon: Code2,
      label: "Problems Solved",
      value: "150",
      color: "bg-chart-4"
    },
    {
      icon: Target,
      label: "Projects Built",
      value: "4",
      color: "bg-chart-2"
    },
    {
      icon: TrendingUp,
      label: "Overall Progress",
      value: "45%",
      color: "bg-chart-1"
    },
    {
      icon: Award,
      label: "Milestones",
      value: "6/12",
      color: "bg-chart-3"
    }
  ];

  return <ProgressStats stats={mockStats} />;
}
