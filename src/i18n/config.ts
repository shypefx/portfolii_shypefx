import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// French translations
const fr = {
  translation: {
    // Navigation
    nav: {
      home: 'Accueil',
      about: 'À propos',
      services: 'Services',
      portfolio: 'Portfolio',
      pricing: 'Tarifs',
      contact: 'Contact',
      cta: 'Devis gratuit'
    },
    
    // Hero Section
    hero: {
      greeting: 'Salut, je suis',
      title: 'Développeur Full-Stack',
      subtitle: 'Je crée des expériences web modernes et performantes',
      description: 'Passionné par le développement web, je transforme vos idées en solutions digitales innovantes avec React, Node.js et les dernières technologies.',
      ctaPrimary: 'Voir mes projets',
      ctaSecondary: 'Me contacter',
      stats: {
        projects: 'Projets réalisés',
        clients: 'Clients satisfaits',
        experience: 'Années d\'expérience'
      }
    },

    // About Section
    about: {
      title: 'À propos de moi',
      subtitle: 'Développeur passionné par l\'innovation',
      description: 'Fort de plusieurs années d\'expérience en développement web, je me spécialise dans la création d\'applications modernes et performantes. Mon approche combine expertise technique et créativité pour livrer des solutions qui dépassent les attentes.',
      skills: 'Compétences techniques',
      experience: 'Expérience',
      education: 'Formation'
    },

    // Services Section
    services: {
      title: 'Mes Services',
      subtitle: 'Solutions complètes pour votre présence digitale',
      webDev: {
        title: 'Développement Web',
        description: 'Sites web modernes et performants avec les dernières technologies'
      },
      mobileApp: {
        title: 'Applications Mobiles',
        description: 'Applications natives et hybrides pour iOS et Android'
      },
      ecommerce: {
        title: 'E-Commerce',
        description: 'Boutiques en ligne sécurisées et optimisées pour la conversion'
      },
      uiux: {
        title: 'UI/UX Design',
        description: 'Interfaces utilisateur intuitives et expériences optimales'
      },
      seo: {
        title: 'SEO & Performance',
        description: 'Optimisation pour les moteurs de recherche et performance web'
      },
      maintenance: {
        title: 'Maintenance & Support',
        description: 'Maintenance continue et support technique personnalisé'
      }
    },

    // Portfolio Section
    portfolio: {
      title: 'Mon Portfolio',
      subtitle: 'Découvrez mes réalisations récentes',
      categories: {
        all: 'Tous',
        web: 'Sites Web',
        mobile: 'Mobile',
        design: 'Design'
      },
      viewProject: 'Voir le projet',
      sourceCode: 'Code source',
      featured: 'Projet vedette'
    },

    // Pricing Section
    pricing: {
      title: 'Tarifs & Prestations',
      subtitle: 'Des solutions adaptées à tous les budgets',
      from: 'À partir de',
      popular: 'Le plus populaire',
      getQuote: 'Demander un devis',
      contact: 'Me contacter'
    },

    // Contact Section
    contact: {
      title: 'Contactez-moi',
      subtitle: 'Discutons de votre projet',
      name: 'Nom complet',
      email: 'Email',
      subject: 'Sujet',
      message: 'Message',
      send: 'Envoyer le message',
      success: 'Message envoyé avec succès !',
      error: 'Erreur lors de l\'envoi du message.'
    },

    // Footer
    footer: {
      description: 'Développeur Full-Stack passionné, je crée des solutions web modernes et performantes pour donner vie à vos projets digitaux.',
      quickLinks: 'Navigation',
      services: 'Services',
      connect: 'Restons connectés',
      cta: 'Démarrer un projet',
      rights: 'Tous droits réservés.',
      madeWith: 'Fait avec',
      inFrance: 'en France',
      privacy: 'Politique de confidentialité',
      terms: 'Mentions légales'
    }
  }
};

// English translations
const en = {
  translation: {
    // Navigation
    nav: {
      home: 'Home',
      about: 'About',
      services: 'Services',
      portfolio: 'Portfolio',
      pricing: 'Pricing',
      contact: 'Contact',
      cta: 'Free Quote'
    },

    // Hero Section
    hero: {
      greeting: 'Hi, I\'m',
      title: 'Full-Stack Developer',
      subtitle: 'I create modern and high-performance web experiences',
      description: 'Passionate about web development, I transform your ideas into innovative digital solutions with React, Node.js and the latest technologies.',
      ctaPrimary: 'View my work',
      ctaSecondary: 'Contact me',
      stats: {
        projects: 'Completed Projects',
        clients: 'Happy Clients',
        experience: 'Years of Experience'
      }
    },

    // About Section
    about: {
      title: 'About Me',
      subtitle: 'Developer passionate about innovation',
      description: 'With several years of experience in web development, I specialize in creating modern and high-performance applications. My approach combines technical expertise and creativity to deliver solutions that exceed expectations.',
      skills: 'Technical Skills',
      experience: 'Experience',
      education: 'Education'
    },

    // Services Section
    services: {
      title: 'My Services',
      subtitle: 'Complete solutions for your digital presence',
      webDev: {
        title: 'Web Development',
        description: 'Modern and performant websites with the latest technologies'
      },
      mobileApp: {
        title: 'Mobile Applications',
        description: 'Native and hybrid applications for iOS and Android'
      },
      ecommerce: {
        title: 'E-Commerce',
        description: 'Secure online stores optimized for conversion'
      },
      uiux: {
        title: 'UI/UX Design',
        description: 'Intuitive user interfaces and optimal experiences'
      },
      seo: {
        title: 'SEO & Performance',
        description: 'Search engine optimization and web performance'
      },
      maintenance: {
        title: 'Maintenance & Support',
        description: 'Continuous maintenance and personalized technical support'
      }
    },

    // Portfolio Section
    portfolio: {
      title: 'My Portfolio',
      subtitle: 'Discover my recent achievements',
      categories: {
        all: 'All',
        web: 'Websites',
        mobile: 'Mobile',
        design: 'Design'
      },
      viewProject: 'View Project',
      sourceCode: 'Source Code',
      featured: 'Featured Project'
    },

    // Pricing Section
    pricing: {
      title: 'Pricing & Services',
      subtitle: 'Solutions adapted to all budgets',
      from: 'Starting from',
      popular: 'Most Popular',
      getQuote: 'Get a Quote',
      contact: 'Contact Me'
    },

    // Contact Section
    contact: {
      title: 'Contact Me',
      subtitle: 'Let\'s discuss your project',
      name: 'Full Name',
      email: 'Email',
      subject: 'Subject',
      message: 'Message',
      send: 'Send Message',
      success: 'Message sent successfully!',
      error: 'Error sending message.'
    },

    // Footer
    footer: {
      description: 'Passionate Full-Stack Developer, I create modern and performant web solutions to bring your digital projects to life.',
      quickLinks: 'Quick Links',
      services: 'Services',
      connect: 'Stay Connected',
      cta: 'Start a Project',
      rights: 'All rights reserved.',
      madeWith: 'Made with',
      inFrance: 'in France',
      privacy: 'Privacy Policy',
      terms: 'Legal Notice'
    }
  }
};

// i18n configuration
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      fr,
      en
    },
    lng: 'fr', // Default language
    fallbackLng: 'fr',
    
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
    },

    interpolation: {
      escapeValue: false
    },

    react: {
      useSuspense: false
    }
  });

export default i18n;
