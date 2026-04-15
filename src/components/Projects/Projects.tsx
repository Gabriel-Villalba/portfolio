import { ExternalLink } from 'lucide-react';
import { projects } from '../../data/projects';

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-20 md:py-28 bg-bg-cardLight dark:bg-bg-dark transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12 md:mb-16">
          <div>
            <span className="font-mono text-xs text-primary tracking-widest uppercase mb-3 block">Trabajo selecto</span>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-soft-black dark:text-text-dark leading-tight">
              Proyectos
            </h2>
          </div>
          <p className="text-text-mutedLight dark:text-text-mutedDark font-body font-light max-w-xs text-sm md:text-right leading-relaxed">
            Trabajos para emprendedores y pequeños negocios
          </p>
        </div>

        {/* Project list */}
        <div className="space-y-0 divide-y divide-black/8 dark:divide-white/8">
          {projects.map((project, index) => (
            <a
              key={project.id}
              href={project.website}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col md:flex-row md:items-center gap-6 py-8 md:py-10 hover:bg-black/[0.02] dark:hover:bg-white/[0.02] transition-colors -mx-4 px-4 md:-mx-6 md:px-6 rounded-lg"
            >
              {/* Index */}
              <span className="font-mono text-xs text-text-mutedLight dark:text-text-mutedDark opacity-40 shrink-0 hidden md:block w-8">
                {String(index + 1).padStart(2, '0')}
              </span>

              {/* Image thumbnail */}
              <div className="w-full md:w-32 h-40 md:h-20 rounded-xl overflow-hidden shrink-0 bg-black/5 dark:bg-white/5">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 mb-1.5">
                  <h3 className="font-display font-bold text-xl md:text-2xl text-soft-black dark:text-text-dark group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <span className="font-mono text-xs text-text-mutedLight dark:text-text-mutedDark bg-black/5 dark:bg-white/5 px-2.5 py-1 rounded-full shrink-0">
                    {project.type}
                  </span>
                </div>
                <p className="font-body font-light text-sm text-text-mutedLight dark:text-text-mutedDark leading-relaxed line-clamp-2">
                  {project.description}
                </p>
              </div>

              {/* Tags */}
              <div className="hidden lg:flex flex-wrap gap-2 shrink-0 max-w-[200px]">
                {project.tags.slice(0, 3).map((tag, i) => (
                  <span
                    key={i}
                    className="font-mono text-xs text-primary/70 bg-primary/8 px-2.5 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Arrow */}
              <ExternalLink
                size={18}
                className="shrink-0 text-text-mutedLight dark:text-text-mutedDark opacity-30 group-hover:text-primary group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200 hidden md:block"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
