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
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('idle');
    setIsSubmitting(true);
    
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
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-30 bg-[#fafafa] font-sans scroll-mt-[25px] md:scroll-mt-[25px]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2
              className="font-sans font-bold uppercase text-[1.125rem] tracking-[0.04em] mb-4 text-[#0a0a0a]"
              style={{ letterSpacing: '0.04em' }}
            >
              Свяжитесь с нами
            </h2>
            <p
              className="font-sans text-[18px] font-normal leading-[1.7] tracking-wide text-[#0a0a0a]"
              style={{
                wordSpacing: '0.3em',
                letterSpacing: '0.02em'
              }}
            >
              Оставьте заявку, и мы свяжемся с вами для обсуждения вашего проекта
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3
                className="font-sans font-bold uppercase text-[1.125rem] tracking-[0.04em] mb-6 text-[#0a0a0a]"
                style={{ letterSpacing: '0.04em' }}
              >
                Контактная информация
              </h3>
              <div className="space-y-4">
                <div>
                  <h4
                    className="font-sans font-bold text-[16px] mb-2 text-[#0a0a0a]"
                  >
                    Адрес
                  </h4>
                  <p
                    className="font-sans text-[18px] font-normal leading-[1.7] tracking-wide text-[#0a0a0a]"
                    style={{
                      wordSpacing: '0.3em',
                      letterSpacing: '0.02em'
                    }}
                  >
                    г. Санкт-Петербург
                  </p>
                </div>
                <div>
                  <h4
                    className="font-sans font-bold text-[16px] mb-2 text-[#0a0a0a]"
                  >
                    Телефон
                  </h4>
                  <div
                    className="flex items-center space-x-2 font-sans text-[18px] font-normal leading-[1.7] tracking-wide text-[#0a0a0a]"
                    style={{
                      wordSpacing: '0.3em',
                      letterSpacing: '0.02em'
                    }}
                  >
                    <span>+7 (965) 777-33-90</span>
                    <FaWhatsapp size={20} className="text-[#0a0a0a]" />
                    <FaTelegramPlane size={20} className="text-[#0a0a0a]" />
                  </div>
                </div>
                <div>
                  <h4
                    className="font-sans font-bold text-[16px] mb-2 text-[#0a0a0a]"
                  >
                    Email
                  </h4>
                  <p
                    className="font-sans text-[18px] font-normal leading-[1.7] tracking-wide text-[#0a0a0a]"
                    style={{
                      wordSpacing: '0.3em',
                      letterSpacing: '0.02em'
                    }}
                  >
                    info@novanezis.ru
                  </p>
                </div>
              </div>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  className="block font-sans font-normal text-[16px] mb-2 text-[#0a0a0a]"
                >
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
                <label
                  className="block font-sans font-normal text-[16px] mb-2 text-[#0a0a0a]"
                >
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
                <label
                  className="block font-sans font-normal text-[16px] mb-2 text-[#0a0a0a]"
                >
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
                <label
                  className="block font-sans font-normal text-[16px] mb-2 text-[#0a0a0a]"
                >
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
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileTap={{ scale: 0.95 }}
                className={`w-full py-3 rounded-lg font-medium font-sans transition-all duration-200 ${
                  isSubmitting 
                    ? 'bg-gray-400 text-gray-200 cursor-not-allowed' 
                    : 'bg-[#0a0a0a] text-[#fafafa] hover:bg-gray-800 active:bg-gray-900'
                }`}
              >
                {isSubmitting ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="inline-block w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2"
                  />
                ) : null}
                {isSubmitting ? 'Отправляем...' : 'Отправить заявку'}
              </motion.button>
              {status === 'success' && (
                <motion.p 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-green-600 text-center font-sans"
                >
                  Спасибо! Ваша заявка отправлена.
                </motion.p>
              )}
              {status === 'error' && (
                <motion.p 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-600 text-center font-sans"
                >
                  Ошибка отправки. Попробуйте позже.
                </motion.p>
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