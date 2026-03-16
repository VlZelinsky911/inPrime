import { motion } from "framer-motion";
import { ChevronDown, ArrowRight } from "lucide-react";
import { Button } from "../components/ui";
import { useI18n } from "../i18n";

export const HeroSection = () => {
  const { t } = useI18n();

  const scrollToFeatures = () => {
    const element = document.querySelector("#features");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-black pt-32 pb-16"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Bottom Red Gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-linear-to-t from-red-900/20 via-red-950/10 to-transparent" />

        {/* Animated Red Glow */}
        <motion.div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[800px] h-[400px] bg-red-600/30 rounded-full blur-[150px]"
          animate={{
            opacity: [0.3, 0.5, 0.3],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Side Glows */}
        <div className="absolute top-1/3 left-0 w-64 h-64 bg-red-600/10 rounded-full blur-[100px]" />
        <div className="absolute top-1/3 right-0 w-64 h-64 bg-red-600/10 rounded-full blur-[100px]" />
      </div>

      {/* Content */}
      <div className="relative z-20 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          {/* Logo in Circle */}
          <motion.div
            className="mb-6 relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            {/* Glow behind logo */}
            <div className="absolute inset-0 bg-red-500/20 rounded-full blur-xl scale-110" />

            {/* Circle border with gradient */}
            <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full p-1 bg-linear-to-b from-red-500/50 to-transparent">
              <div className="w-full h-full rounded-full bg-black/80 flex items-center justify-center overflow-hidden border border-red-500/30">
                <img
                  src="/InPrimeLogo.png"
                  alt="INPRIME"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* Status Badge */}
          <motion.div
            className="flex items-center gap-2 mb-6"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
            <span className="text-gray-400 text-sm tracking-wide">
              {t.hero.badge}
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            className="text-6xl md:text-8xl font-black mb-2 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <span className="text-white">IN </span>
            <span className="text-red-500 italic">PRIME</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-xl md:text-2xl text-gray-500 tracking-[0.3em] uppercase mb-6 font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {t.hero.subtitle}
          </motion.p>

          {/* Description */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <p className="text-lg md:text-xl text-gray-400 mb-2">
              {t.hero.line1}
            </p>
            <p className="text-lg md:text-xl">
              <span className="text-white font-semibold">{t.hero.strong}</span>
              <span className="text-gray-400"> {t.hero.line2}</span>
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button
              variant="primary"
              size="lg"
              href="#contact"
              className="min-w-[220px] group"
            >
              <svg
                className="w-5 h-5 shrink-0"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
              </svg>
              <span>{t.hero.joinCta}</span>
              <ArrowRight className="w-5 h-5 shrink-0 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={scrollToFeatures}
              className="min-w-[180px] group"
            >
              <span>{t.hero.learnMore}</span>
              <ChevronDown className="w-4 h-4 shrink-0 group-hover:translate-y-1 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Bottom Decorative Line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-red-500/50 to-transparent" />
    </section>
  );
};

export default HeroSection;
