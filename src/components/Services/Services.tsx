import { FaGlobe, FaBox, FaRocket, FaEnvelope } from "react-icons/fa";
import { SiOpenai } from "react-icons/si";
import { services } from '../../data/services';

type IconName = "globe" | "package" | "mail" | "rocket"| "brain";

const iconMap: Record<IconName, React.ElementType> = {
  globe:  FaGlobe,
  package: FaBox,
  mail: FaEnvelope,
  rocket: FaRocket,
  brain: SiOpenai,
};

const Services = () => {
  return (
    <section className="
    pt-0 md:pt-0
    pb-12 md:pb-20
    bg-bg-light dark:bg-bg-dark
    transition-colors
  ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* TÍTULO */}
        <div className="text-center mb-8 md:mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-soft-black dark:text-white mb-4">
            Servicios
          </h2>
          <p className="text-lg text-steel-gray dark:text-gray-300 max-w-2xl mx-auto">
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
                  bg-bg-cardLight dark:bg-bg-cardDark 
                  shadow-md hover:shadow-2xl 
                  border border-primary/10 
                  transition-all duration-300
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
                <p className="text-steel-gray dark:text-gray-300 leading-relaxed text-center">
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
