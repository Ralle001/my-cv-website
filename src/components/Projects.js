const Projects = () => {
  return (
    <section id="projects" className="py-16 bg-gray-50 dark:bg-darkBackground">
      <div className="container mx-auto px-4">
        <h2
          className="text-4xl md:text-5xl font-semibold text-blue-600 dark:text-darkAccent"
          style={{ fontFamily: "'Lora', serif" }}
        >
          Projects
        </h2>

        <div className="mt-8 bg-white dark:bg-darkCard p-6 rounded-lg shadow-lg">
          <h3
            className="text-2xl font-semibold text-gray-800 dark:text-darkText"
            style={{ fontFamily: "'Lora', serif" }}
          >
            Reconnaissance of Digital Substation Protocols
          </h3>
          <p
            className="mt-4 text-lg md:text-xl leading-relaxed text-gray-700 dark:text-darkText"
            style={{ fontFamily: "'Lora', serif" }}
          >
            This project focuses on analyzing digital substation protocols like GOOSE and SV
            without prior system knowledge. I developed a tool to passively analyze network traffic,
            identify connected devices, and automate basic attacks using the collected data. The tool
            was tested in a simulated environment to demonstrate its effectiveness.
          </p>
          <a
            href="https://github.com/Ralle001/goosestalker"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 text-lg text-blue-500 dark:text-darkAccent hover:text-blue-700 dark:hover:text-darkHighlight transition duration-300"
          >
            View the GitHub Repository &rarr;
          </a>
        </div>

        <div className="mt-8 bg-white dark:bg-darkCard p-6 rounded-lg shadow-lg">
          <h3
            className="text-2xl font-semibold text-gray-800 dark:text-darkText"
            style={{ fontFamily: "'Lora', serif" }}
          >
            Vocabulary App with Web3 Authentication
          </h3>
          <p
            className="mt-4 text-lg md:text-xl leading-relaxed text-gray-700 dark:text-darkText"
            style={{ fontFamily: "'Lora', serif" }}
          >
            A simple yet powerful vocabulary app similar to Quizlet, but with a modern twist—it
            uses Web3.0 authentication to securely manage user accounts. Users can create, save, and
            quiz themselves on vocabulary sets. The app combines ease of use with cutting-edge
            authentication technology.
          </p>
          <a
            href="https://ralle001.xyz/vocab"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 text-lg text-blue-500 dark:text-darkAccent hover:text-blue-700 dark:hover:text-darkHighlight transition duration-300"
          >
            Try the App &rarr;
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
