import type { HugeiconsIconProps } from "@hugeicons/react";
import { HugeiconsIcon } from "@hugeicons/react";

type AppIconProps = Omit<
  HugeiconsIconProps,
  "size" | "color" | "strokeWidth"
> & {
  size?: number;
  strokeWidth?: number;
};

export function AppIcon({
  size = 20,
  strokeWidth = 1.8,
  className,
  ...props
}: AppIconProps) {
  return (
    <HugeiconsIcon
      size={size}
      color="currentColor"
      strokeWidth={strokeWidth}
      className={className}
      {...props}
    />
  );
}
