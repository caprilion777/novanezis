'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const categories = ['Все', 'Квартиры', 'Дома'];

const projects = [
  {
    id: 1,
    title: 'Современная квартира',
    category: 'Квартиры',
    image: '/portfolio/flat_1.jpg',
    area: '85 м²'
  },
  {
    id: 2,
    title: 'Лофт в центре города',
    category: 'Квартиры',
    image: '/portfolio/loft.jpg',
    area: '120 м²'
  },
  {
    id: 3,
    title: 'Загородный дом',
    category: 'Дома',
    image: '/portfolio/house.jpg',
    area: '250 м²'
  },
];

const MENU_HEIGHT = 96; // px — если меню другой высоты, измени это значение

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('Все');
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const filteredProjects = activeCategory === 'Все'
    ? projects
    : projects.filter(project => project.category === activeCategory);

  return (
    <section
      id="portfolio"
      className="py-30 bg-[#fafafa] font-sans scroll-mt-[50px]"
      style={{
        paddingTop: `${MENU_HEIGHT}px`,
      }}
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2
            className="font-sans font-bold uppercase text-[1.125rem] tracking-[0.04em] mb-4 text-[#0a0a0a]"
            style={{ letterSpacing: '0.04em', fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}
          >
            Наши проекты
          </h2>
          <p
            className="font-sans text-[18px] font-normal leading-[1.7] tracking-wide text-[#0a0a0a] max-w-2xl mx-auto"
            style={{
              wordSpacing: '0.3em',
              letterSpacing: '0.02em',
              fontFamily: 'Montserrat, Arial, Helvetica, sans-serif'
            }}
          >
            Каждый проект — это уникальная история, созданная с любовью к деталям
          </p>
        </motion.div>
        <div className="flex justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full transition font-sans font-light tracking-widest uppercase text-base ${
                activeCategory === category
                  ? 'bg-[#0a0a0a] text-[#fafafa]'
                  : 'bg-white text-[#0a0a0a] hover:bg-gray-100 border border-[#0a0a0a]'
              }`}
              style={{
                letterSpacing: '0.02em',
                fontFamily: 'Montserrat, Arial, Helvetica, sans-serif'
              }}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group relative overflow-hidden rounded-xl cursor-pointer font-sans"
                onClick={() => setSelectedProject(project)}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-110 filter grayscale"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 p-6 text-white">
                    <h3
                      className="font-sans font-bold uppercase text-xl mb-2 tracking-[0.02em]"
                      style={{ letterSpacing: '0.02em', fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}
                    >
                      {project.title}
                    </h3>
                    <p
                      className="font-sans text-[18px] font-normal leading-[1.7] tracking-wide text-gray-200"
                      style={{
                        wordSpacing: '0.3em',
                        letterSpacing: '0.02em',
                        fontFamily: 'Montserrat, Arial, Helvetica, sans-serif'
                      }}
                    >
                      {project.area}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-4xl w-full bg-white rounded-xl overflow-hidden font-sans"
              onClick={e => e.stopPropagation()}
            >
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-[600px] object-cover"
              />
              <div className="p-6">
                <h3
                  className="font-sans font-bold uppercase text-2xl mb-2 tracking-[0.02em] text-[#0a0a0a]"
                  style={{ letterSpacing: '0.02em', fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}
                >
                  {selectedProject.title}
                </h3>
                <p
                  className="font-sans text-[18px] font-normal leading-[1.7] tracking-wide text-[#0a0a0a]"
                  style={{
                    wordSpacing: '0.3em',
                    letterSpacing: '0.02em',
                    fontFamily: 'Montserrat, Arial, Helvetica, sans-serif'
                  }}
                >
                  Площадь: {selectedProject.area}
                </p>
              </div>
              <button
                className="absolute top-4 right-4 w-10 h-10 bg-[#0a0a0a] rounded-full flex items-center justify-center text-[#fafafa] hover:bg-gray-800"
                onClick={() => setSelectedProject(null)}
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Portfolio;