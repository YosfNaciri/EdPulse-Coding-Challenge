import React from "react";

interface TestimonialProps {
  name: string;
  review: string;
  rating: number;
  reviewCount?: number;
  imageUrl: string;
}

const TestimonialCard: React.FC<TestimonialProps> = ({
  name,
  review,
  rating,
  reviewCount = 0,
  imageUrl,
}) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 max-w-sm text-center">
      <img
        src={imageUrl}
        alt={`${name}'s photo`}
        className="w-0 h-0 md:w-24 md:h-24 rounded-full mx-auto mb-4 object-cover"
      />
      <p className="text-gray-700 text-sm italic mb-4">"{review}"</p>
      <div className="flex justify-center items-center mb-1">
        {Array.from({ length: rating }).map((_, i) => (
          <span key={i} className="text-yellow-400 text-lg">★</span>
        ))}
        {Array.from({ length: 5 - rating }).map((_, i) => (
          <span key={i} className="text-gray-300 text-lg">★</span>
        ))}
      </div>
      <p className="text-sm text-gray-500">
        {name} · {reviewCount} reviews on EdPulse
      </p>
    </div>
  );
};

export default TestimonialCard;
