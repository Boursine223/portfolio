import React from 'react';
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGitAlt, FaGithub, FaFigma } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io5';
import { SiTailwindcss, SiExpress, SiVsco, SiVercel, SiNextdotjs, SiSass, SiMysql, SiPostgresql, SiPrisma } from 'react-icons/si';

interface Competence {
  name: string;
  icon: React.ReactNode;
}

const competencesFrontend: Competence[] = [
  { name: 'HTML', icon: <FaHtml5 className="text-orange-500" /> },
  { name: 'CSS', icon: <FaCss3Alt className="text-blue-500" /> },
  { name: 'JavaScript', icon: <IoLogoJavascript className="text-yellow-400" /> },
  { name: 'React', icon: <FaReact className="text-sky-400" /> },
  { name: 'Scss', icon: <SiSass className="text-pink-500" /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-cyan-400" /> },
];

const competencesBackend: Competence[] = [
  { name: 'Node.js', icon: <FaNodeJs className="text-green-500" /> },
  { name: 'Express', icon: <SiExpress /> },
  { name: 'Next.js', icon: <SiNextdotjs /> },
  { name: 'MySQL', icon: <SiMysql className="text-blue-600" /> },
  { name: 'PostgreSQL', icon: <SiPostgresql className="text-sky-700" /> },
  { name: 'Prisma', icon: <SiPrisma className="text-teal-500" /> },
];

const outils: Competence[] = [
  { name: 'Git', icon: <FaGitAlt className="text-orange-600" /> },
  { name: 'GitHub', icon: <FaGithub /> },
  { name: 'VS Code', icon: <SiVsco className="text-blue-500" /> },
  { name: 'Vercel', icon: <SiVercel /> },
  { name: 'Figma', icon: <FaFigma className="text-pink-500" /> },
];

interface CarteCompetenceProps {
  titre: string;
  competences: Competence[];
}

const CarteCompetence: React.FC<CarteCompetenceProps> = ({ titre, competences }) => (
  <div className="bg-[#2a2f4c] p-6 rounded-lg mb-8">
    <h2 className="text-xl font-bold text-[#6c7bff] mb-4">{titre}</h2>
    <div className="flex flex-wrap gap-4">
      {competences.map((competence, index) => (
        <div key={index} className="flex items-center bg-[#3c4260] py-2 px-4 rounded-md text-white">
          <div className="text-2xl mr-2">{competence.icon}</div>
          <span>{competence.name}</span>
        </div>
      ))}
    </div>
  </div>
);

export default function Competence() {
  return (
    <div className="bg-hero w-full px-4 md:px-12 lg:px-24 pt-24 pb-12">
      <div className="max-w-4xl w-full flex flex-col items-start text-left mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-white">Compétences</h1>
        <CarteCompetence titre="FRONTEND" competences={competencesFrontend} />
        <CarteCompetence titre="BACKEND" competences={competencesBackend} />
        <CarteCompetence titre="OUTILS" competences={outils} />
      </div>
    </div>
  );
}
