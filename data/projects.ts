export interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
}

export const projectsData: Project[] = [

  {
    title: "Mali Sugou",
    description:
      "Plateforme e-commerce locale au Mali. Mon rôle : Développement complet du site (frontend, backend, base de données) + authentification via Google + stratégie de lancement sur TikTok et WhatsApp.",
    image: "/malisugou.png",
    tags: ["Next.js", "MySQL", "Prisma", "Vercel", "Marketing"],
    link: "https://malisugou.com",
  },
  {
    title: "Numaci",
    description:
      "Marque de vêtements ivoirienne : j'ai développé le site de vente avec Next.js et Prisma, base de données MySQL, déploiement sur Vercel, gestion des emails avec Brevo, et utilisation d'ImageKit pour l'optimisation des médias.",
    image: "/numaci.png",
    tags: ["Next.js", "Prisma", "MySQL", "Vercel", "Brevo", "ImageKit"],
    link: "https://numaci.com",
  },
  {
    title: "Portail de Gestion Scolaire",
    description:
      "Une application web complète pour une université, développée en PHP, JavaScript, et MySQL. Elle permet aux étudiants et à leurs parents de suivre en temps réel les notes, les absences, les paiements, les emplois du temps, et de recevoir des communications de l'administration.",
    image: "/Etudiants.png",
    tags: ["PHP", "JavaScript", "MySQL", "CSS"],
  },
  {
    title: "TechnoLAB",
    description:
      "Portail universitaire permettant aux étudiants de consulter leurs notes, absences, historique de paiements, messages, et documents (et autres informations académiques) depuis un seul espace. Réalisé avec Next.js, Prisma, MySQL et Express.",
    image: "/technolab.png",
    tags: ["Next.js", "Prisma", "MySQL", "Express"],
  },
  {
    title: "Tableau de Bord Administrateur",
    description:
      "L'interface d'administration du portail scolaire, conçue pour gérer efficacement les étudiants, les professeurs, les classes et les matières. Elle offre une vue d'ensemble complète de l'activité de l'établissement.",
    image: "/ADMIN.png",
    tags: ["PHP", "JavaScript", "MySQL", "CSS"],
  },

  {
    title: "CV Virtuel",
    description: "Un CV virtuel interactif créé avec React et Tailwind CSS, présentant mes compétences et mon parcours de manière dynamique.",
    image: "/CV.png",
    tags: ["React", "Tailwind CSS"],
  },
  {
    title: "Site pour Restaurant",
    description:
      "Un site web moderne pour un restaurant, mettant en avant le menu, les réservations et les informations de contact.",
    image: "/resto.png",
    tags: ["React", "Next.js", "Tailwind CSS"],
  },
  {
    title: "Application de Voyage",
    description:
      "Une application web pour la planification de voyages, permettant aux utilisateurs de découvrir des destinations et d'organiser leurs itinéraires.",
    image: "/Travel.png",
    tags: ["React", "Next.js", "Tailwind CSS"],
  },

];
