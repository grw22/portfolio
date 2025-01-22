'use client'

import React from 'react';  // Add this import at the top
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { projectsData } from '../../components/projects/projectData.js';

export default function ProjectPage({ params }) {
  const id = React.use(params).id;  // This is the new way
  const project = projectsData.find(p => p.id === id);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-5xl mx-auto px-4 py-12">
        <Link 
          href="/"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Portfolio
        </Link>

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
}