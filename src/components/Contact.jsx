import { contact } from "../constants/main";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div 
   
      className="border-b border-neutral-900 pb-10">
        <motion.h1 
          whileInView={{opacity: 1, y: 0}}
          initial={{opacity: 0, y: 100}}
          transition={{duration: 0.5}}
          className="mt-10 mb-6 text-center text-4xl">Get in Touch...</motion.h1>
        <div className="text-center">
            <motion.p 
               whileInView={{opacity: 1, x: 0}}
               initial={{opacity: 0, x: 100}}
               transition={{duration: 0.5, delay: 0.5}}
              className="my-2">{contact.mob}</motion.p>
        <motion.div
            whileInView={{opacity: 1, x: 0}}
            initial={{opacity: 0, x: -100}}
            transition={{duration: 0.5, delay: 0.5}}>
            <a href="#" className="border-b">{contact.email}</a>
        </motion.div>
        </div>
    </div>
  )
}

export default Contact