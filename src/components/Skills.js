import { motion } from 'framer-motion';

const SkillBar = ({ skill, years, level }) => {
  let percentage;

  if (level === 'Native') percentage = 100;
  else if (level === 'Fluent') percentage = 100;
  else if (level === 'Beginner') percentage = 25
  else percentage = Math.min((years / 5) * 100, 100);
  return (
    <motion.div
      className="mb-6"
      initial={{ width: 0 }}
      whileInView={{ width: `${percentage}%` }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <div className="flex justify-between">
        <span className="font-semibold text-gray-800 dark:text-darkText">{skill}</span>
        <span className="text-gray-600 dark:text-darkHighlight">
          {level || `${years} year${years > 1 ? 's' : ''}`}
        </span>
      </div>
      <div className="bg-gray-200 dark:bg-darkCard rounded-full h-4">
        <div className="bg-blue-600 dark:bg-darkAccent h-4 rounded-full"></div>
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const skills = [
    { skill: 'Python', years: 5 },
    { skill: 'Git', years: 5 },
    { skill: 'Microsoft Office', years: 5 },
    { skill: 'Docker', years: 3 },
    { skill: 'Java & C#', years: 2 },
    { skill: 'Firebase', years: 2 },
    { skill: 'C, C++ & Solidity', years: 1 },
  ];
    const languages = [
      { skill: 'Hungarian', level: 'Native' },
      { skill: 'English', level: 'Fluent' },
      { skill: 'Spanish', level: 'Beginner' },
  ];

  return (
    <section id="skills" className="py-16 bg-white dark:bg-darkBackground">
      <div className="container mx-auto px-4">
        <h2
          className="text-4xl md:text-5xl font-semibold text-blue-600 dark:text-darkAccent"
          style={{ fontFamily: "'Lora', serif" }}
        >
          Skills
        </h2>
        <div className="mt-8 bg-gray-50 dark:bg-darkCard p-6 rounded-lg shadow-lg">
          {skills.map(({ skill, years }) => (
            <SkillBar key={skill} skill={skill} years={years} />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4, mt-16">
        <h2
          className="text-4xl md:text-5xl font-semibold text-blue-600 dark:text-darkAccent"
          style={{ fontFamily: "'Lora', serif" }}
        >
          Languages
        </h2>
        <div className="mt-8 bg-gray-50 dark:bg-darkCard p-6 rounded-lg shadow-lg">
          {languages.map(({ skill, level }) => (
            <SkillBar key={skill} skill={skill} level={level} />
          ))}
        </div>
      </div>

    </section>
  );
};

export default Skills;
