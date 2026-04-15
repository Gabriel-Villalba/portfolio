import { Mail, Instagram, Github, MessageCircle } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-bg-cardLight dark:bg-bg-cardDark border-t border-black/8 dark:border-white/8 py-12 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">

          {/* LEFT */}
          <div>
            <h3 className="font-display font-bold text-lg text-soft-black dark:text-text-dark mb-1">
              Gabriel Villalba
            </h3>
            <p className="font-mono text-xs text-text-mutedLight dark:text-text-mutedDark">
              Fullstack Developer · Rafaela, Santa Fe
            </p>
          </div>

          {/* ICONS */}
          <div className="flex items-center gap-4">
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
                className="w-9 h-9 rounded-full border border-black/10 dark:border-white/10 flex items-center justify-center text-text-mutedLight dark:text-text-mutedDark hover:text-primary hover:border-primary transition-all duration-200"
              >
                <Icon size={15} />
              </a>
            ))}
          </div>

          {/* COPYRIGHT */}
          <p className="font-mono text-xs text-text-mutedLight dark:text-text-mutedDark opacity-50">
            © {currentYear}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
