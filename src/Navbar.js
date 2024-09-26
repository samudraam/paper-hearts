import "./Navbar.css";
import logo from "./logo.svg";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <motion.img
            src={logo}
            alt="Brand Logo"
            animate={{ scale: 1, rotate: -360, x: [-400, 0] }}
            transition={{ duration: 2 }}
          />
          <h1>Paper Hearts</h1>
          <motion.img
            src={logo}
            alt="Brand Logo"
            animate={{ scale: 1, rotate: 360, x: [400, 0] }}
            transition={{ duration: 2 }}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
