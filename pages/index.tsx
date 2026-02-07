import Acceuil from "./Acceuil";
import Apropos from "./Apropos";
import Competence from "./Competence";
import Education from "./Education";
import Projects from "./Projects";

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
