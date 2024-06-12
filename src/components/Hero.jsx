import ProPic from "../assets/ProPic.jpg";
import { FaDownload } from "react-icons/fa6";
import CV from "../assets/CV.pdf";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: {x: -100, opacity: 0},
  visible: {
    x: 0,
    opacity: 1,
    transition: {duration: 0.5, delay: delay}
  }
})

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap lg:justify-center mt-4">
        <div className="w-full lg:w-1/2 ">
          <div className="flex flex-col  lg:items-start">
            <motion.h1
              variants={container(0)}
              initial = "hidden"
              animate = "visible"
              className="mx-4 pb-2 lg:pb-4 text-4xl  lg:mt-16 lg:text-6xl">
              Rashid S
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial = "hidden"
              animate = "visible" className="mx-4 pb-2 bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 bg-clip-text text-2xl  text-transparent">
              MERN Stack Developer
            </motion.span>
            <motion.p 
              variants={container(1)}
              initial = "hidden"
              animate = "visible"
              className="mx-4 my-1 lg:pt-2 font-light text-6xl  lg:text-start mb-2">
              Welcome to the{" "}
              <span className="text-red-800 font-semibold">Profile.</span>
            </motion.p>
            <motion.p 
              variants={container(1.5)}
              initial = "hidden"
              animate = "visible"
              className="mx-4 mb-6 font-light text-3xl lg:text-start">
              Let's explore together.
            </motion.p>
            <motion.div
              variants={container(2)}
              initial = "hidden"
              animate = "visible"
              className="mx-4 mb-5">
              <a
                href={CV}
                download="Rashid-MERN-CV"
                class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800"
              >
                <span class="flex items-center gap-2 relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  Download CV
                  <FaDownload />
                </span>
              </a>
            </motion.div>
          </div>
        </div>
        <div className="w-full lg:w-2/6 lg:p-8">
          <div className="flex justify-center">
            <motion.img 
              initial={{x: 100, opacity: 0}}
              animate = {{x:0, opacity: 1}}
              transition={{duration: 1, delay: 1.8}}
              className="rounded-3xl" src={ProPic} alt="ProPic" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
