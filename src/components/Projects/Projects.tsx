import { ExternalLink } from 'lucide-react';
import { projects } from '../../data/projects';

const Projects = () => {
  return (
    <section id="projects" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-soft-black mb-4">
            Proyectos
          </h2>
          <p className="text-lg text-steel-gray max-w-2xl mx-auto">
            Algunos trabajos realizados para emprendedores y pequeños negocios
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-primary/10"
            >
              <a
                href={project.website}
                target="_blank"
                rel="noopener noreferrer"
                className="block relative overflow-hidden aspect-video bg-primary/5 cursor-pointer group/image flex items-center justify-center"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-contain group-hover/image:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/50 to-transparent opacity-0 group-hover/image:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="bg-white/90 backdrop-blur-sm px-6 py-2 rounded-lg font-medium text-primary-dark">
                    Visitar sitio
                  </div>
                </div>
              </a>

              <div className="p-6 md:p-8">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-2xl font-bold text-soft-black">
                    {project.title}
                  </h3>
                  <a
                    href={project.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-steel-gray group-hover:text-primary transition-colors hover:scale-110"
                    title="Visitar sitio web"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>

                <p className="text-sm font-medium text-steel-gray/70 mb-3">
                  {project.type}
                </p>

                <p className="text-steel-gray leading-relaxed mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-primary/10 text-primary-dark text-sm rounded-full font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
