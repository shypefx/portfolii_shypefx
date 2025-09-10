import React from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, Server, Check } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Services: React.FC = () => {
  const { t } = useTranslation();

  const services = [
    {
      icon: Code,
      key: 'website',
      features: [
        'Site responsive',
        'Optimisation SEO',
        'Performance optimisée',
        'Code moderne'
      ]
    },
    {
      icon: Palette,
      key: 'design',
      features: [
        'Design UI/UX personnalisé',
        'Prototype interactif',
        'Charte graphique',
        'Développement complet'
      ]
    },
    {
      icon: Server,
      key: 'hosting',
      features: [
        'Hébergement inclus',
        'Maintenance mensuelle',
        'Sauvegarde automatique',
        'Support technique'
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {t('services.title')}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.key}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * index }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full mb-4">
                  <service.icon className="w-8 h-8 text-primary-600 dark:text-primary-400" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {t(`services.${service.key}.title`)}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {t(`services.${service.key}.description`)}
                </p>
                
                <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">
                  {t(`services.${service.key}.price`)}
                </div>
              </div>

              <div className="space-y-3">
                {service.features.map((feature, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + 0.1 * idx }}
                    className="flex items-center"
                  >
                    <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                  </motion.div>
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full mt-8 px-6 py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Choisir ce service
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
