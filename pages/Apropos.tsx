import React from 'react'

export default function Apropos() {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [open]);

  const cv = {
    title: 'CURRICULUM VITAE',
    personalInfo: [
      { label: 'Nom', value: 'Bour Sine Coumba Ndofene Fall' },
      { label: 'Âge', value: '20 ans' },
      { label: 'Nationalité', value: 'Sénégalais / Malien' },
      { label: 'Localisation', value: 'Mali/Bamako' },
    ],
    profile:
      "Étudiant en Licence 3 génie logiciel , passionné par le développement web et les technologies numériques. Je possède de solides bases en développement frontend et backend et je réalise régulièrement des projets web complets. Motivé, autonome et curieux, je suis à la recherche d’un stage afin de renforcer mes compétences techniques et acquérir une expérience professionnelle.",
    education: [{ title: 'Licence 3 genie logiciel', subtitle: '(En cours)' }],
    skills: [
      {
        title: 'Développement Web',
        items: ['HTML / CSS', 'JavaScript', 'React.js', 'Next.js', 'Node.js'],
      },
      {
        title: 'Bases de données',
        items: ['MySQL', 'SQLite'],
      },
      {
        title: 'Autres compétences',
        items: [
          'Création d’interfaces utilisateur modernes',
          'Conception d’applications web complètes',
          'Automatisation de workflows (n8n, Node-RED, Make)',
          'Notions en réseaux informatiques',
        ],
      },
    ],
    projects: [
      {
        title: 'Plateforme e-commerce « Mali Sugou »',
        items: [
          'Conception et développement d’un site e-commerce local',
          'Gestion des produits et catalogue en ligne',
          'Mise en place d’une stratégie de marketing digital',
        ],
      },
      {
        title: 'Plateforme de billetterie en ligne',
        items: ['Vente de billets avec QR code', 'Intégration de systèmes de paiement mobile'],
      },
    ],
    qualities: [
      'Capacité d’apprentissage rapide',
      'Esprit d’analyse et de résolution de problèmes',
      'Travail en équipe',
      'Autonomie et rigueur',
    ],
    languages: ['Français : Bon niveau', 'Anglais technique : Niveau intermédiaire'],
    objective:
      'Obtenir un stage en développement informatique afin d’appliquer mes connaissances académiques, développer mes compétences professionnelles et contribuer à des projets innovants.',
    contacts: ['+22384054004'],
  };

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
        <button
          onClick={() => setOpen(true)}
          className="bg-blue-500 text-white px-6 py-3 rounded-md mt-6 text-lg font-semibold hover:bg-blue-600 transition"
        >
          Télécharger mon CV
        </button>
      </div>

      {open && (
        <div
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
          onMouseDown={() => setOpen(false)}
        >
          <div
            className="w-full max-w-3xl bg-[#0f1226] text-white rounded-2xl border border-white/10 shadow-2xl overflow-hidden"
            onMouseDown={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
              <div>
                <div className="text-xs tracking-[0.35em] text-white/70">{cv.title}</div>
                <div className="text-lg sm:text-xl font-bold mt-1">Bour Sine Fall</div>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="h-10 w-10 rounded-full bg-white/10 hover:bg-white/15 transition flex items-center justify-center text-xl"
                aria-label="Fermer"
              >
                ×
              </button>
            </div>

            <div className="max-h-[75vh] overflow-auto px-5 py-5 space-y-6">
              <section className="space-y-3">
                <h2 className="text-base sm:text-lg font-bold text-blue-300">Informations personnelles</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {cv.personalInfo.map((item) => (
                    <div key={item.label} className="bg-white/5 border border-white/10 rounded-xl p-4">
                      <div className="text-xs text-white/60">{item.label}</div>
                      <div className="font-semibold">{item.value}</div>
                    </div>
                  ))}
                </div>
              </section>

              <section className="space-y-3">
                <h2 className="text-base sm:text-lg font-bold text-blue-300">Profil</h2>
                <p className="text-white/90 leading-relaxed">{cv.profile}</p>
              </section>

              <section className="space-y-3">
                <h2 className="text-base sm:text-lg font-bold text-blue-300">Formation</h2>
                <div className="space-y-2">
                  {cv.education.map((e) => (
                    <div key={e.title} className="bg-white/5 border border-white/10 rounded-xl p-4">
                      <div className="font-semibold">{e.title}</div>
                      <div className="text-sm text-white/70">{e.subtitle}</div>
                    </div>
                  ))}
                </div>
              </section>

              <section className="space-y-3">
                <h2 className="text-base sm:text-lg font-bold text-blue-300">Compétences techniques</h2>
                <div className="space-y-4">
                  {cv.skills.map((group) => (
                    <div key={group.title} className="bg-white/5 border border-white/10 rounded-xl p-4">
                      <div className="font-semibold mb-2">{group.title}</div>
                      <ul className="list-disc pl-5 space-y-1 text-white/90">
                        {group.items.map((it) => (
                          <li key={it}>{it}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>

              <section className="space-y-3">
                <h2 className="text-base sm:text-lg font-bold text-blue-300">Projets réalisés</h2>
                <div className="space-y-4">
                  {cv.projects.map((p) => (
                    <div key={p.title} className="bg-white/5 border border-white/10 rounded-xl p-4">
                      <div className="font-semibold mb-2">{p.title}</div>
                      <ul className="list-disc pl-5 space-y-1 text-white/90">
                        {p.items.map((it) => (
                          <li key={it}>{it}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>

              <section className="space-y-3">
                <h2 className="text-base sm:text-lg font-bold text-blue-300">Qualités personnelles</h2>
                <ul className="list-disc pl-5 space-y-1 text-white/90">
                  {cv.qualities.map((q) => (
                    <li key={q}>{q}</li>
                  ))}
                </ul>
              </section>

              <section className="space-y-3">
                <h2 className="text-base sm:text-lg font-bold text-blue-300">Langues</h2>
                <ul className="list-disc pl-5 space-y-1 text-white/90">
                  {cv.languages.map((l) => (
                    <li key={l}>{l}</li>
                  ))}
                </ul>
              </section>

              <section className="space-y-3">
                <h2 className="text-base sm:text-lg font-bold text-blue-300">Objectif</h2>
                <p className="text-white/90 leading-relaxed">{cv.objective}</p>
              </section>

              <section className="space-y-3">
                <h2 className="text-base sm:text-lg font-bold text-blue-300">Contacts</h2>
                <div className="flex flex-wrap gap-2">
                  {cv.contacts.map((c) => (
                    <span key={c} className="bg-blue-500/15 border border-blue-400/30 text-blue-200 px-3 py-1 rounded-full">
                      {c}
                    </span>
                  ))}
                </div>
              </section>
            </div>

            <div className="px-5 py-4 border-t border-white/10 flex justify-end">
              <button
                onClick={() => setOpen(false)}
                className="bg-white/10 hover:bg-white/15 transition px-4 py-2 rounded-lg"
              >
                Fermer
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
