import { cn } from "@/utils/clsx";
import { cva } from "class-variance-authority";
import { Icon } from "lucide-react";

const iconWrapperVariants = cva(
  // Base styles: จัดการ Alignment และบังคับให้ <svg> ข้างในขยายเต็มขนาด Wrapper เสมอ
  "inline-flex items-center justify-center shrink-0 transition-colors [&>svg]:w-full [&>svg]:h-full [&>svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "text-current",
        primary: "text-blue-600 dark:text-blue-400",
        secondary: "text-gray-600 dark:text-gray-300",
        muted: "text-gray-400 dark:text-gray-500",
        danger: "text-red-500 dark:text-red-400",
        success: "text-emerald-500 dark:text-emerald-400",
      },
      size: {
        sm: "w-3 h-3", // 12px
        md: "w-6 h-6", // 24px (ขนาดปกติ)
        lg: "w-8 h-8", // 32px
        // 🌟 Responsive size: 12px บน Mobile -> 24px บน Desktop (md: 768px+)
        responsive: "w-3 h-3 md:w-6 md:h-6",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  },
);

export default function IconWrapper({
  icon: Icon,
  variant,
  size,
  className,
  ...props
}) {
  return (
    <div
      className={cn(iconWrapperVariants({ variant, size }), className)}
      {...props}
    >
      <Icon />
    </div>
  );
}
