import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { motion } from 'framer-motion';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  icon?: ReactNode;
}

export const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  icon,
  className = '',
  ...props
}: ButtonProps) => {
  const baseStyles = 'inline-flex items-center justify-center gap-2 font-semibold uppercase tracking-wider rounded-lg transition-all duration-300 cursor-pointer';

  const variants = {
    primary: 'bg-red-500 hover:bg-red-600 text-white shadow-lg hover:shadow-red-500/40 hover:scale-105',
    secondary: 'bg-neutral-800 hover:bg-neutral-700 text-white border border-neutral-700 hover:border-red-500',
    outline: 'bg-transparent text-red-500 hover:text-white border-2 border-red-500 hover:bg-red-500',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const combinedStyles = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={combinedStyles}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {icon && <span>{icon}</span>}
        {children}
      </motion.a>
    );
  }

  return (
    <button
      className={combinedStyles}
      {...props}
    >
      {icon && <span>{icon}</span>}
      {children}
    </button>
  );
};

export default Button;
