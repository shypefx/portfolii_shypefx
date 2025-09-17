import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Hero: React.FC = () => {
const { t, i18n } = useTranslation();

console.log('Current language:', i18n.language);
console.log('CTA translation:', t('hero.cta', 'DEFAULT CTA'));
console.log('Contact translation:', t('hero.contact', 'DEFAULT CONTACT'));

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 to-blue-100 dark:from-gray-900 dark:to-gray-800 pt-20">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className="text-primary-600 dark:text-primary-400">Shypefx</span>
            <br />
            {t('hero.title')}
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            {t('hero.subtitle')}
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <motion.a
              href="#portfolio"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors shadow-lg"
            >
              {t('hero.cta')}
            </motion.a>
            
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-primary-600 text-primary-600 dark:text-primary-400 rounded-lg font-semibold hover:bg-primary-600 hover:text-white transition-colors"
            >
              {t('hero.contact')}
            </motion.a>
          </motion.div>

          <motion.div 
            className="flex justify-center space-x-6 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            {[
              { icon: Github, href: "#" },
              { icon: Linkedin, href: "#" },
              { icon: Mail, href: "#contact" }
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                whileHover={{ scale: 1.2, y: -5 }}
                className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                <social.icon size={24} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDown size={32} className="text-primary-600 dark:text-primary-400" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
