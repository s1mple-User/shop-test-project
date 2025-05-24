import React from 'react';
import { FaTelegramPlane } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import "../App.css"
const About = ({ dark }) => {
  return (
    <div className={`${dark ? "darkGradient" : "lightGradient"} w-full xl:h-screen md:h-full flex items-center justify-center`}>
      <div className={`w-full md:w-11/12 lg:w-7/12 p-6 md:p-8 rounded-lg gap-5 shadow-xl flex
         flex-col md:flex-row items-center ${dark ? "bg-slate-900" : "bg-white"}`}>
        <div className="flex justify-center md:w-1/2 mb-6 md:mb-0">
          <img
            src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fru.postermywall.com%2Findex.php%2Fart%2Ftemplate%2F440f641c672f64c4419fef8ff82b9c9a%2Fshop-logo-design-template&psig=AOvVaw1CI_8l0jA6wMhzBnHFpz8g&ust=1748092552836000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCPiTobDWuY0DFQAAAAAdAAAAABAE"
            alt="About Us"
            className="w-80 h-64 rounded-lg shadow-lg md:w-96 md:h-60"
          />
        </div>

        <div className="flex flex-col items-start md:w-1/2">
          <h2 className={`text-3xl md:text-4xl font-bold mb-2 ${dark ? "text-yellow-400" : "text-slate-800"}`}>About Us</h2>
          <p className={`text-base md:text-lg mb-3 ${dark ? "text-white" : "text-slate-800"}`}>
            We develop solutions that transform the approach to digital products, improving their quality and performance.
          </p>

          <ul className={`list-disc pl-5 ${dark ? "text-white" : "text-slate-800"} mb-6`}>
            <li>Modern technologies</li>
            <li>User-centered design</li>
            <li>High speed and performance</li>
          </ul>

          

          <div className="flex flex-wrap space-x-4 md:space-x-6 mt-4">
            <button className={`rounded-lg p-3 border-none ${dark ? "border-sky-600" : "border-yellow-400"} 
            ${dark ? "hover:bg-sky-500" : "hover:bg-amber-300"}
            transition ${dark ? "bg-sky-700" : "bg-amber-400"} text-white`}>
              Learn More
            </button>
            <button className={`rounded-lg border-2 p-3 ${dark ? "text-white" : ""} hover:bg-amber-300
             ${dark ? "hover:bg-sky-600" : "hover:bg-yellow-400"}
             bg-none transition ${dark ? "border-sky-600" : "border-yellow-400"} `}>
              Contact Us
            </button>
          </div>

          <div className="flex space-x-3 mt-3 ml-6 md:mt-6">
            <FaTelegramPlane className={`text-3xl md:text-4xl transition duration-300 ${dark ? "bg-none" : "bg-sky-600"} hover:bg-slate-400 border-2 rounded-md p-2 text-white`} />
            <FaYoutube className={`text-3xl md:text-4xl transition duration-300 ${dark ? "bg-none" : "bg-red-700"} hover:bg-slate-400 border-2 rounded-md p-2 text-white`} />
            <FaTwitter className={`text-3xl md:text-4xl transition duration-300 ${dark ? "bg-none" : "bg-yellow-400"} hover:bg-slate-400 border-2 rounded-md p-2 text-white`} />
            <IoLogoGithub className={`text-3xl md:text-4xl transition duration-300 ${dark ? "bg-none" : "bg-neutral-900"} hover:bg-slate-400 border-2 rounded-md p-2 text-white`} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
