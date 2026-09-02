import { cn } from "@/lib/utils";
import { Reveal } from "./reveal";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <Reveal
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="font-display text-3xl sm:text-4xl md:text-5xl mt-3 text-balance">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-ivory-dim text-sm sm:text-base leading-relaxed">
          {description}
        </p>
      )}
    </Reveal>
  );
}
