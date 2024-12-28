import React from 'react';

type Education = {
  institution: string;
  degree?: string;
  duration: string;
  grade?: string;
};

const educationData: Education[] = [
  {
    institution: 'Vellore Institute of Technology',
    degree: 'Bachelor of Technology - BTech, Computer Science',
    duration: 'Jul 2023 - May 2027',
  },
  {
    institution: 'Loyola School Thiruvananthapuram',
    degree: 'Grade: 97.8%',
    duration: 'May 2021 - Apr 2023',
  },
  {
    institution: 'Sarvodaya Vidyalaya',
    degree: 'Grade: 96.6%',
    duration: 'Jun 2011 - Mar 2021',
  },
];

const EducationCard: React.FC<Education> = ({ institution, degree, duration, grade }) => {
  return (
    <div className="border border-gray-200 bg-white rounded-lg p-6 shadow-md">
      <h3 className="text-lg font-semibold text-black">{institution}</h3>
      {degree && <p className="text-gray-600">{degree}</p>}
      <p className="text-gray-600">{duration}</p>
      {grade && <p className="text-gray-600">{grade}</p>}
    </div>
  );
};

const EducationSection: React.FC = () => {
  return (
    <section className="py-8 bg-gray-100">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-semibold text-black mb-6">Education</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {educationData.map((education, index) => (
            <EducationCard
              key={index}
              institution={education.institution}
              degree={education.degree}
              duration={education.duration}
              grade={education.grade}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
