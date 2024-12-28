import React from 'react';
import GitHubCalendar from 'react-github-calendar';

const GitHubContributions: React.FC = () => {
  return (
    <section className="py-8 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-black mb-6">GitHub Contributions</h2>
        <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-md">
          <GitHubCalendar
            username="govardhan-06"
            blockSize={15}
            blockMargin={5}
            fontSize={14}
            colorScheme="light"
          />
        </div>
      </div>
    </section>
  );
};

export default GitHubContributions;
