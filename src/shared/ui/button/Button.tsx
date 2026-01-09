import type { ButtonHTMLAttributes, ReactNode } from "react";
import type { ThemeColor } from "@/shared/types/theme";
import clsx from "clsx";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  theme?: ThemeColor;
  fullWidth?: boolean;
  isLoading?: boolean;
}

const themeClasses: Record<ThemeColor, string> = {
  ludic: "bg-ludic-500 hover:bg-ludic-600 text-white",
  energy: "bg-energy-500 hover:bg-energy-600 text-white",
  space: "bg-space-500 hover:bg-space-600 text-white",
  retention: "bg-retention-500 hover:bg-retention-600 text-white",
};

const variantClasses = {
  primary: "bg-blue-600 hover:bg-blue-700 text-white",
  secondary: "bg-gray-200 hover:bg-gray-300 text-gray-900",
  outline: "border-2 border-current bg-transparent hover:bg-gray-50",
  ghost: "bg-transparent hover:bg-gray-100",
};

const sizeClasses = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export function Button({
  children,
  variant = "primary",
  size = "md",
  theme,
  fullWidth = false,
  isLoading = false,
  className,
  disabled,
  ...props
}: ButtonProps) {
  return (
    <button
      className={clsx(
        "rounded-lg font-medium transition-all duration-200",
        "active:scale-95 disabled:cursor-not-allowed disabled:opacity-50",
        "focus:ring-2 focus:ring-offset-2 focus:outline-none",
        theme ? themeClasses[theme] : variantClasses[variant],
        sizeClasses[size],
        fullWidth && "w-full",
        isLoading && "cursor-wait",
        className,
      )}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <span className='flex items-center justify-center gap-2'>
          <svg className='h-5 w-5 animate-spin' viewBox='0 0 24 24'>
            <circle
              className='opacity-25'
              cx='12'
              cy='12'
              r='10'
              stroke='currentColor'
              strokeWidth='4'
              fill='none'
            />
            <path
              className='opacity-75'
              fill='currentColor'
              d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
            />
          </svg>
          Loading...
        </span>
      ) : (
        children
      )}
    </button>
  );
}
