import React from 'react'

export default function Apropos() {
  return (
    <div className="bg-hero h-screen flex items-center justify-center w-full px-4 md:px-12 lg:px-24">
      <div className="max-w-4xl w-full flex flex-col items-start text-left">
        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold mb-6">À propos</h1>
        <p className="text-white text-lg sm:text-xl md:text-2xl font-bold mt-4 mb-8">
          Je suis <span className="text-blue-500">étudiant en deuxième année informatique de gestion</span> et passionné par la création de sites web et d'applications web.<br />
          Je cherche à me perfectionner dans le développement web et à trouver des opportunités pour me développer professionnellement, en temps partiel ou en temps flexible.
        </p>
        <span className="text-white text-lg sm:text-xl md:text-2xl font-bold mb-8">
          Construisons quelque chose de grand ! ✨
        </span>
        <button className="bg-blue-500 text-white px-6 py-3 rounded-md mt-6 text-lg font-semibold hover:bg-blue-600 transition">
          Télécharger mon CV
        </button>
      </div>
    </div>
  )
}
