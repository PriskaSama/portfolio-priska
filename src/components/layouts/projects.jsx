import Image from "next/image";


let styles = {
  template: "grid text-left px-8 py-12",
  template2: "flex flex-col justify-center",
  title: "uppercase text-2xl underline pb-20",
  title2: "text-2xl",
  title3: "text-lg italic",
  tasks: "list-none mt-8"
};

const Projects = () => {
  return (
    <div className={styles.template}>
      <h1 className={styles.title}>02. Mes projets</h1>
      <div>
        <h2 className={styles.title2}>Intégration wireframe</h2>
        <h3 className={styles.title3}>Projet de groupe</h3>
        <p>Notre tout premier projet par groupe de deux. L'objectif était d'intégrer une maquette préalablement crée.</p>
        {/* ajouter lien github + lien serveur public */}
        <Image />
      </div>
      <div>
        <h2 className={styles.title2}>Landing page</h2>
        <h3 className={styles.title3}>Projet individuel</h3>
        <p>Dans ce projet, nous devions expérimenter les différentes phases de réalisation d'un projet web. En passant par l'intégration d'une maquette à son passage en production. Effectuer une version responsive sur mobile, tablette et desktop. Et finalement héberger le site sur un serveur public.</p>
        {/* ajouter lien github + lien serveur public */}
        <Image />
      </div>
      <div>
        <h2 className={styles.title2}>Agence web</h2>
        <h3 className={styles.title3}>Projet de groupe</h3>
        <p>Ce projet par groupe de trois, consistait à fonder une agence-web. Les étapes les plus importantes étaient les suivantes:  </p>
        <ul className= {styles.tasks}>
          <li>Définition de l'identité de l'agence</li>
          <li>Conception du site</li>
          <li>Développement et hebergement sur Netlify</li>
          <li></li>
        </ul>
        {/* ajouter lien github + lien netlify */}
        <Image />
      </div>
      <div>
        <h2 className={styles.title2}>Maze-Bank</h2>
        <h3 className={styles.title3}>Projet individuel</h3>
        <p>Ce projet individuel avait pour but de créer une application bancaire fictive. Permettant une introduction a Javascript et tout spécialement à la notion d'algorithmie.</p>
        {/* ajouter lien github + lien netlify */}
        <Image />
      </div>
      <div>
        <h2 className={styles.title2}>TP Boutique</h2>
        <h3 className={styles.title3}>Projet de groupe</h3>
        <p>Projet en lien avec l'agence web. Nous devions créer par groupe de quatre une boutique e-commerce via le CMS Wordpress. </p>
       <ul className= {styles.tasks}>
        <li>Initiation a PHP.</li>
        <li>Hebergement sur un nom de domaine propre.</li>
       </ul>
        {/* ajouter lien github + lien netlify */}
        <Image />
      </div>
    </div>
  );
};

export default Projects;
