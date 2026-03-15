import { motion } from "framer-motion";
import { FEATURES } from "../constants";

// Feature item with zigzag layout
const FeatureItem = ({
  feature,
  index,
  isReversed,
}: {
  feature: (typeof FEATURES)[0];
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
          <div className="absolute -inset-1 bg-gradient-to-r from-red-500/20 to-red-500/0 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Card */}
          <div className="relative bg-neutral-900/80 border border-neutral-800 rounded-2xl overflow-hidden">
            {/* Red accent line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500 to-red-600" />

            {/* Discord icon placeholder */}
            <div className="p-8 flex flex-col items-center justify-center min-h-[200px]">
              <div className="w-16 h-16 bg-red-500/10 border border-red-500/30 rounded-xl flex items-center justify-center mb-4">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-8 h-8 text-red-500"
                >
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.36-.698.772-1.362 1.225-1.993a.076.076 0 0 0-.041-.107 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128c.12-.098.246-.198.373-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225.1993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z" />
                </svg>
              </div>
              <p className="text-gray-500 text-sm">
                Screenshot: {feature.title}
              </p>
              <p className="text-gray-600 text-xs mt-1">
                Upload screenshots to public/images/
              </p>
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
          <div className="flex-shrink-0">
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
  return (
    <section id="features" className="relative py-24 w-full bg-black">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-red-600/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-red-600/5 rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 bg-red-500/10 border border-red-500/20 rounded-full text-red-500 font-medium text-sm mb-6">
            What's inside
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Look at our <span className="text-red-500">Discord</span>
          </h2>
        </motion.div>

        {/* Features Zigzag List */}
        <div className="space-y-20 lg:space-y-32">
          {FEATURES.map((feature, index) => (
            <FeatureItem
              key={feature.id}
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
              Your benefits
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-white">
              What you get in <span className="text-red-500">InPrime</span>
            </h2>
            <p className="text-gray-500 mt-4">
              Everything you need for successful trading
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              {
                icon: "📈",
                title: "Trading Signals",
                desc: "Up-to-date signals with detailed analysis",
              },
              {
                icon: "📚",
                title: "Education",
                desc: "Video tutorials and strategy breakdowns",
              },
              {
                icon: "👥",
                title: "Community",
                desc: "Chat with professionals 24/7",
              },
              { icon: "📊", title: "Analytics", desc: "Daily market overview" },
            ].map((item, index) => (
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
