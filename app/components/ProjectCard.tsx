"use client";
import React, { useState } from "react";

type Project = {
  name: string;
  desc: string;
  repo_link: string;
  start: string;
  end: string;
  contributor: string | null;
};

type ProjectCardProps = {
  project: Project;
};

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);

  const handleDescriptionToggle = () => {
    setIsDescriptionExpanded((prev) => !prev);
  };

  const truncatedDesc =
    project.desc.length > 150 ? project.desc.slice(0, 150) + "..." : project.desc;

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 max-w-lg mx-auto hover:shadow-xl transition-shadow duration-300">
      <h3 className="text-2xl font-semibold text-gray-900 mb-4">{project.name}</h3>

      <p className="text-gray-600 text-base mb-4">
        {isDescriptionExpanded ? project.desc : truncatedDesc}
      </p>

      {project.desc.length > 150 && (
        <button
          onClick={handleDescriptionToggle}
          className="text-dark-400 font-semibold mt-2"
        >
          {isDescriptionExpanded ? "Show Less" : "Show More"}
        </button>
      )}

      <div className="mt-4">
        <div className="flex items-center space-x-4">
          <div className="flex-1">
            <span className="font-semibold text-gray-800">Start:</span> {project.start}
          </div>
          <div className="flex-1">
            <span className="font-semibold text-gray-800">End:</span> {project.end}
          </div>
        </div>
      </div>

      <div className="mb-4">
        <span className="font-semibold text-gray-800">Contributors:</span>
        {project.contributor && project.contributor.length > 0 ? (
          <ul className="list-disc pl-5 text-gray-600">
            {project.contributor.split(",").map((contributor, index) => (
              <li key={index}>{contributor.trim()}</li>
            ))}
          </ul>
        ) : (
          <span className="text-gray-500">No contributors listed</span>
        )}
      </div>

      <div className="mt-6">
        <a
          href={project.repo_link}
          className="text-dark-400 font-semibold"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Repository
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
