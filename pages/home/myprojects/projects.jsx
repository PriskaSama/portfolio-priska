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
  template3: "lg:flex lg:flex-row",
  title: "flex flex-start w-full uppercase text-2xl pb-20",
  title2: "text-2xl text-gray-500 mb-12",
  title3: "text-lg italic",
  title4: "text-xl uppercase pb-20 lg:text-3xl text-gray-200 text-pink-400",
  title5: "text-4xl pb-20 lg:text-6xl font-montez text-pink-600 hover:scale-110 hover:ease-in hover:duration-300",
  tasks: "list-none mt-8",
  div1:"py-4",
  divImage: "py-14 pl-12 flex justify-center",
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
        <span class="text-pink-600 pr-1">02.</span>Mes projets
      </h1>
      <div className={styles.title5}>
        <h2>Tour des principaux projets.</h2>
      </div>
      {/* PROJET 1 */}
      <div className={styles.template3}>
      <section
        class="text-gray-500 backdrop-blur bg-white/30 body-font rounded-xl my-8 lg:my-0 lg:w-3/5 lg:mb-8"
        data-aos="fade-left"
        >
        <div class="container mx-auto flex px-5 py-12 md:flex-row flex-col items-center">
          <div className={styles.divImage} class="lg:ml-8">
            <Image
              src={wireframe}
              alt="landingpage"
              height="350"
              width="350"
              className={styles.imgproject}
              
              />
          </div>
          <div class="lg:flex-grow md:w-1/2 lg:pl-16 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 class="title-font pt-4 sm:text-4xl text-3xl mb-4 font-medium text-pink-500">
              Intégration wireframe
            </h1>
            <h2 className={styles.title2}>Projet de groupe</h2>
            <p class="mb-8 leading-relaxed">
              Notre tout premier projet par groupe de deux. L&apos;objectif
              était d&apos;intégrer une maquette préalablement crée avec Figma. Et de créer une interface web simple afin d&apos;intégrer celle-ci.
            </p>
            <div>
            <li class="mb-2 leading-relaxed text-left">Elaboration d&apos;un wireframe.</li>
            <li class="mb-8 leading-relaxed text-left">Passage en production.</li>
            </div>
            <p class="mt-8 italic font-bold">Webpack / TailwindCSS/ Netlify</p>
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
        class="text-gray-500 backdrop-blur bg-white/30 body-font rounded-xl my-8 lg:my-0 lg:w-3/5 lg:mb-8"
        data-aos="fade-left"
        >
        <div class="container mx-auto flex px-5 py-12 lg:pr-12 md:flex-row flex-col items-center">
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
          <div class="lg:flex-grow md:w-1/2 lg:pl-8 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 class="title-font sm:text-4xl lg:pt-4 text-3xl mb-4 font-medium text-pink-500">
              Landing page
            </h1>
            <h2 className={styles.title2}>Projet individuel</h2>
            <p class="leading-relaxed">
              Dans ce projet, nous devions expérimenter les différentes phases
              de réalisation d&apos;un projet web. En passant par
              l&apos;intégration d&apos;une maquette à son passage en
              production.
            </p>
            <p class="mb-8">Effectuer une version responsive sur mobile, tablette
              et desktop. Et finalement héberger le site sur un serveur public.</p>
            <li class="mb-2 leading-relaxed">Elaboration d&apos;un wireframe.</li>
            <li class="mb-8 leading-relaxed">Passage en production.</li>
            <p class="mt-8 italic font-bold">Bootstrap / TailwindCSS</p>
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
      </div>
      {/* PROJET 3 */}
      <div className={styles.template3}>
      <section
        class="text-gray-500 backdrop-blur bg-white/30 body-font my-8 rounded-xl hover:scale-125 lg:w-3/5 lg:ml-4 g:mb-8"
        data-aos="fade-left"
        >
        <div class="container mx-auto flex px-5 lg:px-0 py-12 md:flex-row flex-col items-center">
          <div className={styles.divImage}>
            <Image
              src={metadev}
              alt="landingpage"
              height="350"
              width="350"
              className={styles.imgproject}
              />
          </div>
          <div class="lg:flex-grow md:w-1/2 lg:pl-16 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-pink-500">
              Agence web
            </h1>
            <h2 className={styles.title2}>Projet de groupe</h2>
            <p class="mb-8 leading-relaxed">
              Ce projet par groupe de trois, consistait à fonder une agence-web fictive. Proposant divers services tel que création de site web, réferencement SEO/SEA.
              Les étapes les plus importantes étaient les suivantes:
            </p>
            <div>
            <li class="mb-2 leading-relaxed">
              Définition de l&apos;identité de l&apos;agence.
            </li>
            <li class="mb-2 leading-relaxed text-left">Elaboration d&apos;un cahier des charges.</li>
            <li class="mb-2 leading-relaxed text-left">Conception du site en suivant la méthode Kanban.</li>
            <li class="mb-2 leading-relaxed text-left">
              Développement en local et hébergement sur Netlify.
            </li>
            </div>
            <p class="mt-8 italic font-bold">Webpack / TailwindCSS/ Netlify / Figma</p>
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
        class="text-gray-500 backdrop-blur bg-white/30 body-font my-8 lg:my-0 rounded-xl hover:scale-125 lg:w-3/5 g:mb-8"
        data-aos="fade-right"
        >
        <div class="container mx-auto flex px-5 lg:px-0 py-12 md:flex-row flex-col items-center lg:ml-4">
          <div className={styles.divImage}>
            <Image
              src={mazebank}
              alt="landingpage"
              height="350"
              width="350"
              className={styles.imgproject}
              />
          </div>
          <div class="lg:flex-grow md:w-1/2 lg:pl-16 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-pink-500">
              Maze-Bank
            </h1>
            <h2 className={styles.title2}>Projet individuel</h2>
            <p class="mb-2 leading-relaxed">
              Ce projet individuel avait pour but de créer une application
              bancaire fictive. Permettant des dépôts, retrait et virement d&apos;argent.
            </p>
            <p class="mb-8 leading-relaxed">Ce projet m&apos;a permis de comprendre à quel point et pourquoi Javascript est un puissant language de programmation. Mais également une réelle première introduction à la notion d&apos;algorithmie.</p>
            <div>
              <div>
            <li class="mb-2 leading-relaxed text-left">
              Développement d&apos;une interface utilisateur.
            </li>
            <li class="mb-2 leading-relaxed text-left">
              Développement d&apos;un algorithme.
            </li>
            <li class="mb-2 leading-relaxed text-left">
              Production et hébergement sur Netlify.
            </li>
              </div>
            </div>
            <p class="mt-8 italic font-bold">Webpack / Javascript / Tailwind CSS / Netlify </p>
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
                  </div>
      {/* PROJET 5 */}
      <section
        class="text-gray-500 backdrop-blur bg-white/30 body-font my-8 rounded-xl hover:scale-125 lg:w-3/5 g:mb-8"
        data-aos="fade-left"
      >
        <div class="container mx-auto flex px-5 py-12 md:flex-row flex-col items-center lg:ml-4">
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
            <p class="mb-2 leading-relaxed text-left">
              Projet en lien avec l&apos;agence web. Nous devions créer par
              groupe de quatre une boutique e-commerce via le CMS Wordpress. Proposant nos services préalablement décris sur notre site web ainsi que des produits dérivés.
            </p>
            <p class="mb-8 leading-relaxed text-left">J&apos;ai également crée une page Linkedin active pour ce projet.</p>
            <div>
            <li class="mb-2 leading-relaxed text-left">Elaboration d&apos;un wireframe.</li>
            <li class="mb-2 leading-relaxed text-left">Initiation a Wordpress et PHP.</li>
            <li class="mb-2 leading-relaxed text-left">Mise à jour du cahier des charges de l&apos;agence web.</li>
            <li class="mb-2 leading-relaxed text-left">
              Hébergement sur nom de domaine Ionos.
            </li>
            </div>
            <p class="mt-8 italic font-bold">Wordpress / Elementor / Ionos</p>
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
