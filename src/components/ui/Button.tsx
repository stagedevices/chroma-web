import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/cn';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  className?: string;
  onClick?: () => void;
  as?: 'button' | 'a';
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  className,
  onClick,
  as = 'button'
}) => {
  const baseStyles = 'inline-flex items-center justify-center rounded-full font-medium transition-all duration-300';
  const variants = {
    primary: 'bg-chroma-accent hover:bg-chroma-accentHover text-white shadow-lg shadow-chroma-accent/30',
    secondary: 'bg-chroma-glass/20 hover:bg-chroma-glass/30 border border-chroma-glassBorder',
    ghost: 'hover:bg-chroma-glass/20 text-gray-300 hover:text-white'
  };
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  const Component = as;

  return (
    <Component
      as={as === 'button' ? 'button' : 'a'}
      href={href}
      onClick={onClick}
      className={cn(
        baseStyles,
        variants[variant],
        sizes[size],
        className
      )}
    >
      <motion.span
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-full"
      >
        {children}
      </motion.span>
    </Component>
  );
};