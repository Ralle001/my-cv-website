const Contact = () => {
    return (
      <section id="contact" className="py-16 bg-white dark:bg-darkBackground">
        <div className="container mx-auto px-4">
          <h2
            className="text-4xl md:text-5xl font-semibold text-blue-600 dark:text-darkAccent"
            style={{ fontFamily: "'Lora', serif" }}
          >
            Contact
          </h2>
  
          <div className="mt-8 bg-gray-50 dark:bg-darkCard p-6 rounded-lg shadow-lg">
            <p
              className="text-lg md:text-xl leading-relaxed text-gray-700 dark:text-darkText"
              style={{ fontFamily: "'Lora', serif" }}
            >
              I’m always open to connecting and discussing exciting opportunities. Whether you have
              a project in mind, want to collaborate, or simply have a question, feel free to reach
              out!
            </p>
  
            <div className="mt-6 space-y-4">
              <div className="flex items-center">
                <span className="text-blue-600 dark:text-darkHighlight font-semibold w-28">Email:</span>
                <a
                  href="mailto:treszlerdonat@gmail.com"
                  className="text-lg text-blue-500 dark:text-darkAccent hover:text-blue-700 dark:hover:text-darkHighlight transition duration-300"
                >
                  treszlerdonat@gmail.com
                </a>
              </div>
              <div className="flex items-center">
                <span className="text-blue-600 dark:text-darkHighlight font-semibold w-28">Phone:</span>
                <a
                  href="tel:+36309507239"
                  className="text-lg text-blue-500 dark:text-darkAccent hover:text-blue-700 dark:hover:text-darkHighlight transition duration-300"
                >
                  +36 30 950 7239
                </a>
              </div>
              <div className="flex items-center">
                <span className="text-blue-600 dark:text-darkHighlight font-semibold w-28">Location:</span>
                <span
                  className="text-lg text-gray-700 dark:text-darkText"
                >
                  Budapest, Hungary
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Contact;
  