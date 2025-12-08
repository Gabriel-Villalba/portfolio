import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="pt-16 md:pt-20 min-h-screen flex items-center bg-gradient-to-b from-white to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 md:space-y-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-soft-black leading-tight">
              Desarrollo sitios web simples, rápidos y económicos
            </h1>
            <p className="text-lg md:text-xl text-steel-gray leading-relaxed">
              Soluciones web profesionales para emprendedores y pequeños negocios que buscan presencia digital efectiva.
            </p>
            <button
              onClick={scrollToProjects}
              className="inline-flex items-center gap-2 bg-primary-dark text-white px-8 py-4 rounded-lg hover:bg-primary transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 font-medium"
            >
              Ver proyectos
              <ArrowDown size={20} />
            </button>
          </div>

          <div className="relative hidden md:block">
            <div className="aspect-square bg-gradient-to-br from-primary/20 to-primary/10 rounded-3xl shadow-2xl flex items-center justify-center overflow-hidden">
              <img
                src="https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Desarrollo web"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary-dark rounded-3xl -z-10"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/10 rounded-3xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
