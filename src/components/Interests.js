const Interests = () => {
    return (
      <section id="interests" className="py-16 bg-gray-50 dark:bg-darkBackground">
        <div className="container mx-auto px-4">
          <h2
            className="text-4xl md:text-5xl font-semibold text-blue-600 dark:text-darkAccent"
            style={{ fontFamily: "'Lora', serif" }}
          >
            Interests
          </h2>
  
          <div className="mt-8 bg-white dark:bg-darkCard p-6 rounded-lg shadow-lg">
            <p
              className="text-lg md:text-xl leading-relaxed text-gray-700 dark:text-darkText"
              style={{ fontFamily: "'Lora', serif" }}
            >
              I’ve always been deeply fascinated by technology and its endless possibilities. One of
              my biggest passions is <strong>cybersecurity</strong>, which I find incredibly exciting
              because it’s like solving a giant, ever-changing puzzle. I love learning how systems work,
              identifying vulnerabilities, and figuring out ways to make them stronger and safer.
            </p>
            <p
              className="mt-4 text-lg md:text-xl leading-relaxed text-gray-700 dark:text-darkText"
              style={{ fontFamily: "'Lora', serif" }}
            >
              I’m also very interested in <strong>cryptocurrency and blockchain technology</strong>.
              The way these technologies are transforming how we think about trust, security, and
              financial systems is something I find truly inspiring. I enjoy exploring the technical
              side of blockchain and its potential applications in areas like decentralized finance
              and secure data sharing.
            </p>
            <p
              className="mt-4 text-lg md:text-xl leading-relaxed text-gray-700 dark:text-darkText"
              style={{ fontFamily: "'Lora', serif" }}
            >
              Beyond the technical world, I have a strong interest in <strong>problem-solving and innovation</strong>.
              Whether it’s coming up with creative solutions for a coding challenge or brainstorming
              new ways to approach a project, I’m always eager to tackle new challenges and push the
              boundaries of what’s possible.
            </p>
            <p
              className="mt-4 text-lg md:text-xl leading-relaxed text-gray-700 dark:text-darkText"
              style={{ fontFamily: "'Lora', serif" }}
            >
              In my free time, I enjoy staying up to date with the latest trends in technology and
              cybersecurity. I often participate in challenges and competitions, as they give me the
              chance to test my skills and learn from others in the field. I also love experimenting
              with new programming languages and frameworks, which keeps me curious and constantly
              learning.
            </p>
          </div>
        </div>
      </section>
    );
  };
  
  export default Interests;
  