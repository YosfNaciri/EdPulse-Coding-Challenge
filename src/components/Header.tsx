import React, { useEffect, useState } from "react";
import { HiMenu } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import logo from "../assets/edpulse-logo-dark.webp";
import { motion } from "motion/react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prevState) => !prevState);
  };

  useEffect(() => {
    /** juste to handle the scrolling while the nave menu is open on mobile view */
    if (isOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [isOpen]);

  return (
    <nav className="bg-white text-gray-800 sticky top-0">
      <div className="max-w-[1450px] mx-auto p-4 flex items-center justify-between">
        <motion.a
          href="#"
          className="w-20 md:w-40 z-20"
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "linear" }}
        >
          <img src={logo} alt="edpuls-logo" />
        </motion.a>

        {!isOpen && (
          <motion.div
            initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "linear" }}
            className="cursor-pointer md:hidden"
            onClick={toggleMenu}
          >
            <HiMenu size={30} />
          </motion.div>
        )}
        {isOpen && (
          <motion.div
            initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "linear" }}
            className="cursor-pointer md:hidden z-20"
            onClick={toggleMenu}
          >
            <IoClose size={30} />
          </motion.div>
        )}
        {isOpen ? (
          <div className="bg-white overflow-y-hidden fixed z-10 top-0 left-0 w-screen min-h-screen flex justify-center items-center flex-col gap-10 duration-300 ease-in">
            <a className="text-2xl font-bold" href="#">
              Home
            </a>
            <a className="text-2xl font-bold" href="#">
              Misson
            </a>
            <a className="text-2xl font-bold" href="#">
              Services
            </a>
            <a className="text-2xl font-bold" href="#">
              Reviews
            </a>
            <button className="bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded-md cursor-pointer">
              Contact Us
            </button>
          </div>
        ) : (
          <div className="bg-white overflow-y-hidden fixed z-10 top-0 left-[-150%] w-screen min-h-screen flex justify-center items-center flex-col gap-10 duration-300 ease-in"></div>
        )}
        <motion.div 
        initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "linear" }}
        className="hidden md:flex items-center gap-4 ">
          <a href="#">Home</a>
          <a href="#">Misson</a>
          <a href="#">Services</a>
          <a href="#">Reviews</a>
        </motion.div>
        <motion.div
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "linear" }}
          onClick={toggleMenu}
          className="hidden md:flex items-center gap-4"
        >
          <button className="text-amber-50 bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded-md cursor-pointer">
            Get Started
          </button>
        </motion.div>
      </div>
    </nav>
  );
};

export default Header;
