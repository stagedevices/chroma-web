import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Github } from 'lucide-react';
import { cn } from '@/lib/cn';

export const Header = () => {
  const navItems = [
    { label: 'Features', section: 'features' as const },
    { label: 'About', section: 'about' as const },
    { label: 'Community', section: 'community' as const },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 glass-card border-b-0 border-t-0 border-x-0"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold gradient-text">
            Chroma
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
             <button
                key={item.section}
                                     type="button"
                onClick={() => window.scrollTo({
                  top: document.getElementById(item.section)?.offsetTop || 0,
                  behavior: 'smooth'
                })}
                className={cn('text-sm font-medium transition-colors text-gray-400 hover:text-white')}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* GitHub Link */}
          <a
            href="https://github.com/stagedevices/chroma"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full glass-button"
          >
            <Github className="w-5 h-5" />
          </a>
        </div>
      </div>
    </motion.header>
  );
};
