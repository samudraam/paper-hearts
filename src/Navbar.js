import React from "react";
import logo from "./logo.svg";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar sticky top-0 z-1000 bg-black h-[90px] z-50">
      <Link to="/paper-hearts">
        <div className="container mx-auto px-4 flex justify-between items-center h-full">
          <div className="logo flex items-center text-white m-auto p-2">
            <motion.img
              className="w-[50px] h-[50px] mx-[50px] md:mx-[30px]"
              src={logo}
              alt="Brand Logo"
              animate={{ scale: 1, rotate: -360, x: [-400, 0] }}
              transition={{ duration: 2 }}
            />
            <h1
              className="font-[600] font-[Bungee Hairline] m-0 whitespace-nowrap"
              style={{ fontSize: "clamp(18px, 8vw, 40px)" }}
            >
              Paper Hearts
            </h1>
            <motion.img
              className="w-[50px] h-[50px] mx-[50px] md:mx-[30px]"
              src={logo}
              alt="Brand Logo"
              animate={{ scale: 1, rotate: 360, x: [400, 0] }}
              transition={{ duration: 2 }}
            />
          </div>
        </div>
      </Link>
    </nav>
  );
};

export default Navbar;
