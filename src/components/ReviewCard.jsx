import React from "react";

const ReviewCard = ({ review }) => {
  return (
    <div className="review flex items-start p-4 border-b border-gray-200 bg-gray-300 rounded-lg">
      <div
        className="user-img w-16 h-16 bg-cover bg-center rounded-full mr-4"
        style={{
          backgroundImage: `url(${review.reviewer.photo})`,
        }}
      ></div>
      <div className="desc flex-1">
        <div className="flex justify-between items-center mb-2">
          <h4 className="text-lg font-semibold">{review.reviewer.name}</h4>
          <span className="text-sm text-gray-500">{review.createdAt}</span>
        </div>
        <p className="text-gray-700">{review.description}</p>
      </div>
    </div>
  );
};

export default ReviewCard;
