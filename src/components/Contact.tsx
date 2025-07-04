'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaTelegramPlane } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('idle');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-30 bg-[#fafafa] font-sans">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-widest mb-4 text-[#0a0a0a] uppercase font-sans">
              Свяжитесь с нами
            </h2>
            <p className="text-base md:text-lg font-light tracking-wide text-[#0a0a0a] font-sans">
              Оставьте заявку, и мы свяжемся с вами для обсуждения вашего проекта
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl md:text-2xl font-semibold tracking-widest mb-6 text-[#0a0a0a] uppercase font-sans">
                Контактная информация
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2 text-[#0a0a0a] tracking-wide font-sans">Адрес</h4>
                  <p className="text-base font-light tracking-wide text-[#0a0a0a] font-sans">г. Санкт-Петербург</p>
                </div>
                <div>
                  <h4 className="font-medium mb-2 text-[#0a0a0a] tracking-wide font-sans">Телефон</h4>
                  <div className="flex items-center space-x-2 text-base font-light tracking-wide text-[#0a0a0a] font-sans">
                    <span>+7 (965) 777-33-90</span>
                    <FaWhatsapp size={20} className="text-[#0a0a0a]" />
                    <FaTelegramPlane size={20} className="text-[#0a0a0a]" />
                  </div>
                </div>
                <div>
                  <h4 className="font-medium mb-2 text-[#0a0a0a] tracking-wide font-sans">Email</h4>
                  <p className="text-base font-light tracking-wide text-[#0a0a0a] font-sans">info@novanezis.ru</p>
                </div>
              </div>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-[#0a0a0a] mb-2 font-sans">
                  Ваше имя
                </label>
                <input
                  type="text"
                  name="name"
                  className="w-full px-4 py-2 bg-transparent text-[#0a0a0a] border border-[#0a0a0a] rounded-lg focus:ring-2 focus:ring-[#0a0a0a] focus:border-transparent font-sans"
                  value={formData.name}
                  onChange={e => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#0a0a0a] mb-2 font-sans">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  className="w-full px-4 py-2 bg-transparent text-[#0a0a0a] border border-[#0a0a0a] rounded-lg focus:ring-2 focus:ring-[#0a0a0a] focus:border-transparent font-sans"
                  value={formData.email}
                  onChange={e => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#0a0a0a] mb-2 font-sans">
                  Телефон
                </label>
                <input
                  type="tel"
                  name="phone"
                  className="w-full px-4 py-2 bg-transparent text-[#0a0a0a] border border-[#0a0a0a] rounded-lg focus:ring-2 focus:ring-[#0a0a0a] focus:border-transparent font-sans"
                  value={formData.phone}
                  onChange={e => setFormData({ ...formData, phone: e.target.value })}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#0a0a0a] mb-2 font-sans">
                  Сообщение
                </label>
                <textarea
                  name="message"
                  className="w-full px-4 py-2 bg-transparent text-[#0a0a0a] border border-[#0a0a0a] rounded-lg focus:ring-2 focus:ring-[#0a0a0a] focus:border-transparent h-32 font-sans"
                  value={formData.message}
                  onChange={e => setFormData({ ...formData, message: e.target.value })}
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#0a0a0a] text-[#fafafa] py-3 rounded-lg font-medium hover:bg-gray-800 transition font-sans"
              >
                Отправить заявку
              </button>
              {status === 'success' && (
                <p className="text-green-600 text-center font-sans">Спасибо! Ваша заявка отправлена.</p>
              )}
              {status === 'error' && (
                <p className="text-red-600 text-center font-sans">Ошибка отправки. Попробуйте позже.</p>
              )}
            </form>
          </div>
        </motion.div>
        <style jsx global>{`
          input:-webkit-autofill,
          input:-webkit-autofill:hover,
          input:-webkit-autofill:focus,
          input:-webkit-autofill:active,
          textarea:-webkit-autofill,
          textarea:-webkit-autofill:hover,
          textarea:-webkit-autofill:focus,
          textarea:-webkit-autofill:active {
            -webkit-box-shadow: 0 0 0 30px #fafafa inset !important;
            -webkit-text-fill-color: #0a0a0a !important;
            border-color: #0a0a0a !important;
          }
        `}</style>
      </div>
    </section>
  );
};

export default Contact;