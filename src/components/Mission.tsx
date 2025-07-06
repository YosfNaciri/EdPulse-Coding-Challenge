import React from "react";
import Students from "../assets/students.png";

const Mission = () => {
  return (
    <div className="flex justify-center items-center flex-col gap-15 min-h-screen">
      <h3 className="text-2xl text-blue-500 font-bold">Our Mission</h3>

      <h1 className="text-4xl font-bold text-center md:text-start w-96 md:w-auto">
        Building Communication{" "}
        <span className="text-blue-500 underline">Skills </span>
        for the <span className="text-blue-500 underline">Leaders</span> of
        Tomorrow
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 max-w-[1450px]">
        <div className="flex justify-center items-center ">
          <img src={Students} alt="" className="w-80 md:w-100 xl:w-fit rounded-2xl shadow-xl"/>
        </div>
        <div className="px-9 py-4 flex flex-col justify-center gap-10 text-gray-700">
          <p className=" xl:text-xl ">
            Our comprehensive English programs are designed to develop your
            fluency, confidence, and communication skills for success in a
            global environment.
          </p>

          <p className=" xl:text-xl ">
            Through interactive instruction, practical application, and tailored
            support, we prepare learners to excel across academic, professional,
            and everyday settings.
          </p>

          <p className=" xl:text-xl ">
            Whether your goal is career advancement, international mobility, or
            personal growth, our courses offer a structured pathway to elevate
            your English and reach your full potential
          </p>
        </div>
      </div>
    </div>
  );
};

export default Mission;
