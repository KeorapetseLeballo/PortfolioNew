import { Github, Linkedin, ArrowDown } from 'lucide-react';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const titles = ['Full Stack Engineer', 'Web Developer', 'UI/UX Designer'];
  const [currentTitle, setCurrentTitle] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitle((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(6, 182, 212, 0.15), transparent 50%)`,
        }}
      />

      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-cyan-400/10 rounded-full animate-float"
            style={{
              width: Math.random() * 10 + 5 + 'px',
              height: Math.random() * 10 + 5 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              animationDelay: Math.random() * 5 + 's',
              animationDuration: Math.random() * 10 + 10 + 's',
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 animate-slide-in-left">
          <h3 className="text-xl md:text-2xl text-cyan-400 font-light animate-fade-in">
            Hello, I'm
          </h3>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight animate-fade-in-up">
            Keorapetse
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Leballo
            </span>
          </h1>
          <div className="h-16">
            <h2 className="text-2xl md:text-3xl font-light text-gray-300">
              <span className="inline-block animate-typing">
                {titles[currentTitle]}
              </span>
              <span className="animate-blink">|</span>
            </h2>
          </div>

          <p className="text-lg text-gray-400 max-w-lg animate-fade-in-up">
            Passionate about creating beautiful, responsive web experiences.
            Specializing in modern web technologies and turning ideas into
            reality.
          </p>

          <div className="flex space-x-4 animate-fade-in-up">
            <a
              href="https://github.com/KeorapetseLeballo"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/5 rounded-full hover:bg-cyan-400/20 hover:scale-110 transition-all duration-300 border border-cyan-400/20 hover:border-cyan-400"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/keorapetse-leballo-867877169/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/5 rounded-full hover:bg-cyan-400/20 hover:scale-110 transition-all duration-300 border border-cyan-400/20 hover:border-cyan-400"
            >
              <Linkedin size={24} />
            </a>
          </div>

          <div className="flex space-x-4 animate-fade-in-up">
            <a
              href="#contact"
              className="px-8 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full font-medium hover:shadow-lg hover:shadow-cyan-400/50 transition-all duration-300 hover:scale-105"
            >
              Get In Touch
            </a>
            <a
              href="#projects"
              className="px-8 py-3 border-2 border-cyan-400 rounded-full font-medium hover:bg-cyan-400 hover:text-black transition-all duration-300 hover:scale-105"
            >
              View Work
            </a>
          </div>
        </div>

        <div className="relative animate-slide-in-right hidden md:block">
          <div className="relative w-full h-[500px] flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
            <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-cyan-400/30 hover:border-cyan-400 transition-all duration-500 hover:scale-105 animate-float shadow-2xl shadow-cyan-400/20">
              <img
                src="/m.png"
                alt="Keorapetse Leballo"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute top-10 right-10 w-20 h-20 bg-cyan-400/20 rounded-full animate-ping"></div>
            <div className="absolute bottom-10 left-10 w-16 h-16 bg-blue-500/20 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
      >
        <ArrowDown size={32} className="text-cyan-400" />
      </a>
    </section>
  );
};

export default Hero;
