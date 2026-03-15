import { motion } from 'framer-motion';
import { Check, Zap } from 'lucide-react';
import { Button } from '../components/ui';
import { PRICING_PLANS, SOCIAL_LINKS } from '../constants';

export const PricingSection = () => {
  return (
    <section
      id="pricing"
      className="relative py-24 w-full bg-black"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-600/5 rounded-full blur-[200px]" />
      </div>

      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 bg-red-500/10 border border-red-500/20 rounded-full text-red-500 font-medium text-sm mb-6">
            Pricing
          </span>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Choose your <span className="text-red-500">plan</span>
          </h2>
          
          <p className="text-lg text-gray-400 max-w-xl mx-auto">
            Simple and transparent pricing with no hidden fees
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {PRICING_PLANS.map((plan, index) => (
            <motion.div
              key={plan.id}
              className={`relative rounded-2xl overflow-hidden ${
                plan.popular 
                  ? 'bg-gradient-to-b from-red-500/20 to-neutral-900/80 border-2 border-red-500/50' 
                  : 'bg-neutral-900/60 border border-neutral-800'
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0 bg-red-500 text-white text-center py-2 text-sm font-semibold flex items-center justify-center gap-2">
                  <Zap className="w-4 h-4" />
                  MOST POPULAR
                </div>
              )}

              <div className={`p-8 ${plan.popular ? 'pt-14' : ''}`}>
                {/* Plan Name */}
                <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                
                {/* Price */}
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-4xl font-black text-white">{plan.price}</span>
                  <span className="text-gray-400">{plan.currency}</span>
                  <span className="text-gray-500 text-sm">{plan.period}</span>
                </div>

                {/* Divider */}
                <div className={`h-px mb-6 ${plan.popular ? 'bg-red-500/30' : 'bg-neutral-800'}`} />

                {/* Features */}
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${
                        plan.popular ? 'bg-red-500' : 'bg-neutral-700'
                      }`}>
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button
                  variant={plan.popular ? 'primary' : 'outline'}
                  size="lg"
                  href={SOCIAL_LINKS.telegram}
                  className="w-full"
                >
                  Choose plan
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Guarantee */}
        <motion.div
          className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          {[
            { icon: '🔒', text: 'Secure payment' },
            { icon: '💬', text: 'Support 24/7' },
            { icon: '⚡', text: 'Instant access' },
          ].map((item, idx) => (
            <div key={idx} className="flex items-center gap-2 text-gray-500">
              <span>{item.icon}</span>
              <span>{item.text}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
