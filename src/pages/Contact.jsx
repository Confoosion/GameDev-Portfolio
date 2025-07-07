const Contact = () => {
  return (
    <div className="pt-20 px-6 max-w-2xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
      <p className="mb-6">I'm always open to chatting about opportunities, collaborations, or anything at all.
                          Feel free to reach out!
      </p>

      <div className="space-y-4">
        <div>
          <a
            href="https://github.com/Confoosion"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            GitHub: Confoosion
          </a>
        </div>
        <div>
          <a
            href="https://www.linkedin.com/in/jakesales13"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            LinkedIn: Jake Sales
          </a>
        </div>
        <div>
          <span className="text-gray-300">Email: </span>
          <a href="mailto:jakesales@gmail.com" className="text-blue-400 hover:underline">
            jakesales@gmail.com
          </a>
        </div>
        <div>
          <span className="text-gray-300">Discord: </span>
          <span className="text-white">confoosion</span>
        </div>
      </div>
    </div>
  );
};

export default Contact;
