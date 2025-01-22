'use client'

import Link from 'next/link';
import { projectsData } from './components/projects/projectData.js';  // We'll create this

export default function HomePage() {
  return (
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
            Hi, I'm Greg, a problem-solver who loves turning data into stories that drive meaningful impact. With an MSc in Computer Science specialising in Artificial Intelligence, I combine technical expertise with a knack for collaboration and stakeholder management to deliver results.

            I've worked across industries, from contributing to a £1bn infrastructure project to supporting customers and projects in fast-paced environments. I'm passionate about creating user experiences that matter—streamlining processes, solving problems, and making technology accessible.

            Let's connect and build something great together!
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
                  <Link 
                    href={`/projects/${project.id}`}
                    className="inline-block px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-500"
                  >
                    View Details
                  </Link>
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
}