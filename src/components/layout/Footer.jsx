import React from "react";

const Footer = () => {
  return (
    <footer className="relative pt-12 pb-8 bg-dark-gray text-light-gray max-h-[500px]">
      <div className="mb-4 text-center">
        <h3 className="text-sm sm:text-lg">
          © K <span className="text-sad-yellow">{" - "}Shop</span> 2023 |
          Developed by @Kuswanth_Kumar
        </h3>
      </div>

      <div className="flex justify-center items-center gap-x-4">
        <a
          className="text-4xl text-light-gray hover:text-sad-yellow hover:animate-bounce"
          target="_blank"
          href="https://github.com/kumar88888"
          rel="noreferrer"
        >
          <i className="bx bxl-github"></i>
        </a>

        <a
          className="text-4xl text-light-gray hover:text-sad-yellow hover:animate-bounce"
          target="_blank"
          href="https://www.linkedin.com/in/kuswanth-kumar-b06769187/"
          rel="noreferrer"
        >
          <i className="bx bxl-linkedin-square"></i>
        </a>

        <a
          className="text-4xl text-light-gray hover:text-sad-yellow hover:animate-bounce"
          target="_blank"
          href="https://www.linkedin.com/in/kuswanth-kumar-b06769187/"
          rel="noreferrer"
        >
          <i className="bx bxs-user-circle"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
