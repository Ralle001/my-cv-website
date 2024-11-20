const Education = () => {
  return (
    <section id="education" className="py-16 bg-gray-50 dark:bg-darkBackground">
      <div className="container mx-auto px-4">
        <h2
          className="text-4xl md:text-5xl font-semibold text-blue-600 dark:text-darkAccent"
          style={{ fontFamily: "'Lora', serif" }}
        >
          Education
        </h2>

        <div className="mt-8 bg-white dark:bg-darkCard p-6 rounded-lg shadow-lg">
          <h3
            className="text-2xl font-semibold text-gray-800 dark:text-darkText"
            style={{ fontFamily: "'Lora', serif" }}
          >
            Bachelor of Computer Science
          </h3>
          <p className="text-sm text-gray-600 dark:text-darkHighlight">
            2020 Sep - 2025 Jan | Budapest University of Technology and Economics (BME)
          </p>
          <p
            className="mt-4 text-lg md:text-xl leading-relaxed text-gray-700 dark:text-darkText"
            style={{ fontFamily: "'Lora', serif" }}
          >
            During my studies at BME, I specialized in Cybersecurity and Networking, exploring
            both theoretical and practical aspects of secure communication systems. My coursework
            included Software Engineering, where I developed software solutions to solve real-world
            problems. My thesis, "Reconnaissance of Digital Substation Protocols," reflects my deep
            interest in cybersecurity and my ability to tackle complex challenges in critical
            infrastructure protection. This program has given me a strong foundation in programming,
            problem-solving, and system analysis.
          </p>
        </div>

        <div className="mt-8 bg-white dark:bg-darkCard p-6 rounded-lg shadow-lg">
          <h3
            className="text-2xl font-semibold text-gray-800 dark:text-darkText"
            style={{ fontFamily: "'Lora', serif" }}
          >
            Erasmus+ Mobility
          </h3>
          <p className="text-sm text-gray-600 dark:text-darkHighlight">
            2024 Jan - 2024 June | Universidad Carlos III de Madrid
          </p>
          <p
            className="mt-4 text-lg md:text-xl leading-relaxed text-gray-700 dark:text-darkText"
            style={{ fontFamily: "'Lora', serif" }}
          >
            During my Erasmus+ exchange at UC3M, I focused on Data Protection and Cybersecurity,
            gaining valuable insights into how privacy regulations and cybersecurity practices
            intersect. I also further explored Software Engineering, where I worked on designing
            secure and efficient systems. This experience broadened my understanding of international
            approaches to cybersecurity while enhancing my technical skills and adaptability in a
            multicultural environment.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Education;
