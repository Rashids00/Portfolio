import { Pro } from "../constants/main";
import { FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div className="border-b border-neutral-700 pb-4">
      <motion.h1 
         whileInView={{opacity: 1, y: 0}}
         initial={{opacity:0, y: -100}}
         transition={{duration: 0.5}}
        className="my-20 text-center text-4xl">Projects</motion.h1>
      <div className="items-center">
        {Pro.map((pro, index) => (
          <div key={index} className="mb-12 flex flex-wrap lg:justify-center">
            <motion.div 
              whileInView={{opacity: 1, x: 0}}
              initial={{opacity: 0, x: -100}}
              transition={{duration: 1}}
              className="w-full lg:w-1/4">
              <img
                src={pro.image}
                width={170}
                height={170}
                alt={pro.title}
                className="mb-8 rounded"
              />
            </motion.div>
            <motion.div 
              whileInView={{opacity: 1, x: 0}}
              initial={{opacity: 0, x: 100}}
              transition={{duration: 1}}
              className="w-full max-w-xl lg:w-3/4">
              <h6 className="font-semibold mb-2">
                {pro.title} <span className="font-thin text-sm">{pro.sub}</span>
              </h6>
              <p className="mb-2 text-neutral-400">{pro.description}</p>
              {pro.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-500"
                >
                  {tech}
                </span>
              ))}
              <div>
              <a href={pro.github} target="blank" class="mt-3 relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
                <span class="flex items-center gap-1 relative px-5 py-1 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                   Github
                   <FaExternalLinkAlt />
                </span>
              </a>
            </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
