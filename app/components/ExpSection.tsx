import React from 'react';
import ExperienceCard from './ExpCard';
import { supabase } from '../../lib/supabase';

type Experience = {
  id: number;
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

// Fetch experience from Supabase
export const fetchExperience = async (): Promise<Experience[]> => {
  const { data, error } = await supabase
    .from('Experiences')
    .select();

  if (error) {
    console.error('Error fetching experience:', error.message);
    throw new Error('Failed to fetch experience');
  }

  return data as Experience[];
};

const ExperienceSection = async () => {
  const experience = await fetchExperience();

  return (
    <section className="py-8 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-black mb-6">Experience</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {experience && experience.length > 0 ? (
            experience.map((exp) => {
              console.log(exp);
              return (
                <ExperienceCard
                  key={exp.id}
                  experience={exp}
                />
              );
            })
          ) : (
            <p className="text-gray-500">No experience found.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
