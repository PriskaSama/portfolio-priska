import Image from "next/image";
import wireframe from "@src/assets/img/integration-wireframe.png";
import landingpage from "@src/assets/img/landingpage.png";
import metadev from "@src/assets/img/metadev.png";
import mazebank from "@src/assets/img/maze-bank.png";
import metadevshop from "@src/assets/img/metadev-shop.png";
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInBrowserIcon from '@mui/icons-material/OpenInBrowser';

let styles = {
  template: "grid text-left px-8 py-12",
  template2: "flex flex-col justify-center",
  title: "uppercase text-2xl underline pb-20",
  title2: "text-2xl",
  title3: "text-lg italic",
  tasks: "list-none mt-8",
  div1: "py-8",
  divImage: "py-14 flex justify-center"
};

const Projects = () => {
  return (
    <div className={styles.template}>
      <h1 className={styles.title}>02. Mes projets</h1>
      {/* Project 1 */}
      <div className={styles.div1}>
        <h2 className={styles.title2}>Intégration wireframe</h2>
        <h3 className={styles.title3}>Projet de groupe</h3>
        <p>Notre tout premier projet par groupe de deux. L'objectif était d'intégrer une maquette préalablement crée.</p>
        <div className={styles.divImage}>
        <Image src={wireframe} alt="Wireframe" height="250" width="250"/>
        </div>
        <GitHubIcon color="secondary" />
        <OpenInBrowserIcon color="secondary" />
      </div>
      {/* Project 2 */}
      <div div className={styles.div1}>
        <h2 className={styles.title2}>Landing page</h2>
        <h3 className={styles.title3}>Projet individuel</h3>
        <p>Dans ce projet, nous devions expérimenter les différentes phases de réalisation d'un projet web. En passant par l'intégration d'une maquette à son passage en production. Effectuer une version responsive sur mobile, tablette et desktop. Et finalement héberger le site sur un serveur public.</p>
        <div className={styles.divImage}>
        <Image src={landingpage} alt="landingpage" height="350" wdith="350"/>
        </div>
        <GitHubIcon color="secondary" />
        <OpenInBrowserIcon color="secondary" />
      </div>
      {/* Project 3 */}
      <div div className={styles.div1}>
        <h2 className={styles.title2}>Agence web</h2>
        <h3 className={styles.title3}>Projet de groupe</h3>
        <p>Ce projet par groupe de trois, consistait à fonder une agence-web. Les étapes les plus importantes étaient les suivantes:  </p>
        <ul className= {styles.tasks}>
          <li>Définition de l'identité de l'agence</li>
          <li>Conception du site</li>
          <li>Développement et hébergement sur Netlify</li>
          <li></li>
        </ul>
        <div className={styles.divImage}>
        <Image src={metadev} alt="metadev" height="400" wdith="250"/>
        </div>
        <GitHubIcon color="secondary" />
        <OpenInBrowserIcon color="secondary" />
      </div>
      {/* Project 4 */}
      <div div className={styles.div1}>
        <h2 className={styles.title2}>Maze-Bank</h2>
        <h3 className={styles.title3}>Projet individuel</h3>
        <p>Ce projet individuel avait pour but de créer une application bancaire fictive. Permettant une introduction a Javascript et tout spécialement à la notion d'algorithmie.</p>
        <ul className= {styles.tasks}>
          <li>Initiation a Javascript.</li>
          <li>Conception d'un algorithme.</li>
          <li>Développement et hébergement sur Netlify</li>
          <li></li>
        </ul>
        <div className={styles.divImage}>
        <Image src={mazebank} alt="mazebank" height="250" width="350"/>
        </div>
        <GitHubIcon color="secondary" />
        <OpenInBrowserIcon color="secondary" />
      </div>
      {/* Project 5 */}
      <div div className={styles.div1}>
        <h2 className={styles.title2}>TP Boutique</h2>
        <h3 className={styles.title3}>Projet de groupe</h3>
        <p>Projet en lien avec l'agence web. Nous devions créer par groupe de quatre une boutique e-commerce via le CMS Wordpress. </p>
       <ul className= {styles.tasks}>
        <li>Initiation a PHP.</li>
        <li>Utilisation du CMS Wordpress.</li>
        <li>Hébergement sur un nom de domaine propre via Ionos.</li>
       </ul>
       <div className={styles.divImage}>
        <Image src={metadevshop} alt="metadevshop" height="250" width="350"/>
       </div>
        <GitHubIcon color="secondary" />
        <OpenInBrowserIcon color="secondary" />
      </div>
    </div>
  );
};

export default Projects;