'use client'

import React, { useState } from 'react';
import { Github, ExternalLink, ArrowLeft } from 'lucide-react';

// Import project components
import { stickshift } from './components/projects/stickshift.js';
import { emailAnalysis } from './components/projects/email-analysis.js';
import { computationalCreativity } from './components/projects/computational-creativity.js';

// Create projects array
const projectsData = [
  stickshift,
  emailAnalysis,
  computationalCreativity
];

// Project Details Page Component
const ProjectPage = ({ project, onBack }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-5xl mx-auto px-4 py-12">
        <button 
          onClick={onBack}
          className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Portfolio
        </button>

        <article>
          {/* Project Header */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">{project.title}</h1>
            
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>

          {/* Project Links 
            <div className="flex gap-4 mb-6">
              <a 
                href={project.githubUrl}
                className="inline-flex items-center px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-5 h-5 mr-2" />
                View Code
              </a>
              <a 
                href={project.liveUrl}
                className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                Live Demo
              </a>
            </div> */}

            {/* Project Preview */}
            <div className="rounded-lg overflow-hidden mb-6 h-96 bg-gray-200">
              <img 
                src={project.image}
                alt={`${project.title} preview`}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Project Description */}
            <div className="prose max-w-none">
              <p className="text-lg text-gray-600 mb-8">{project.description}</p>
              <div className="whitespace-pre-line text-gray-600">
                {project.longDescription}
              </div>
            </div>
          </div>

          {/* Features Section */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Key Features</h2>
            <ul className="space-y-4">
              {project.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></span>
                  <span className="text-gray-600">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </article>
      </main>
    </div>
  );
};

// Home Page Component
const HomePage = ({ onProjectClick }) => (
  <div className="min-h-screen bg-gray-50">
    {/* Header */}
    <header className="bg-white shadow-sm">
      <div className="max-w-5xl mx-auto px-4 py-6">
        <h1 className="text-3xl font-bold text-gray-900">Greg Waller</h1>
        <p className="mt-2 text-lg text-gray-600">Tech Professional</p>
      </div>
    </header>

    {/* Main Content */}
    <main className="max-w-5xl mx-auto px-4 py-12">
      {/* About Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">About Me</h2>
        <p className="text-gray-600">
        Hi, I’m Greg, a problem-solver who loves turning data into stories that drive meaningful impact. With an MSc in Computer Science specialising in Artificial Intelligence, I combine technical expertise with a knack for collaboration and stakeholder management to deliver results.

I’ve worked across industries, from contributing to a £1bn infrastructure project to supporting customers and projects in fast-paced environments. I’m passionate about creating user experiences that matter—streamlining processes, solving problems, and making technology accessible.

Let’s connect and build something great together!
        </p>
      </section>

      {/* Projects Grid */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              {/* Project Preview */}
              <div className="h-48 bg-gray-200">
                <img 
                  src={project.image}
                  alt={`${project.title} preview`}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {project.description}
                </p>
                
                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                {/* View Project Button */}
                <button 
                  onClick={() => onProjectClick(project.id)}
                  className="inline-block px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-500"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>

    {/* Footer */}
    <footer className="bg-white border-t border-gray-200 mt-12">
      <div className="max-w-5xl mx-auto px-4 py-6">
        <p className="text-center text-gray-600">
          © {new Date().getFullYear()} Greg Waller. All rights reserved.
        </p>
      </div>
    </footer>
  </div>
);

// Main App Component
const Portfolio = () => {
  const [currentProjectId, setCurrentProjectId] = useState(null);

  const currentProject = projectsData.find(p => p.id === currentProjectId);

  return currentProject ? (
    <ProjectPage 
      project={currentProject}
      onBack={() => setCurrentProjectId(null)}
    />
  ) : (
    <HomePage 
      onProjectClick={(projectId) => setCurrentProjectId(projectId)}
    />
  );
};

export default Portfolio;
