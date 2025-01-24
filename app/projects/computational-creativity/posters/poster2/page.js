'use client'

import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function PosterPage() {
  const posterData = {
    number: 2,
    title: "Beneath the Veil of Time",
    review: <p>"Beneath the Veil of Time" is a movie that was released in the 2000s - an era that was filled with a renaissance of innovative film concepts, ground-breaking special effects, and an emergence of new talent. This film perfectly encapsulates the spirit of the time, providing a refreshing take on the cinematic experience.

    "Beneath the Veil of Time" is a beautifully crafted film that immerses the viewer into a world of mystery and intrigue. The plot is a thought-provoking exploration of time, reality, and the human condition, filled with unexpected twists and turns that keep you on the edge of your seat. The narrative is both engaging and complex, successfully holding the audience's attention from start to finish.
    
    The performances are top-notch, with the cast delivering stellar performances that embody their characters perfectly. The chemistry between the actors is palpable, creating a deep emotional connection that allows the audience to fully invest in their journeys.
    
    Visually, the movie is nothing short of stunning. The cinematography is exceptional, with each frame meticulously composed to create a visually stunning experience. The use of special effects is tastefully done, adding to the overall aesthetic of the film without ever becoming a distraction.
    
    The film's score complements the visuals beautifully, creating an immersive audio-visual experience. The haunting melodies and stirring orchestral pieces enhance the emotional depth of the narrative, further drawing the audience into the world of the film.
    
    "Beneath the Veil of Time" manages to combine all the elements of a great film - an engaging story, strong performances, impressive visuals, and a compelling score - to create a cinematic experience that is both entertaining and thought-provoking. It is a testament to the creativity and talent of the 2000s era and a must-watch for any film enthusiast. 
    
    In conclusion, "Beneath the Veil of Time" is a remarkable film that showcases the innovation and creativity of the 2000s. With its captivating story, excellent performances, and stunning visuals, it is a movie that leaves a lasting impression. The film is a shining example of the cinematic brilliance that the 2000s had to offer.</p>
,
    variables: {
      genre: "Action",
      plot: "None",
      decade: "None",
      actors: "None",
      director: "None",
      country: "None",
},
    artStyle: {
      selected: "Pointillism",
      reason: "Selected based on sentiment analysis by BERT",
    },
    aidaScores: {
      attention: 4.0,
      interest: 3.4,
      desire: 3.5,
      action: 3.3,
      creativity: 3.4,
      overall: 3.5
    }
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Link 
        href="/projects/computational-creativity" 
        className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Project
      </Link>

      <h1 className="text-3xl font-bold mb-6">{posterData.title}</h1>

      <div className="rounded-lg overflow-hidden mb-8 shadow-lg max-w-sm mx-auto">
        <img
          src={`/images/computational-creativity-images/poster${posterData.number}.png`}
          alt={`Generated movie poster for ${posterData.title}`}
          className="w-full h-auto"
        />
      </div>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Generation Variables</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {Object.entries(posterData.variables).map(([key, value]) => (
            <div key={key} className="bg-gray-50 p-4 rounded-lg">
              <span className="font-bold capitalize">{key}: </span>
              <span>{value}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Movie Review Prompt</h2>
        <div className="bg-gray-50 p-6 rounded-lg">
          <p className="text-gray-800">Create a movie review based on the following facts about the movie. You should also create a unique title of your choosing. It was released in the 2000s.</p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Generated Review</h2>
        <div className="bg-gray-50 p-6 rounded-lg">
          <p className="text-gray-800">{posterData.review}</p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Suggested Art Style</h2>
        <div className="bg-gray-50 p-6 rounded-lg">
          <p className="text-gray-800">{posterData.artStyle.selected}</p>
          <p className="text-gray-600 italic">{posterData.artStyle.reason}</p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Movie Poster Prompt</h2>
        <div className="bg-gray-50 p-6 rounded-lg">
          <p className="text-gray-800">Create a movie poster in a Pointillism style based on the following movie review:
Movie Review: ""Beneath the Veil of Time""

"Beneath the Veil of Time" is a movie that was released in the 2000s - an era that was filled with a renaissance of innovative film concepts, ground-breaking special effects, and an emergence of new talent. This film perfectly encapsulates the spirit of the time, providing a refreshing take on the cinematic experience...
</p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">AIDA Marketing Model Scores (/5)</h2>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
          <div className="bg-gray-50 p-4 rounded-lg text-center">
            <h3 className="font-medium mb-2">Attention</h3>
            <p className="text-2xl">{posterData.aidaScores.attention}</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg text-center">
            <h3 className="font-medium mb-2">Interest</h3>
            <p className="text-2xl">{posterData.aidaScores.interest}</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg text-center">
            <h3 className="font-medium mb-2">Desire</h3>
            <p className="text-2xl">{posterData.aidaScores.desire}</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg text-center">
            <h3 className="font-medium mb-2">Action</h3>
            <p className="text-2xl">{posterData.aidaScores.action}</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg text-center">
            <h3 className="font-medium mb-2">Creativity</h3>
            <p className="text-2xl">{posterData.aidaScores.creativity}</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg text-center">
            <h3 className="font-medium mb-2">Overall</h3>
            <p className="text-2xl">{posterData.aidaScores.overall}</p>
          </div>
        </div>
      </section>
    </div>
  )
}