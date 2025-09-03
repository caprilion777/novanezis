'use client';
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { HiMenu, HiX } from 'react-icons/hi';

const sections = [
  { id: 'portfolio', label: 'Портфолио' },
  { id: 'design', label: 'Услуги' },
  { id: 'about-us', label: 'О нас' },
  { id: 'contact', label: 'Контакты' },
];

const Hero = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('');
  const parallaxRef = useRef<HTMLDivElement>(null);

  // Плавный скролл
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    if (id === 'top') {
      setActive('');
    } else {
      setActive(id);
    }
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false);
    }
  };

  // Отслеживание активного раздела
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 120) {
        setActive('');
        return;
      }
      let current = '';
      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) {
            current = section.id;
          }
        }
      }
      setActive(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        // noticeable but still subtle parallax
        const offset = Math.min(window.scrollY * 0.18, 40);
        parallaxRef.current.style.transform = `translateY(${offset}px)`;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden" id="top">
      <div ref={parallaxRef} className="absolute inset-0 -z-10">
        <Image
          src="/hero.jpg"
          alt="Интерьер"
          fill
          priority
          className="object-cover"
        />
        {/* Overlay for dimming the hero image */}
        <div className="absolute inset-0 bg-black/20 pointer-events-none" />
      </div>
      {/* Центрированный текст и кнопка поверх картинки */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-20 pointer-events-none">
        <h1 className="text-white text-center text-2xl md:text-3xl font-normal drop-shadow-lg px-4 mb-8 text-shadow" style={{textShadow: '0 4px 24px rgba(0,0,0,0.85), 0 1.5px 8px rgba(0,0,0,0.7)'}}>
          Создаем индивидуальные интерьерные решения с вами и для вас
        </h1>
        <a
          href="#contact"
          className="pointer-events-auto border border-white text-white px-7 py-2 rounded-md text-sm md:text-base font-sans font-bold bg-transparent hover:bg-white/10 transition-colors duration-200 uppercase tracking-[0.04em]"
          style={{
            backdropFilter: 'blur(0px)',
          }}
        >
          ОСТАВЬТЕ ЗАЯВКУ
        </a>
      </div>
      {/* main-header и остальной код без изменений */}
      <div
        className="main-header fixed top-0 left-0 w-full z-50 bg-[#fafafa] text-[#0a0a0a] transition-none shadow-lg md:shadow-none"
        style={{
          backgroundColor: '#fafafa'
        }}
      >
        <div className="container mx-auto flex justify-center items-center px-6 md:px-12 py-6 md:py-8 relative">
          {/* Hamburger for mobile */}
          {!menuOpen && (
            <button
              className="md:hidden absolute right-4 top-1/2 -translate-y-1/2 z-50"
              aria-label="Открыть меню"
              onClick={() => setMenuOpen(true)}
            >
              <HiMenu size={32} />
            </button>
          )}
          {/* Cross for mobile, same place as burger */}
          {menuOpen && (
            <button
              className="md:hidden absolute right-4 top-1/2 -translate-y-1/2 z-50"
              aria-label="Закрыть меню"
              onClick={() => setMenuOpen(false)}
            >
              <HiX size={32} />
            </button>
          )}
          {/* Left menu */}
          <nav className="hidden md:block absolute left-6 md:left-12">
            <ul
              className="flex gap-8 font-sans font-normal text-[1.125rem] tracking-[0.04em] uppercase"
              style={{ letterSpacing: '0.04em' }}
            >
              {sections.slice(0, 2).map(section => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className={`relative pb-1 transition-all
                      after:content-[''] after:block after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-[#0a0a0a] after:w-full
                      after:origin-left after:scale-x-0 after:transition-transform after:duration-300
                      ${active === section.id ? 'after:scale-x-100' : 'hover:after:scale-x-100'}
                    `}
                    style={{
                      position: 'relative',
                    }}
                    onClick={e => handleNavClick(e, section.id)}
                  >
                    {section.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          
          {/* Center logo */}
          <a
            href="#top"
            className="font-sans font-bold uppercase text-[1.25rem] md:text-[1.5rem] tracking-[0.04em] text-[#0a0a0a]"
            style={{ letterSpacing: '0.04em' }}
            onClick={e => handleNavClick(e, 'top')}
          >
            NOVANEZIS
          </a>
          
          {/* Right menu */}
          <nav className="hidden md:block absolute right-6 md:right-12">
            <ul
              className="flex gap-8 font-sans font-normal text-[1.125rem] tracking-[0.04em] uppercase"
              style={{ letterSpacing: '0.04em' }}
            >
              {sections.slice(2, 4).map(section => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className={`relative pb-1 transition-all
                      after:content-[''] after:block after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-[#0a0a0a] after:w-full
                      after:origin-left after:scale-x-0 after:transition-transform after:duration-300
                      ${active === section.id ? 'after:scale-x-100' : 'hover:after:scale-x-100'}
                    `}
                    style={{
                      position: 'relative',
                    }}
                    onClick={e => handleNavClick(e, section.id)}
                  >
                    {section.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          {/* Mobile menu dropdown under header */}
          {menuOpen && (
            <div className="absolute left-0 right-0 top-full w-full bg-[#fafafa] py-5 flex flex-col items-center md:hidden z-40">
              <nav className="mt-4 flex-1 flex flex-col gap-1 w-full items-center">
                {sections.map(section => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className={`relative inline-block text-lg font-sans uppercase tracking-[0.04em] py-2 px-2 rounded transition-colors text-center
                      after:content-[''] after:block after:absolute after:left-0 after:bottom-1 after:h-[1px] after:bg-[#0a0a0a] after:w-full after:origin-center after:scale-x-0 after:transition-transform after:duration-300
                      ${active === section.id ? 'after:scale-x-100' : 'hover:after:scale-x-100'}
                    `}
                    style={{ position: 'relative' }}
                    onClick={e => handleNavClick(e, section.id)}
                  >
                    {section.label}
                  </a>
                ))}
              </nav>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;