import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Lock } from "lucide-react";

interface YearOption {
  year: number;
  label: string;
  semestersAvailable: string;
  isSelected: boolean;
}

interface YearSelectorProps {
  selectedYear: number | null;
  onSelectYear: (year: number) => void;
}

export default function YearSelector({ selectedYear, onSelectYear }: YearSelectorProps) {
  const years: YearOption[] = [
    { year: 1, label: "1st Year", semestersAvailable: "All 8 Semesters", isSelected: selectedYear === 1 },
    { year: 2, label: "2nd Year", semestersAvailable: "Sem 2-8", isSelected: selectedYear === 2 },
    { year: 3, label: "3rd Year", semestersAvailable: "Sem 3-8", isSelected: selectedYear === 3 },
    { year: 4, label: "4th Year", semestersAvailable: "Sem 4-8", isSelected: selectedYear === 4 },
  ];

  return (
    <div className="w-full">
      <div className="mb-8 text-center">
        <h2 className="mb-3 font-heading text-3xl font-semibold text-foreground">
          Select Your Current Year
        </h2>
        <p className="text-muted-foreground">
          Choose your academic year to view your personalized roadmap
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {years.map((yearOption) => (
          <Card
            key={yearOption.year}
            onClick={() => onSelectYear(yearOption.year)}
            className={`hover-elevate active-elevate-2 relative cursor-pointer overflow-visible transition-all duration-300 ${
              yearOption.isSelected
                ? "border-2 border-primary shadow-lg"
                : "border-card-border shadow-md hover:shadow-xl"
            }`}
            data-testid={`card-year-${yearOption.year}`}
          >
            <div className="p-6 text-center">
              {yearOption.isSelected && (
                <div className="absolute -right-2 -top-2 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white shadow-md">
                  <Check className="h-5 w-5" />
                </div>
              )}
              
              <div className="mb-4 text-6xl font-bold text-primary">
                {yearOption.year}
              </div>
              
              <h3 className="mb-2 font-heading text-xl font-semibold text-foreground">
                {yearOption.label}
              </h3>
              
              <Badge variant="secondary" className="text-xs">
                {yearOption.semestersAvailable}
              </Badge>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
