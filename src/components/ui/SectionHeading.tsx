import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/cn';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  subtitle,
  align = 'left',
  className
}) => {
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left';

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6 }}
      className={cn(alignClass, 'mb-12 md:mb-16', className)}
    >
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};