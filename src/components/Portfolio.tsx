import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ExternalLink, Github, Eye, Code, Palette, Server } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: 'web' | 'ecommerce' | 'mobile' | 'design';
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

const Portfolio: React.FC = () => {
  const { t } = useTranslation();
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const projects: Project[] = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Plateforme e-commerce complète avec paiement Stripe, gestion des stocks et dashboard admin',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=500&fit=crop&crop=center',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Redux'],
      category: 'ecommerce',
      liveUrl: 'https://demo-ecommerce.shypefx.com',
      githubUrl: 'https://github.com/shypefx/ecommerce-platform',
      featured: true
    },
    {
      id: 2,
      title: 'Restaurant Le Gourmet',
      description: 'Site vitrine moderne pour restaurant avec système de réservation en ligne et menu interactif',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=500&fit=crop&crop=center',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Prisma'],
      category: 'web',
      liveUrl: 'https://restaurant-demo.shypefx.com',
      githubUrl: 'https://github.com/shypefx/restaurant-website',
      featured: true
    },
    {
      id: 3,
      title: 'Task Manager Pro',
      description: 'Application de gestion de tâches collaborative avec notifications temps réel',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=500&fit=crop&crop=center',
      technologies: ['Vue.js', 'Express', 'PostgreSQL', 'Socket.io'],
      category: 'web',
      liveUrl: 'https://taskmanager.shypefx.com',
      githubUrl: 'https://github.com/shypefx/task-manager',
      featured: false
    },
    {
      id: 4,
      title: 'Portfolio Artiste',
      description: 'Portfolio interactif pour artiste avec galerie immersive et animations 3D',
      image: 'https://images.unsplash.com/photo-1460472178825-e5240623afd5?w=800&h=500&fit=crop&crop=center',
      technologies: ['React', 'Three.js', 'Framer Motion', 'Firebase'],
      category: 'design',
      liveUrl: 'https://artist-portfolio.shypefx.com',
      githubUrl: 'https://github.com/shypefx/artist-portfolio',
      featured: true
    },
    {
      id: 5,
      title: 'Fitness Tracker',
      description: 'Application mobile de suivi fitness avec dashboard analytics et synchronisation wearables',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=500&fit=crop&crop=center',
      technologies: ['React Native', 'Node.js', 'Chart.js', 'AWS'],
      category: 'mobile',
      liveUrl: 'https://fitness-app.shypefx.com',
      githubUrl: 'https://github.com/shypefx/fitness-tracker',
      featured: false
    },
    {
      id: 6,
      title: 'Marketplace Immobilier',
      description: 'Plateforme immobilière avec recherche géolocalisée, visites virtuelles et système de leads',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=500&fit=crop&crop=center',
      technologies: ['Vue.js', 'NestJS', 'PostgreSQL', 'MapBox'],
      category: 'ecommerce',
      liveUrl: 'https://realestate.shypefx.com',
      githubUrl: 'https://github.com/shypefx/real-estate',
      featured: false
    },
    {
      id: 7,
      title: 'Banking Dashboard',
      description: 'Interface de gestion bancaire avec analytics avancés et sécurité renforcée',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop&crop=center',
      technologies: ['React', 'TypeScript', 'D3.js', 'Node.js'],
      category: 'web',
      liveUrl: 'https://banking-demo.shypefx.com',
      githubUrl: 'https://github.com/shypefx/banking-dashboard',
      featured: true
    },
    {
      id: 8,
      title: 'Fashion Store',
      description: 'Boutique en ligne de mode avec configurateur 3D et réalité augmentée',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=500&fit=crop&crop=center',
      technologies: ['Next.js', 'Shopify', 'AR.js', 'Stripe'],
      category: 'ecommerce',
      liveUrl: 'https://fashion-store.shypefx.com',
      githubUrl: 'https://github.com/shypefx/fashion-store',
      featured: false
    }
  ];

  const filters = [
    { key: 'all', label: 'Tous', icon: Code },
    { key: 'web', label: 'Web Apps', icon: Code },
    { key: 'ecommerce', label: 'E-Commerce', icon: Server },
    { key: 'mobile', label: 'Mobile', icon: Server },
    { key: 'design', label: 'Design', icon: Palette }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const featuredProjects = projects.filter(project => project.featured);

  return (
    <section id="portfolio" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {t('portfolio.title', 'Mon Portfolio')}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t('portfolio.subtitle', 'Découvrez mes réalisations récentes et mes projets les plus aboutis')}
          </p>
        </motion.div>

        {/* Featured Projects */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 text-center">
            {t('portfolio.featured', 'Projets Phares')}
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {featuredProjects.slice(0, 4).map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex space-x-4">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 bg-white rounded-full text-gray-900 hover:bg-gray-100 transition-colors"
                        >
                          <ExternalLink size={20} />
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 bg-white rounded-full text-gray-900 hover:bg-gray-100 transition-colors"
                        >
                          <Github size={20} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {project.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {filters.map((filter) => {
            const Icon = filter.icon;
            return (
              <button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === filter.key
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-primary-50 dark:hover:bg-gray-700'
                }`}
              >
                <Icon size={18} />
                <span>{filter.label}</span>
              </button>
            );
          })}
        </motion.div>

        {/* All Projects Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {project.featured && (
                  <div className="absolute top-4 left-4">
                    <span className="bg-yellow-400 text-yellow-900 px-2 py-1 rounded-full text-xs font-semibold">
                      ⭐ Phare
                    </span>
                  </div>
                )}
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex space-x-3">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white rounded-full text-gray-900 hover:bg-gray-100 transition-colors"
                        title="Voir le site"
                      >
                        <Eye size={16} />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white rounded-full text-gray-900 hover:bg-gray-100 transition-colors"
                        title="Code source"
                      >
                        <Github size={16} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
              <div className="p-5">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 text-xs rounded">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              {t('portfolio.cta.title', 'Vous avez un projet en tête ?')}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              {t('portfolio.cta.description', 'Discutons de votre projet et créons quelque chose d\'exceptionnel ensemble')}
            </p>
            <a
              href="#contact"
              className="inline-flex items-center px-8 py-3 bg-primary-600 text-white rounded-full font-semibold hover:bg-primary-700 transition-colors duration-300"
            >
              {t('portfolio.cta.button', 'Démarrer un projet')}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
