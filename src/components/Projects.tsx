import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Apex Auto',
      description: 'Modern automotive website with sleek design and interactive features. Built with modern web technologies for optimal performance.',
      image: 'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=800',
      link: 'https://apexauto1.vercel.app/',
      tags: ['React', 'Tailwind', 'Web Design'],
    },
    {
      title: 'Driving School',
      description: 'Comprehensive driving school platform featuring course management, scheduling, and student tracking capabilities.',
      image: 'https://images.pexels.com/photos/3807386/pexels-photo-3807386.jpeg?auto=compress&cs=tinysrgb&w=800',
      link: 'https://drivingschool-sage.vercel.app/',
      tags: ['React', 'TypeScript', 'Full Stack'],
    },
    {
      title: 'Django REST API',
      description: 'Robust task management API built with Django REST framework, featuring authentication and CRUD operations.',
      image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800',
      link: 'https://github.com/KeorapetseLeballo/taskapp_django',
      github: 'https://github.com/KeorapetseLeballo/taskapp_django',
      tags: ['Django', 'Python', 'REST API'],
    },
    {
      title: 'Spring Boot API',
      description: 'Environmental waste management REST API with comprehensive data handling and secure endpoints.',
      image: 'https://images.pexels.com/photos/4164581/pexels-photo-4164581.jpeg?auto=compress&cs=tinysrgb&w=800',
      link: 'https://github.com/KeorapetseLeballo/enviroAssessment',
      github: 'https://github.com/KeorapetseLeballo/enviroAssessment',
      tags: ['Spring Boot', 'Java', 'Backend'],
    },
    {
      title: 'React Portfolio',
      description: 'Personal portfolio website showcasing projects and skills with modern animations and responsive design.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      link: 'https://github.com/KeorapetseLeballo/reactportfolio',
      github: 'https://github.com/KeorapetseLeballo/reactportfolio',
      tags: ['React', 'Portfolio', 'Web Design'],
    },
    {
      title: 'JS Animations',
      description: 'Interactive JavaScript project exploring advanced animation techniques and physics simulations.',
      image: 'https://images.pexels.com/photos/1089438/pexels-photo-1089438.jpeg?auto=compress&cs=tinysrgb&w=800',
      link: 'https://github.com/KeorapetseLeballo/bouncingballs',
      github: 'https://github.com/KeorapetseLeballo/bouncingballs',
      tags: ['JavaScript', 'Animation', 'Creative'],
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-4"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A showcase of my recent work and personal projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group relative bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-cyan-400 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-400/20 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10"></div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold group-hover:text-cyan-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-cyan-400/10 border border-cyan-400/30 rounded-full text-xs text-cyan-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4 pt-4">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    <ExternalLink size={16} />
                    <span>View Project</span>
                  </a>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-sm text-gray-400 hover:text-cyan-400 transition-colors"
                    >
                      <Github size={16} />
                      <span>Code</span>
                    </a>
                  )}
                </div>
              </div>

              <div className="absolute top-4 right-4 w-12 h-12 bg-cyan-400/20 rounded-full blur-xl group-hover:bg-cyan-400/40 transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
