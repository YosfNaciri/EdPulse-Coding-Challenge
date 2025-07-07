import React from "react";
import TestimonialCard from "./TestemonialCard";
import HeroImg from "../assets/Hero-Girl.png";

const tempRevData = [
  {
    "name": "Gloria Rose",
    "review": "Thank you so much for your help. It's exactly what I've been looking for. You won't regret it. It really saves me time and effort.",
    "rating": 5,
    "reviewCount": 12,
    "imageUrl": "/images/gloria.png"
  },
  {
    "name": "Thomas Nguyen",
    "review": "This platform exceeded my expectations. The content is rich and the support is unmatched. Highly recommended!",
    "rating": 5,
    "reviewCount": 8,
    "imageUrl": "/images/thomas.png"
  },
  {
    "name": "Amina El Idrissi",
    "review": "Easy to use, affordable, and incredibly helpful. I noticed improvement in just a few days!",
    "rating": 4,
    "reviewCount": 5,
    "imageUrl": "/images/amina.png"
  },
  {
    "name": "Lucas Morgan",
    "review": "A well-designed learning experience. The interactive tools made studying feel natural and enjoyable.",
    "rating": 5,
    "reviewCount": 15,
    "imageUrl": "/images/lucas.png"
  },

]
/** a cleaner way would be to use json server or get the data from a remote endpoint but we will keep it this way for simplicity */


const Reviews = () => {
  return (
    <div className="flex justify-center items-center flex-col gap-15  md:py-3 min-h-screen" id="Reviews">
      <h3 className="text-2xl text-blue-600 font-bold">Our Testemonials</h3>
      <h1 className="text-4xl font-bold text-center md:text-start w-96 md:w-auto">
        What Our Students Say About Us
      </h1>
      <p className=" xl:text-xl text-gray-800  px-9 py-4">
        We have more than 5000 positive ratings from our users around the
        world,Some of the students and teachers were greatly helped by the
        platform.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 ">
 
     {tempRevData.map((user, index) => (
           <TestimonialCard
          key={index}
          name={user.name}
          review={user.review}
          rating={user.rating}
          reviewCount={user.reviewCount}

          imageUrl={HeroImg}
        />
        ))}
      </div>
    </div>
  );
};

export default Reviews;
