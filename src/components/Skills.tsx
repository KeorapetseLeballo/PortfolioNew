const Skills = () => {
  const skillCategories = [
    {
      category: 'Frontend',
      skills: [
        { name: 'React', level: 90 },
        { name: 'TypeScript', level: 85 },
        { name: 'Tailwind CSS', level: 90 },
        { name: 'HTML/CSS', level: 95 },
      ],
    },
    {
      category: 'Backend',
      skills: [
        { name: 'Node.js', level: 80 },
        { name: 'Spring Boot', level: 85 },
        { name: 'Django', level: 80 },
        { name: 'REST APIs', level: 90 },
      ],
    },
    {
      category: 'Tools & Others',
      skills: [
        { name: 'Git', level: 85 },
        { name: 'Figma', level: 80 },
        { name: 'React Native', level: 75 },
        { name: 'PostgreSQL', level: 80 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, catIndex) => (
            <div
              key={category.category}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-cyan-400/50 transition-all duration-500 animate-fade-in-up"
              style={{ animationDelay: `${catIndex * 200}ms` }}
            >
              <h3 className="text-2xl font-bold mb-6 text-cyan-400">
                {category.category}
              </h3>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skill.name}
                    className="animate-fade-in"
                    style={{ animationDelay: `${(catIndex * 200) + (skillIndex * 100)}ms` }}
                  >
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-cyan-400">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full transition-all duration-1000 ease-out animate-progress"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {['JavaScript', 'Python', 'Java', 'SQL'].map((lang, index) => (
            <div
              key={lang}
              className="group p-6 bg-white/5 rounded-xl border border-white/10 hover:border-cyan-400 transition-all duration-300 hover:scale-105 text-center animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <p className="text-lg font-semibold group-hover:text-cyan-400 transition-colors">
                {lang}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
