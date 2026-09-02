import * as React from "react";
import { cn } from "@/lib/utils";

function Card({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card"
      className={cn(
        "rounded-xl border border-hairline bg-surface/60 backdrop-blur-sm",
        className
      )}
      {...props}
    />
  );
}

export { Card };
