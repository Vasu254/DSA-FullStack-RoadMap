interface SectionIllustrationProps {
  imageSrc: string;
  title: string;
  description: string;
  side?: "left" | "right";
}

export default function SectionIllustration({ 
  imageSrc, 
  title, 
  description, 
  side = "right" 
}: SectionIllustrationProps) {
  return (
    <div className={`flex flex-col gap-8 items-center ${
      side === "left" ? "md:flex-row-reverse" : "md:flex-row"
    }`}>
      <div className="flex-1">
        <img
          src={imageSrc}
          alt={title}
          className="h-auto w-full rounded-xl object-cover shadow-lg"
        />
      </div>
      <div className="flex-1 text-center md:text-left">
        <h2 className="mb-4 font-heading text-3xl font-semibold text-foreground md:text-4xl">
          {title}
        </h2>
        <p className="text-lg text-muted-foreground">
          {description}
        </p>
      </div>
    </div>
  );
}
