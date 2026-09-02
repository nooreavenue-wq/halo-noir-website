import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-3 py-1 font-mono-label text-[0.625rem] uppercase",
  {
    variants: {
      variant: {
        default: "border-champagne/40 text-champagne bg-champagne/5",
        cherry: "border-cherry-2/60 text-[#e8a2b0] bg-cherry/10",
        outline: "border-hairline text-ivory-dim",
        solid: "border-transparent bg-champagne text-obsidian",
      },
    },
    defaultVariants: { variant: "default" },
  }
);

function Badge({
  className,
  variant,
  ...props
}: React.ComponentProps<"span"> & VariantProps<typeof badgeVariants>) {
  return <span className={cn(badgeVariants({ variant, className }))} {...props} />;
}

export { Badge };
