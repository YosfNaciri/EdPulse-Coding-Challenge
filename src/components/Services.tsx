
import ServiceCard from "./ServiceCard";
import { motion } from "motion/react";

const Services = () => {
  return (
    <div className="flex justify-center items-center flex-col gap-15 bg-linear-to-r from-cyan-200 to-blue-50 min-h-screen py-4 md:py-1" id="Services">
      <motion.h3
        initial={{ y: -40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "linear" }}
        viewport={{ once: true, amount: 0.5 }}
        className="text-2xl text-blue-600 font-bold"
      >
        Why Us
      </motion.h3>
      <h1 className="text-4xl font-bold text-center md:text-start w-96 md:w-auto">
        We offer an All-In-One{" "}
        <span className="text-blue-600 underline">E-Learning Platform.</span>
      </h1>
      <p className=" xl:text-xl px-9 py-4">
        Discover a smarter way to grow with flexible, engaging courses that fit
        your life and fuel your future.
      </p>
      <motion.div 
       initial={{ z: -40, opacity: 0 }}
        whileInView={{ z: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "linear" }}
        viewport={{ once: true, amount: 0.5 }}
      className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 ">
        <ServiceCard
          title="Private Teaching"
          description="Unlock your full potential with private teaching tailored to your pace, goals, and learning style."
          color="#29B9E7"
        />
        <ServiceCard
          title="24/7 Availability"
          description=" Around the clock access to lessons and support, you can learn whenever it suits you."
          color="#F48C06"
        />
        <ServiceCard
          title="Interactive Whiteboard"
          description="Draw, write, and explore ideas together in real time."
          color="#5B72EE"
        />
        <ServiceCard
          title="Affordable Prices"
          description="Enjoy top-tier learning experiences at accessible prices."
          color="#EB493A"
        />
      </motion.div>
    </div>
  );
};

export default Services;
