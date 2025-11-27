import { Mail, MapPin, Phone, Send, Github, Linkedin, ArrowUp } from 'lucide-react';
import { useState, FormEvent } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: 'Email',
      value: 'leballokeorapeste@gmail.com',
      link: 'mailto:leballokeorapeste@gmail.com',
    },

    {
      icon: <MapPin size={24} />,
      title: 'Location',
      value: 'South Africa',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-black relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-4"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Have a project in mind? Let's work together to create something amazing
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8 animate-slide-in-left">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-cyan-400">Let's Talk</h3>
              <p className="text-gray-400 leading-relaxed mb-8">
                I'm always open to discussing new projects, creative ideas, or
                opportunities to be part of your vision. Feel free to reach out!
              </p>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div
                    key={info.title}
                    className="flex items-start space-x-4 group animate-fade-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="p-3 bg-cyan-400/10 rounded-lg group-hover:bg-cyan-400/20 transition-colors duration-300">
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">{info.title}</p>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-lg hover:text-cyan-400 transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-lg">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex space-x-4 mt-8">
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
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-6 animate-slide-in-right"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-lg focus:border-cyan-400 focus:outline-none transition-colors text-white placeholder-gray-500"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-lg focus:border-cyan-400 focus:outline-none transition-colors text-white placeholder-gray-500"
                  required
                />
              </div>
            </div>

            <div>
              <input
                type="text"
                placeholder="Subject"
                value={formData.subject}
                onChange={(e) =>
                  setFormData({ ...formData, subject: e.target.value })
                }
                className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-lg focus:border-cyan-400 focus:outline-none transition-colors text-white placeholder-gray-500"
                required
              />
            </div>

            <div>
              <textarea
                placeholder="Your Message"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                rows={6}
                className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-lg focus:border-cyan-400 focus:outline-none transition-colors text-white placeholder-gray-500 resize-none"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg font-medium hover:shadow-lg hover:shadow-cyan-400/50 transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2"
            >
              <span>Send Message</span>
              <Send size={20} />
            </button>
          </form>
        </div>
      </div>

      <footer className="mt-20 pt-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              &copy; 2024 KeoDEV. All rights reserved.
            </p>
            <a
              href="#home"
              className="p-3 bg-cyan-400/10 rounded-full hover:bg-cyan-400/20 hover:scale-110 transition-all duration-300 border border-cyan-400/20 hover:border-cyan-400"
            >
              <ArrowUp size={20} />
            </a>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Contact;
