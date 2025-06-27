'use client';
import React from 'react';
import Image from 'next/image';
import { useState, useEffect, useCallback } from 'react';

const Hero = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const isVisible = !isScrolled || isHovered;

  const handleScroll = useCallback(() => {
    const scrollTop = window.scrollY;
    const newIsScrolled = scrollTop > 50; // Trigger color change early
    if (newIsScrolled !== isScrolled) {
      setIsScrolled(newIsScrolled);
    }
  }, [isScrolled]);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    setIsHovered(e.clientY < 100);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [handleScroll, handleMouseMove]);

  // Обычный плавный скролл (без yOffset, т.к. paddingTop у секций)
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen w-full overflow-hidden" id="top">
      <Image
        src="/hero.jpg"
        alt="Интерьер"
        fill
        priority
        className="object-cover"
      />

      <div
        className={`main-header fixed top-0 left-0 w-full flex justify-between items-center px-12 py-8 z-50 transition-all duration-300 ease-in-out
          ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'}
          bg-transparent`}
        onMouseEnter={() => isScrolled && setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <a
          href="#top"
          className={`text-lg tracking-widest font-light transition-colors duration-300 ${isScrolled ? 'text-[#0a0a0a]' : 'text-[#fafafa]'}`}
          onClick={e => handleNavClick(e, 'top')}
        >
          NOVANEZIS — студия дизайна интерьеров
        </a>
        <nav>
          <ul className={`flex gap-8 text-sm uppercase font-light tracking-widest transition-colors duration-300 ${isScrolled ? 'text-[#0a0a0a]' : 'text-[#fafafa]'}`}>
            <li>
              <a
                href="#portfolio"
                className="hover:underline hover:underline-offset-4"
                onClick={e => handleNavClick(e, 'portfolio')}
              >
                Портфолио
              </a>
            </li>
            <li>
              <a
                href="#design"
                className="hover:underline hover:underline-offset-4"
                onClick={e => handleNavClick(e, 'design')}
              >
                Услуги
              </a>
            </li>
            <li>
              <a
                href="#about-us"
                className="hover:underline hover:underline-offset-4"
                onClick={e => handleNavClick(e, 'about-us')}
              >
                О нас
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:underline hover:underline-offset-4"
                onClick={e => handleNavClick(e, 'contact')}
              >
                Контакты
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
};

export default Hero;