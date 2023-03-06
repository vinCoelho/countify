function Footer() {
  return (
    <div className="hidden md:flex px-3 py-2 bg-gray-900 bg-opacity-70 rounded-lg absolute bottom-2 text-white font-mono text-xs">
      <h3>
        ୵୵ by{" "}
        <a
          className="text-[#ff79c6] hover:text-[#f1fa8c]"
          href="https://www.linkedin.com/in/viniciusraposo/"
          target="_blank"
        >
          vinCoelho
        </a>{" "}
        •{" "}
        <a
          className="text-[#f1fa8c] hover:text-[#ff79c6]"
          href="https://github.com/vinCoelho/countify"
          target="_blank"
        >
          GitHub
        </a>{" "}
        repository
      </h3>
    </div>
  );
}

export default Footer;
