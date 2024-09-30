import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const goToSteps = () => {
    navigate("/paper-hearts/steps");
  };
  return (
    <nav className="home h-screen flex flex-col">
      <div className="flex flex-row ">
        <div className="flex-1 mr-5 bg-magenta">
          <div className="inner text-center">
            <h1 className="px-[10%] mt-[30%] mb-0 font-medium text-blue-700 text-[8rem] font-serif">
              PAPER HEARTS
            </h1>
          </div>
          <div className="inner">
            <h2 className="font-bold text-4xl font-bungeehairline text-center">
              Multi-Media Project
            </h2>
          </div>
          <div className="inner">
            <h3 className="font-semibold mt-[5%] text-2xl font-bungeehairline text-center">
              A How To Guide
            </h3>
          </div>

          <div className="inner mt-6 text-center">
            <button
              className="bg-blue-500 text-white font-extrabold py-3 px-6 rounded-full shadow-lg hover:bg-blue-600 transition duration-300"
              onClick={goToSteps}
            >
              Go to Steps →
            </button>
          </div>
        </div>

        <div className="flex-1 bg-green">
          <div className="svg-container flex justify-center items-center h-screen">
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
