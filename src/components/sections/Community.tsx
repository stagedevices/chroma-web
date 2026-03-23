import { motion } from 'framer-motion';
import { GlassCard } from '@/components/ui/GlassCard';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Github, MessageSquare, Mail } from 'lucide-react'; 

export const Community = () => {
  return (
    <section id="community" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="Join the Community"
          align="center"
          subtitle="Connect, share, and contribute"
        />

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* GitHub */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <GlassCard className="h-full flex items-center gap-6 p-6">
                <div className="p-4 rounded-full bg-white/10">
                  <Github className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">GitHub</h3>
                  <p className="text-gray-400 mb-4">
                    Star the repo, report bugs, and contribute to the project.
                  </p>
                  <a
                    href="https://github.com/stagedevices/chroma"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-chroma-accent hover:text-chroma-accentHover transition-colors text-sm font-medium"
                  >
                    Visit Repository →
                  </a>
                </div>
              </GlassCard>
            </motion.div>

            {/* Feature Requests */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <GlassCard className="h-full flex items-center gap-6 p-6">
                <div className="p-4 rounded-full bg-white/10">
                  <MessageSquare className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Feature Requests</h3>
                  <p className="text-gray-400 mb-4">
                    Got ideas? Suggest new features or workflows for Chroma.
                  </p>
                  <a
                    href="https://github.com/stagedevices/chroma/issues?q=is%3Aissue+is%3Aopen+label%3A%22feature+request%22"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-chroma-accent hover:text-chroma-accentHover transition-colors text-sm font-medium"
                  >
                    Suggest a Feature →
                  </a>
                </div>
              </GlassCard>
            </motion.div>

            {/* Issues */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <GlassCard className="h-full flex items-center gap-6 p-6">
                <div className="p-4 rounded-full bg-white/10">
                  <MessageSquare className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Report Bugs</h3>
                  <p className="text-gray-400 mb-4">
                    Found an issue? Help us make Chroma better by reporting it.
                  </p>
                  <a
                    href="https://github.com/stagedevices/chroma/issues"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-chroma-accent hover:text-chroma-accentHover transition-colors text-sm font-medium"
                  >
                    Report an Issue →
                  </a>
                </div>
              </GlassCard>
            </motion.div>

            {/* Contact */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <GlassCard className="h-full flex items-center gap-6 p-6">
                <div className="p-4 rounded-full bg-white/10">
                  <Mail className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Contact</h3>
                  <p className="text-gray-400 mb-4">
                    Have questions or want to get in touch? Reach out directly.
                  </p>
                  {/* TODO: Add your email */}
                  <a
                    href="mailto:hello@chroma.app"
                    className="text-chroma-accent hover:text-chroma-accentHover transition-colors text-sm font-medium"
                  >
                    Get in Touch →
                  </a>
                </div>
              </GlassCard>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
