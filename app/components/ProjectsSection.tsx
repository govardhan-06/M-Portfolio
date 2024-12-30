import React from 'react';
import ProjectCard from './ProjectCard';
import { supabase } from '../../lib/supabase';

type Project = {
  id:number;
  name: string;
  desc: string;
  repo_link: string;
  start: string;
  end: string;
  contributor: string;
};

// Fetch projects from Supabase
export const fetchProjects = async (): Promise<Project[]> => {
  const { data, error } = await supabase
    .from('Projects')
    .select();

  if (error) {
    console.error('Error fetching projects:', error.message);
    throw new Error('Failed to fetch projects');
  }

  return data as Project[];
};

const ProjectsSection = async () => {
  const projects = await fetchProjects();

  return (
    <section className="py-8  bg-white" id="projects">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-black mb-6">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects && projects.length > 0 ? (
            projects.map((project) => {
              return (
                <ProjectCard
                  key={project.id}
                  project={project}
                />
              );
            })
          ) : (
            <p className="text-gray-500">No projects found.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
