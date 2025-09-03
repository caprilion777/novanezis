'use client';
import React from 'react';
import { FaWhatsapp, FaTelegramPlane } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#0a0a0a] text-[#fafafa] text-sm font-sans">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 justify-items-center">
          <div className="text-center md:text-left">
            <h3
              className="font-sans font-bold uppercase text-[1.125rem] mb-4 tracking-[0.04em] text-[#fafafa]"
              style={{ letterSpacing: '0.04em' }}
            >
              NOVANEZIS
            </h3>
            <p
              className="font-sans text-[18px] font-normal leading-[1.7] tracking-wide text-[#fafafa]"
              style={{
                wordSpacing: '0.3em',
                letterSpacing: '0.02em'
              }}
            >
              Создаем пространства, которые работают на вас
            </p>
          </div>
          <div></div>
          <div className="text-center md:text-left">
            <h4
              className="font-sans font-bold uppercase text-[1.125rem] mb-4 tracking-[0.04em] text-[#fafafa]"
              style={{ letterSpacing: '0.04em' }}
            >
              Контакты
            </h4>
            <ul className="space-y-2">
              <li
                className="font-sans text-[18px] font-normal leading-[1.7] tracking-wide text-[#fafafa]"
                style={{
                  wordSpacing: '0.3em',
                  letterSpacing: '0.02em'
                }}
              >
                г. Санкт-Петербург
              </li>
              <li>
                <div
                  className="flex items-center justify-center md:justify-start space-x-2 font-sans text-[18px] font-normal leading-[1.7] tracking-wide text-[#fafafa]"
                  style={{
                    wordSpacing: '0.3em',
                    letterSpacing: '0.02em'
                  }}
                >
                  <span>+7 (993) 980-17-43</span>
                  <FaWhatsapp size={20} className="text-[#fafafa]" />
                  <FaTelegramPlane size={20} className="text-[#fafafa]" />
                </div>
              </li>
              <li
                className="font-sans text-[18px] font-normal leading-[1.7] tracking-wide text-[#fafafa]"
                style={{
                  wordSpacing: '0.3em',
                  letterSpacing: '0.02em'
                }}
              >
                info@novanezis.ru
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-[#fafafa] mt-12 pt-8 text-center text-[#fafafa] font-sans text-sm tracking-wide">
          <p
            className="font-sans text-[16px] font-normal leading-[1.7] tracking-wide"
            style={{
              wordSpacing: '0.3em',
              letterSpacing: '0.02em'
            }}
          >
            &copy; 2021-2025 NOVANEZIS. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;