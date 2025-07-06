'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: 'Современная квартира',
    category: 'Квартиры',
    images: [
      '/portfolio/pic1-1.png',
      '/portfolio/pic1-2.png',
      '/portfolio/pic1-3.png'
    ],
    area: '85 м²'
  },
  {
    id: 2,
    title: 'Лофт в центре города',
    category: 'Квартиры',
    images: [
      '/portfolio/loft.jpg'
    ],
    area: '120 м²'
  },
  {
    id: 3,
    title: 'Загородный дом',
    category: 'Дома',
    images: [
      '/portfolio/house.jpg'
    ],
    area: '250 м²'
  },
];

const MENU_HEIGHT = 96;

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [currentImage, setCurrentImage] = useState(0);

  const openProject = (project: any) => {
    setSelectedProject(project);
    setCurrentImage(0);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImage((prev) =>
      prev === 0 ? selectedProject.images.length - 1 : prev - 1
    );
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImage((prev) =>
      prev === selectedProject.images.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section
      id="portfolio"
      className="py-30 bg-[#fafafa] font-sans scroll-mt-[25px] md:scroll-mt-[25px]"
      style={{ paddingTop: `${MENU_HEIGHT}px` }}
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
            style={{ letterSpacing: '0.04em' }}
          >
            Наши проекты
          </h2>
          <p
            className="font-sans text-[18px] font-normal leading-[1.7] tracking-wide text-[#0a0a0a] max-w-2xl mx-auto"
            style={{
              wordSpacing: '0.3em',
              letterSpacing: '0.02em'
            }}
          >
            Каждый проект — это уникальная история, созданная с любовью к деталям
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group relative overflow-hidden rounded-xl cursor-pointer font-sans"
                onClick={() => openProject(project)}
              >
                <img
                  src={project.images[0]}
                  alt={project.title}
                  className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-110 filter grayscale"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 p-6 text-white">
                    <h3
                      className="font-sans font-bold uppercase text-xl mb-2 tracking-[0.02em]"
                      style={{ letterSpacing: '0.02em' }}
                    >
                      {project.title}
                    </h3>
                    <p
                      className="font-sans text-[18px] font-normal leading-[1.7] tracking-wide text-gray-200"
                      style={{
                        wordSpacing: '0.3em',
                        letterSpacing: '0.02em'
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
            <div
              className="relative flex flex-col items-center justify-center"
              onClick={e => e.stopPropagation()}
            >
              {/* Стрелки вне картинки */}
              {selectedProject.images.length > 1 && (
                <>
                  <button
                    className="absolute left-[-56px] top-1/2 -translate-y-1/2 bg-[#0a0a0a] text-white rounded-full w-10 h-10 flex items-center justify-center z-10 hover:bg-gray-800 shadow-lg"
                    onClick={prevImage}
                  >
                    &#8592;
                  </button>
                  <button
                    className="absolute right-[-56px] top-1/2 -translate-y-1/2 bg-[#0a0a0a] text-white rounded-full w-10 h-10 flex items-center justify-center z-10 hover:bg-gray-800 shadow-lg"
                    onClick={nextImage}
                  >
                    &#8594;
                  </button>
                </>
              )}
              {/* Крестик */}
              <button
                className="absolute top-2 right-2 w-10 h-10 bg-[#0a0a0a] rounded-full flex items-center justify-center text-[#fafafa] hover:bg-gray-800 z-10"
                onClick={() => setSelectedProject(null)}
                style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.15)' }}
              >
                ✕
              </button>
              <img
                src={selectedProject.images[currentImage]}
                alt={selectedProject.title}
                className="w-auto max-h-[80vh] max-w-[90vw] mx-auto object-contain rounded-t-xl bg-[#f5f5f5]"
                style={{ display: 'block' }}
              />
              <div className="w-full bg-white rounded-b-xl py-2 px-2 flex flex-col items-center">
                <h3
                  className="font-sans font-bold uppercase text-base mb-1 tracking-[0.02em] text-[#0a0a0a] text-center"
                  style={{ letterSpacing: '0.02em' }}
                >
                  {selectedProject.title}
                </h3>
                <p
                  className="font-sans text-sm font-normal leading-[1.7] tracking-wide text-[#0a0a0a] text-center"
                  style={{
                    wordSpacing: '0.3em',
                    letterSpacing: '0.02em'
                  }}
                >
                  Площадь: {selectedProject.area}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Portfolio;