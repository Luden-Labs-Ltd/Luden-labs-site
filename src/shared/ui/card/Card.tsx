import type { ReactNode } from 'react';
import type { ThemeColor } from '@/shared/types/theme';
import clsx from 'clsx';

interface CardProps {
  children: ReactNode;
  title?: string;
  description?: string;
  theme?: ThemeColor;
  variant?: 'default' | 'glass' | 'gradient';
  hover?: boolean;
  onClick?: () => void;
  className?: string;
}

const themeGradients: Record<ThemeColor, string> = {
  ludic: 'from-ludic-100 to-ludic-200',
  energy: 'from-energy-100 to-energy-200',
  space: 'from-space-100 to-space-200',
  retention: 'from-retention-100 to-retention-200',
};

export function Card({
  children,
  title,
  description,
  theme,
  variant = 'default',
  hover = false,
  onClick,
  className,
}: CardProps) {
  const isInteractive = !!onClick;

  return (
    <div
      className={clsx(
        'rounded-xl transition-all duration-300',
        variant === 'default' && 'bg-white shadow-md p-6',
        variant === 'glass' && 'glass p-6',
        variant === 'gradient' && theme && `bg-gradient-to-br ${themeGradients[theme]} p-6`,
        hover && 'hover:shadow-xl hover:-translate-y-1',
        isInteractive && 'cursor-pointer active:scale-98',
        className
      )}
      onClick={onClick}
      role={isInteractive ? 'button' : undefined}
      tabIndex={isInteractive ? 0 : undefined}
    >
      {title && (
        <h3 className="text-xl font-bold mb-2 font-display">{title}</h3>
      )}
      {description && (
        <p className="text-gray-600 mb-4">{description}</p>
      )}
      {children}
    </div>
  );
}

