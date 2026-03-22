import React from 'react';
import { motion } from 'framer-motion';
import { GlassCard } from '@/components/ui/GlassCard';
import { Button } from '@/components/ui/Button';
import { Play } from 'lucide-react';

export const Demos = () => {
  const demos = [
    {
      id: 'color-shift',
      name: 'Color Shift',
      mode: 'Color Shift',
      description: 'Weighted audio-driven hue motion with directional cues',
    },
    {
      id: 'prism-field',
      name: 'Prism Field',
      mode: 'Prism Field',
      description: 'Facet-caustic refracted palette behavior',
    },
    {
      id: 'tunnel-cels',
      name: 'Tunnel Cels',
      mode: 'Tunnel Cels',
      description: 'Attack-spawned cel objects in pseudo-3D space',
    },
    {
      id: 'fractal-caustics',
      name: 'Fractal Caustics',
      mode: 'Fractal Caustics',
      description: 'Julia orbit-trap caustics with flow and attack pulses',
    },
    {
      id: 'mandelbrot',
      name: 'Mandelbrot',
      mode: 'Mandelbrot',
      description: 'Flight-traversed Mandelbrot domain coloring',
    },
    {
      id: 'feedback',
      name: 'Feedback',
      mode: 'Color Shift',
      description: 'Front-camera sampled color driving abstract field rendering',
    },
  ];

  return (
    <section id="demos" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">
            Visual Modes
          </h2>
          <p className="text-gray-400 text-lg">
            Explore our suite of audio-reactive visual instruments
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {demos.map((demo, index) => (
            <motion.div
              key={demo.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <GlassCard className="group relative overflow-hidden h-64">
                {/* Placeholder gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/50 to-purple-900/50" />

                <div className="relative z-10 h-full flex flex-col justify-between p-6">
                  <div>
                    <h3 className="text-xl font-bold mb-2">{demo.name}</h3>
                    <p className="text-sm text-gray-400">{demo.mode}</p>
                  </div>

                  <p className="text-sm text-gray-300 mb-4 line-clamp-2">
                    {demo.description}
                  </p>

                  <Button
                    variant="secondary"
                    size="sm"
                    className="w-full"
                    onClick={() => {
                      // TODO: Add video modal when you have demo content
                      console.log(`Open demo: ${demo.id}`);
                    }}
                  >
                    <Play className="w-4 h-4 mr-2" />
                    Watch Demo
                  </Button>
                </div>

                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};