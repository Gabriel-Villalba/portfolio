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
    
    // Crear el mensaje para WhatsApp
    const whatsappMessage = `Hola, me llamo ${formData.name}. Mi correo es ${formData.email}. Tengo una consulta: ${formData.message}`;
    
    // Codificar el mensaje para la URL
    const encodedMessage = encodeURIComponent(whatsappMessage);
    
    // Número de WhatsApp (sin signos especiales, solo dígitos con código de país)
    const whatsappNumber = '5493492588185';
    
    // Crear la URL de WhatsApp
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    
    // Abrir WhatsApp en una nueva pestaña
    window.open(whatsappUrl, '_blank');
    
    // Limpiar el formulario
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-12 md:py-32 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-soft-black mb-4">
            Contáctenos
          </h2>
          <p className="text-lg text-steel-gray">
            ¿Tenés un proyecto en mente? Hablemos sobre cómo puedo ayudarte
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg p-8 md:p-10 space-y-6 border border-primary/10">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-soft-black mb-2">
              Nombre
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-primary/20 rounded-lg focus:ring-2 focus:ring-primary-dark focus:border-transparent transition-all outline-none"
              placeholder="Tu nombre completo"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-soft-black mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-primary/20 rounded-lg focus:ring-2 focus:ring-primary-dark focus:border-transparent transition-all outline-none"
              placeholder="tu@email.com"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-soft-black mb-2">
              Mensaje
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className="w-full px-4 py-3 border border-primary/20 rounded-lg focus:ring-2 focus:ring-primary-dark focus:border-transparent transition-all outline-none resize-none"
              placeholder="Contame sobre tu proyecto..."
            />
          </div>

          <button
            type="submit"
            className="w-full bg-primary-dark text-white px-8 py-4 rounded-lg hover:bg-primary transition-all duration-300 shadow-lg hover:shadow-xl font-medium flex items-center justify-center gap-2"
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
