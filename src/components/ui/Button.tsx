import { motion } from 'framer-motion';
import { cn } from '@/lib/cn';
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';


type CommonProps = {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
};

type ButtonAsButtonProps =
  CommonProps &
  { href?: undefined } &
  ButtonHTMLAttributes<HTMLButtonElement>;

type ButtonAsAnchorProps =
  CommonProps &
  { href: string } &
  AnchorHTMLAttributes<HTMLAnchorElement>;

export type ButtonProps = ButtonAsButtonProps | ButtonAsAnchorProps;

export const Button = (props: ButtonProps) => {
  const { children, variant = 'primary', size = 'md', className, ...rest } = props;  const baseStyles = 'inline-flex items-center justify-center rounded-full font-medium transition-all duration-300';
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
    const classes = cn(baseStyles, variants[variant], sizes[size], className);
    
      if ('href' in rest && typeof rest.href === 'string') {
        return (
          <a {...rest} className={classes}>
        <motion.span whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full">
              {children}
            </motion.span>
          </a>
        );
      }
    
      return (
        <button {...rest} className={classes}>
      <motion.span
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-full"
      >
        {children}
      </motion.span>
              </button>
  );
};
