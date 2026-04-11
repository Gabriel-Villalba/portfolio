import { Mail, Instagram, Github, MessageCircle } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-soft-black dark:bg-bg-dark text-white py-12 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">

          {/* LEFT */}
          <div>
            <h3 className="font-display font-bold text-lg text-white mb-1">
              Gabriel Villalba
            </h3>
            <p className="font-mono text-xs text-white/30">
              Fullstack Developer · Rafaela, Santa Fe
            </p>
          </div>

          {/* ICONS */}
          <div className="flex items-center gap-5">
            {[
              { href: 'https://wa.me/5493492588185', Icon: MessageCircle, label: 'WhatsApp' },
              { href: 'https://www.instagram.com', Icon: Instagram, label: 'Instagram' },
              { href: 'mailto:gavillalba456@gmail.com', Icon: Mail, label: 'Email' },
              { href: 'https://github.com', Icon: Github, label: 'GitHub' },
            ].map(({ href, Icon, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                aria-label={label}
                className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-primary hover:border-primary transition-all duration-200"
              >
                <Icon size={15} />
              </a>
            ))}
          </div>

          {/* COPYRIGHT */}
          <p className="font-mono text-xs text-white/20">
            © {currentYear}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
