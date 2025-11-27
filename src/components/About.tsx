import { Code2, Palette, Smartphone } from 'lucide-react';

const About = () => {
  const services = [
    {
      icon: <Code2 size={40} />,
      title: 'Web Development',
      description:
        'Building responsive and dynamic websites using modern frameworks like React, with a focus on performance and user experience.',
    },
    {
      icon: <Smartphone size={40} />,
      title: 'App Development',
      description:
        'Creating mobile applications with React Native, integrated with robust backends using Spring Boot and Django.',
    },
    {
      icon: <Palette size={40} />,
      title: 'UI/UX Design',
      description:
        'Designing intuitive and beautiful interfaces with Figma, and bringing them to life with modern web technologies.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="relative group animate-slide-in-left">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
            <div className="relative overflow-hidden rounded-2xl border border-cyan-400/20 hover:border-cyan-400 transition-all duration-500">
              <img
                src="/m.png"
                alt="About"
                className="w-full h-auto transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          <div className="space-y-6 animate-slide-in-right">
            <h3 className="text-3xl font-bold text-cyan-400">Full Stack Developer & Designer</h3>
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm a passionate freelance developer specializing in creating responsive,
              mobile-first websites and web applications. With expertise in both frontend
              and backend technologies, I bring complete solutions to life.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              I thrive on challenging projects that push the boundaries of what's possible
              on the web. Whether it's building complex web applications for businesses or
              crafting beautiful user interfaces, I'm committed to delivering exceptional results.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              {['React', 'TypeScript', 'Node.js', 'Spring Boot', 'Django', 'React Native'].map(
                (tech, index) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-white/5 border border-cyan-400/30 rounded-full text-sm hover:bg-cyan-400/10 hover:border-cyan-400 transition-all duration-300 animate-fade-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {tech}
                  </span>
                )
              )}
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-cyan-400 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-cyan-400/20 animate-fade-in-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-500">
                {service.icon}
              </div>
              <h4 className="text-xl font-bold mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                {service.title}
              </h4>
              <p className="text-gray-400 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
