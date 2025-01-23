'use client'

import Link from 'next/link'

export const computationalCreativity = {
  id: "computational-creativity",
  title: "'Prompts, Robots, Action!': AI-Powered Movie Poster Generator",
  image: "/images/computational-creativity-header-image.png",
  description: "An AI system that generates movie posters by combining GPT-4, DALL-E 3, and BERT for creative content generation and sentiment analysis.",
  tags: ["Python", "OpenAI API", "Machine Learning", "BERT", "Data Analysis"],
  features: [
    "Multi-model AI integration (GPT-3.5/4, DALL-E 3, BERT)",
    "Robust error handling and rate limiting",
    "Modular data pipeline architecture",
    "Comprehensive logging and analytics system",
    "Custom art style classification system"
  ],
  longDescription: (
    <div className="space-y-6">
      <section>
        <h3 className="text-xl font-semibold mb-4">Examples of the Generated Movie Posters</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((num) => (
            <Link 
              key={num} 
              href={`/projects/computational-creativity/posters/poster${num}`}
              className="block overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={`/images/computational-creativity-images/poster${num}.png`}
                alt={`Generated Movie Poster ${num}`}
                className="w-full h-64 object-cover"
              />
            </Link>
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-2">Status</h3>
        <p>Completed (May 2024)</p>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-2">Inspiration</h3>
        <p>
          This project emerged from exploring the intersection of AI and creative industries, 
          specifically investigating how Large Language Models could contribute to visual 
          content generation. With AI's growing influence in film production, I wanted to 
          build a system that could demonstrate both technical sophistication and creative 
          capability in generating movie marketing materials.
        </p>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-2">Technical Challenges & Solutions</h3>
        <div className="space-y-4">
          <div>
            <h4 className="font-medium">API Integration & Rate Management</h4>
            <ul className="list-disc pl-6">
              <li>Implemented efficient handling of OpenAI API calls across multiple services (GPT-3.5/4, DALL-E 3)</li>
              <li>Developed robust error handling and rate limiting system</li>
              <li>Created fallback mechanisms for API failures to ensure system reliability</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium">Data Pipeline Architecture</h4>
            <ul className="list-disc pl-6">
              <li>Designed modular system with four main components: Prompt Generator, Review Generator, Sentiment Analysis, and Poster Generator</li>
              <li>Built logging system for tracking generated content using CSV for efficient data management</li>
              <li>Implemented systematic content cataloging for analysis and comparison</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium">Machine Learning Integration</h4>
            <ul className="list-disc pl-6">
              <li>Transitioned from TextBlob to BERT for more sophisticated sentiment analysis</li>
              <li>Mapped emotional content to 100 distinct art styles using custom classification system</li>
              <li>Integrated multiple ML models (GPT, BERT, DALL-E) into a cohesive workflow</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-2">Implementation Metrics</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>Generated and analyzed 50+ unique movie posters</li>
          <li>Achieved 85% successful generation rate across all system components</li>
          <li>Survey results (n=30) showed:
            <ul className="list-disc pl-6 mt-2">
              <li>3.4/5 average attention-grabbing score</li>
              <li>3.2/5 average creativity rating</li>
              <li>3.0/5 average marketing effectiveness</li>
            </ul>
          </li>
          <li>GPT-4 showed 15% improvement in generating engaging content compared to GPT-3.5</li>
        </ul>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-2">Skills Demonstrated</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li><span className="font-medium">Programming:</span> Python, API integration, error handling, data processing</li>
          <li><span className="font-medium">ML/AI:</span> OpenAI APIs (GPT-3.5, GPT-4, DALL-E 3), BERT implementation</li>
          <li><span className="font-medium">Data:</span> CSV handling, logging systems, metrics tracking</li>
          <li><span className="font-medium">Research:</span> Survey design, statistical analysis, user feedback collection</li>
          <li><span className="font-medium">Project Management:</span> Scope definition, iteration planning, documentation</li>
        </ul>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-2">Development Process</h3>
        <div className="space-y-4">
          <div>
            <h4 className="font-medium">1. Research & Planning</h4>
            <ul className="list-disc pl-6">
              <li>Investigated existing AI art generation systems</li>
              <li>Analyzed movie poster design principles</li>
              <li>Defined success metrics and evaluation frameworks</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium">2. Implementation</h4>
            <ul className="list-disc pl-6">
              <li>Built modular components with clear interfaces</li>
              <li>Integrated multiple AI services</li>
              <li>Created robust logging and tracking systems</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium">3. Testing & Validation</h4>
            <ul className="list-disc pl-6">
              <li>Conducted user surveys using AIDA marketing model</li>
              <li>Performed comparative analysis between GPT versions</li>
              <li>Validated system outputs against design objectives</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium">4. Documentation & Analysis</h4>
            <ul className="list-disc pl-6">
              <li>Created comprehensive technical documentation</li>
              <li>Analyzed system performance and user feedback</li>
              <li>Identified areas for future enhancement</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-2">Next Steps</h3>
        <ul className="list-disc pl-6">
          <li>Implement advanced prompt engineering for improved image generation</li>
          <li>Expand art style training dataset for better aesthetic matching</li>
          <li>Develop automated A/B testing system for poster effectiveness</li>
          <li>Create API endpoint for external service integration</li>
          <li>Add support for custom art style definitions</li>
        </ul>
      </section>
    </div>
  )
};