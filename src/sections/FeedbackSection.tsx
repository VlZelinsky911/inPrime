import { motion } from "framer-motion";
import Feedback1 from "../assets/feedback/1.jpg";
import Feedback2 from "../assets/feedback/2.jpg";
import Feedback3 from "../assets/feedback/3.jpg";
import Feedback4 from "../assets/feedback/4.jpg";
import Feedback5 from "../assets/feedback/5.jpg";
import Feedback6 from "../assets/feedback/6.jpg";
import Feedback7 from "../assets/feedback/7.jpg";
import Feedback8 from "../assets/feedback/8.jpg";
import Feedback9 from "../assets/feedback/9.jpg";
import Feedback10 from "../assets/feedback/10.jpg";
import Feedback11 from "../assets/feedback/11.jpg";
import Feedback12 from "../assets/feedback/12.jpg";
import Feedback13 from "../assets/feedback/13.jpg";
import { useI18n } from "../i18n";

const FEEDBACK_IMAGES = [
  Feedback1,
  Feedback2,
  Feedback3,
  Feedback4,
  Feedback5,
  Feedback6,
  Feedback7,
  Feedback8,
  Feedback9,
  Feedback10,
  Feedback11,
  Feedback12,
  Feedback13,
];

export const FeedbackSection = () => {
  const { t } = useI18n();

  return (
    <section id="feedback" className="relative py-24 w-full bg-black">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-0 w-80 h-80 bg-red-600/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-red-600/5 rounded-full blur-[180px]" />
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 bg-red-500/10 border border-red-500/20 rounded-full text-red-500 font-medium text-sm mb-4">
            {t.feedback.badge}
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-white">
            {t.feedback.titlePrefix}{" "}
            <span className="text-red-500">{t.feedback.titleAccent}</span>
          </h2>
          <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
            {t.feedback.description}
          </p>
        </motion.div>

        {/* Feedback Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {FEEDBACK_IMAGES.map((src, index) => (
            <motion.div
              key={index}
              className="group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (index % 6) * 0.05 }}
            >
              <div className="relative w-full overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900/80">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-linear-to-tr from-red-500/10 to-transparent transition-opacity duration-300 pointer-events-none" />
                <img
                  src={src}
                  alt={`${t.feedback.imageAlt} ${index + 1}`}
                  className="w-full h-auto object-cover block"
                  loading="lazy"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeedbackSection;

