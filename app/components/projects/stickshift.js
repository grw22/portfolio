'use client'

export const stickshift = {
  id: "project1",
  title: "Stickshift: A networking app",
  image: "/images/stickshift-image-for-portfolio.png",
  description: "Building a networking app for career changers - still in progress!",
  longDescription: (
      <div className="space-y-6">
        <div className="flex items-center space-x-2">
          <span className="font-semibold">Status:</span>
          <span className="text-amber-600">Work in Progress (WIP)</span>
        </div>
    
        <div>
          <h3 className="font-semibold mb-2">Inspiration</h3>
          <p>
            This app concept stems from my own experience transitioning careers and recognising the challenges of building meaningful professional networks. During a Product Management course, I collaborated on a project aimed at creating an app to connect career changers and mentors. That experience sparked the idea for this app—a platform where individuals could find guidance, mentorship, and opportunities to share knowledge, making career changes smoother and more accessible.
          </p>
        </div>
    
        <div>
          <h3 className="font-semibold mb-2">Project Objectives</h3>
          <ol className="list-decimal pl-5 space-y-2">
            <li>Facilitate mentorship for career changers by providing personalised connections.</li>
            <li>Empower mentors to refine their skills in knowledge sharing and self-improvement.</li>
            <li>Showcase my product management, UX design, and technical skills in a practical portfolio project.</li>
          </ol>
        </div>
    
        <div>
          <h3 className="font-semibold mb-2">The Process</h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-medium mb-1">1. Initial Planning</h4>
              <p>
                The idea evolved during my product management course, where I learned to create user-focused solutions, manage ambiguity, and collaborate effectively. I started by defining the app's primary goal: to connect career changers with mentors in a way that is intuitive, private, and impactful.
              </p>
            </div>
            
            <div>
              <h4 className="font-medium mb-1">2. User Flow Design</h4>
              <p>
                Using <span className="font-medium">Miro</span>, I mapped out the entire user flow to visualise the onboarding process, matching mechanism, messaging functionality, and account management. This provided a clear blueprint for the app's structure and functionality.
              </p>
              <div className="w-full h-96 my-4">
                <iframe 
                  src="https://miro.com/app/live-embed/uXjVLrhDYnw=/?moveToViewport=-17602,-1913,1921,1590&embedId=523749116345" 
                  className="w-full h-full"
                  frameBorder="0" 
                  scrolling="no" 
                  allow="fullscreen; clipboard-read; clipboard-write" 
                  allowFullScreen
                />
            </div>
          </div>
    
            <div>
              <h4 className="font-medium mb-1">3. Wireframing</h4>
              <p>
                I created medium-fidelity wireframes in <span className="font-medium">Balsamiq</span> to bring the app's structure to life. The wireframes focus on key screens such as login, profile creation, matching, and messaging. These designs are iterative and will be refined based on feedback and testing.
              </p>
              {/* [Insert link or screenshot of wireframe slides here] */}
            </div>
          </div>
        </div>
    
        <div>
          <h3 className="font-semibold mb-2">Key Features</h3>
          <ul className="space-y-2">
            <li>
              <span className="font-medium">User-Centric Matching System:</span> Personalised filters to connect career changers with mentors based on shared goals, skills, and preferences.
            </li>
            <li>
              <span className="font-medium">Privacy-Focused Messaging:</span> Ensures mentors have control over interactions by concealing read/received statuses until a message is accepted.
            </li>
            <li>
              <span className="font-medium">AI-Driven Match Suggestions (Planned):</span> AI integration to recommend matches based on user profiles, improving accuracy and efficiency.
            </li>
          </ul>
        </div>
    
        <div>
          <h3 className="font-semibold mb-2">Next Steps</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Finalise wireframes and prototype key workflows.</li>
            <li>Test the user experience with potential users to gather feedback.</li>
            <li>Begin integrating AI functionality for match suggestions.</li>
            <li>Refine the app's branding and user interface to align with accessibility standards.</li>
          </ul>
        </div>
    
        <p>
          This project exemplifies my ability to turn ideas into actionable designs, demonstrating my skills in user research, product strategy, and technical planning. While it's a work in progress, I'm excited to share how this app evolves as I continue to develop it.
        </p>
      </div>
    ),
  tags: ["Product", "Wireframing", "Roadmapping", "AI"],
  features: [
    "User-centric matching system",
    "Privacy-focused messaging",
    "AI integration (planned)"
  ]
};