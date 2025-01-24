'use client'

import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { projectsData } from '../../components/projects/projectData.js';

export default function ProjectPage({ params }) {
  const id = React.use(params).id;
  const project = projectsData.find(p => p.id === id);

  if (!project) {
    return <div className="text-gray-900 dark:text-white">Project not found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <main className="max-w-5xl mx-auto px-4 py-12">
        <Link 
          href="/"
          className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Portfolio
        </Link>

        <article>
          {/* Project Header */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 mb-8">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">{project.title}</h1>
            
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Project Preview */}
            <div className="rounded-lg overflow-hidden mb-6 h-96 bg-gray-200 dark:bg-gray-700">
              <img 
                src={project.image}
                alt={`${project.title} preview`}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Project Description */}
            <div className="prose max-w-none dark:prose-invert">
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">{project.description}</p>
              <div className="whitespace-pre-line text-gray-600 dark:text-gray-300">
                {project.longDescription}
              </div>
            </div>
          </div>

          {/* Features Section */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Key Features</h2>
            <ul className="space-y-4">
              {project.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-blue-500 dark:bg-blue-400 rounded-full mt-2 mr-3"></span>
                  <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </article>
      </main>
    </div>
  );
}