import React, { useState, useEffect } from "react";
import darkLight from "../../assets/logo/Contrast.png";
import { IoHomeSharp } from "react-icons/io5";
import { FaUserGraduate } from "react-icons/fa6";
import { FaFileCode } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";

const Navbar = () => {
  const [active, setActive] = useState("home");

  const navItems = [
    { id: "home", icon: IoHomeSharp, link: "#home" },
    { id: "about", icon: FaUserGraduate, link: "#about" },
    { id: "project", icon: FaFileCode, link: "#project" },
    { id: "contact", icon: FaMessage, link: "#contact" },
  ];

  useEffect(() => {
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {    
        if (entry.isIntersecting) {
          setActive(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: "0px",
      threshold: 0.6, 
    });

    navItems.forEach((item) => {
      const section = document.getElementById(item.id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="md:w-[8%] md:m-auto md:flex sm:flex text-center flex-col justify-between gap-2 max-h-[800px] h-screen bg-white fixed right-0 top-0 hidden">
      <div className="m-auto w-10 h-[100vh] flex flex-col justify-around items-center">
        {/* Contrast Icon */}
        <span className="border border-gray-300 rounded-full p-2">
          <img src={darkLight} alt="Contrast" />
        </span>

        {/* Nav Icons */}
        {navItems.map((item) => {
          const IconComponent = item.icon;
          const isActive = active === item.id;
          return (
            <a href={item.link}>
            <span
              key={item.id}
              onClick={() => setActive(item.id)} // Optional: click also sets active
              className={`rounded-full p-2 cursor-pointer transition-all duration-300 ${
                isActive ? "border-yellow-400 text-yellow-400" : "border-gray-300 text-gray-700"
              } border`}
            >
                <IconComponent className="text-xl" />
            </span>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Navbar;
