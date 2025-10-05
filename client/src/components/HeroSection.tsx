import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import heroImage from "@assets/generated_images/Students_coding_together_hero_10be4059.png";

interface HeroSectionProps {
  onGetStarted: () => void;
}

export default function HeroSection({ onGetStarted }: HeroSectionProps) {
  return (
    <div className="relative h-96 w-full overflow-hidden rounded-2xl">
      <img
        src={heroImage}
        alt="Students learning and coding"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/80 via-indigo-900/60 to-transparent" />
      
      <div className="relative flex h-full flex-col items-center justify-center px-4 text-center text-white">
        <h1 className="mb-4 font-heading text-5xl font-bold leading-tight md:text-6xl">
          Your Journey to Placement Success
        </h1>
        <p className="mb-8 max-w-2xl text-lg text-white/90 md:text-xl">
          Complete semester-wise roadmap for B.Tech students to crack off-campus opportunities through DSA and Full-Stack Development
        </p>
        
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button
            onClick={onGetStarted}
            size="lg"
            className="backdrop-blur-md bg-white/20 hover:bg-white/30 border border-white/40 text-white font-medium"
            data-testid="button-get-started"
          >
            Get Started
            <ChevronRight className="ml-2 h-5 w-5" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="backdrop-blur-md bg-white/10 hover:bg-white/20 border border-white/40 text-white font-medium"
            data-testid="button-learn-more"
          >
            Learn More
          </Button>
        </div>
      </div>
    </div>
  );
}
