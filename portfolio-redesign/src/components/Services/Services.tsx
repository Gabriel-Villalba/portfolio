import { FaGlobe, FaBox, FaRocket, FaEnvelope } from "react-icons/fa";
import { SiOpenai } from "react-icons/si";
import { services } from '../../data/services';

type IconName = "globe" | "package" | "mail" | "rocket" | "brain";

const iconMap: Record<IconName, React.ElementType> = {
  globe: FaGlobe,
  package: FaBox,
  mail: FaEnvelope,
  rocket: FaRocket,
  brain: SiOpenai,
};

const Services = () => {
  return (
    <section className="py-20 md:py-28 bg-bg-light dark:bg-bg-dark transition-colors">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12 md:mb-16">
          <div>
            <span className="font-mono text-xs text-primary tracking-widest uppercase mb-3 block">Lo que hago</span>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-soft-black dark:text-text-dark leading-tight">
              Servicios
            </h2>
          </div>
          <p className="text-text-mutedLight dark:text-text-mutedDark font-body font-light max-w-xs text-sm md:text-right leading-relaxed">
            Soluciones web adaptadas a las necesidades de tu emprendimiento
          </p>
        </div>

        {/* CARDS — horizontal list on mobile, grid on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-black/8 dark:bg-white/8 rounded-2xl overflow-hidden">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon];
            return (
              <div
                key={service.id}
                className="group bg-bg-light dark:bg-bg-dark p-8 md:p-10 hover:bg-bg-cardLight dark:hover:bg-bg-cardDark transition-colors duration-300 relative overflow-hidden"
              >
                {/* index number */}
                <span className="absolute top-6 right-8 font-mono text-xs text-black/10 dark:text-white/10">
                  {String(index + 1).padStart(2, '0')}
                </span>

                {/* Icon */}
                <div className="w-10 h-10 bg-primary/10 dark:bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <Icon className="text-primary w-5 h-5" />
                </div>

                <h3 className="font-display font-bold text-lg text-soft-black dark:text-text-dark mb-3 leading-snug">
                  {service.title}
                </h3>

                <p className="font-body font-light text-sm text-text-mutedLight dark:text-text-mutedDark leading-relaxed">
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
