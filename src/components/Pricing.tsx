import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Check, Star, Zap, Crown } from 'lucide-react';

interface PricingPlan {
  id: string;
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular?: boolean;
  premium?: boolean;
  icon: React.ReactNode;
}

const Pricing: React.FC = () => {
  const { t } = useTranslation();

  const plans: PricingPlan[] = [
    {
      id: 'website',
      name: 'Site Web Vitrine',
      price: '€800',
      period: 'À partir de',
      description: 'Site vitrine professionnel pour présenter votre activité',
      features: [
        'Design responsive moderne',
        'Jusqu\'à 5 pages',
        'Optimisation SEO de base',
        'Formulaire de contact',
        'Intégration réseaux sociaux',
        'Version mobile optimisée',
        '1 mois de support gratuit'
      ],
      icon: <Zap className="w-8 h-8" />,
    },
    {
      id: 'website-design',
      name: 'Site Web + Design',
      price: '€1,200',
      period: 'À partir de',
      description: 'Site web complet avec design sur mesure et identité visuelle',
      features: [
        'Tout du plan Site Web',
        'Design 100% personnalisé',
        'Création du logo',
        'Charte graphique complète',
        'Animations et interactions',
        'Optimisation avancée',
        'Formation à la gestion',
        '2 mois de support gratuit'
      ],
      popular: true,
      icon: <Star className="w-8 h-8" />,
    },
    {
      id: 'website-hosting',
      name: 'Site Web + Hébergement',
      price: '€950',
      period: 'À partir de',
      description: 'Site web avec hébergement et maintenance inclus',
      features: [
        'Tout du plan Site Web',
        'Hébergement haute performance',
        'Nom de domaine inclus (1 an)',
        'Certificat SSL gratuit',
        'Sauvegardes automatiques',
        'Mises à jour sécurité',
        'Support technique 24/7',
        'Statistiques de performance'
      ],
      icon: <Crown className="w-8 h-8" />,
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  };

  return (
    <section id="pricing" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {t('pricing.title', 'Nos Tarifs')}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t('pricing.subtitle', 'Des solutions adaptées à tous les budgets avec des prix transparents et sans surprise')}
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto"
        >
          {plans.map((plan, index) => (
            <motion.div
              key={plan.id}
              variants={cardVariants}
              className={`relative bg-white dark:bg-gray-900 rounded-2xl shadow-lg overflow-hidden ${
                plan.popular ? 'ring-2 ring-primary-500 scale-105' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-primary-500 to-primary-600 text-white text-center py-2 text-sm font-semibold">
                  {t('pricing.popular', 'Plus Populaire')}
                </div>
              )}

              <div className={`p-8 ${plan.popular ? 'pt-16' : ''}`}>
                <div className="text-center mb-8">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 ${
                    plan.popular 
                      ? 'bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400'
                  }`}>
                    {plan.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {plan.description}
                  </p>
                  <div className="mb-6">
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {plan.period}
                    </span>
                    <div className="text-4xl font-bold text-gray-900 dark:text-white">
                      {plan.price}
                    </div>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className={`w-5 h-5 mt-0.5 mr-3 flex-shrink-0 ${
                        plan.popular 
                          ? 'text-primary-500' 
                          : 'text-green-500'
                      }`} />
                      <span className="text-gray-600 dark:text-gray-300">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => {
                    const element = document.querySelector('#contact');
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-primary-600 text-white hover:bg-primary-700 shadow-lg hover:shadow-xl'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                >
                  {t('pricing.cta', 'Demander un devis')}
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Services */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            {t('pricing.additional.title', 'Services Additionnels')}
          </h3>
          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { name: 'E-Commerce', price: '+€500' },
              { name: 'Blog/CMS', price: '+€300' },
              { name: 'Multilingue', price: '+€200' },
              { name: 'Formation', price: '+€150' }
            ].map((service, index) => (
              <div key={index} className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  {service.name}
                </h4>
                <p className="text-primary-600 font-bold">
                  {service.price}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* FAQ Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {t('pricing.note', '* Les prix sont indicatifs et peuvent varier selon la complexité du projet. Devis personnalisé gratuit sous 24h.')}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
