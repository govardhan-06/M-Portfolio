import React from 'react';

const techStacks = [
    { name: 'Apache Cassandra', logo: '/apache_cassandra-icon.svg' },
    { name: 'Bootstrap', logo: '/bootstrap-plain-wordmark.svg' },
    { name: 'C', logo: '/c-original.svg' },
    { name: 'C++', logo: '/cplusplus-original.svg' },
    { name: 'Django', logo: '/django.svg' },
    { name: 'Docker', logo: '/docker-original-wordmark.svg' },
    { name: 'Express', logo: '/express-original-wordmark.svg' },
    { name: 'Figma', logo: '/figma-icon.svg' },
    { name: 'Firebase', logo: '/firebase-icon.svg' },
    { name: 'GetPostman', logo: '/getpostman-icon.svg' },
    { name: 'Git', logo: '/git-scm-icon.svg' },
    { name: 'Google Cloud', logo: '/google_cloud-icon.svg' },
    { name: 'HTML5', logo: '/html5-original-wordmark.svg' },
    { name: 'Java', logo: '/java-original.svg' },
    { name: 'JavaScript', logo: '/javascript-original.svg' },
    { name: 'Linux', logo: '/linux-original.svg' },
    { name: 'MATLAB', logo: '/Matlab_Logo.png' },
    { name: 'Microsoft Azure', logo: '/microsoft_azure-icon.svg' },
    { name: 'MongoDB', logo: '/mongodb-original-wordmark.svg' },
    { name: 'Next.js', logo: '/nextjs-2.svg' },
    { name: 'Node.js', logo: '/nodejs-original-wordmark.svg' },
    { name: 'OpenCV', logo: '/opencv-icon.svg' },
    { name: 'Pandas', logo: '/pandas-original.svg' },
    { name: 'PostgreSQL', logo: '/postgresql-original-wordmark.svg' },
    { name: 'Python', logo: '/python-original.svg' },
    { name: 'PyTorch', logo: '/pytorch-icon.svg' },
    { name: 'React', logo: '/react-original-wordmark.svg' },
    { name: 'Redis', logo: '/redis-original-wordmark.svg' },
    { name: 'Scikit-learn', logo: '/Scikit_learn_logo_small.svg' },
    { name: 'Tailwind CSS', logo: '/tailwindcss-icon.svg' },
  ];

const TechStack: React.FC = () => {
  return (
    <section className="py-8 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-black mb-6">Tech Stack</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {techStacks.map((tech) => (
            <div
              key={tech.name}
              className="flex flex-col items-center justify-center bg-white border border-gray-200 p-4 rounded-lg shadow-md"
            >
              <img
                src={tech.logo}
                alt={tech.name}
                className="w-16 h-16 object-contain mb-4"
              />
              <p className="text-black text-sm font-medium">{tech.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
