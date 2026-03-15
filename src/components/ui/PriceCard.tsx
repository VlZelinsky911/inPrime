import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import Button from './Button';

interface PriceCardProps {
  name: string;
  price: number;
  currency: string;
  period: string;
  features: string[];
  popular?: boolean;
  onSelect?: () => void;
  telegramLink?: string;
}

export const PriceCard = ({
  name,
  price,
  currency,
  period,
  features,
  popular = false,
  telegramLink,
}: PriceCardProps) => {
  return (
    <motion.div
      className={`relative w-full max-w-md bg-neutral-900/90 backdrop-blur-sm border-2 rounded-3xl p-8 flex flex-col transition-all duration-300 ${
        popular ? 'border-red-500 shadow-2xl shadow-red-500/20' : 'border-neutral-800'
      }`}
      whileHover={{ 
        y: -10,
        boxShadow: popular 
          ? '0 25px 50px -12px rgba(229, 57, 53, 0.4)'
          : '0 25px 50px -12px rgba(229, 57, 53, 0.2)'
      }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {/* Popular Badge */}
      {popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <span className="bg-red-500 text-white text-sm font-bold px-4 py-1 rounded-full uppercase tracking-wider">
            Популярний
          </span>
        </div>
      )}

      {/* Plan Name */}
      <h3 className="text-2xl font-bold text-center mb-4 text-white">
        {name}
      </h3>

      {/* Price */}
      <div className="text-center mb-6">
        <span className="text-5xl font-extrabold text-white">
          {currency}{price}
        </span>
        <span className="text-gray-400 text-lg ml-1">
          {period}
        </span>
      </div>

      {/* Divider */}
      <div className={`w-full h-px mb-6 ${popular ? 'bg-red-500' : 'bg-neutral-800'}`} />

      {/* Features */}
      <ul className="space-y-4 mb-8 grow">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-3">
            <div className={`w-5 h-5 rounded-full flex items-center justify-center ${
              popular ? 'bg-red-500' : 'bg-neutral-700'
            }`}>
              <Check className="w-3 h-3 text-white" />
            </div>
            <span className="text-gray-400">{feature}</span>
          </li>
        ))}
      </ul>

      {/* CTA Button */}
      <Button
        variant={popular ? 'primary' : 'outline'}
        size="lg"
        href={telegramLink}
        className="w-full"
      >
        Обрати план
      </Button>
    </motion.div>
  );
};

export default PriceCard;
