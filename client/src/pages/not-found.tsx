import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";
import { useLocation } from "wouter";

export default function NotFound() {
  const [, setLocation] = useLocation();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="text-center">
        <div className="mb-6">
          <h1 className="mb-2 font-heading text-9xl font-bold text-primary">404</h1>
          <h2 className="mb-3 font-heading text-3xl font-semibold text-foreground">
            Page Not Found
          </h2>
          <p className="text-lg text-muted-foreground">
            The page you're looking for doesn't exist.
          </p>
        </div>
        
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button
            onClick={() => setLocation("/")}
            size="lg"
            data-testid="button-go-home"
          >
            <Home className="mr-2 h-5 w-5" />
            Go Home
          </Button>
          <Button
            variant="outline"
            onClick={() => window.history.back()}
            size="lg"
            data-testid="button-go-back"
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            Go Back
          </Button>
        </div>
      </div>
    </div>
  );
}
