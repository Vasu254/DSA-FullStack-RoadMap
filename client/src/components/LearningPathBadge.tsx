import { Badge } from "@/components/ui/badge";
import { Code2, Layers } from "lucide-react";

interface LearningPathBadgeProps {
  type: "dsa" | "fullstack";
  label: string;
}

export default function LearningPathBadge({ type, label }: LearningPathBadgeProps) {
  const isDSA = type === "dsa";
  
  return (
    <Badge
      variant="secondary"
      className={`flex items-center gap-1.5 px-3 py-1.5 font-medium shadow-sm ${
        isDSA
          ? "bg-chart-4/20 text-chart-4 border-chart-4/30"
          : "bg-chart-2/20 text-chart-2 border-chart-2/30"
      }`}
      data-testid={`badge-path-${type}`}
    >
      {isDSA ? (
        <Code2 className="h-4 w-4" />
      ) : (
        <Layers className="h-4 w-4" />
      )}
      <span>{label}</span>
    </Badge>
  );
}
