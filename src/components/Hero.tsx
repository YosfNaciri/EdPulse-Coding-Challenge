import React from "react";

import HeroImg from "../assets/Hero-Girl.png";

const Hero = () => {
  return (
    <div className="flex justify-start items-center flex-col min-h-screen">
      <div className="max-w-[1450px]">
        <div className="grid grid-cols-1 md:grid-cols-2 pt-5 md:pt-30">
          <div className=" space-y-6 flex flex-col justify-center items-center md:items-start">
            <h1 className="text-4xl xl:text-7xl font-bold text-center md:text-start w-96 md:w-auto">
              Enhance Your{" "}
              <span className="text-blue-600 underline">Skills</span> To Propel
              Your <span className="text-blue-600 underline">Career</span>{" "}
              Forward
            </h1>
            <p className="text-gray-600 w-96 xl:text-xl text-center md:w-auto md:text-start">
              Boost your skills with practical lessons, real-life conversations,
              and expert guidance. Join a learning path that’s fast, flexible,
              and built to help you communicate naturally.
            </p>
            <div>
              <button className="text-gray-800 text-2xl  font-bold bg-white hover:bg-blue-600 hover:text-amber-50 px-6 py-6 rounded-md cursor-pointer hover:shadow-xl">
                Get Started →
              </button>
            </div>
          </div>
          <div className="flex justify-center items-center -z-50">
            <img
              src={HeroImg}
              alt="HeroImg"
              className="mask-radial-farthest-side mask-radial-from-100% mask-radial-at-[50%_80%] w-80 md:w-full"
            />
          </div>
        </div>
        <div className="shadow-xl w-full grid grid-cols-2 md:grid-cols-4 bg-linear-to-r from-cyan-200 to-blue-50 md:rounded-3xl h-50 md:py-3">
          <div className="flex items-center justify-center flex-col gap-1">
            <h1 className="text-4xl xl:text-7xl font-bold">250+</h1>
            <h3 className="md:text-2xl ">subjects</h3>
          </div>
          <div className="flex items-center justify-center flex-col gap-1">
            <h1 className="text-4xl xl:text-7xl font-bold">150+</h1>
            <h3 className="md:text-2xl ">Professional tutors</h3>
          </div>
          <div className="flex items-center justify-center flex-col gap-1">
            <h1 className="text-4xl xl:text-7xl font-bold">250+</h1>
            <h3 className="md:text-2xl "> Courses</h3>
          </div>
            <div className="flex items-center justify-center flex-col gap-1">
            <h1 className="text-4xl xl:text-7xl font-bold">9000+</h1>
            <h3 className="md:text-2xl ">Hours</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
