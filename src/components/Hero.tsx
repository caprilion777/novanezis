'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { HiMenu, HiX } from 'react-icons/hi';

const Hero = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Плавный скролл
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false); // Закрывать меню на мобилке
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
        className="main-header fixed top-0 left-0 w-full flex justify-between items-center px-6 md:px-12 py-6 md:py-8 z-50 bg-[#fafafa] text-[#0a0a0a] shadow transition-none"
      >
        <a
          href="#top"
          className="text-lg tracking-widest font-light text-[#0a0a0a]"
          onClick={e => handleNavClick(e, 'top')}
        >
          NOVANEZIS — студия дизайна интерьеров
        </a>
        {/* Desktop menu */}
        <nav className="hidden md:block">
          <ul className="flex gap-8 text-sm uppercase font-light tracking-widest text-[#0a0a0a]">
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
        {/* Mobile burger */}
        <button
          className="md:hidden text-3xl text-[#0a0a0a]"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Открыть меню"
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>
        {/* Mobile menu */}
        {menuOpen && (
          <nav className="absolute top-full left-0 w-full bg-[#fafafa] flex flex-col items-center gap-6 py-8 shadow md:hidden z-50 animate-fade-in">
            <ul className="flex flex-col gap-6 text-lg uppercase font-light tracking-widest text-[#0a0a0a]">
              <li>
                <a href="#portfolio" onClick={e => handleNavClick(e, 'portfolio')}>Портфолио</a>
              </li>
              <li>
                <a href="#design" onClick={e => handleNavClick(e, 'design')}>Услуги</a>
              </li>
              <li>
                <a href="#about-us" onClick={e => handleNavClick(e, 'about-us')}>О нас</a>
              </li>
              <li>
                <a href="#contact" onClick={e => handleNavClick(e, 'contact')}>Контакты</a>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </section>
  );
};

export default Hero;