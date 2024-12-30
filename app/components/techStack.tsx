import React from 'react';
import Image from 'next/image';

const techStacks = [
  { name: 'Apache Cassandra', logo: '/techstacks/apache_cassandra-icon.svg' },
  { name: 'Bootstrap', logo: '/techstacks/bootstrap-plain-wordmark.svg' },
  { name: 'C', logo: '/techstacks/c-original.svg' },
  { name: 'C++', logo: '/techstacks/cplusplus-original.svg' },
  { name: 'Django', logo: '/techstacks/django.svg' },
  { name: 'Docker', logo: '/techstacks/docker-original-wordmark.svg' },
  { name: 'Express', logo: '/techstacks/express-original-wordmark.svg' },
  { name: 'Figma', logo: '/techstacks/figma-icon.svg' },
  { name: 'Firebase', logo: '/techstacks/firebase-icon.svg' },
  { name: 'Postman', logo: '/techstacks/getpostman-icon.svg' },
  { name: 'Git', logo: '/techstacks/git-scm-icon.svg' },
  { name: 'Google Cloud', logo: '/techstacks/google_cloud-icon.svg' },
  { name: 'HTML5', logo: '/techstacks/html5-original-wordmark.svg' },
  { name: 'Java', logo: '/techstacks/java-original.svg' },
  { name: 'JavaScript', logo: '/techstacks/javascript-original.svg' },
  { name: 'Linux', logo: '/techstacks/linux-original.svg' },
  { name: 'MATLAB', logo: '/techstacks/Matlab_Logo.png' },
  { name: 'Microsoft Azure', logo: '/techstacks/microsoft_azure-icon.svg' },
  { name: 'MongoDB', logo: '/techstacks/mongodb-original-wordmark.svg' },
  { name: 'Next.js', logo: '/techstacks/nextjs-2.svg' },
  { name: 'Node.js', logo: '/techstacks/nodejs-original-wordmark.svg' },
  { name: 'OpenCV', logo: '/techstacks/opencv-icon.svg' },
  { name: 'Pandas', logo: '/techstacks/pandas-original.svg' },
  { name: 'PostgreSQL', logo: '/techstacks/postgresql-original-wordmark.svg' },
  { name: 'Python', logo: '/techstacks/python-original.svg' },
  { name: 'PyTorch', logo: '/techstacks/pytorch-icon.svg' },
  { name: 'React', logo: '/techstacks/react-original-wordmark.svg' },
  { name: 'Redis', logo: '/techstacks/redis-original-wordmark.svg' },
  { name: 'Scikit-learn', logo: '/techstacks/Scikit_learn_logo_small.svg' },
  { name: 'Tailwind CSS', logo: '/techstacks/tailwindcss-icon.svg' },
];

const TechStack: React.FC = () => {
  return (
    <section className="py-8 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-black mb-6">Tech Stack</h2>
        <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-8 gap-4">
          {techStacks.map((tech) => (
            <div
              key={tech.name}
              className="flex items-center justify-center p-2"
            >
              <Image
                src={tech.logo}
                alt={tech.name}
                width={48}
                height={48}
                className="w-12 h-12 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
