import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const goToSteps = () => {
    navigate("/paper-hearts/steps");
  };
  const goToVideo = () => {
    window.open("https://www.youtube.com/watch?v=7-sFsBGntag", "_blank");
  };

  return (
    <nav className="home h-screen flex flex-col">
      {/* Adjust flex direction based on screen size */}
      <div className="flex flex-col md:flex-row w-full h-full">
        {/* Left Section */}
        <div className="flex-1 mr-5 bg-magenta p-6 md:p-10">
          <div className="inner text-center">
            <h1 className="px-[10%] mt-[10%] mb-0 font-medium text-blue-700  md:text-[6rem] lg:text-[8rem] text-[5rem] font-serif">
              PAPER HEARTS
            </h1>
          </div>
          <div className="inner mt-6">
            <h2 className="font-bold text-4xl font-bungeehairline text-center">
              Multi-Media Project
            </h2>
          </div>
          <div className="inner mt-6">
            <h3 className="font-semibold mt-[5%] text-2xl font-bungeehairline text-center">
              A How To Guide
            </h3>
          </div>

          <div className="inner mt-6 text-center flex flex-col items-center space-y-4">
            <button
              className="inline-block w-auto bg-blue-500 text-white font-extrabold py-3 px-6 rounded-full shadow-lg hover:bg-black hover:text-white transition duration-300"
              onClick={goToSteps}
            >
              Go to Steps →
            </button>
            <button
              className="inline-block w-auto bg-blue-500 text-white font-extrabold py-3 px-6 rounded-full shadow-lg hover:bg-black hover:text-white transition duration-300"
              onClick={goToVideo}
            >
              Go to Video →
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex-1 bg-green p-6 md:p-10">
          <div className="svg-container flex justify-center items-center h-full">
            <svg
              width="695"
              height="665"
              viewBox="0 0 695 665"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <motion.g
                animate={{ scale: [0.8, 0.9, 0.8] }}
                transition={{
                  duration: 4,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatType: "loop",
                }}
              >
                <g filter="url(#filter0_d_16_7)">
                  <path
                    d="M292.747 75H184.507L92 163.344V371.018L390.918 655.792L690 371.018V163.344L605.5 75H479.021L390.918 147.521L292.747 75Z"
                    fill="#011580"
                  />
                  <path
                    d="M292.747 75H184.507L92 163.344V371.018L390.918 655.792L690 371.018V163.344L605.5 75H479.021L390.918 147.521L292.747 75Z"
                    stroke="black"
                  />
                </g>
                <g filter="url(#filter1_d_16_7)">
                  <path
                    d="M259.118 37H147.982L53 127.353V339.75L359.916 631L667 339.75V127.353L580.239 37H450.376L359.916 111.17L259.118 37Z"
                    fill="#001CAD"
                  />
                  <path
                    d="M259.118 37H147.982L53 127.353V339.75L359.916 631L667 339.75V127.353L580.239 37H450.376L359.916 111.17L259.118 37Z"
                    stroke="black"
                  />
                </g>
                <g filter="url(#filter2_d_16_7)">
                  <path
                    d="M215.818 1H102.148L5 92.1136V306.299L318.914 600L633 306.299V92.1136L544.261 1H411.436L318.914 75.7948L215.818 1Z"
                    fill="#3555FD"
                  />
                  <path
                    d="M215.818 1H102.148L5 92.1136V306.299L318.914 600L633 306.299V92.1136L544.261 1H411.436L318.914 75.7948L215.818 1Z"
                    stroke="black"
                  />
                </g>
              </motion.g>
              <defs></defs>
            </svg>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Home;
