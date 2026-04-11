import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(storedTheme);
      document.documentElement.classList.toggle("dark", storedTheme === "dark");
    }
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    setIsOpen(false);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const menuItems = [
    { label: 'Inicio', id: 'hero' },
    { label: 'Sobre mí', id: 'about' },
    { label: 'Proyectos', id: 'projects' },
    { label: 'Contacto', id: 'contact' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500
      ${isScrolled
        ? 'bg-bg-light/95 dark:bg-bg-dark/95 backdrop-blur-md border-b border-black/5 dark:border-white/5'
        : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">

          {/* LOGO */}
          <button
            onClick={() => { scrollToSection('hero'); setIsOpen(false); }}
            className="font-display font-bold text-base md:text-lg tracking-tight text-soft-black dark:text-text-dark transition-colors group"
          >
            <span className="text-primary">G</span>
            <span className="hidden sm:inline">abriel Villalba</span>
            <span className="sm:hidden">V</span>
            <span className="text-text-mutedLight dark:text-text-mutedDark font-mono text-xs ml-2 hidden md:inline opacity-60 group-hover:opacity-100 transition-opacity">
              fullstack dev
            </span>
          </button>

          {/* MENU DESKTOP */}
          <div className="hidden md:flex items-center gap-8">
            {menuItems.map((item, i) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="font-body text-sm text-text-mutedLight dark:text-text-mutedDark hover:text-soft-black dark:hover:text-text-dark transition-colors tracking-wide"
              >
                <span className="font-mono text-primary text-xs mr-1">0{i + 1}.</span>
                {item.label}
              </button>
            ))}
            <button
              onClick={toggleTheme}
              className="w-10 h-10 rounded-full border border-black/10 dark:border-white/10 flex items-center justify-center hover:border-primary hover:text-primary transition-all duration-200 text-text-mutedLight dark:text-text-mutedDark text-base"
              title="Cambiar tema"
            >
              {theme === "light" ? "○" : "●"}
            </button>
          </div>

          {/* BOTÓN MOBILE */}
          <div className="md:hidden flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="w-9 h-9 rounded-full border border-black/10 dark:border-white/10 flex items-center justify-center text-text-mutedLight dark:text-text-mutedDark text-sm"
            >
              {theme === "light" ? "○" : "●"}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-soft-black dark:text-text-dark"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* MENU MOBILE */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-72' : 'max-h-0'}`}>
        <div className="px-5 py-5 space-y-1 bg-bg-light dark:bg-bg-dark border-t border-black/5 dark:border-white/5">
          {menuItems.map((item, i) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="flex items-center gap-3 w-full px-3 py-3 text-left font-body text-soft-black dark:text-text-dark hover:text-primary dark:hover:text-primary transition-colors rounded-lg"
            >
              <span className="font-mono text-primary text-xs">0{i + 1}.</span>
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
