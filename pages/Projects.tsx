import React from 'react';
import { projectsData, Project } from '../data/projects';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
  <div className="bg-[#1e233c] rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
    <img
      src={project.image}
      alt={project.title}
      style={{ objectFit: 'cover', width: '100%', height: 'auto' }}
    />
    <div className="p-6">
      <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
      <p className="text-gray-400 mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.map((tag, index) => (
          <span key={index} className="bg-[#2a2f4c] text-blue-400 px-3 py-1 rounded-md text-sm">
            {tag}
          </span>
        ))}
      </div>
      <div className="flex items-center gap-4">
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
          >
            <FaExternalLinkAlt />
            <span>Voir le site</span>
          </a>
        )}
        <a
          href="#" // Replace with actual source link if available
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
        >
          <FaGithub />
          <span>Source</span>
        </a>
      </div>
    </div>
  </div>
);

const Projects = () => {
  return (
    <div className="bg-hero min-h-screen w-full py-20 px-4 md:px-12 lg:px-24 text-white">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold mb-12 text-center md:text-left">Projets</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projectsData.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
