'use client'

export const emailAnalysis = {
  id: "project2",
  title: "Analysing email sentiment",
  image: "/images/email-analysis-header-image.jpg",
  description: "Using Python to analyse languge sentiment of job application responses.",
  longDescription: (
    <div className="space-y-6">
      <p>Kaggle user 'sethpoly' was, once upon a time, applying to a lot of a jobs and wanted to build in automation to help with this applications. Of course, as the best of us know, job hunting comes with a lot of rejection emails, so he <a href="https://www.kaggle.com/datasets/sethpoly/application-rejection-emails" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">created a dataset to filter rejection and non/rejection emails</a>. This task was to see what insights could be gained from analysing the text of these emails.</p>
      
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
  ),
  tags: ["Python", "Data visualisation", "Data Analysis"],
  features: [
    "Sentiment Analysis using VADER",
    "Topic Modeling with LDA",
    "Text visualization with WordCloud"
  ]
};