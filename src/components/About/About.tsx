import { Zap, TrendingUp, DollarSign } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Zap,
      title: 'Simplicidad',
      description: 'Diseños limpios y fáciles de usar, enfocados en la experiencia del usuario'
    },
    {
      icon: TrendingUp,
      title: 'Velocidad',
      description: 'Sitios optimizados para cargar rápido y ofrecer la mejor performance'
    },
    {
      icon: DollarSign,
      title: 'Economía',
      description: 'Soluciones accesibles pensadas para emprendedores y pequeños negocios'
    }
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-bg-light dark:bg-bg-dark transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">

          {/* TEXTO */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-soft-black dark:text-white mb-6">
              Sobre mí
            </h2>

            <p className="text-lg text-steel-gray dark:text-gray-300 leading-relaxed mb-8">
              Soy Gabriel Villalba, desarrollador web y emprendedor. Me especializo en crear sitios simples, rápidos, económicos y funcionales para pequeños talleres y emprendedores.
            </p>

            <p className="text-steel-gray/80 dark:text-gray-400 leading-relaxed">
              Mi objetivo es ayudar a negocios en crecimiento a tener presencia en internet sin complicaciones técnicas ni costos excesivos. Cada proyecto es una oportunidad para crear algo útil y efectivo.
            </p>
          </div>

          {/* FEATURES */}
          <div className="space-y-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="
                  flex gap-4 p-6 rounded-xl 
                  bg-bg-cardLight dark:bg-bg-cardDark
                  shadow-md hover:shadow-xl 
                  border border-primary/10
                  transition-all duration-300
                "
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary-dark dark:bg-primary rounded-lg flex items-center justify-center">
                    <feature.icon className="text-white" size={24} />
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-soft-black dark:text-white mb-2">
                    {feature.title}
                  </h3>

                  <p className="text-steel-gray dark:text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
