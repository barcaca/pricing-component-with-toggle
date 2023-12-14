import cn from "@/utils/cn";
import { VariantProps, cva } from "class-variance-authority";
import { ButtonHTMLAttributes } from "react";

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  text: string;
  isProfessional?: boolean;
}

export function Button({
  text,
  variant,
  className,
  isProfessional,
  ...props
}: ButtonProps) {
  const actualVariant = isProfessional ? "secondary" : variant;
  return (
    <button
      type="button"
      className={cn(buttonVariants({ variant: actualVariant, className }))}
      {...props}
    >
      {text}
    </button>
  );
}
const buttonVariants = cva(
  [
    "inline-flex",
    "items-center",
    "justify-center",
    "py-4",
    "uppercase",
    "font-bold",
    "rounded-md",
    "border",
    "border-transparent",
    "focus:outline-none",
    "focus:ring-2",
    "focus:ring-offset-1",
    "focus:ring-indigo-500",
    "disabled:opacity-30",
  ],
  {
    variants: {
      variant: {
        primary: [
          "bg-gradient-to-r",
          "from-indigo-500",
          "to-indigo-600",
          "text-white",
          "hover:from-white",
          "hover:text-indigo-500",
          "hover:border-indigo-500",
        ],
        secondary: [
          "bg-white",
          "text-indigo-600",
          "hover:bg-gradient-to-r",
          "hover:from-indigo-500",
          "hover:to-indigo-600",
          "hover:border-white",
          "hover:text-white",
        ],
      },
    },
    compoundVariants: [],
    defaultVariants: {
      variant: "primary",
    },
  },
);
