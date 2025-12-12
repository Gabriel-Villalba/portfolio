import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [theme, setTheme] = useState("light");

  // ────────────────────────────────────────────────
  // Detectar scroll + cargar tema desde localStorage
  // ────────────────────────────────────────────────
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

  // ────────────────────────────────────────────────
  // Cambiar tema
  // ────────────────────────────────────────────────
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  // ────────────────────────────────────────────────
  // Scroll suave
  // ────────────────────────────────────────────────
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
    { label: 'Contáctenos', id: 'contact' }
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${isScrolled 
          ? 'bg-bg-cardLight dark:bg-bg-cardDark shadow-md' 
          : 'bg-bg-light/95 dark:bg-bg-dark/80 backdrop-blur-sm'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">

          {/* LOGO */}
          <button
              onClick={() => {
              scrollToSection('hero');
              setIsOpen(false); // 👈 Cierra menú en mobile cuando se toca el logo
              }}
              className="text-xl md:text-2xl font-bold text-primary-dark dark:text-primary-light transition-colors"
>
            <span className="block md:hidden">G.Villalba Fullstack Dev</span>
            <span className="hidden md:block">Gabriel Villalba · Fullstack Developer</span>
          </button>

          {/* MENU DESKTOP */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-text-light dark:text-text-dark hover:text-primary-light dark:hover:text-primary transition-colors font-medium"
              >
                {item.label}
              </button>
            ))}

            {/* SWITCH DARK/LIGHT */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-primary/10 transition-colors"
            >
              {theme === "light" ? (
                <Moon size={22} className="text-primary-dark" />
              ) : (
                <Sun size={22} className="text-yellow-400" />
              )}
            </button>
          </div>

          {/* BOTÓN MOBILE */}
         <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-primary/10 dark:hover:bg-white/10 transition-colors"
            aria-label="Toggle menu"
          >
        {isOpen ? (
            <X size={24} className="text-soft-black dark:text-white" />
              ) : (
            <Menu size={24} className="text-soft-black dark:text-white" />
        )}
</button>
        </div>
      </div>

      {/* MENU MOBILE */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300
          ${isOpen ? 'max-h-64 border-t border-primary/20' : 'max-h-0'}
        `}
      >
        <div className="px-4 py-4 space-y-3 bg-bg-cardLight dark:bg-bg-cardDark">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="block w-full text-left px-4 py-2 text-text-light dark:text-text-dark hover:bg-primary/5 dark:hover:bg-primary/10 rounded-lg transition-colors font-medium"
            >
              {item.label}
            </button>
          ))}

          {/* DARK/LIGHT EN MOBILE */}
          <button
            onClick={toggleTheme}
            className="block w-full text-left px-4 py-2 text-text-light dark:text-text-dark hover:bg-primary/5 dark:hover:bg-primary/10 rounded-lg transition-colors font-medium"
          >
            {theme === "light" ? "Modo oscuro 🌙" : "Modo claro ☀️"}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
