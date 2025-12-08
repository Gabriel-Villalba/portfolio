const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-dark text-white py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-xl md:text-2xl font-bold mb-2">
              Gabriel Villalba
            </h3>
            <p className="text-primary/60">
              Sitios web simples para emprendedores
            </p>
          </div>

          <div className="text-center md:text-right">
            <p className="text-primary/60">
              © {currentYear} Gabriel Villalba. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
