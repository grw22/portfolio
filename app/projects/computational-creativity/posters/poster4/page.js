'use client'

import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function PosterPage() {
  const posterData = {
    number: 4,
    title: "The Pharaoh's Interstellar Battle",
    review: <p>The Pharaoh's Interstellar Battle is a groundbreaking sci-fi film released in the 1960s from Egypt, showcasing the country's prowess in the genre. The movie follows the classic plot structure of "Overcoming the Monster," where the protagonist must defeat an antagonist that threatens them and the wider world.

    Set in a futuristic world, the movie takes audiences on a thrilling journey as the protagonist, a brave and resourceful Pharaoh, faces off against an otherworldly entity that seeks to conquer Earth and enslave humanity. The Pharaoh must utilize all his cunning and strength to outsmart and ultimately defeat this formidable foe, using both ancient wisdom and advanced technology to save the planet from destruction.
    
    The film's special effects and visual design are truly ahead of their time, creating a mesmerizing and immersive world that captivates the audience from start to finish. The innovative use of practical effects and set design adds to the movie's charm, making it a unique and visually stunning experience for viewers.
    
    The Pharaoh's Interstellar Battle is a testament to Egypt's filmmaking prowess and its ability to craft compelling and imaginative stories within the realm of science fiction. With its gripping storyline and impressive visual effects, this classic film continues to stand the test of time and remains a must-watch for fans of the genre.</p>
,
    variables: {
      genre: "Sci-Fi",
      plot: "Overcoming the Monster, where the protagonist must defeat an antagonist that threatens them and the wider world.",
      decade: "1960s",
      actors: "None",
      director: "None",
      country: "Egypt",
},
    artStyle: {
      selected: "Art Deco",
      reason: "Selected based on sentiment analysis by BERT",
    },
    aidaScores: {
      attention: 3.3,
      interest: 3.0,
      desire: 3.1,
      action: 2.8,
      creativity: 3.5,
      overall: 3.1
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