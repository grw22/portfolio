'use client'

import React, { useState } from 'react';
import { Github, ExternalLink, ArrowLeft } from 'lucide-react';

// Project data - move this to a separate file in a real application
const projectsData = [
  {
    id: "project1",
    title: "Stickshift: A networking app",
    description: "Building a networking app for career changers - still in progress!",
    longDescription: (
      <div className="space-y-6">
        <p>Project Overview:</p>
        <p>To start: using WordCloud to visualise the most commonly occurring words in both types of email.</p>
        
        <p>First the reject emails:</p>
        <img 
          src="/images/data-analysis-project-images/reject-emails-wordcloud.png" 
          alt="Word cloud of rejection emails" 
          className="rounded-lg shadow-md my-4"
        />
              </div>

    ),
    tags: ["Product", "Wireframing", "Roadmapping", "AI"],
    features: [
      "Feature 1 - User-centric matching system",
      "Feature 2 - Privacy-focused messaging",
      "Feature 3 - AI integration (planned)"
    ]
  },
  {
    id: "project2",
    title: "Analysing email sentiment",
    description: "Using Python to analyse languge sentiment of job application responses.",
    longDescription: `
 <p>To start: using WordCloud to visualise the most commonly occurring words in both types of email.</p>
    
    <p>First the reject emails:</p>
    <img 
      src="/images/data-analysis-project-images/reject-emails-wordcloud.png" 
      alt="Word cloud of rejection emails" 
      className="rounded-lg shadow-md my-4"
    />
    
    <p>And then the non-rejection emails:</p>
    <img 
      src="/images/data-analysis-project-images/non-reject-emails-wordcloud.png" 
      alt="Word cloud of non-rejection emails" 
      className="rounded-lg shadow-md my-4"
    />
    
    <p>And also creating them in list form:</p>
    <div className="bg-gray-50 p-4 rounded-lg font-mono text-sm">
      <p>Top 20 Most Common Words in 'reject' Emails:</p>
      <p>[('interest', 81), ('thank', 68), ('position', 68), ('time', 57), ('unfortunately', 53), ('software', 47), ('move', 44), ('application', 41), ('apply', 36), ('forward', 34), ('opportunity', 32), ('engineer', 31), ('best', 31), ('team', 29), ('job', 29), ('career', 29), ('appreciate', 28), ('wish', 27), ('candidate', 26), ('role', 25)]</p>
      <p className="mt-4">Top 20 Most Common Words in 'not_reject' Emails:</p>
      <p>[('software', 44), ('job', 35), ('application', 32), ('engineer', 32), ('please', 31), ('resume', 30), ('team', 26), ('thank', 26), ('review', 23), ('experience', 23), ('get', 22), ('work', 21), ('email', 21), ('u', 21), ('position', 21), ('account', 20), ('developer', 19), ('new', 19), ('receive', 18), ('detective', 18)]</p>
    </div>

    <p>But this doesn't really tell us much that is hugely groundbreaking, right? So the next step was to put these words into bigrams and trigrams, for example...</p>
    
    <img 
      src="/images/data-analysis-project-images/bigrams-and-trigrams.png" 
      alt="Bigrams and trigrams visualization" 
      className="rounded-lg shadow-md my-4"
    />

    <p>Now we're getting somewhere! By analysing bi- and trigrams, we can check for meaningful word collocations. In the context of job hunting, useful feedback might include phrases like 'lack of experience' or 'strong candidate.' However, as seen above, both rejection and non-rejection emails appear to be templated or automated responses.</p>

    <p>So what about the overall sentiment of the emails? Using nltk's VADER sentiment analysis, we are able to establish sentiment intensity of each email group, where a higher score represents more positive vibes from the text:</p>

    <div className="bg-gray-50 p-4 rounded-lg font-mono text-sm">
      <p>Average Sentiment of Rejection Emails: 0.7727876923076923</p>
      <p>Average Sentiment of Non-Rejection Emails: 0.711946875</p>
    </div>

    <p>Seems weird, right? This feels counterintuitive, particularly as rejection emails are rated as more positive than non-rejection. Given we have already established that reject emails are almost all going to be templates, this tells us that the vocabulary used is carefully chosen to avoid causing upset to the recipient. This means that phrases that we can see in the dataset such as 'thank you,' 'appreciate your time,' and 'qualifications are impressive' would be logged by VADER as skewing positive even though they can feature in a rejection email.</p>

    <p>Let's look at this visually:</p>
    <img 
      src="/images/data-analysis-project-images/density-plot-of-sentiment-scores.png" 
      alt="Sentiment density plot" 
      className="rounded-lg shadow-md my-4"
    />

    <p>This density plot tells us rejection emails contain notably more positive words whilst the non-rejection emails contain a more even spread of positive words. The longer tail to the left of the x-axis also confirms that a number of the rejection emails do contain a negative slant. The green area in the middle of the density plot also reinforces the neutral nature of much of the contents of non-rejection emails.</p>

    <p>But let's check how well our model can put words together by topic - in scientific terms this is known as Latent Dirichlet Allocation (LDA).</p>
    
    <img 
      src="/images/data-analysis-project-images/coherence-score.png" 
      alt="LDA topic modeling visualization" 
      className="rounded-lg shadow-md my-4"
    />

    <p>For 100 passes, 54 passes should be optimal to establish the most accurate topic models. (Don't worry - before doing this, a number of repeating words were added to the stopwords to reduce noise). The coherence score and topics across all the emails came out as follows:</p>

    <div className="bg-gray-50 p-4 rounded-lg font-mono text-sm space-y-4">
      <p>Coherence Score: 0.5062862705042857</p>
      <p>Topics for all emails:</p>
      <p>0 ['Engineer', 'know', 'opportunities', 'let', 'please', 'future', 'development', 'role', 'may', 'best']</p>
      <p>1 ['application', 'process', 'hiring', 'selected', 'get', 'applying', 'next', 'step', 'moved', 'Unfortunately']</p>
      <p>2 ['application', 'Engineer', 'forward', 'Unfortunately', 'moving', 'Please', 'Developer', 'Regards', 'encourage', 'States']</p>
      <p>3 ['Developer', 'best', 'employment', 'Java', 'positions', 'offer', 'open', 'United', 'States', 'opportunity']</p>
      <p>4 ['decided', 'move', 'Seth', 'Thanks', 'Hi', 'another', 'get', 'Unfortunately', 'career', 'forward']</p>
    </div>

    <h3 className="text-xl font-semibold mt-8 mb-4">Key Takeaways 🥡</h3>
    <ul className="list-disc pl-6 space-y-2">
      <li>The dataset showed little difference in basic vocabulary between successful and unsuccessful applications.</li>
      <li>Templated language suggests Polyniak's job hunt didn't progress beyond initial filtering, with many companies using templates for candidate communications.</li>
      <li>Sentiment analysis struggled to differentiate between genuine positivity and polite rejection language.</li>
      <li>Topic modelling showed rejection emails focus on future opportunities, while non-rejection emails highlight next steps.</li>
      <li>The dataset is limited (129 emails), affecting the effectiveness of the models due to small size and similar lexical richness across subsets.</li>
      <li>Suggested improvements include refining non-rejection emails into job-related and non-job-related categories, using models like BERTopic, and incorporating additional data points such as time and date for further analysis.</li>
    </ul>
  </div>
)
    `,
    tags: ["Python", "Data visualisation", "Data Analysis"],
    // githubUrl: "https://github.com/yourusername/project2",
    // liveUrl: "https://project2.com",
    features: [
      "Feature 1 - Describe a key feature",
      "Feature 2 - Another important feature",
      "Feature 3 - One more notable feature"
    ]
  },
  {
    id: "project3",
    title: "Computational Creativity",
    description: "Using OpenAI's API to create fake movie synopses and then draw movie posters based on what it generated",
    longDescription: `
      In-depth look at your third project. This is a great place to discuss:
      
      • The technology stack and why you chose it
      • The development process
      • Any interesting algorithms or data structures you implemented
      • Performance considerations
      • Future improvements you'd like to make
    `,
    tags: ["Python", "OpenAI", "Generative Art", "APIs", "Computational Creativity"],
    // githubUrl: "https://github.com/yourusername/project3",
    // liveUrl: "https://project3.com",
    features: [
      "Feature 1 - Describe a key feature",
      "Feature 2 - Another important feature",
      "Feature 3 - One more notable feature"
    ]
  }
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
            <div className="rounded-lg overflow-hidden mb-6">
              <img 
                src="/api/placeholder/800/400" 
                alt={`${project.title} preview`}
                className="w-full h-auto"
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
                  src="/images/stickshift-image-for-portfolio.png" 
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
