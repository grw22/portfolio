'use client'

import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function PosterPage() {
  const posterData = {
    number: 1,
    title: "Rogue Justice",
    review: <p>"Rogue Justice is a high-octane action film that delivers non-stop thrills from start to finish. The movie follows a renegade cop, played by a rugged and charismatic lead actor, as he takes on a powerful crime syndicate single-handedly. 
      
      The film is filled with intense car chases, explosive shootouts, and adrenaline-pumping fight scenes. The stunts and special effects are top-notch, keeping audiences on the edge of their seats throughout the entire movie.
      
      The lead actor's performance is captivating, portraying a complex and morally ambiguous character who will stop at nothing to bring the villains to justice. The supporting cast also delivers strong performances, adding depth and emotion to the film. 
      
      The plot is fast-paced and engaging, with plenty of unexpected twists and turns to keep viewers guessing. The movie also touches on themes of loyalty, redemption, and the price of standing up for what's right, adding depth to the action-packed storyline. 
      
      Overall, "Rogue Justice" is a must-see for action movie fans. With its heart-pounding action sequences, compelling characters, and a gripping storyline, it's a film that will leave audiences wanting more.</p>
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
      selected: "Art Deco",
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
          <p className="text-gray-800">Create a movie review based on the following facts about the movie. You should also create a unique title of your choosing. The genre is Action.</p>
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
          <p className="text-gray-800">Create a movie poster in a Art Deco style based on the following movie review:
Title: "Rogue Justice"

"Rogue Justice" is a high-octane action film that delivers non-stop thrills from start to finish. The movie follows a renegade cop, played by a rugged and charismatic lead. . .
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