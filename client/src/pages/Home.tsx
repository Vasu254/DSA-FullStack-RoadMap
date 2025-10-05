import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import HeroSection from "@/components/HeroSection";
import YearSelector from "@/components/YearSelector";
import SemesterCard from "@/components/SemesterCard";
import MilestoneTimeline, { Milestone } from "@/components/MilestoneTimeline";
import SectionIllustration from "@/components/SectionIllustration";
import ProgressStats from "@/components/ProgressStats";
import ProgressTracker from "@/components/ProgressTracker";
import LearningPathBadge from "@/components/LearningPathBadge";
import { getSemestersForYear, getYearDescription } from "@/lib/roadmapData";
import { calculateOverallProgress, getMilestonesAchieved, ProgressData } from "@/lib/progressCalculations";
import { TrendingUp, Target, Award, Code2, BookOpen, ArrowLeft, Calendar } from "lucide-react";
import dsaImage from "@assets/generated_images/DSA_concepts_illustration_71d552ae.png";
import fullstackImage from "@assets/generated_images/Full-stack_architecture_illustration_73bd6b31.png";
import placementImage from "@assets/generated_images/Placement_success_celebration_b861064d.png";

export default function Home() {
  const [selectedYear, setSelectedYear] = useState<number | null>(null);
  const [progressData, setProgressData] = useState<ProgressData>({
    problemsSolved: 0,
    projectsBuilt: 0,
    semesterProgress: {}
  });
  
  const yearSelectorRef = useRef<HTMLDivElement>(null);
  const roadmapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const stored = localStorage.getItem('btechRoadmapProgress');
    if (stored) {
      try {
        setProgressData(JSON.parse(stored));
      } catch (e) {
        console.error('Failed to parse stored progress', e);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('btechRoadmapProgress', JSON.stringify(progressData));
  }, [progressData]);

  const handleGetStarted = () => {
    yearSelectorRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleYearSelect = (year: number) => {
    setSelectedYear(year);
    setTimeout(() => {
      roadmapRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 300);
  };

  const handleUpdateProblems = (value: number) => {
    setProgressData(prev => ({ ...prev, problemsSolved: value }));
  };

  const handleUpdateProjects = (value: number) => {
    setProgressData(prev => ({ ...prev, projectsBuilt: value }));
  };

  const handleUpdateSemesterProgress = (semester: number, progress: number) => {
    setProgressData(prev => ({
      ...prev,
      semesterProgress: { ...prev.semesterProgress, [semester]: progress }
    }));
  };

  const semesters = selectedYear ? getSemestersForYear(selectedYear) : [];
  const yearInfo = selectedYear ? getYearDescription(selectedYear) : null;
  
  const overallProgress = selectedYear ? calculateOverallProgress(progressData, selectedYear) : 0;
  const milestonesAchieved = getMilestonesAchieved(progressData.problemsSolved, progressData.projectsBuilt);

  const stats = [
    {
      icon: Code2,
      label: "Problems Solved",
      value: progressData.problemsSolved.toString(),
      color: "bg-chart-4"
    },
    {
      icon: Target,
      label: "Projects Built",
      value: progressData.projectsBuilt.toString(),
      color: "bg-chart-2"
    },
    {
      icon: TrendingUp,
      label: "Overall Progress",
      value: `${overallProgress}%`,
      color: "bg-chart-1"
    },
    {
      icon: Award,
      label: "Milestones",
      value: `${milestonesAchieved}/12`,
      color: "bg-chart-3"
    }
  ];

  const mockMilestones: Milestone[] = [
    {
      id: 1,
      semester: 2,
      title: "DSA Foundation Complete",
      description: "Complete arrays, strings, recursion, and OOP basics. Solve 50+ problems on LeetCode.",
      isCompleted: false,
      isMajor: false
    },
    {
      id: 2,
      semester: 4,
      title: "Full-Stack Project Delivered",
      description: "Build and deploy a complete full-stack application with authentication and CRUD operations.",
      isCompleted: false,
      isMajor: true
    },
    {
      id: 3,
      semester: 5,
      title: "Major Projects & Open Source",
      description: "Build 2 major resume-worthy projects and contribute to open source. Apply for internships.",
      isCompleted: false,
      isMajor: true
    },
    {
      id: 4,
      semester: 6,
      title: "Internship Secured",
      description: "Land summer internship at a tech company. Resume strong with 3-4 solid projects.",
      isCompleted: false,
      isMajor: true
    },
    {
      id: 5,
      semester: 7,
      title: "Placement Ready",
      description: "500+ DSA problems solved. Final capstone project complete. Offers incoming!",
      isCompleted: false,
      isMajor: true
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <BookOpen className="h-6 w-6 text-primary" />
            <span className="font-heading text-xl font-bold text-foreground">
              B.Tech Roadmap
            </span>
          </div>
          
          <div className="flex items-center gap-3">
            {selectedYear && (
              <>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setSelectedYear(null)}
                  data-testid="button-back-to-year-selection"
                >
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Change Year
                </Button>
                <Badge variant="default" className="bg-primary">
                  Year {selectedYear}
                </Badge>
              </>
            )}
          </div>
        </div>
      </header>

      <main>
        <section className="container mx-auto px-4 py-12">
          <HeroSection onGetStarted={handleGetStarted} />
        </section>

        <section ref={yearSelectorRef} className="container mx-auto px-4 py-16">
          <YearSelector selectedYear={selectedYear} onSelectYear={handleYearSelect} />
        </section>

        {selectedYear && yearInfo && (
          <>
            <section className="bg-gradient-to-r from-primary/10 via-chart-2/10 to-chart-3/10 py-12">
              <div className="container mx-auto px-4">
                <Card className="p-8">
                  <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                    <div className="flex-1">
                      <div className="mb-3 flex items-center gap-2">
                        <Calendar className="h-6 w-6 text-primary" />
                        <Badge variant="default" className="bg-primary">
                          {selectedYear === 1 && "All 8 Semesters"}
                          {selectedYear === 2 && "Semesters 3-8"}
                          {selectedYear === 3 && "Semesters 5-8"}
                          {selectedYear === 4 && "Semesters 7-8"}
                        </Badge>
                      </div>
                      <h1 className="mb-3 font-heading text-3xl font-bold text-foreground md:text-4xl">
                        {yearInfo.title}
                      </h1>
                      <p className="mb-2 text-lg text-muted-foreground">
                        {yearInfo.description}
                      </p>
                      <div className="mt-4">
                        <LearningPathBadge type="fullstack" label={yearInfo.focus} />
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </section>

            <section className="container mx-auto px-4 py-12">
              <div className="mb-8">
                <h2 className="mb-4 text-center font-heading text-2xl font-semibold text-foreground">
                  Track Your Progress
                </h2>
                <ProgressTracker
                  problemsSolved={progressData.problemsSolved}
                  projectsBuilt={progressData.projectsBuilt}
                  onUpdateProblems={handleUpdateProblems}
                  onUpdateProjects={handleUpdateProjects}
                />
              </div>
              
              <div className="mt-8">
                <ProgressStats stats={stats} />
              </div>
            </section>

            <section className="bg-muted/30 py-16">
              <div className="container mx-auto px-4">
                <SectionIllustration
                  imageSrc={dsaImage}
                  title="Master Data Structures & Algorithms"
                  description="Build a strong foundation in DSA to crack coding interviews at top tech companies. Progress from basics to advanced topics across all semesters."
                  side="right"
                />
              </div>
            </section>

            <section ref={roadmapRef} className="container mx-auto px-4 py-16">
              <div className="mb-8 text-center">
                <h2 className="mb-3 font-heading text-3xl font-semibold text-foreground md:text-4xl">
                  Your Semester Roadmap
                </h2>
                <p className="text-lg text-muted-foreground">
                  Follow this comprehensive plan semester by semester
                </p>
                <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
                  <LearningPathBadge type="dsa" label="DSA Focus" />
                  <LearningPathBadge type="fullstack" label="Full-Stack Development" />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                {semesters.map((semester) => (
                  <SemesterCard 
                    key={semester.semester} 
                    data={semester}
                    currentProgress={progressData.semesterProgress[semester.semester] || 0}
                    onUpdateProgress={handleUpdateSemesterProgress}
                  />
                ))}
              </div>
            </section>

            <section className="bg-muted/30 py-16">
              <div className="container mx-auto px-4">
                <SectionIllustration
                  imageSrc={fullstackImage}
                  title="Build Full-Stack Applications"
                  description="Learn modern web development with React, Node.js, and databases. Create portfolio-worthy projects that demonstrate your skills to recruiters."
                  side="left"
                />
              </div>
            </section>

            <section className="container mx-auto px-4 py-16">
              <MilestoneTimeline milestones={mockMilestones} />
            </section>

            <section className="bg-muted/30 py-16">
              <div className="container mx-auto px-4">
                <SectionIllustration
                  imageSrc={placementImage}
                  title="Achieve Placement Success"
                  description="With consistent effort and following this roadmap, you'll be well-prepared to crack off-campus placements and land your dream job in tech."
                  side="right"
                />
              </div>
            </section>

            <section className="container mx-auto px-4 py-16">
              <div className="rounded-2xl bg-gradient-to-r from-primary/10 via-chart-2/10 to-chart-3/10 p-8 text-center md:p-12">
                <h2 className="mb-4 font-heading text-3xl font-bold text-foreground md:text-4xl">
                  Ready to Start Your Journey?
                </h2>
                <p className="mb-8 text-lg text-muted-foreground">
                  Track your progress, build amazing projects, and achieve your placement goals
                </p>
                <div className="flex flex-wrap items-center justify-center gap-4">
                  <Button
                    size="lg"
                    onClick={() => roadmapRef.current?.scrollIntoView({ behavior: "smooth" })}
                    data-testid="button-view-roadmap"
                  >
                    View Full Roadmap
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={() => yearSelectorRef.current?.scrollIntoView({ behavior: "smooth" })}
                    data-testid="button-change-year"
                  >
                    Change Year
                  </Button>
                </div>
              </div>
            </section>
          </>
        )}

        {!selectedYear && (
          <section className="container mx-auto px-4 py-16">
            <div className="text-center">
              <h2 className="mb-4 font-heading text-2xl font-semibold text-foreground">
                Select your year above to get started
              </h2>
              <p className="text-muted-foreground">
                Your personalized roadmap awaits!
              </p>
            </div>
          </section>
        )}
      </main>

      <footer className="border-t border-border bg-muted/30 py-8">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>
            B.Tech Roadmap - Your complete guide to placement success through DSA and Full-Stack Development
          </p>
          <p className="mt-2">
            LeetCode consistency • GitHub portfolio • LinkedIn networking • Hackathons & Internships
          </p>
        </div>
      </footer>
    </div>
  );
}
