import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '../components/ui';
import { SOCIAL_LINKS } from '../constants';

// Telegram SVG Icon Component
const TelegramIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
  </svg>
);

export const ContactSection = () => {
  return (
    <section
      id="contact"
      className="relative py-24 w-full bg-black"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[1000px] h-[500px] bg-red-600/20 rounded-full blur-[200px]" />
      </div>

      {/* Top border line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neutral-800 to-transparent" />

      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="relative overflow-hidden rounded-3xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Card background with gradient border effect */}
          <div className="absolute inset-0 bg-gradient-to-b from-red-500/20 via-transparent to-transparent" />
          <div className="absolute inset-[1px] bg-neutral-900/95 rounded-3xl" />
          
          {/* Content */}
          <div className="relative p-8 md:p-16 text-center">
            {/* Floating Telegram icons - hidden on mobile */}
            <div className="hidden md:block absolute top-8 left-8 opacity-20">
              <TelegramIcon className="w-12 h-12 text-red-500" />
            </div>
            <div className="hidden md:block absolute bottom-8 right-8 opacity-20">
              <TelegramIcon className="w-16 h-16 text-red-500" />
            </div>

            {/* Telegram Icon */}
            <motion.div
              className="relative inline-flex items-center justify-center mb-8"
              whileHover={{ scale: 1.1 }}
            >
              {/* Glow */}
              <div className="absolute inset-0 bg-red-500/30 rounded-2xl blur-xl" />
              
              <div className="relative w-20 h-20 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center shadow-2xl shadow-red-500/30">
                <TelegramIcon className="w-10 h-10 text-white" />
              </div>
            </motion.div>

            {/* Title */}
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Ready <span className="text-red-500">to join</span> ?
            </h2>

            {/* Description */}
            <p className="text-lg text-gray-400 mb-10 max-w-lg mx-auto">
              Write to us on Telegram to subscribe. 
              Our team will help you with all your questions.
            </p>

            {/* CTA Button + Badge Row */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  variant="primary"
                  size="lg"
                  href={SOCIAL_LINKS.telegram}
                  className="group px-10"
                >
                  <TelegramIcon className="w-5 h-5 shrink-0" />
                  <span>WRITE TO TELEGRAM</span>
                  <ArrowRight className="w-5 h-5 shrink-0 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </motion.div>

              {/* Response time badge */}
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-2 bg-neutral-800/50 border border-neutral-700 rounded-full h-[52px]"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-sm text-gray-400">We respond within 5 minutes</span>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
