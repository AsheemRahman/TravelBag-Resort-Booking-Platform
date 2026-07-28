import * as React from "react";
import { cn } from "@/lib/utils";

export function Card({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-2xl bg-white shadow-soft transition-shadow duration-300 hover:shadow-card",
        className
      )}
      {...props}
    />
  );
}
