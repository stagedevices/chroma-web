import { motion } from 'framer-motion';
import { cn } from '@/lib/cn';
import type { ReactNode } from 'react';

interface GlassCardProps {
    children: ReactNode;
  className?: string;
  hover?: boolean;
}

export const GlassCard = ({
    children,
    className,
    hover = false
}: GlassCardProps) => {
    return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={cn(
        'glass-card rounded-2xl p-6 md:p-8',
        hover && 'hover:scale-[1.02] transition-transform duration-300',
        className
      )}
    >
      {children}
    </motion.div>
  );
};
