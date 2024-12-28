"use client";
import React from "react";

function Hero() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen((cur) => !cur);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false),
    );
  }, []);

  return (
    <>
      {/* Hero Section */}
      <header className="bg-white py-16">
        <div className="container mx-auto flex flex-col lg:flex-row items-center text-center lg:text-left space-y-6 lg:space-y-0">
          {/* Left Section (Text) */}
          <div className="lg:w-1/2 space-y-4 lg:pr-4">
            {/* Hero Heading */}
            <h1 className="text-2xl lg:text-5xl font-semibold text-black">
              Hi, I'm Govardhan
            </h1>
            {/* Brief Intro */}
            <p className="text-base lg:text-lg text-gray-600 max-w-2xl mx-auto lg:mx-0">
                I am an 18-year-old software developer passionate about crafting innovative and efficient solutions. Over the past year, I’ve gained proficiency in Python, Java, C, and C++, using these skills to develop AI systems tackling real-world challenges. My interests span full-stack development, AI/ML, and Web3/blockchain, shaping my career aspirations.
                <br />
                <br />
                I thrive on expanding my knowledge through hackathons, community engagement, and challenging projects. With a focus on clean code, user-centric design, and emerging technologies, I aim to deliver impactful solutions while staying ahead in this fast-evolving field.
            </p>
            {/* Call to Action Button */}
            <a
              href="#projects"
              className="inline-block mt-6 px-8 py-3 text-white bg-black rounded-lg text-lg font-medium hover:bg-gray-800 transition duration-300"
            >
              View My Work
            </a>
          </div>

          {/* Right Section (Image) */}
          <div className="lg:w-1/2 mt-6 lg:mt-0 lg:pl-4">
            <div className="w-56 h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden mx-auto">
              <img
                src="/profile.jpg"
                alt="Govardhan"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Hero;