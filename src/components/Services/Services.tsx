import { Globe, Package, Mail, Rocket } from 'lucide-react';
import { services } from '../../data/services';

const iconMap: Record<string, React.ElementType> = {
  globe: Globe,
  package: Package,
  mail: Mail,
  rocket: Rocket
};

const Services = () => {
  return (
    <section className="py-12 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-soft-black mb-4">
            Servicios
          </h2>
          <p className="text-lg text-steel-gray max-w-2xl mx-auto">
            Ofrezco soluciones web adaptadas a las necesidades de tu emprendimiento
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map((service) => {
            const Icon = iconMap[service.icon];
            return (
              <div
                key={service.id}
                className="group p-8 bg-primary/5 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-primary/20"
              >
                <div className="w-14 h-14 bg-primary-dark rounded-xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <Icon className="text-white w-7 h-7 block" />
                </div>
                <h3 className="text-xl font-bold text-soft-black mb-3">
                  {service.title}
                </h3>
                <p className="text-steel-gray leading-relaxed">
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
