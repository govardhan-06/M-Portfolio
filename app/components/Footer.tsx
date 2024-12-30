import React from "react";

function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start space-y-6 lg:space-y-0">
          {/* Left Section (Brief Message) */}
          <div className="text-center lg:text-left">
            <h3 className="text-xl font-semibold text-black">
              Let&rsquo; connect...
            </h3>
            <p className="text-sm text-gray-600 mt-2">
              Feel free to reach out for collaborations, projects, or just to connect.
            </p>
          </div>

          {/* Middle Section (Contact Info) */}
          <div className="text-center lg:text-left mt-4 lg:mt-0">
            <h4 className="text-lg font-semibold text-black">Contact Info</h4>
            <ul className="text-sm text-gray-600 mt-2 space-y-1">
              <li>Email: <a href="mailto:govardhanar06@gmail.com" className="hover:underline">govardhanar06@gmail.com</a></li>
              <li>Phone: <a href="tel:+91-9400613758" className="hover:underline">+91-9400613758</a></li>
              <li>LinkedIn: <a href="https://www.linkedin.com/in/govardhan-a-r-29a700285/" target="_blank" rel="noopener noreferrer" className="hover:underline">linkedin.com/in/govardhan</a></li>
              <li>GitHub: <a href="https://github.com/govardhan-06" target="_blank" rel="noopener noreferrer" className="hover:underline">github.com/govardhan-06</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-6 text-center text-sm text-gray-500">
          © 2024 Govardhan A R. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
