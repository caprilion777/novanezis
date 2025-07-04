'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { HomeIcon, PlayCircleIcon, ClipboardDocumentCheckIcon, ShoppingBagIcon, SparklesIcon } from '@heroicons/react/24/outline';

const services = [
  {
    icon: HomeIcon,
    title: 'Дизайн-проект',
    description: 'Полный пакет документации для реализации интерьера: планировки, чертежи, визуализации и спецификации.'
  },
  {
    icon: PlayCircleIcon,
    title: 'Видеопрезентация будущего интерьера',
    description: 'Румтур - погружение в атмосферу проекта через видеоформат, раскрывающий идею и планировку будущего пространства.'
  },
  {
    icon: ClipboardDocumentCheckIcon,
    title: 'Авторский надзор',
    description: 'Контроль соответствия выполнения работ дизайн-проекту на всех этапах реализации.'
  },
  {
    icon: ShoppingBagIcon,
    title: 'Комплектация',
    description: 'Подбор, согласование и организация закупки всех необходимых материалов, мебели и оборудования.'
  },
  {
    icon: SparklesIcon,
    title: 'Декорирование',
    description: 'Расстановка мебели, аксессуаров и предметов искусства.'
  }
];

const Services = () => {
  return (
    <section id="design" className="py-30 bg-[#fafafa] font-sans scroll-mt-[50px]">
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
            Наши услуги
          </h2>
          <p
            className="font-sans text-[18px] font-normal leading-[1.7] tracking-wide text-[#0a0a0a] max-w-4xl mx-auto text-left"
            style={{
              wordSpacing: '0.3em',
              letterSpacing: '0.02em',
              fontFamily: 'Montserrat, Arial, Helvetica, sans-serif'
            }}
          >
            Создаём стильные и функциональные интерьеры, отражающие ваш характер и образ жизни. Полный цикл услуг — от идеи до реализации: планировка, визуализация, подбор материалов, авторский надзор. Работаем как очно, так и онлайн - с точным соблюдением сроков.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="p-6 rounded-xl bg-white hover:shadow-lg transition border border-gray-200 font-sans"
            >
              <service.icon className="w-12 h-12 text-[#0a0a0a] mb-4" />
              <h3
                className="font-sans font-bold uppercase text-[1.125rem] tracking-[0.04em] mb-2 text-[#0a0a0a]"
                style={{ letterSpacing: '0.04em', fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}
              >
                {service.title}
              </h3>
              <p
                className="font-sans text-[18px] font-normal leading-[1.7] tracking-wide text-[#0a0a0a]"
                style={{
                  wordSpacing: '0.3em',
                  letterSpacing: '0.02em',
                  fontFamily: 'Montserrat, Arial, Helvetica, sans-serif'
                }}
              >
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;