import type { ReactNode } from "react";
import type { ThemeColor } from "@/shared/types/theme";
import clsx from "clsx";

interface CardProps {
  children: ReactNode;
  title?: string;
  description?: string;
  theme?: ThemeColor;
  variant?: "default" | "glass" | "gradient";
  hover?: boolean;
  onClick?: () => void;
  className?: string;
}

const themeGradients: Record<ThemeColor, string> = {
  ludic: "from-ludic-100 to-ludic-200",
  energy: "from-energy-100 to-energy-200",
  space: "from-space-100 to-space-200",
  retention: "from-retention-100 to-retention-200",
};

export function Card({
  children,
  title,
  description,
  theme,
  variant = "default",
  hover = false,
  onClick,
  className,
}: CardProps) {
  const isInteractive = !!onClick;

  return (
    <div
      className={clsx(
        "rounded-xl transition-all duration-300",
        variant === "default" && "bg-white p-6 shadow-md",
        variant === "glass" && "glass p-6",
        variant === "gradient" &&
          theme &&
          `bg-gradient-to-br ${themeGradients[theme]} p-6`,
        hover && "hover:-translate-y-1 hover:shadow-xl",
        isInteractive && "cursor-pointer active:scale-98",
        className,
      )}
      onClick={onClick}
      role={isInteractive ? "button" : undefined}
      tabIndex={isInteractive ? 0 : undefined}
    >
      {title && (
        <h3 className='font-display mb-2 text-xl font-bold'>{title}</h3>
      )}
      {description && <p className='mb-4 text-gray-600'>{description}</p>}
      {children}
    </div>
  );
}
