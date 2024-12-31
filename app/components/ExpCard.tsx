"use client";
import React, { useState } from "react";

type Experience = {
  title: string;
  desc: string;
  emp_type: string;
  comp_name: string;
  loc: string;
  loc_type: string;
  start: string;
  end: string;
  curr_work: boolean;
};

type ExperienceCardProps = {
  experience: Experience;
};

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 max-w-lg mx-auto hover:shadow-xl transition-shadow duration-300">
      <h3 className="text-xl font-semibold text-black mb-4">{experience.title}</h3>

      <p className="text-gray-600 text-base mb-4">
        {showMore ? experience.desc : `${experience.desc.slice(0, 100)}...`}
        {experience.desc.length > 100 && (
          <button
            onClick={toggleShowMore}
            className="text-black ml-2 hover:underline focus:outline-none"
          >
            {showMore ? "Show Less" : "Show More"}
          </button>
        )}
      </p>

      <div className="mb-4">
        <span className="font-semibold text-gray-800">Employment Type:</span> {experience.emp_type}
      </div>
      <div className="mb-4">
        <span className="font-semibold text-gray-800">Company:</span> {experience.comp_name}
      </div>
      <div className="mb-4">
        <span className="font-semibold text-gray-800">Location:</span> {experience.loc}
      </div>

      <div className="mb-4">
        <span className="font-semibold text-gray-800">Duration:</span> {experience.start} -{" "}
        {experience.curr_work ? "Present" : experience.end}
      </div>
    </div>
  );
};

export default ExperienceCard;
