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
      className="min-h-screen flex flex-col justify-end pb-16 md:pb-24 bg-bg-light dark:bg-bg-dark transition-colors duration-300 relative overflow-hidden"
    >
      {/* Background index number */}
      <div className="absolute top-24 right-5 md:right-12 font-display font-bold text-[120px] md:text-[200px] leading-none text-black/[0.03] dark:text-white/[0.03] select-none pointer-events-none">
        GV
      </div>

      <div className="max-w-6xl mx-auto px-5 sm:px-8 w-full">

        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-8 md:mb-10">
          <span className="w-8 h-px bg-primary"></span>
          <span className="font-mono text-xs text-primary tracking-widest uppercase">Disponible para proyectos</span>
        </div>

        {/* Main heading — editorial large */}
        <h1 className="font-display font-extrabold leading-[0.9] tracking-tight text-soft-black dark:text-text-dark mb-8 md:mb-10">
          <span className="block text-[clamp(2.8rem,10vw,7rem)]">Sitios web</span>
          <span className="block text-[clamp(2.8rem,10vw,7rem)]">
            simples,{' '}
            <span className="text-primary relative inline-block">
              rápidos
              <svg className="absolute -bottom-1 left-0 w-full" height="4" viewBox="0 0 100 4" preserveAspectRatio="none">
                <path d="M0 2 Q25 0 50 2 Q75 4 100 2" stroke="#A3E635" strokeWidth="2" fill="none" vectorEffect="non-scaling-stroke"/>
              </svg>
            </span>
          </span>
          <span className="block text-[clamp(2.8rem,10vw,7rem)]">y económicos</span>
        </h1>

        {/* Divider row */}
        <div className="flex flex-col md:flex-row md:items-end gap-6 md:gap-12">
          <p className="text-base md:text-lg text-text-mutedLight dark:text-text-mutedDark leading-relaxed max-w-md font-body font-light">
            Soluciones web profesionales para emprendedores y pequeños negocios
            que buscan presencia digital efectiva.
          </p>

          <div className="flex items-center gap-4 md:ml-auto">
            <button
              onClick={scrollToProjects}
              className="group inline-flex items-center gap-3 bg-primary text-black font-display font-semibold px-6 py-3.5 rounded-full hover:bg-primary-light transition-all duration-300 text-sm tracking-wide"
            >
              Ver proyectos
              <ArrowDown size={16} className="group-hover:translate-y-0.5 transition-transform" />
            </button>

            <a
              href="https://wa.me/5493492588185"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-black/15 dark:border-white/15 text-soft-black dark:text-text-dark font-body px-6 py-3.5 rounded-full hover:border-primary hover:text-primary dark:hover:text-primary transition-all duration-300 text-sm"
            >
              WhatsApp
            </a>
          </div>
        </div>

        {/* Stats row */}
        <div className="mt-16 md:mt-20 pt-8 border-t border-black/8 dark:border-white/8 grid grid-cols-3 gap-4 md:gap-0 md:flex md:items-center">
          {[
            { num: '4+', label: 'proyectos entregados' },
            { num: '100%', label: 'mobile first' },
            { num: '∞', label: 'café consumido' },
          ].map((stat, i) => (
            <div key={i} className={`${i > 0 ? 'md:ml-12 md:pl-12 md:border-l md:border-black/8 md:dark:border-white/8' : ''}`}>
              <div className="font-display font-bold text-2xl md:text-3xl text-soft-black dark:text-text-dark">
                {stat.num}
              </div>
              <div className="font-mono text-xs text-text-mutedLight dark:text-text-mutedDark mt-0.5">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
