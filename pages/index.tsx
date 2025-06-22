import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Acceuil from "./Acceuil";
import Apropos from "./Apropos";
import Competence from "./Competence";
import Education from "./Education";
import Projects from "./Projects";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main>
      <Acceuil />
      <Apropos />
      <Competence />
      <Education />
      <Projects />
    </main>
  );
}
