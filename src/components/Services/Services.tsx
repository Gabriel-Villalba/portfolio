import { Globe, Package, Mail, Rocket } from 'lucide-react';
import { services } from '../../data/services';

type IconName = "globe" | "package" | "mail" | "rocket";


const iconMap: Record<IconName, React.ElementType> = {
  globe: Globe,
  package: Package,
  mail: Mail,
  rocket: Rocket
};

const Services = () => {
  return (
    <section className="py-12 md:py-32 bg-white dark:bg-bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* TÍTULO */}
        <div className="text-center mb-8 md:mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-soft-black dark:text-white mb-4">
            Servicios
          </h2>
          <p className="text-lg text-steel-gray dark:text-text-dark-muted max-w-2xl mx-auto">
            Ofrezco soluciones web adaptadas a las necesidades de tu emprendimiento
          </p>
        </div>

        {/* CARDS */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map((service) => {
            const Icon = iconMap[service.icon];
            return (
              <div
                key={service.id}
                className="
                  group p-8 rounded-2xl 
                  bg-white dark:bg-bg-light 
                  hover:bg-primary-light 
                  hover:shadow-xl 
                  transition-all duration-300 
                  border border-transparent hover:border-primary/20
                "
              >
                {/* Icono */}
                <div className="w-14 h-14 bg-primary-dark dark:bg-primary rounded-xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <Icon className="text-white w-7 h-7" />
                </div>

                {/* Título */}
                <h3 className="text-xl font-bold text-soft-black dark:text-white mb-3 text-center">
                  {service.title}
                </h3>

                {/* Descripción */}
                <p className="text-steel-gray dark:text-text-dark-muted leading-relaxed text-center">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Services;
