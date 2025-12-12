import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="
        py-12 md:py-20 flex items-center
        bg-bg-light dark:bg-bg-dark
        transition-colors duration-300
      "
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-6 md:py-20">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">

          {/* TEXTOS */}
          <div className="space-y-4 md:space-y-8">
            
            {/* TÍTULO */}
            <h1
              className="
                text-3xl sm:text-4xl md:text-6xl font-bold leading-tight
                text-text-light dark:text-text-dark
              "
            >
              Desarrollo sitios web simples, rápidos y económicos
            </h1>

            {/* SUBTÍTULO */}
            <p
              className="
                text-base sm:text-lg md:text-xl leading-relaxed
                text-text-mutedLight dark:text-text-mutedDark
              "
            >
              Soluciones web profesionales para emprendedores y pequeños negocios
              que buscan presencia digital efectiva.
            </p>

            {/* BOTÓN */}
            <button
              onClick={scrollToProjects}
              className="
                inline-flex items-center gap-2
                bg-primary-dark dark:bg-primary
                text-white dark:text-white
                px-6 py-3 rounded-lg
                hover:bg-primary dark:hover:bg-primary-light
                transition-all duration-300
                shadow-lg hover:shadow-xl
                transform hover:-translate-y-0.5
                font-medium
              "
            >
              Ver proyectos
              <ArrowDown size={20} />
            </button>
          </div>

          {/* IMAGEN */}
          <div className="relative hidden md:block">
            <div
              className="
                aspect-square rounded-3xl shadow-2xl overflow-hidden flex items-center justify-center
                bg-gradient-to-br
                from-primary/20 to-primary/10
                dark:from-primary/10 dark:to-primary-dark/20
                transition-colors duration-300
              "
            >
              <img
                src="https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Desarrollo web"
                className="w-full h-full object-cover"
              />
            </div>

            {/* ELEMENTOS DECORATIVOS */}
            <div
              className="
                absolute -bottom-6 -right-6
                w-24 h-24 md:w-32 md:h-32
                rounded-3xl -z-10
                bg-primary-dark dark:bg-primary
                transition-colors duration-300
              "
            ></div>

            <div
              className="
                absolute -top-6 -left-6
                w-24 h-24 md:w-32 md:h-32
                rounded-3xl -z-10
                bg-primary/10 dark:bg-primary-dark/30
                transition-colors duration-300
              "
            ></div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

