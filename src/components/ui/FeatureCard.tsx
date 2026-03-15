import { motion } from 'framer-motion';

interface FeatureCardProps {
  title: string;
  description: string;
  image: string;
  index: number;
}

export const FeatureCard = ({ title, description, image, index }: FeatureCardProps) => {
  return (
    <motion.div
      className="group w-full max-w-sm bg-neutral-900/80 backdrop-blur-sm border border-neutral-800 rounded-2xl overflow-hidden hover:border-red-500/50 transition-all duration-500"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
    >
      {/* Image Container */}
      <div className="relative h-48 overflow-hidden bg-neutral-800">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-neutral-900 z-10" />
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          onError={(e) => {
            (e.target as HTMLImageElement).src = `https://via.placeholder.com/400x200/1A1A1A/E53935?text=${encodeURIComponent(title)}`;
          }}
        />
        <div className="absolute inset-0 bg-red-500/0 group-hover:bg-red-500/10 transition-colors duration-500 z-5" />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-3 text-white group-hover:text-red-500 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-400 leading-relaxed">
          {description}
        </p>
      </div>

      {/* Bottom Accent Line */}
      <div className="h-1 w-0 group-hover:w-full bg-gradient-to-r from-red-500 to-red-400 transition-all duration-500" />
    </motion.div>
  );
};

export default FeatureCard;
