'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const AboutUs = () => {
  return (
    <section id="about-us" className="py-30 bg-[#fafafa] font-sans scroll-mt-[25px] md:scroll-mt-[25px]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center gap-16"
        >
          {/* Text content on the left (1/3 on desktop, full width on mobile) */}
          <div className="w-full md:w-1/2 max-w-xl text-left mx-auto md:mx-0 text-[#0a0a0a]">
            <h2
              className="font-sans font-bold uppercase text-[1.125rem] tracking-[0.04em] mb-6"
              style={{ letterSpacing: '0.04em', fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}
            >
              О НАС
            </h2>
            <p
              className="font-sans text-[18px] font-normal leading-[1.7] tracking-wide mb-4"
              style={{
                wordSpacing: '0.3em',
                letterSpacing: '0.02em',
                fontFamily: 'Montserrat, Arial, Helvetica, sans-serif'
              }}
            >
              NOVANEZIS — студия дизайна интерьеров, объединяющая профессионалов с опытом реализации проектов квартир и частных домов.
            </p>
            <p
              className="font-sans text-[18px] font-normal leading-[1.7] tracking-wide mb-4"
              style={{
                wordSpacing: '0.3em',
                letterSpacing: '0.02em',
                fontFamily: 'Montserrat, Arial, Helvetica, sans-serif'
              }}
            >
              Мы создаём эстетичные и функциональные пространства, в которых продуман каждый элемент — от планировки до декора.
            </p>
            <p
              className="font-sans text-[18px] font-normal leading-[1.7] tracking-wide mb-4"
              style={{
                wordSpacing: '0.3em',
                letterSpacing: '0.02em',
                fontFamily: 'Montserrat, Arial, Helvetica, sans-serif'
              }}
            >
              Наша миссия — превращать идеи клиентов в живые, гармоничные интерьеры.
            </p>
            <p
              className="font-sans text-[18px] font-normal leading-[1.7] tracking-wide mb-4"
              style={{
                wordSpacing: '0.3em',
                letterSpacing: '0.02em',
                fontFamily: 'Montserrat, Arial, Helvetica, sans-serif'
              }}
            >
              Наша цель — сделать процесс проектирования и реализации максимально комфортным, прозрачным и эффективным.
            </p>
            <p
              className="font-sans text-[18px] font-normal leading-[1.7] tracking-wide"
              style={{
                wordSpacing: '0.3em',
                letterSpacing: '0.02em',
                fontFamily: 'Montserrat, Arial, Helvetica, sans-serif'
              }}
            >
              Работаем онлайн и на выезде — гибко подстраиваемся под задачи и ритм клиента.
            </p>
          </div>

          {/* Image on the right (2/3) */}
          <div className="md:w-1/2 w-full">
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