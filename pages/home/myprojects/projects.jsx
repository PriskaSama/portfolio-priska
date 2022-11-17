import Image from "next/image";
import wireframe from "@src/assets/img/integration-wireframe.png";
import landingpage from "@src/assets/img/landingpage.png";
import metadev from "@src/assets/img/metadev.png";
import mazebank from "@src/assets/img/maze-bank.png";
import metadevshop from "@src/assets/img/metadev-shop.png";
import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInBrowserIcon from "@mui/icons-material/OpenInBrowser";
import * as React from "react";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Aos from "aos";
import "aos/dist/aos.css";

let styles = {
  template: "flex flex-col items-center px-8 py-12 font-roboto",
  template2: "flex flex-col justify-center",
  title: "flex flex-start w-full uppercase text-2xl underline pb-20",
  title2: "text-2xl text-gray-500 mb-12",
  title3: "text-lg italic",
  tasks: "list-none mt-8",
  div1: "py-4",
  divImage: "py-14 flex justify-center",
  divImg2: "lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10",
  text: "pt-4",
  imgproject: "object-cover object-center rounded",
  iconsSpace: "ml-4",
  zoomanim:
    "cursor-pointer hover:scale-125 hover:ease-in hover:duration-300 hover:text-pink-500",
};

const Projects = () => {
  return (
    <div className={styles.template}>
      <h1 className={styles.title} id="projets">
        02. Mes projets
      </h1>
      {/* PROJET 1 */}
      <section
        class="text-gray-400 bg-white/75  opacity-75 body-font rounded-xl lg:w-3/5"
        data-aos="fade-left"
        data-aos-offset="200"
        data-aos-easing="ease-in-sine"
      >
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className={styles.divImage} class="lg:ml-8">
            <Image
              src={wireframe}
              alt="landingpage"
              height="350"
              width="350"
              className={styles.imgproject}
              
            />
          </div>
          <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-pink-500">
              Intégration wireframe
            </h1>
            <h2 className={styles.title2}>Projet de groupe</h2>
            <p class="mb-8 leading-relaxed">
              Notre tout premier projet par groupe de deux. L&apos;objectif
              était d&apos;intégrer une maquette préalablement crée avec Figma.
            </p>
            <li class="mb-2 leading-relaxed">Elaboration d&apos;un wireframe.</li>
            <li class="mb-8 leading-relaxed">Passage en production.</li>
            <p class="mt-8 italic">Webpack / TailwindCSS/ Netlify</p>
            <div class="flex justify-center">
              <div className={styles.divImage}>
                <a
                  href="https://github.com/PriskaSama/landing-page0"
                  className={styles.iconsSpace + " " + styles.zoomanim}
                >
                  <GitHubIcon sx={{ fontSize: 30 }} />
                </a>
                <a
                  href="https://priscad.promo-171.codeur.online/landing-page0/"
                  className={styles.iconsSpace + " " + styles.zoomanim}
                >
                  <OpenInBrowserIcon sx={{ fontSize: 30 }} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* PROJET 2 */}
      <section
        class="text-gray-400 bg-white/75   body-font rounded-xl hover:scale-125 lg:w-3/5"
        data-aos="fade-right"
        data-aos-offset="200"
        data-aos-easing="ease-in-sine"
      >
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className={styles.divImage}>
            <Image
              src={landingpage}
              alt="landingpage"
              height="350"
              width="450"
              className={styles.imgproject}
              class="ml-12"
            />
          </div>
          <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-pink-500">
              Landing page
            </h1>
            <h2 className={styles.title2}>Projet individuel</h2>
            <p class="mb-8 leading-relaxed">
              Dans ce projet, nous devions expérimenter les différentes phases
              de réalisation d&apos;un projet web. En passant par
              l&apos;intégration d&apos;une maquette à son passage en
              production. Effectuer une version responsive sur mobile, tablette
              et desktop. Et finalement héberger le site sur un serveur public.
            </p>
            <li class="mb-2 leading-relaxed">Elaboration d&apos;un wireframe.</li>
            <li class="mb-8 leading-relaxed">Passage en production.</li>
            <p class="mt-8 italic">Boostrap / TailwindCSS</p>
            <div class="flex justify-center">
              <div className={styles.divImage}>
                <a
                  href="https://github.com/PriskaSama/landing-page0"
                  className={styles.iconsSpace + " " + styles.zoomanim}
                >
                  <GitHubIcon sx={{ fontSize: 30 }} />
                </a>
                <a
                  href="https://priscad.promo-171.codeur.online/landing-page0/"
                  className={styles.iconsSpace + " " + styles.zoomanim}
                >
                  <OpenInBrowserIcon sx={{ fontSize: 30 }} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* PROJET 3 */}
      <section
        class="text-gray-400 bg-white/75  body-font rounded-xlhover:scale-125 lg:w-3/5 lg:ml-4"
        data-aos="fade-left"
        data-aos-offset="200"
        data-aos-easing="ease-in-sine"
      >
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className={styles.divImage}>
            <Image
              src={metadev}
              alt="landingpage"
              height="350"
              width="350"
              className={styles.imgproject}
            />
          </div>
          <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-pink-500">
              Agence web
            </h1>
            <h2 className={styles.title2}>Projet de groupe</h2>
            <p class="mb-8 leading-relaxed">
              Ce projet par groupe de trois, consistait à fonder une agence-web fictive. Proposant divers service.
              Les étapes les plus importantes étaient les suivantes:
            </p>
            <li class="mb-2 leading-relaxed">
              Définition de l&apos;identité de l&apos;agence
            </li>
            <li class="mb-2 leading-relaxed">Conception du site.</li>
            <li class="leading-relaxed">
              Développement et hébergement sur Netlify.
            </li>
            <p class="mt-8 italic">Webpack / TailwindCSS/ Netlify / Figma</p>
            <div class="flex justify-center">
              <div className={styles.divImage}>
                <a
                  href="https://github.com/mrp-171/agenceweb171"
                  className={styles.iconsSpace + " " + styles.zoomanim}
                >
                  <GitHubIcon sx={{ fontSize: 30 }} />
                </a>
                <a
                  href="https://metadev-mrp.netlify.app/"
                  className={styles.iconsSpace + " " + styles.zoomanim}
                >
                  <OpenInBrowserIcon sx={{ fontSize: 30 }} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* PROJET 4 */}
      <section
        class="text-gray-400 bg-white/75  body-font rounded-xl hover:scale-125 lg:w-3/5"
        data-aos="fade-right"
        data-aos-offset="200"
        data-aos-easing="ease-in-sine"
      >
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center lg:ml-4">
          <div className={styles.divImage}>
            <Image
              src={mazebank}
              alt="landingpage"
              height="350"
              width="350"
              className={styles.imgproject}
            />
          </div>
          <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-pink-500">
              Maze-Bank
            </h1>
            <h2 className={styles.title2}>Projet individuel</h2>
            <p class="mb-8 leading-relaxed">
              Ce projet individuel avait pour but de créer une application
              bancaire fictive. Permettant une introduction a Javascript et tout
              spécialement à la notion d&apos;algorithmie. Initiation a
              Javascript.
            </p>
            <li class="mb-2 leading-relaxed">
              Développement d&apos;un algorithme.
            </li>
            <li class="leading-relaxed">
              Production et hébergement sur Netlify.
            </li>
            <p class="mt-8 italic">Webpack / Javascript / Tailwind CSS / Netlify </p>
            <div class="flex justify-center">
              <div className={styles.divImage}>
                <a
                  href="https://github.com/PriskaSama/maze-bank"
                  className={styles.iconsSpace + " " + styles.zoomanim}
                >
                  <GitHubIcon sx={{ fontSize: 30 }} />
                </a>
                <a
                  href="https://maze-bank-priska.netlify.app/"
                  className={styles.iconsSpace + " " + styles.zoomanim}
                >
                  <OpenInBrowserIcon sx={{ fontSize: 30 }} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* PROJET 5 */}
      <section
        class="text-gray-400 bg-white/75  body-font rounded-xl hover:scale-125 lg:w-3/5"
        data-aos="fade-left"
        data-aos-offset="200"
        data-aos-easing="ease-in-sine"
      >
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center lg:ml-4">
          <div className={styles.divImage}>
            <Image
              src={metadevshop}
              alt="landingpage"
              height="350"
              width="350"
              className={styles.imgproject}
            />
          </div>
          <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-pink-500">
              TP Boutique
            </h1>
            <h2 className={styles.title2}>Projet de groupe</h2>
            <p class="mb-8 leading-relaxed">
              Projet en lien avec l&apos;agence web. Nous devions créer par
              groupe de quatre une boutique e-commerce via le CMS Wordpress.
            </p>
            <li class="mb-2 leading-relaxed">Initiation a Wordpress</li>
            <li class="mb-2 leading-relaxed">Elaboration d&apos;un wireframe.</li>
            <li class="mb-2 leading-relaxed">
              Hébergement sur nom de domaine Ionos.
            </li>
            <p class="mt-8 italic">Wordpress / Elementor / Ionos</p>
            <div class="flex justify-center">
              <div className={styles.divImage}>
                <a
                  href="https://metadev-mrp.fr/"
                  className={styles.iconsSpace + " " + styles.zoomanim}
                >
                  <OpenInBrowserIcon sx={{ fontSize: 30 }} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
