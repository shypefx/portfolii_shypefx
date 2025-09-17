import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ExternalLink, Github, Eye, Code, Palette, Server, Globe } from 'lucide-react';
import { projects } from '../utils/data'; // Import your projects data

// Update the Project interface to match your data structure
interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  link?: string;
  github?: string;
  fullDescription: string;
  features: string[];
  challenges: string;
}

const Portfolio: React.FC = () => {
  const { t } = useTranslation();
  const [activeFilter, setActiveFilter] = useState<string>('all');

  // Create categories based on your projects (you can adjust these)
  const getProjectCategory = (project: Project): string => {
    const title = project.title.toLowerCase();
    const techs = project.technologies.join(' ').toLowerCase();
    
    if (title.includes('web') || title.includes('website') || techs.includes('web')) return 'web';
    if (title.includes('iptv') || title.includes('player')) return 'media';
    if (title.includes('api') || title.includes('live') || title.includes('rtp')) return 'api';
    if (title.includes('art') || title.includes('gallery')) return 'culture';
    if (title.includes('upscale') || title.includes('detection')) return 'ai';
    return 'web'; // Default category
  };

  // Enhanced filters based on your projects
  const filters = [
    { key: 'all', label: 'Tous les projets', icon: Code },
    { key: 'web', label: 'Sites Web', icon: Globe },
    { key: 'api', label: 'API & Live Data', icon: Server },
    { key: 'media', label: 'Média & Streaming', icon: Eye },
    { key: 'ai', label: 'IA & Computer Vision', icon: Palette },
    { key: 'culture', label: 'Culture & Art', icon: Palette }
  ];

  // Filter projects based on active filter
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => getProjectCategory(project) === activeFilter);

  // Featured projects (first 4 projects)
  const featuredProjects = projects.slice(0, 4);

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
            {featuredProjects.map((project, index) => (
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
                    onError={(e) => {
                      // Fallback for broken images
                      e.currentTarget.src = 'https://images.unsplash.com/photo-1460472178825-e5240623afd5?w=800&h=500&fit=crop';
                    }}
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex space-x-4">
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 bg-white rounded-full text-gray-900 hover:bg-gray-100 transition-colors"
                          title="Voir le site"
                        >
                          <ExternalLink size={20} />
                        </a>
                      )}
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 bg-white rounded-full text-gray-900 hover:bg-gray-100 transition-colors"
                          title="Code source"
                        >
                          <Github size={20} />
                        </a>
                      )}
                    </div>
                  </div>
                  {/* Featured Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-xs font-semibold flex items-center">
                      ⭐ Phare
                    </span>
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
                  onError={(e) => {
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=800&h=500&fit=crop';
                  }}
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex space-x-3">
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white rounded-full text-gray-900 hover:bg-gray-100 transition-colors"
                        title="Voir le site"
                      >
                        <Eye size={16} />
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
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
