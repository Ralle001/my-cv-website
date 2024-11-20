const Experience = () => {
  return (
    <section id="experience" className="py-16 bg-white dark:bg-darkBackground">
      <div className="container mx-auto px-4">
        <h2
          className="text-4xl md:text-5xl font-semibold text-blue-600 dark:text-darkAccent"
          style={{ fontFamily: "'Lora', serif" }}
        >
          Experience
        </h2>

        <div className="mt-8 bg-gray-50 dark:bg-darkCard p-6 rounded-lg shadow-lg">
          <h3
            className="text-2xl font-semibold text-gray-800 dark:text-darkText"
            style={{ fontFamily: "'Lora', serif" }}
          >
            Software Engineer & System Administrator - TCM GmbH
          </h3>
          <p className="text-sm text-gray-600 dark:text-darkHighlight">
            2021 - Present | Budapest, Hungary
          </p>
          <p
            className="mt-4 text-lg md:text-xl leading-relaxed text-gray-700 dark:text-darkText"
            style={{ fontFamily: "'Lora', serif" }}
          >
            At TCM GmbH, I wore two hats as both a Software Engineer and a System Administrator.
            In this role, I used Python to design and maintain software solutions that streamline
            internal processes and enhance system performance. As a System Administrator, I managed
            IT infrastructure, ensured smooth operations, and implemented security protocols to
            protect systems against potential threats. This experience gave me a deep understanding
            of managing infrastructure while also honing my software development skills.
          </p>
        </div>

        <div className="mt-8 bg-gray-50 dark:bg-darkCard p-6 rounded-lg shadow-lg">
          <h3
            className="text-2xl font-semibold text-gray-800 dark:text-darkText"
            style={{ fontFamily: "'Lora', serif" }}
          >
            Software Engineer - Ukatemi
          </h3>
          <p className="text-sm text-gray-600 dark:text-darkHighlight">
            2023 - 2023 | Budapest, Hungary
          </p>
          <p
            className="mt-4 text-lg md:text-xl leading-relaxed text-gray-700 dark:text-darkText"
            style={{ fontFamily: "'Lora', serif" }}
          >
            At Ukatemi, I worked as a Software Engineer focusing on developing applications to
            ensure the safety of critical infrastructures. Using Python, I developed tools and
            solutions that help monitor and secure systems, preventing potential vulnerabilities
            and improving overall system reliability. This role strengthened my understanding of
            infrastructure safety and provided me with practical experience in delivering robust
            software solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Experience;
