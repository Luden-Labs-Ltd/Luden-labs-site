import type { InputHTMLAttributes } from "react";
import { forwardRef } from "react";
import clsx from "clsx";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  fullWidth?: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, fullWidth = false, className, ...props }, ref) => {
    return (
      <div className={clsx("flex flex-col gap-1", fullWidth && "w-full")}>
        {label && (
          <label className='text-sm font-medium text-gray-700'>{label}</label>
        )}
        <input
          ref={ref}
          className={clsx(
            "rounded-lg border px-4 py-2 transition-all duration-200",
            "focus:border-transparent focus:ring-2 focus:ring-blue-500 focus:outline-none",
            error
              ? "border-red-500 focus:ring-red-500"
              : "border-gray-300 hover:border-gray-400",
            "disabled:cursor-not-allowed disabled:bg-gray-100",
            className,
          )}
          {...props}
        />
        {error && <span className='text-sm text-red-500'>{error}</span>}
      </div>
    );
  },
);

Input.displayName = "Input";
