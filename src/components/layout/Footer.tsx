import React from 'react';
import { Github, Mail } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="glass-card border-t border-white/10 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold gradient-text">Chroma</span>
            <span className="text-gray-500 text-sm">© 2026</span>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://github.com/stagedevices/chroma/issues"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
            >
              <Github className="w-5 h-5" />
              <span className="text-sm">Issues</span>
            </a>

            <a
              href="https://github.com/stagedevices/chroma/issues?q=is%3Aissue+is%3Aopen+label%3A%22feature+request%22"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
            >
              <Mail className="w-5 h-5" />
              <span className="text-sm">Feature Requests</span>
            </a>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/stagedevices/chroma"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full glass-button"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};