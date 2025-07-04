'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const AboutUs = () => {
  return (
    <section id="about-us" className="py-30 bg-[#fafafa] font-sans">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center gap-16"
        >
          {/* Text content on the left (1/3) */}
          <div className="md:w-1/3 text-[#0a0a0a]">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-widest mb-8 text-left uppercase font-sans">
              О нас
            </h2>
            <div className="text-base md:text-lg font-light tracking-wide leading-relaxed text-left font-sans">
              <p className="mb-4">
                NOVANEZIS — студия дизайна интерьеров, объединяющая профессионалов с опытом реализации проектов квартир и частных домов.
              </p>
              <p className="mb-4">
                Мы создаём эстетичные и функциональные пространства, в которых продуман каждый элемент — от планировки до декора.
              </p>
              <p className="mb-4">
                Наша миссия — превращать идеи клиентов в живые, гармоничные интерьеры.
              </p>
              <p className="mb-4">
                Наша цель — сделать процесс проектирования и реализации максимально комфортным, прозрачным и эффективным.
              </p>
              <p>
                Работаем онлайн и на выезде — гибко подстраиваемся под задачи и ритм клиента.
              </p>
            </div>
          </div>

          {/* Image on the right (2/3) */}
          <div className="md:w-2/3 w-full">
            <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/about_us.png"
                alt="О нас - Novanezis"
                fill
                className="object-cover filter grayscale"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;