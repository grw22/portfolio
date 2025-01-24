'use client'

import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function PosterPage() {
  const posterData = {
    number: 3,
    title: "The Norwegian Enigma",
    review: <p>Set in 1950s Norway, "The Norwegian Enigma" is a captivating mystery film that takes the audience on a journey of rags to riches and back again. Starring the talented John Malkovich and Steve McQueen, the movie follows the protagonist as he achieves success, only to lose it all, and then fight to regain what he has lost.

    The film's setting in Norway adds a unique and intriguing backdrop to the story, with stunning landscapes and a sense of mystery and intrigue woven throughout. The plot keeps the audience on the edge of their seats, as they try to unravel the enigma alongside the protagonist.
    
    Malkovich and McQueen deliver standout performances, bringing depth and complexity to their characters. Their on-screen chemistry adds to the tension and suspense of the film, keeping the audience engaged from start to finish.
    
    Overall, "The Norwegian Enigma" is a must-watch for fans of mystery films. With its captivating plot structure, talented cast, and captivating setting, it is a standout film in the genre. Whether you're a fan of classic cinema or simply enjoy a good mystery, "The Norwegian Enigma" is sure to leave a lasting impression.</p>
,
    variables: {
      genre: "Mystery",
      plot: "Rags to Riches, where the protagonist achieves something they lack, loses what they’ve gained, and then gets it back again",
      decade: "1950s",
      actors: "John Malkovich, Steve McQueen",
      director: "None",
      country: "Norway",
},
    artStyle: {
      selected: "Ukiyo-e",
      reason: "Selected based on sentiment analysis by BERT",
    },
    aidaScores: {
      attention: 3.5,
      interest: 3.5,
      desire: 3.4,
      action: 3.2,
      creativity: 3.4,
      overall: 3.4
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