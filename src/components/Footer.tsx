import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { 
  Github, 
  Linkedin, 
  Twitter, 
  Mail, 
  Phone, 
  MapPin,
  Heart,
  ArrowUp,
  Code,
  Zap
} from 'lucide-react';

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { href: '#home', label: t('nav.home', 'Accueil') },
    { href: '#about', label: t('nav.about', 'À propos') },
    { href: '#services', label: t('nav.services', 'Services') },
    { href: '#portfolio', label: t('nav.portfolio', 'Portfolio') },
    { href: '#pricing', label: t('nav.pricing', 'Tarifs') },
    { href: '#contact', label: t('nav.contact', 'Contact') },
  ];

  const services = [
    { name: 'Sites Web Vitrine', href: '#services' },
    { name: 'E-Commerce', href: '#services' },
    { name: 'Applications Web', href: '#services' },
    { name: 'Design UI/UX', href: '#services' },
    { name: 'SEO & Performance', href: '#services' },
    { name: 'Maintenance', href: '#services' },
  ];

  const socialLinks = [
    { 
      icon: <Github className="w-5 h-5" />, 
      href: 'https://github.com/shypefx',
      name: 'GitHub',
      color: 'hover:text-gray-400'
    },
    { 
      icon: <Linkedin className="w-5 h-5" />, 
      href: 'https://linkedin.com/in/shypefx',
      name: 'LinkedIn',
      color: 'hover:text-blue-400'
    },
    { 
      icon: <Twitter className="w-5 h-5" />, 
      href: 'https://twitter.com/shypefx',
      name: 'Twitter',
      color: 'hover:text-sky-400'
    },
  ];

  const technologies = [
    'React', 'TypeScript', 'Node.js', 'Next.js', 
    'Tailwind CSS', 'MongoDB', 'PostgreSQL', 'AWS'
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-primary-700"></div>
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative z-10">
        {/* Back to Top Button */}
        <motion.button
          onClick={scrollToTop}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="absolute top-6 right-6 w-12 h-12 bg-primary-600 hover:bg-primary-700 rounded-full flex items-center justify-center text-white shadow-lg transition-all duration-300"
        >
          <ArrowUp className="w-5 h-5" />
        </motion.button>

        {/* Main Footer Content */}
        <div className="container mx-auto px-6 py-16">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
            
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-1"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg flex items-center justify-center">
                  <Code className="w-6 h-6 text-white" />
                </div>
                <div>
                  <span className="text-2xl font-bold">Shypefx</span>
                  <p className="text-xs text-gray-400">Full-Stack Developer</p>
                </div>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                {t('footer.description', 'Développeur Full-Stack passionné, je crée des solutions web modernes et performantes pour donner vie à vos projets digitaux.')}
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <motion.div 
                  whileHover={{ x: 5 }}
                  className="flex items-center space-x-3 text-gray-300"
                >
                  <Mail className="w-4 h-4 text-primary-400" />
                  <a href="mailto:contact@shypefx.com" className="hover:text-primary-400 transition-colors duration-300">
                    contact@shypefx.com
                  </a>
                </motion.div>
                <motion.div 
                  whileHover={{ x: 5 }}
                  className="flex items-center space-x-3 text-gray-300"
                >
                  <Phone className="w-4 h-4 text-primary-400" />
                  <a href="tel:+33123456789" className="hover:text-primary-400 transition-colors duration-300">
                    +33 1 23 45 67 89
                  </a>
                </motion.div>
                <motion.div 
                  whileHover={{ x: 5 }}
                  className="flex items-center space-x-3 text-gray-300"
                >
                  <MapPin className="w-4 h-4 text-primary-400" />
                  <span>Paris, France</span>
                </motion.div>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3 className="text-xl font-bold mb-6 flex items-center">
                <Zap className="w-5 h-5 text-primary-400 mr-2" />
                {t('footer.quickLinks', 'Navigation')}
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <motion.li 
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    whileHover={{ x: 5 }}
                  >
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-gray-300 hover:text-primary-400 transition-colors duration-300 flex items-center group"
                    >
                      <span className="w-1 h-1 bg-primary-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                      {link.label}
                    </button>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-xl font-bold mb-6">
                {t('footer.services', 'Services')}
              </h3>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <motion.li 
                    key={service.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    whileHover={{ x: 5 }}
                  >
                    <button
                      onClick={() => scrollToSection(service.href)}
                      className="text-gray-300 hover:text-primary-400 transition-colors duration-300 flex items-center group"
                    >
                      <span className="w-1 h-1 bg-primary-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                      {service.name}
                    </button>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Newsletter & Social */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="text-xl font-bold mb-6">
                {t('footer.connect', 'Restons connectés')}
              </h3>
              
              {/* Social Links */}
              <div className="flex space-x-4 mb-8">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center text-gray-300 ${social.color} transition-all duration-300 hover:shadow-lg`}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>

              {/* Technologies */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wide">
                  Technologies
                </h4>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech, index) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded-md hover:bg-gray-700 transition-colors duration-300"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <button
                  onClick={() => scrollToSection('#contact')}
                  className="w-full bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white py-3 px-4 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  {t('footer.cta', 'Démarrer un projet')}
                </button>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800">
          <div className="container mx-auto px-6 py-6">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
            >
              <div className="flex items-center space-x-2 text-gray-400 text-sm">
                <span>© {currentYear} Shypefx.</span>
                <span>{t('footer.rights', 'Tous droits réservés.')}</span>
                <span className="hidden md:inline">•</span>
                <span className="hidden md:inline flex items-center">
                  {t('footer.madeWith', 'Fait avec')}
                  <Heart className="w-4 h-4 text-red-500 mx-1 animate-pulse" />
                  {t('footer.inFrance', 'en France')}
                </span>
              </div>
              
              <div className="flex items-center space-x-6 text-sm">
                <button 
                  onClick={() => scrollToSection('#contact')}
                  className="text-gray-400 hover:text-primary-400 transition-colors duration-300"
                >
                  {t('footer.privacy', 'Politique de confidentialité')}
                </button>
                <button 
                  onClick={() => scrollToSection('#contact')}
                  className="text-gray-400 hover:text-primary-400 transition-colors duration-300"
                >
                  {t('footer.terms', 'Mentions légales')}
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
