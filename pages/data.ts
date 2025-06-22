export interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
}

export const projectsData: Project[] = [
  {
    title: "Portail de Gestion Scolaire",
    description:
      "Une application web complète pour une université, développée en PHP, JavaScript, et MySQL. Elle permet aux étudiants et à leurs parents de suivre en temps réel les notes, les absences, les paiements, les emplois du temps, et de recevoir des communications de l'administration.",
    image: "/Etudiants.png",
    tags: ["PHP", "JavaScript", "MySQL", "CSS"],
  },
  {
    title: "Tableau de Bord Administrateur",
    description:
      "L'interface d'administration du portail scolaire, conçue pour gérer efficacement les étudiants, les professeurs, les classes et les matières. Elle offre une vue d'ensemble complète de l'activité de l'établissement.",
    image: "/ADMIN.png",
    tags: ["PHP", "JavaScript", "MySQL", "CSS"],
  },
  {
    title: "Tableau de Bord E-commerce",
    description:
      "Une interface d'administration pour un site e-commerce, permettant de gérer les produits, les catégories, les commandes et les utilisateurs. Développé avec Next.js, Tailwind CSS, Prisma et MySQL.",
    image: "/ADMINEC.png",
    tags: ["Next.js", "Tailwind CSS", "Prisma", "MySQL"],
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
