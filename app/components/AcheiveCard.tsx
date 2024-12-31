import React from "react";

type Achievement = {
  name: string;
  issue_org: string;
  date: string;
  cred_link: string;
};

type AchievementCardProps = {
  achievement: Achievement;
};

const AchievementCard: React.FC<AchievementCardProps> = ({ achievement }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 max-w-lg mx-auto hover:shadow-xl transition-shadow duration-300">
      <h3 className="text-xl font-semibold text-black mb-2">
        {achievement.name}
      </h3>

      <div className="text-gray-800 text-sm mb-2">
        <span className="font-medium">Issued By:</span> {achievement.issue_org}
      </div>

      <div className="text-gray-800 text-sm mb-2">
        <span className="font-medium">Date:</span> {achievement.date}
      </div>

      {achievement.cred_link && (
        <a
          href={achievement.cred_link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 text-sm underline hover:text-blue-700 transition-colors duration-200"
        >
          View Credential
        </a>
      )}
    </div>
  );
};

export default AchievementCard;
