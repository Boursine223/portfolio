import React from 'react'

function Stars() {
    // Génère 30 étoiles à des positions et animations aléatoires
    const stars = Array.from({ length: 30 }).map((_, i) => {
        const top = Math.random() * 100;
        const left = Math.random() * 100;
        // Mouvement aléatoire entre -30px et +30px
        const tx = (Math.random() - 0.5) * 60;
        const ty = (Math.random() - 0.5) * 60;
        // Durée aléatoire entre 5s et 12s
        const duration = 5 + Math.random() * 7;
        return (
            <div
                key={i}
                className="star"
                style={{
                    top: `${top}%`,
                    left: `${left}%`,
                    '--tx': `${tx}px`,
                    '--ty': `${ty}px`,
                    '--duration': `${duration}s`
                } as React.CSSProperties}
            />
        );
    });
    return <>{stars}</>;
}

export default function Acceuil() {
    return (
        <div className="flex flex-col md:flex-row items-center justify-center h-screen bg-hero relative overflow-hidden w-full gap-10 md:gap-20 px-4">
            <Stars />
            <div className="mb-8 md:mb-0 relative">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 animate-pulse opacity-75 blur-sm scale-110"></div>
                <div className="relative animate-float">
                    <img
                        className="rounded-full object-cover border-4 border-blue-400 shadow-2xl w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-96 lg:h-96 animate-glow"
                        src="/img.jpg"
                        alt="img"
                    />
                </div>
            </div>
            <div className="flex flex-col items-center md:items-start gap-2 text-center md:text-left">
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-4 flex items-center gap-2">
                    Salut, je suis Bour sine Fall 👋
                </h3>
                <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-outline tracking-[0.22em] sm:tracking-[0.26em] leading-none mb-2">
                    WEB
                </h2>
                <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-blue-400 tracking-wide sm:tracking-wider leading-none mb-2">
                    DÉVELOPPEUR
                </h2>
            </div>
        </div>
    )
}
