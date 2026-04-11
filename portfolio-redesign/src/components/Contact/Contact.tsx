import { useState, FormEvent } from 'react';
import { Send, MessageCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const whatsappMessage = `Hola, me llamo ${formData.name}. Mi correo es ${formData.email}. Tengo una consulta: ${formData.message}`;
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappNumber = '5493492588185';
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const inputClass = `
    w-full px-4 py-3.5 rounded-xl outline-none font-body text-sm
    border border-black/10 dark:border-white/10
    bg-bg-light dark:bg-bg-dark
    text-soft-black dark:text-text-dark
    placeholder:text-text-mutedLight dark:placeholder:text-text-mutedDark
    focus:border-primary focus:ring-0
    transition-colors duration-200
  `;

  return (
    <section id="contact" className="py-20 md:py-28 bg-bg-cardLight dark:bg-bg-cardDark transition-colors">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">

        <div className="grid md:grid-cols-2 gap-12 md:gap-20">

          {/* LEFT - CTA text */}
          <div className="flex flex-col justify-between">
            <div>
              <span className="font-mono text-xs text-primary tracking-widest uppercase mb-3 block">Hablemos</span>
              <h2 className="font-display font-bold text-4xl md:text-5xl text-soft-black dark:text-text-dark leading-tight mb-6">
                ¿Tenés un<br />proyecto en<br />mente?
              </h2>
              <p className="font-body font-light text-text-mutedLight dark:text-text-mutedDark text-sm leading-relaxed max-w-xs">
                Contame de qué se trata, y te doy una respuesta rápida. Sin vueltas.
              </p>
            </div>

            <div className="mt-10 md:mt-0 space-y-3">
              <a
                href="https://wa.me/5493492588185"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm font-body text-text-mutedLight dark:text-text-mutedDark hover:text-primary dark:hover:text-primary transition-colors group"
              >
                <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <MessageCircle size={16} className="text-primary" />
                </div>
                <span>WhatsApp directo</span>
              </a>
              <a
                href="mailto:gavillalba456@gmail.com"
                className="flex items-center gap-3 text-sm font-body text-text-mutedLight dark:text-text-mutedDark hover:text-primary dark:hover:text-primary transition-colors group"
              >
                <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Send size={14} className="text-primary" />
                </div>
                <span>gavillalba456@gmail.com</span>
              </a>
            </div>
          </div>

          {/* RIGHT - Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block font-mono text-xs text-text-mutedLight dark:text-text-mutedDark mb-2 tracking-wider">
                  NOMBRE
                </label>
                <input
                  id="name" name="name" type="text" required
                  value={formData.name} onChange={handleChange}
                  placeholder="Tu nombre"
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="email" className="block font-mono text-xs text-text-mutedLight dark:text-text-mutedDark mb-2 tracking-wider">
                  EMAIL
                </label>
                <input
                  id="email" name="email" type="email" required
                  value={formData.email} onChange={handleChange}
                  placeholder="tu@email.com"
                  className={inputClass}
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block font-mono text-xs text-text-mutedLight dark:text-text-mutedDark mb-2 tracking-wider">
                MENSAJE
              </label>
              <textarea
                id="message" name="message" required rows={7}
                value={formData.message} onChange={handleChange}
                placeholder="Contame sobre tu proyecto..."
                className={`${inputClass} resize-none`}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-primary text-black font-display font-semibold px-8 py-4 rounded-xl hover:bg-primary-light transition-all duration-300 flex items-center justify-center gap-2.5 text-sm tracking-wide group"
            >
              Enviar por WhatsApp
              <Send size={16} className="group-hover:translate-x-0.5 transition-transform" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
