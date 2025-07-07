import React from "react";
import ContactForm from "./ContactForm";
import { motion } from "motion/react";

const Contact = () => {
  return (
    <div className="flex justify-center items-center flex-col gap-15  md:py-3 min-h-screen" id="Contact">
      <motion.h3
              initial={{ y: -40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: "linear" }}
              viewport={{ once: true, amount: 0.5 }}
              className="text-2xl text-blue-600 font-bold">Get In Touch</motion.h3>
      <h1 className="text-4xl font-bold text-center md:text-start w-96 md:w-auto">
        Join Us Now And start your learning Journey
      </h1>
      <p className=" xl:text-xl text-gray-800  px-9 py-4">
        Join more than 7500 students and level up you english skills.
      </p>


        <motion.div 
                initial={{ y: -40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: "linear" }}
                viewport={{ once: true, amount: 0.3 }}
        
        className="px-9 py-4 flex flex-col justify-center gap-10 text-gray-700">
          <ContactForm />
      </motion.div>
    </div>
  );
};

export default Contact;
