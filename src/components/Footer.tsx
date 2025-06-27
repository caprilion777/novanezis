'use client';
import React from 'react';
import { FaWhatsapp, FaTelegramPlane } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#0a0a0a] text-[#fafafa] text-sm">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 justify-items-center">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-4">NOVANEZIS</h3>
            <p className="text-[#fafafa]">
              Создаем пространства, которые работают на вас
            </p>
          </div>
          <div></div>
          <div className="text-center md:text-left">
            <h4 className="font-semibold mb-4">Контакты</h4>
            <ul className="space-y-2 text-[#fafafa]">
              <li>г. Санкт-Петербург</li>
              <li>
                <div className="flex items-center justify-center md:justify-start space-x-2">
                  <span>+7 (965) 777-33-90</span>
                  <FaWhatsapp size={20} className="text-[#fafafa]" />
                  <FaTelegramPlane size={20} className="text-[#fafafa]" />
                </div>
              </li>
              <li>info@novanezis.ru</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-[#fafafa] mt-12 pt-8 text-center text-[#fafafa]">
          <p>&copy; {new Date().getFullYear()} NOVANEZIS. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;