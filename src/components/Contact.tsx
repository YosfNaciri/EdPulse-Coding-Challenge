import React from "react";
import ContactForm from "./ContactForm";
import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";

const Contact = () => {
  return (
    <div className="flex justify-center items-center flex-col gap-15  md:py-3 min-h-screen">
      <h3 className="text-2xl text-blue-600 font-bold">Get In Touch</h3>
      <h1 className="text-4xl font-bold text-center md:text-start w-96 md:w-auto">
        Join Us Now And start your learning Journey
      </h1>
      <p className=" xl:text-xl text-gray-800  px-9 py-4">
        Join more than 7500 students and level up you english skills.
      </p>


        <div className="px-9 py-4 flex flex-col justify-center gap-10 text-gray-700">
          <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
