const AboutMe = () => {
  return (
    <section id="about" className="py-16 bg-white dark:bg-darkBackground">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/3 flex justify-center mb-8 md:mb-0">
          <img
            src="/photo.jpg"
            alt="Profile"
            className="rounded-full w-48 h-48 md:w-64 md:h-64 shadow-lg"
          />
        </div>

        <div className="w-full md:w-2/3">
          <div className="bg-gray-50 dark:bg-darkCard p-6 rounded-lg shadow-lg">
            <h2
              className="text-4xl md:text-5xl font-semibold text-blue-600 dark:text-darkAccent"
              style={{ fontFamily: "'Lora', serif" }}
            >
              About Me
            </h2>
            <p
              className="mt-6 text-lg md:text-xl leading-relaxed text-gray-700 dark:text-darkText"
              style={{ fontFamily: "'Lora', serif" }}
            >
              Hi, I’m Donát! I’m finishing my degree in Computer Science and have a big passion for
              technology, especially cybersecurity. I enjoy delving into how systems operate, uncovering issues, and developing solutions that improve safety and efficiency.
            </p>
            <p
              className="mt-4 text-lg md:text-xl leading-relaxed text-gray-700 dark:text-darkText"
              style={{ fontFamily: "'Lora', serif" }}
            >
              I’ve worked on building software and managing IT systems, and it’s taught me a lot about
              solving real-world problems. I enjoy learning new things, working with others, and
              improving myself every day. There’s always something new in tech, and that’s what keeps
              me excited!
            </p>
            <p
              className="mt-4 text-lg md:text-xl leading-relaxed text-gray-700 dark:text-darkText"
              style={{ fontFamily: "'Lora', serif" }}
            >
              I’m especially interested in areas like cryptocurrency and blockchain because they’re
              changing how we think about privacy and security. Cybersecurity isn’t just a job for
              me—it’s something I care about because it has such a big impact on people and businesses.
            </p>
            <p
              className="mt-4 text-lg md:text-xl leading-relaxed text-gray-700 dark:text-darkText"
              style={{ fontFamily: "'Lora', serif" }}
            >
              I’m open to new opportunities and would be happy to relocate if the right one comes
              along. If you’re looking for someone who’s curious, hardworking, and ready to take on
              new challenges, let’s connect!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
