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
              style={{ letterSpacing: '0.04em', fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}
            >
              NOVANEZIS
            </h3>
            <p
              className="font-sans text-[18px] font-normal leading-[1.7] tracking-wide text-[#fafafa]"
              style={{
                wordSpacing: '0.3em',
                letterSpacing: '0.02em',
                fontFamily: 'Montserrat, Arial, Helvetica, sans-serif'
              }}
            >
              Создаем пространства, которые работают на вас
            </p>
          </div>
          <div></div>
          <div className="text-center md:text-left">
            <h4
              className="font-sans font-bold uppercase text-[1.125rem] mb-4 tracking-[0.04em] text-[#fafafa]"
              style={{ letterSpacing: '0.04em', fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}
            >
              Контакты
            </h4>
            <ul className="space-y-2">
              <li
                className="font-sans text-[18px] font-normal leading-[1.7] tracking-wide text-[#fafafa]"
                style={{
                  wordSpacing: '0.3em',
                  letterSpacing: '0.02em',
                  fontFamily: 'Montserrat, Arial, Helvetica, sans-serif'
                }}
              >
                г. Санкт-Петербург
              </li>
              <li>
                <div
                  className="flex items-center justify-center md:justify-start space-x-2 font-sans text-[18px] font-normal leading-[1.7] tracking-wide text-[#fafafa]"
                  style={{
                    wordSpacing: '0.3em',
                    letterSpacing: '0.02em',
                    fontFamily: 'Montserrat, Arial, Helvetica, sans-serif'
                  }}
                >
                  <span>+7 (965) 777-33-90</span>
                  <FaWhatsapp size={20} className="text-[#fafafa]" />
                  <FaTelegramPlane size={20} className="text-[#fafafa]" />
                </div>
              </li>
              <li
                className="font-sans text-[18px] font-normal leading-[1.7] tracking-wide text-[#fafafa]"
                style={{
                  wordSpacing: '0.3em',
                  letterSpacing: '0.02em',
                  fontFamily: 'Montserrat, Arial, Helvetica, sans-serif'
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
              letterSpacing: '0.02em',
              fontFamily: 'Montserrat, Arial, Helvetica, sans-serif'
            }}
          >
            &copy; {new Date().getFullYear()} NOVANEZIS. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;