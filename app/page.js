'use client'

import Link from 'next/link';
import { projectsData } from './components/projects/projectData.js';
import { contactSection as ContactSection } from './components/ContactSection';
import { ThemeToggle } from './components/ThemeToggle';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
    {/* Header */}
    <header className="bg-white dark:bg-gray-800 shadow-sm">
      <div className="max-w-5xl mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Greg Waller</h1>
            <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">Tech Professional</p>
            </div>
            <div className="flex items-center gap-4"> {/* Added container for navigation items */}
              <a 
                href="#contact" 
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              >
                Contact
              </a>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 py-12">
        {/* About Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">About Me</h2>
          <div className="space-y-4">
            <p className="text-gray-900 dark:text-gray-300">
              I'm a tech professional passionate about building products that make a meaningful difference in people's lives. With experience in customer success and data analytics at companies like TaskRabbit and Booking.com, I've developed a deep appreciation for how technology can enhance human experiences when guided by real user needs and data-driven insights.
            </p>
    
            <p className="text-gray-900 dark:text-gray-300">
              Recently, I've strengthened my technical foundation with an MSc in Computer Science (AI), combining this with my experience in delivering measurable improvements in user satisfaction and engagement. Beyond my professional work, I'm actively involved in community initiatives, including managing a non-profit cinema project that brings cultural experiences to underserved areas.
            </p>
    
            <p className="text-gray-900 dark:text-gray-300">
              I'm particularly excited about the transformative potential of AI and data-driven technologies, especially when applied thoughtfully to enhance accessibility, education, and human potential.
            </p>
          </div>
        </section>

        {/* Projects Grid */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectsData.map((project, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
                {/* Project Preview */}
                <div className="h-48 bg-gray-200 dark:bg-gray-700">
                  <img 
                    src={project.image}
                    alt={`${project.title} preview`}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Project Info */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>
                  
                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  {/* View Project Button */}
                  <Link 
                    href={`/projects/${project.id}`}
                    className="inline-block px-4 py-2 bg-blue-600 dark:bg-blue-500 text-white rounded-md hover:bg-blue-500 dark:hover:bg-blue-400"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <div id="contact">
        <ContactSection /> 
      </div>

      {/* Footer */}
      <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 mt-12">
        <div className="max-w-5xl mx-auto px-4 py-6">
          <p className="text-center text-gray-600 dark:text-gray-300">
            © {new Date().getFullYear()} Greg Waller. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}