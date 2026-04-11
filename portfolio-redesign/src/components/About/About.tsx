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

  const stack = ['React', 'TypeScript', 'TailwindCSS', 'Node.js', 'Vite', 'Next.js'];

  return (
    <section id="about" className="py-20 md:py-28 bg-bg-light dark:bg-bg-dark transition-colors">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">

        {/* Header */}
        <span className="font-mono text-xs text-primary tracking-widest uppercase mb-3 block">El humano detrás del teclado</span>

        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">

          {/* TEXTO */}
          <div>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-soft-black dark:text-text-dark mb-8 leading-tight">
              Sobre mí
            </h2>

            <p className="font-body text-base text-text-mutedLight dark:text-text-mutedDark leading-relaxed mb-5">
              Soy <strong className="text-soft-black dark:text-text-dark font-medium">Gabriel Villalba</strong>, desarrollador web y emprendedor. Me especializo en crear sitios simples, rápidos, económicos y funcionales para pequeños talleres y emprendedores.
            </p>

            <p className="font-body font-light text-sm text-text-mutedLight dark:text-text-mutedDark leading-relaxed mb-10">
              Mi objetivo es ayudar a negocios en crecimiento a tener presencia en internet sin complicaciones técnicas ni costos excesivos. Cada proyecto es una oportunidad para crear algo útil y efectivo.
            </p>

            {/* Stack chips */}
            <div>
              <span className="font-mono text-xs text-text-mutedLight dark:text-text-mutedDark mb-4 block">Stack principal</span>
              <div className="flex flex-wrap gap-2">
                {stack.map((tech) => (
                  <span
                    key={tech}
                    className="font-mono text-xs text-soft-black dark:text-text-dark border border-black/12 dark:border-white/12 px-3 py-1.5 rounded-full hover:border-primary hover:text-primary dark:hover:text-primary transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* FEATURES */}
          <div className="space-y-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group flex gap-5 p-6 rounded-2xl bg-bg-cardLight dark:bg-bg-cardDark border border-black/6 dark:border-white/6 hover:border-primary/30 dark:hover:border-primary/30 transition-all duration-300"
              >
                <div className="shrink-0 w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="text-primary" size={18} />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-base text-soft-black dark:text-text-dark mb-1.5">
                    {feature.title}
                  </h3>
                  <p className="font-body font-light text-sm text-text-mutedLight dark:text-text-mutedDark leading-relaxed">
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
