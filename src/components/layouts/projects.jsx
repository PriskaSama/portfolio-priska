import Image from "next/image";

let styles = {
  template: "grid text-left px-8 py-12",
  template2: "flex flex-col justify-center",
  title: "uppercase text-2xl underline pb-20",
  title2: "text-2xl",
  title3: "text-lg italic",
};

const Projects = () => {
  return (
    <div className={styles.template}>
      <h1 className={styles.title}>02. Mes projets</h1>
      <div>
        <h2 className={styles.title2}>Landing page</h2>
        <h3 className={styles.title3}>Projet individuel</h3>
        <p>Dans ce projet, nous devions expérimenter les différentes phases de réalisation d'un projet web. En passant par l'intégration d'une maquette à son passage en production. Effectuer une version responsive sur mobile, tablette et desktop. Et finalement héberger le site sur un serveur public.</p>
        <Image />
      </div>
      <div>
        <h2 className={styles.title2}>Agence web</h2>
        <h3 className={styles.title3}>Projet de groupe</h3>
        <p>Description du projet</p>
        <Image />
      </div>
      <div>
        <h2 className={styles.title2}>Maze-Bank</h2>
        <h3 className={styles.title3}>Projet individuel</h3>
        <p>Description du projet</p>
        <Image />
      </div>
      <div>
        <h2 className={styles.title2}>TP Boutique</h2>
        <h3 className={styles.title3}>Projet de groupe</h3>
        <p>Description du projet</p>
        <Image />
      </div>
    </div>
  );
};

export default Projects;
