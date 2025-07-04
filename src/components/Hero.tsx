'use client';
import React, { useState, useEffect } from 'react';
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
        className="main-header fixed top-0 left-0 w-full z-50 bg-[#fafafa] text-[#0a0a0a] transition-none"
        style={{
          backgroundColor: '#fafafa',
          boxShadow: '0 8px 32px 0 rgba(0,0,0,0.10), 0 1.5px 8px 0 rgba(0,0,0,0.06)'
        }}
      >
        <div className="container mx-auto flex justify-between items-center px-6 md:px-12 py-6 md:py-8">
          <a
            href="#top"
            className="font-sans font-bold uppercase text-[1.25rem] md:text-[1.5rem] tracking-[0.04em] text-[#0a0a0a]"
            style={{ letterSpacing: '0.04em' }}
            onClick={e => handleNavClick(e, 'top')}
          >
            NOVANEZIS
          </a>
          {/* Desktop menu */}
          <nav className="hidden md:block">
            <ul
              className="flex gap-12 font-sans font-normal text-[1.125rem] tracking-[0.04em] uppercase"
              style={{ letterSpacing: '0.04em' }}
            >
              {sections.map(section => (
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
          {/* Mobile burger */}
          <button
            className="md:hidden text-3xl text-[#0a0a0a]"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Открыть меню"
          >
            {menuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
        {/* Mobile menu */}
        {menuOpen && (
          <nav className="absolute top-full left-0 w-full bg-[#fafafa] flex flex-col items-center gap-6 py-8 shadow md:hidden z-50 animate-fade-in"
            style={{ backgroundColor: '#fafafa' }}
          >
            <ul
              className="flex flex-col gap-6 font-sans font-normal text-[1.125rem] tracking-[0.04em] uppercase text-[#0a0a0a]"
              style={{ letterSpacing: '0.04em' }}
            >
              {sections.map(section => (
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
        )}
      </div>
    </section>
  );
};

export default Hero;