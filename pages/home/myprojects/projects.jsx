import Image from "next/image";
import wireframe from "@src/assets/img/integration-wireframe.png";
import landingpage from "@src/assets/img/landingpage.png";
import metadev from "@src/assets/img/metadev.png";
import mazebank from "@src/assets/img/maze-bank.png";
import metadevshop from "@src/assets/img/metadev-shop.png";
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInBrowserIcon from '@mui/icons-material/OpenInBrowser';
import * as React from 'react';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Aos from 'aos';
import "aos/dist/aos.css";

let styles = {
  template: "grid text-left px-8 py-12",
  template2: "flex flex-col justify-center",
  title: "uppercase text-2xl underline pb-20",
  title2: "text-2xl text-white",
  title3: "text-lg italic",
  tasks: "list-none mt-8",
  div1: "py-4",
  divImage: "py-14 flex justify-center",
  divImg2: "lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10",
  text: "pt-4",
  imgproject: "object-cover object-center rounded",
  iconsSpace: "ml-4",
  zoomanim: "transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-pink-500 duration-300 cursor-pointer",
};

const Projects = () => {
  return (
  <div className={styles.template}>
  <h1 className={styles.title} id="projets">02. Mes projets</h1>
  {/* PROJET 1 */}
  <section class="text-gray-400 bg-black body-font rounded-xl my-8" data-aos="fade-right" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="1000" delay="300">
  <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
  <div className={styles.divImage}>
        <Image src={wireframe} alt="landingpage" height="720" width="600" className={styles.imgproject}/>
        </div>
    <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">Intégration wireframe
      </h1>
      <h2 className={styles.title2}>Projet de groupe</h2>
      <p class="mb-8 leading-relaxed">Notre tout premier projet par groupe de deux. L&apos;objectif était d&apos;intégrer une maquette préalablement crée avec Figma.</p>
      <p class="mb-2 leading-relaxed">Elaboration d&apos;un wireframe.</p>
      <p class="mb-8 leading-relaxed">Passage en production.</p>
      <div class="flex justify-center">
      <div className={styles.divImage}>
          <a href="https://github.com/PriskaSama/landing-page0" className={ styles.iconsSpace + " " + styles.zoomanim}><GitHubIcon sx={{ fontSize: 30 }} /></a>
          <a href="https://priscad.promo-171.codeur.online/landing-page0/" className={styles.iconsSpace + " " + styles.zoomanim} ><OpenInBrowserIcon sx={{ fontSize: 30 }} /></a>
        </div>
      </div>
    </div>
  </div>
</section>
{/* PROJET 2 */}
<section class="text-gray-400 bg-black  body-font rounded-xl my-8" data-aos="fade-left" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="1000" delay="300">
  <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
  <div className={styles.divImage}>
        <Image src={landingpage} alt="landingpage" height="720" width="720" className={styles.imgproject}/>
        </div>
    <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
    <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">Landing page
      </h1>
      <h2 className={styles.title2}>Projet individuel</h2>
      <p class="mb-8 leading-relaxed">Dans ce projet, nous devions expérimenter les différentes phases de réalisation d&apos;un projet web. En passant par l&apos;intégration d&apos;une maquette à son passage en production. Effectuer une version responsive sur mobile, tablette et desktop. Et finalement héberger le site sur un serveur public.</p>
      <p class="mb-2 leading-relaxed">Elaboration d&apos;un wireframe.</p>
      <p class="mb-8 leading-relaxed">Passage en production.</p>
      <div class="flex justify-center">
      <div className={styles.divImage}>
          <a href="https://github.com/PriskaSama/landing-page0" className={styles.iconsSpace + " " + styles.zoomanim}><GitHubIcon sx={{ fontSize: 30 }} /></a>
          <a href="https://priscad.promo-171.codeur.online/landing-page0/" className={styles.iconsSpace + " " + styles.zoomanim}><OpenInBrowserIcon sx={{ fontSize: 30 }} /></a>
        </div>
      </div>
    </div>
  </div>
</section>
  {/* PROJET 3 */}
  <section class="text-gray-400 bg-black body-font rounded-xl my-8" data-aos="fade-right" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="1000" delay="300">
  <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
  <div className={styles.divImage}>
        <Image src={metadev} alt="landingpage" height="600" width="720" className={styles.imgproject}/>
        </div>
    <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
    <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">Agence web
      </h1>
      <h2 className={styles.title2}>Projet de groupe</h2>
      <p class="mb-8 leading-relaxed">Ce projet par groupe de trois, consistait à fonder une agence-web. Les étapes les plus importantes étaient les suivantes: </p>
      <p class="mb-2 leading-relaxed">Définition de l&apos;identité de l&apos;agence</p>
      <p class="mb-8 leading-relaxed">Conception du site.</p>
      <p class="mb-8 leading-relaxed">Développement et hébergement sur Netlify.</p>
      <div class="flex justify-center">
      <div className={styles.divImage}>
          <a href="https://github.com/mrp-171/agenceweb171" className={styles.iconsSpace + " " + styles.zoomanim}><GitHubIcon sx={{ fontSize: 30 }} /></a>
          <a href="https://metadev-mrp.netlify.app/" className={styles.iconsSpace + " " + styles.zoomanim}><OpenInBrowserIcon sx={{ fontSize: 30 }} /></a>
        </div>
      </div>
    </div>
  </div>
</section>
{/* PROJET 4 */}
<section class="text-gray-400 bg-black body-font rounded-xl my-8" data-aos="fade-left" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="1000" delay="300">
  <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
  <div className={styles.divImage}>
        <Image src={mazebank} alt="landingpage" height="600" width="720" className={styles.imgproject}/>
        </div>
    <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
    <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">Maze-Bank
      </h1>
      <h2 className={styles.title2}>Projet individuel</h2>
      <p class="mb-8 leading-relaxed">Ce projet individuel avait pour but de créer une application bancaire fictive. Permettant une introduction a Javascript et tout spécialement à la notion d&apos;algorithmie.
Initiation a Javascript.</p>
      <p class="mb-2 leading-relaxed">Développement d&apos;un algorithme.
</p>
      <p class="mb-8 leading-relaxed">Production et hébergement sur Netlify.</p>
      <div class="flex justify-center">
      <div className={styles.divImage}>
          <a href="https://github.com/PriskaSama/maze-bank" className={styles.iconsSpace + " " + styles.zoomanim}><GitHubIcon sx={{ fontSize: 30 }} /></a>
          <a href="https://maze-bank-priska.netlify.app/" className={styles.iconsSpace + " " + styles.zoomanim}><OpenInBrowserIcon sx={{ fontSize: 30 }} /></a>
        </div>
      </div>
    </div>
  </div>
</section>
{/* PROJET 5 */}
<section class="text-gray-400 bg-black  body-font rounded-xl my-8" data-aos="fade-right" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="1000" delay="300">
  <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
  <div className={styles.divImage}>
        <Image src={metadevshop} alt="landingpage" height="600" width="720" className={styles.imgproject}/>
        </div>
    <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
    <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">TP Boutique
      </h1>
      <h2 className={styles.title2}>Projet de groupe</h2>
      <p class="mb-8 leading-relaxed">Projet en lien avec l&apos;agence web. Nous devions créer par groupe de quatre une boutique e-commerce via le CMS Wordpress.</p>
      <p class="mb-2 leading-relaxed">Initiation a Wordpress</p>
      <p class="mb-8 leading-relaxed">Elaboration d&apos;un wireframe.</p>
      <p class="mb-8 leading-relaxed">Hébergement sur nom de domaine Ionos.</p>
      <div class="flex justify-center">
      <div className={styles.divImage}>
        <a href="https://metadev-mrp.fr/" className={styles.iconsSpace + " " + styles.zoomanim}><OpenInBrowserIcon sx={{ fontSize: 30 }} /></a>
       </div>
      </div>
    </div>
  </div>
</section>
</div>
  );
};

export default Projects;