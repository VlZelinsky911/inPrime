import { motion } from "framer-motion";
import SupportImage from "../assets/1support.jpg";
import InprimeCampingImage from "../assets/2. Inprime-camping.jpg";
import RecordingsImage from "../assets/3. Recordings of each of our streams.jpg";
import MorningUpdatesImage from "../assets/4. Morning updates from our team.jpg";
import { useI18n } from "../i18n";

const FEATURE_SCREENSHOTS = [
  { image: SupportImage, alt: "Support" },
  { image: InprimeCampingImage, alt: "Inprime-camping" },
  { image: RecordingsImage, alt: "Stream recordings" },
  { image: MorningUpdatesImage, alt: "Morning updates" },
];

// Feature item with zigzag layout
const FeatureItem = ({
  feature,
  index,
  isReversed,
}: {
  feature: { title: string; description: string };
  index: number;
  isReversed: boolean;
}) => {
  return (
    <motion.div
      className={`flex flex-col ${isReversed ? "lg:flex-row-reverse" : "lg:flex-row"} items-center gap-8 lg:gap-16`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      {/* Screenshot Card */}
      <div className={`flex-1 w-full ${isReversed ? "lg:pl-8" : "lg:pr-8"}`}>
        <motion.div
          className="relative group"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          {/* Glow effect */}
          <div className="absolute -inset-1 bg-linear-to-r from-red-500/20 to-red-500/0 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Card */}
          <div className="relative bg-neutral-900/80 border border-neutral-800 rounded-2xl overflow-hidden">
            {/* Red accent line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-red-500 to-red-600" />

            {/* Screenshot */}
            <div className="w-full h-full min-h-[220px]">
              <img
                src={FEATURE_SCREENSHOTS[index]?.image}
                alt={FEATURE_SCREENSHOTS[index]?.alt ?? feature.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Text Content */}
      <div
        className={`flex-1 w-full ${isReversed ? "lg:pr-8 lg:text-right" : "lg:pl-8"}`}
      >
        <div
          className={`flex items-start gap-4 ${isReversed ? "lg:flex-row-reverse" : ""}`}
        >
          {/* Number Badge */}
          <div className="shrink-0">
            <span className="inline-flex items-center justify-center w-8 h-8 bg-red-500/10 border border-red-500/30 rounded-lg text-red-500 font-bold text-sm">
              {index + 1}
            </span>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-white mb-3">
              {feature.title}
            </h3>
            <p className="text-gray-400 leading-relaxed">
              {feature.description}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export const FeaturesSection = () => {
  const { t } = useI18n();
  const { badge, titlePrefix, titleAccent, items, benefits } = t.features;
  const showHeader = badge || titlePrefix || titleAccent;

  return (
    <section id="features" className="relative py-24 w-full bg-black">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-red-600/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-red-600/5 rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        {showHeader && (
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {badge && (
              <span className="inline-block px-4 py-1.5 bg-red-500/10 border border-red-500/20 rounded-full text-red-500 font-medium text-sm mb-6">
                {badge}
              </span>
            )}

            {(titlePrefix || titleAccent) && (
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                {titlePrefix}{" "}
                <span className="text-red-500">{titleAccent}</span>
              </h2>
            )}
          </motion.div>
        )}

        {/* Features Zigzag List */}
        <div className="space-y-20 lg:space-y-32">
          {items.map((feature, index) => (
            <FeatureItem
              key={index}
              feature={feature}
              index={index}
              isReversed={index % 2 === 1}
            />
          ))}
        </div>

        {/* Bottom Section - What you get */}
        <motion.div
          className="mt-32"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-red-500/10 border border-red-500/20 rounded-full text-red-500 font-medium text-sm mb-6">
              {benefits.badge}
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-white">
              {benefits.title}{" "}
              <span className="text-red-500">
                {benefits.titleAccent}
              </span>
            </h2>
            <p className="text-gray-500 mt-4">{benefits.subtitle}</p>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {benefits.items.map((item, index) => (
              <motion.div
                key={index}
                className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-6 text-center hover:border-red-500/30 transition-colors duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="w-12 h-12 bg-red-500/10 border border-red-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">{item.icon}</span>
                </div>
                <h4 className="text-white font-semibold mb-2 text-sm">
                  {item.title}
                </h4>
                <p className="text-gray-500 text-xs">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
