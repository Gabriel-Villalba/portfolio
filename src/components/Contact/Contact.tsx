import { useState, FormEvent } from 'react';
import { Send } from 'lucide-react';

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
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-12 md:py-32 bg-white dark:bg-bg-dark transition-colors duration-300">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Title */}
        <div className="text-center mb-6 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-soft-black dark:text-white mb-4">
            Contáctenos
          </h2>
          <p className="text-lg text-steel-gray dark:text-text-dark-muted">
            ¿Tenés un proyecto en mente? Hablemos sobre cómo puedo ayudarte
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="
            rounded-2xl p-8 md:p-10 space-y-6 
            bg-bg-cardLight dark:bg-bg-cardDark
            border border-primary/10 
            shadow-lg transition-colors duration-300
          "
        >

          {/* Name */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-soft-black dark:text-white mb-2"
            >
              Nombre
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="Tu nombre completo"
              className="
                w-full px-4 py-3 rounded-lg outline-none
                border border-primary/20 
                bg-white dark:bg-bg-light
                text-soft-black dark:text-text-dark
                focus:ring-2 focus:ring-primary-light focus:border-transparent
                transition-all
              "
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-soft-black dark:text-white mb-2"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="tu@email.com"
              className="
                w-full px-4 py-3 rounded-lg outline-none
                border border-primary/20 
                bg-white dark:bg-bg-light
                text-soft-black dark:text-text-dark
                focus:ring-2 focus:ring-primary-light focus:border-transparent
                transition-all
              "
            />
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-soft-black dark:text-white mb-2"
            >
              Mensaje
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={6}
              value={formData.message}
              onChange={handleChange}
              placeholder="Contame sobre tu proyecto..."
              className="
                w-full px-4 py-3 rounded-lg outline-none resize-none
                border border-primary/20 
                bg-white dark:bg-bg-light
                text-soft-black dark:text-text-dark
                focus:ring-2 focus:ring-primary-light focus:border-transparent
                transition-all
              "
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="
              w-full bg-primary-dark dark:bg-primary text-white 
              px-8 py-4 rounded-lg 
              hover:bg-primary-light transition-all duration-300 
              shadow-lg hover:shadow-xl 
              font-medium flex items-center justify-center gap-2
            "
          >
            Enviar mensaje
            <Send size={20} />
          </button>

        </form>
      </div>
    </section>
  );
};

export default Contact;