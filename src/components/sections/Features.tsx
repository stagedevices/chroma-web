import { motion } from 'framer-motion';
import { GlassCard } from '@/components/ui/GlassCard';
import { SectionHeading } from '@/components/ui/SectionHeading';

export const Features = () => {
  const features = [
    {
      icon: '⚡',
      title: 'Live Performance',
      description: 'Launch into a performance-oriented shell with stage-ready controls and reliable output.',
    },
    {
      icon: '🎨',
      title: 'Five Visual Modes',
      description: 'Color Shift, Prism Field, Tunnel Cels, Fractal Caustics, and Mandelbrot for diverse creative expressions.',
    },
    {
      icon: '🎯',
      title: 'Stage-Ready',
      description: 'Projector and external-display workflows supported from the start with clean program output.',
    },
    {
      icon: '🎛️',
      title: 'Professional Controls',
      description: 'Performance mode, audio calibration, and production settings for real-world workflows.',
    },
    {
      icon: '💾',
      title: 'Presets & Setlists',
      description: 'Capture and recall presets, manage setlists, and export your work with ease.',
    },
    {
      icon: '📱',
      title: 'iOS & Mac Catalyst',
      description: 'Native iOS app with Mac Catalyst support for the same powerful experience across platforms.',
    },
  ];

  return (
    <section id="features" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="Features"
          align="center"
          subtitle="Built for performance, designed for creators"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <GlassCard className="h-full">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
