import { Mail, Instagram, Github, MessageCircle } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-dark text-white py-12 md:py-16 border-t border-primary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex flex-col md:flex-row justify-between items-center gap-10">

          {/* LEFT - BRAND */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-white mb-1">
              Gabriel Villalba
            </h3>
            <p className="text-white/60">
              Sitios web simples para emprendedores
            </p>
          </div>

          {/* CENTER - LINKS */}
          <div className="flex items-center gap-6">
            <a
              href="https://wa.me/5493492588185"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white transition-colors"
            >
              <MessageCircle size={22} />
            </a>

            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white transition-colors"
            >
              <Instagram size={22} />
            </a>

            <a
              href="mailto:gavillalba456@gmail.com"
              className="text-white/70 hover:text-white transition-colors"
            >
              <Mail size={22} />
            </a>

            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white transition-colors"
            >
              <Github size={22} />
            </a>
          </div>

          {/* RIGHT - COPYRIGHT */}
          <div className="text-center md:text-right">
            <p className="text-white/60">
              © {currentYear} Gabriel Villalba. Todos los derechos reservados.
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;