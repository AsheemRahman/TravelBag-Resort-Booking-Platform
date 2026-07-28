import { cn } from "@/lib/utils";

export function ContourDivider({
  flip = false,
  tone = "forest",
  className,
}: {
  flip?: boolean;
  tone?: "forest" | "mist" | "white";
  className?: string;
}) {
  const strokeColor =
    tone === "forest" ? "#123B2E" : tone === "mist" ? "#EAF0EC" : "#FFFFFF";

  return (
    <div className={cn("contour-divider", flip && "rotate-180", className)} aria-hidden="true">
      <svg viewBox="0 0 1440 64" preserveAspectRatio="none" fill="none">
        <path
          d="M0 40 C 180 10, 340 55, 520 30 S 900 5, 1080 35 S 1320 15, 1440 32"
          stroke={strokeColor}
          strokeOpacity="0.25"
          strokeWidth="1.5"
        />
        <path
          d="M0 50 C 200 20, 360 60, 540 38 S 920 15, 1100 45 S 1330 25, 1440 42"
          stroke={strokeColor}
          strokeOpacity="0.4"
          strokeWidth="1.5"
        />
        <path
          d="M0 58 C 220 30, 380 64, 560 46 S 940 25, 1120 52 S 1340 34, 1440 50"
          stroke={strokeColor}
          strokeOpacity="0.6"
          strokeWidth="1.5"
        />
      </svg>
    </div>
  );
}
