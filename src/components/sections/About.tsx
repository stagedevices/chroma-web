import React from 'react';
import { motion } from 'framer-motion';
import { GlassCard } from '@/components/ui/GlassCard';
import { SectionHeading } from '@/components/ui/SectionHeading';

export const About = () => {
  return (
    <section id="about" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionHeading
              title="About Chroma"
              align="left"
            />

            <div className="space-y-6 text-gray-300 leading-relaxed">
              {/* TODO: Add your story/vision here */}
              <p>
                Chroma is a live audio-reactive visual instrument for performers,
                directors, and capture/render workflows on Apple platforms.
              </p>

              <p>
                It is not a VJ clip launcher or a general-purpose editor.
                Chroma should feel like a coherent instrument with one primary
                surface, disciplined control surfaces, and reliable stage output.
              </p>

              <p>
                Built for stage performance, Chroma keeps performance operation
                sparse, legible, and stage-ready while supporting projector and
                external-display workflows from the start.
              </p>

              <p>
                Our mission is to make one serious audio-reactive visual engine
                possible. We're focused on durability, operator confidence, and
                stage readiness over novelty.
              </p>
            </div>
          </motion.div>

          {/* Image/Visual Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-first lg:order-last"
          >
            <GlassCard className="aspect-square flex items-center justify-center bg-gradient-to-br from-indigo-900/50 to-purple-900/50">
              {/* TODO: Add your app screenshot here */}
              <div className="text-center p-8">
                <div className="text-6xl mb-4">🎨</div>
                <p className="text-gray-400">
                  App Interface
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  Placeholder for app screenshot
                </p>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
};