const StickshiftProject = {
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
    "User-centric matching system",
    "Privacy-focused messaging",
    "AI integration (planned)"
  ]
};

export default stickshift;