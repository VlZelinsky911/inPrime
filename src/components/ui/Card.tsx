import { ReactNode } from "react";
import { motion } from "framer-motion";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export const Card = ({ children, className = "", hover = true }: CardProps) => {
  return (
    <motion.div
      className={`
        bg-inprime-dark/80
        backdrop-blur-sm
        border border-inprime-charcoal
        rounded-2xl
        overflow-hidden
        ${hover ? "hover:border-inprime-red/50 hover:shadow-lg hover:shadow-inprime-red/10" : ""}
        transition-all duration-300
        ${className}
      `}
      whileHover={hover ? { y: -5, scale: 1.02 } : undefined}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
};

export default Card;
