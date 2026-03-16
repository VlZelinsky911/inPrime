import { motion } from "framer-motion";
import { ChevronDown, ArrowRight } from "lucide-react";
import { Button } from "../components/ui";
import { SOCIAL_LINKS } from "../constants";
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
              <span className="text-white font-semibold">
                {t.hero.strong}
              </span>
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
              href={SOCIAL_LINKS.discord}
              className="min-w-[220px] group"
            >
              <svg
                className="w-5 h-5 shrink-0"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M19.27 5.33C17.94 4.71 16.5 4.26 15 4a.09.09 0 0 0-.07.03c-.18.33-.39.76-.53 1.09a16.09 16.09 0 0 0-4.8 0c-.14-.34-.35-.76-.54-1.09c-.01-.02-.04-.03-.07-.03c-1.5.26-2.93.71-4.27 1.33c-.01 0-.02.01-.03.02c-2.72 4.07-3.47 8.03-3.1 11.95c0 .02.01.04.03.05c1.8 1.32 3.53 2.12 5.24 2.65c.03.01.06 0 .07-.02c.4-.55.76-1.13 1.07-1.74c.02-.04 0-.08-.04-.09c-.57-.22-1.11-.48-1.64-.78c-.04-.02-.04-.08-.01-.11c.11-.08.22-.17.33-.25c.02-.02.05-.02.07-.01c3.44 1.57 7.15 1.57 10.55 0c.02-.01.05-.01.07.01c.11.09.22.17.33.26c.04.03.04.09-.01.11c-.52.31-1.07.56-1.64.78c-.04.01-.05.06-.04.09c.32.61.68 1.19 1.07 1.74c.03.01.06.02.09.01c1.72-.53 3.45-1.33 5.25-2.65c.02-.01.03-.03.03-.05c.44-4.53-.73-8.46-3.1-11.95c-.01-.01-.02-.02-.04-.02zM8.52 14.91c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.84 2.12-1.89 2.12zm6.97 0c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.83 2.12-1.89 2.12z" />
              </svg>
              <span>{t.hero.joinDiscord}</span>
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
