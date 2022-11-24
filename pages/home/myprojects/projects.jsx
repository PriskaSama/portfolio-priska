import Image from "next/image";
import wireframe from "@src/assets/img/wireframe-final.png";
import landingpage from "@src/assets/img/landingpage.png";
import metadev from "@src/assets/img/metadevservice.png";
import mazebank from "@src/assets/img/maze-bank.png";
import metadevshop from "@src/assets/img/metadevshop.png";
import cvpriska from "@src/assets/img/cv-priska.png";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";
import * as React from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import AnchorLink from "react-anchor-link-smooth-scroll-v2";

let styles = {
  template: "flex flex-col items-center px-8 py-12 font-chakra font-bold",
  template2: "flex flex-col justify-center",
  template3: "lg:flex lg:flex-row",
  title: "flex flex-start w-full uppercase text-2xl pb-20",
  title2: "text-2xl text-gray-500 mb-12",
  title3: "text-lg italic",
  title4: "text-xl uppercase pb-20 lg:text-3xl text-gray-200 text-pink-400",
  title5:
    "text-4xl pb-20 lg:text-5xl font-silkscreen text-pink-600 hover:scale-110 hover:ease-in hover:duration-300",
  tasks: "list-none mt-8",
  div1: "py-4",
  divImage: "pt-4 lg:py-14 lg:pl-2 lg:flex lg:justify-center",
  divImg2: "lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10",
  text: "pt-4",
  imgproject: "object-cover object-center",
  iconsSpace: "ml-4",
  zoomanim:
    "cursor-pointer hover:scale-125 hover:ease-in hover:duration-300 hover:text-pink-500",
};

const Projects = () => {
  return (
    <div className={styles.template}>
      <h1 className={styles.title} id="projets">
        <span className="text-pink-600 pr-1" data-aos="fade-right">
          02.
        </span>
        Mes projets
      </h1>
      <div className={styles.title5} data-aos="fade-up-right">
        <h2>Principaux projets</h2>
      </div>
      {/* PROJET 1 */}
      <div className={styles.template3}>
        <section
          className="text-gray-500 backdrop-blur-sm bg-white/20  body-font my-8 rounded-xl lg:mr-2 hover:scale-125 lg:w-3/5 lg:ml-4 g:mb-8"
          data-aos="fade-left"
        >
          <div className="container mx-auto flex px-5 pb-8 lg:pt-12 lg:pr-12 md:flex-row flex-col items-center">
            <div className={styles.divImage}>
              <Image
                src={wireframe}
                alt="wireframe"
                height="500"
                width="350"
                className={styles.imgproject}
              />
            </div>
            <div className="lg:flex-grow md:w-1/2 lg:pl-16 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
              <h1 className="title-font pt-4 sm:text-4xl text-3xl mb-4 font-medium text-pink-500">
                Intégration wireframe
              </h1>
              <h2 className={styles.title2}>Projet de groupe</h2>
              <p className="mb-2 leading-relaxed text-left">
                Notre tout premier projet par groupe de deux. L&apos;objectif
                était d&apos;intégrer une maquette préalablement créée avec
                Figma puis, réaliser une interface web simple afin
                d&apos;intégrer celle-ci.
              </p>
              <p className="mb-8 leading-relaxed text-left">
                L&apos;objectif étant de se familiariser avec les classes CSS
                ainsi que Flex et Grid afin d&apos;organiser la page.
              </p>
              <div>
                <div>
                  <ul>
                    <li className="mb-2 leading-relaxed text-left">
                      Elaboration d&apos;un wireframe.
                    </li>
                    <li className="mb-2 leading-relaxed text-left">
                      Passage en production sur serveur public.
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-8 italic font-bold">En Vanilla CSS </p>
              <div className="flex justify-center">
                <div className={styles.divImage}>
                  <a
                    href="https://github.com/PriskaSama/landing-page0"
                    className={`${styles.iconsSpace} ${styles.zoomanim}`}
                  >
                    <GitHubIcon sx={{ fontSize: 40 }} />
                  </a>
                  <a
                    href="https://priscad.promo-171.codeur.online/landing-page0/"
                    className={`${styles.iconsSpace} ${styles.zoomanim}`}
                  >
                    <LaunchIcon sx={{ fontSize: 40 }} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* PROJET 2 */}
        <section
          className="text-gray-500 backdrop-blur bg-white/20  body-font my-8 rounded-xl lg:mr-2 hover:scale-125 lg:w-3/5 lg:ml-4 g:mb-8"
          data-aos="fade-right"
        >
          <div className="container mx-auto flex px-5 pb-8 lg:pt-12 lg:pr-12 md:flex-row flex-col items-center">
            <div className={styles.divImage}>
              <Image
                src={landingpage}
                alt="landingpage"
                height="500"
                width="350"
                className={styles.imgproject}
              />
            </div>
            <div className="lg:flex-grow md:w-1/2 lg:pl-16 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
              <h1 className="title-font pt-4 sm:text-4xl text-3xl mb-4 font-medium text-pink-500">
                Landing page
              </h1>
              <h2 className={styles.title2}>Projet individuel</h2>
              <p className="mb-2 leading-relaxed text-left">
                Dans ce projet, nous devions expérimenter les différentes phases
                de réalisation d&apos;un projet web en passant par
                l&apos;intégration d&apos;une maquette et à sa mise en
                production.
              </p>
              <p className="mb-8 leading-relaxed text-left">
                Effectuer une version responsive sur mobile, tablette et desktop
                puis héberger le site sur un serveur public chez Ionos.
              </p>
              <div>
                <div>
                  <ul>
                    <li className="mb-2 leading-relaxed text-left">
                      Elaboration d&apos;un wireframe.
                    </li>
                    <li className="mb-2 leading-relaxed text-left">
                      Passage en production sur serveur public.
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-8 italic font-bold">Bootstrap / TailwindCSS </p>
              <div className="flex justify-center">
                <div className={styles.divImage}>
                  <a
                    href="https://github.com/PriskaSama/landing-page0"
                    className={`${styles.iconsSpace} ${styles.zoomanim}`}
                  >
                    <GitHubIcon sx={{ fontSize: 40 }} />
                  </a>
                  <a
                    href="https://priscad.promo-171.codeur.online/landing-page0/"
                    className={`${styles.iconsSpace} ${styles.zoomanim}`}
                  >
                    <LaunchIcon sx={{ fontSize: 40 }} />
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
          className="text-gray-500 backdrop-blur bg-white/20  body-font my-8 rounded-xl lg:mr-2 hover:scale-125 lg:w-3/5 lg:ml-4 g:mb-8"
          data-aos="fade-left"
        >
          <div className="container mx-auto flex px-5 pb-8 lg:pt-12 lg:pr-12 md:flex-row flex-col items-center">
            <div className="pt-4 lg:pb-16 lg:pl-2 lg:flex lg:justify-center">
              <Image
                src={metadev}
                alt="metadev"
                height="500"
                width="350"
                className={styles.imgproject}
              />
            </div>
            <div className="lg:flex-grow md:w-1/2 lg:pl-16 md:pl-16 flex flex-col md:items-start text-left md:text-left items-center">
              <h1 className="title-font pt-4 sm:text-4xl text-3xl mb-4 font-medium text-pink-500">
                Agence web
              </h1>
              <h2 className={styles.title2}>Projet de groupe</h2>
              <p className="mb-2 leading-relaxed">
                Ce projet par groupe de trois, consistait à fonder une agence
                web fictive proposant divers services tel que la création de
                site web et le réferencement SEO/SEA.
              </p>
              <p className="mb-8 leading-relaxed">
                Les étapes les plus importantes furent les suivantes:
              </p>
              <div>
                <div>
                  <ul>
                    <li className="mb-2 leading-relaxed text-left">
                      Définition de l&apos;identité de l&apos;agence.
                    </li>
                    <li className="mb-2 leading-relaxed text-left">
                      Elaboration d&apos;un cahier des charges.
                    </li>
                    <li className="mb-2 leading-relaxed text-left">
                      Conception du site en suivant la méthode Kanban.
                    </li>
                    <li className="mb-2 leading-relaxed text-left">
                      Développement en local et hébergement sur Netlify.
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-8 italic font-bold">
                Webpack / Javascript / Tailwind CSS / Netlify
              </p>
              <div className="flex justify-center">
                <div className={styles.divImage}>
                  <a
                    href="https://github.com/PriskaSama/maze-bank"
                    className={`${styles.iconsSpace} ${styles.zoomanim}`}
                  >
                    <GitHubIcon sx={{ fontSize: 40 }} />
                  </a>
                  <a
                    href="https://maze-bank-priska.netlify.app/"
                    className={`${styles.iconsSpace} ${styles.zoomanim}`}
                  >
                    <LaunchIcon sx={{ fontSize: 40 }} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* PROJET 4 */}
        <section
          className="text-gray-500 backdrop-blur bg-white/20  body-font my-8 rounded-xl lg:mr-2 hover:scale-125 lg:w-3/5 lg:ml-4 g:mb-8"
          data-aos="fade-right"
        >
          <div className="container mx-auto flex px-5 pb-8 lg:pt-12 lg:pr-12 md:flex-row flex-col items-center">
            <div className={styles.divImage}>
              <Image
                src={mazebank}
                alt="landingpage"
                height="500"
                width="350"
                className={styles.imgproject}
              />
            </div>
            <div className="lg:flex-grow md:w-1/2 lg:pl-16 md:pl-16 flex flex-col md:items-start text-left md:text-left items-center">
              <h1 className="title-font pt-4 sm:text-4xl text-3xl mb-4 font-medium text-pink-500">
                Maze-Bank
              </h1>
              <h2 className={styles.title2}>Projet individuel</h2>
              <p className="mb-2 leading-relaxed">
                Ce projet individuel avait pour but de créer une application
                bancaire fictive permettant des dépôts, retrait et virement
                d&apos;argent.
              </p>
              <p className="mb-8 leading-relaxed">
                Il m&apos;a permis de comprendre à quel point et pourquoi
                Javascript est un puissant langage de programmation.
              </p>
              <div>
                <div>
                  <ul>
                    <li className="mb-2 leading-relaxed text-left">
                      Développement d&apos;une interface utilisateur.
                    </li>
                    <li className="mb-2 leading-relaxed text-left">
                      Développement d&apos;un algorithme.
                    </li>
                    <li className="mb-2 leading-relaxed text-left">
                      Production et hébergement sur Netlify.
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-8 italic font-bold">
                Webpack / Javascript / Tailwind CSS / Netlify
              </p>
              <div className="flex justify-center">
                <div className="pt-4 lg:pt-28 lg:pl-2 lg:flex lg:justify-center">
                  <a
                    href="https://github.com/PriskaSama/maze-bank"
                    className={`${styles.iconsSpace} ${styles.zoomanim}`}
                  >
                    <GitHubIcon sx={{ fontSize: 40 }} />
                  </a>
                  <a
                    href="https://maze-bank-priska.netlify.app/"
                    className={`${styles.iconsSpace} ${styles.zoomanim}`}
                  >
                    <LaunchIcon sx={{ fontSize: 40 }} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* PROJET 5 */}
      <div className={styles.template3}>
        <section
          className="text-gray-500 backdrop-blur-sm bg-white/20  body-font my-8 rounded-xl lg:mr-2 hover:scale-125 lg:w-3/5 lg:ml-4 g:mb-8"
          data-aos="fade-left"
        >
          <div className="container mx-auto flex px-5 pb-8 lg:pt-12 lg:pr-12 md:flex-row flex-col items-center">
            <div className="pt-4 lg:pt-24 lg:pl-2 lg:flex lg:justify-center">
              <Image
                src={cvpriska}
                alt="cv"
                height="500"
                width="350"
                className={styles.imgproject}
              />
            </div>
            <div className="lg:flex-grow md:w-1/2 lg:pl-16 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
              <h1 className="title-font pt-4 sm:text-4xl text-3xl mb-4 font-medium text-pink-500">
                CV en ligne
              </h1>
              <h2 className={styles.title2}>Projet individuel</h2>
              <p className="mb-2 leading-relaxed text-left">
                Notre tout premier projet par groupe de deux. L&apos;objectif
                était d&apos;intégrer une maquette préalablement créée avec
                Figma. Et de créer une interface web simple afin d&apos;intégrer
                celle-ci.
              </p>
              <p className="mb-8 leading-relaxed text-left">
                Et de créer une interface web simple afin d&apos;intégrer
                celle-ci. L&apos;objectif etant de se familiariser avec les
                classes CSS.
              </p>
              <div>
                <div>
                  <ul>
                    <li className="mb-2 leading-relaxed text-left">
                      Elaboration d&apos;un wireframe.
                    </li>
                    <li className="mb-2 leading-relaxed text-left">
                      Passage en production sur Netlify.
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-8 italic font-bold">En Vanilla CSS </p>
              <div className="flex justify-center">
                <div className="pt-4 lg:pt-36 lg:pl-2 lg:flex lg:justify-center">
                  <a
                    href="https://github.com/PriskaSama/cv"
                    className={`${styles.iconsSpace} ${styles.zoomanim}`}
                  >
                    <GitHubIcon sx={{ fontSize: 40 }} />
                  </a>
                  <a
                    href="https://cv-priscaderville.netlify.app"
                    className={`${styles.iconsSpace} ${styles.zoomanim}`}
                  >
                    <LaunchIcon sx={{ fontSize: 40 }} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* PROJET 6 */}
        <section
          className="text-gray-500 backdrop-blur bg-white/20  body-font my-8 rounded-xl lg:mr-2 hover:scale-125 lg:w-3/5 lg:ml-4 g:mb-8"
          data-aos="fade-right"
        >
          <div className="container mx-auto flex px-5 pb-8 lg:pt-12 lg:pr-12 md:flex-row flex-col items-center">
            <div className={styles.divImage}>
              <Image
                src={metadevshop}
                alt="metadevshop"
                height="500"
                width="350"
                className={styles.imgproject}
              />
            </div>
            <div className="lg:flex-grow md:w-1/2 lg:pl-16 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
              <h1 className="title-font pt-4 sm:text-4xl text-3xl mb-4 font-medium text-pink-500">
                Boutique
              </h1>
              <h2 className={styles.title2}>Projet de groupe</h2>
              <p className="mb-2 leading-relaxed text-left">
                Projet en lien avec l&apos;agence web, nous devions créer par
                groupe de quatre une boutique e-commerce via le CMS Wordpress
                proposant nos services préalablement décris sur notre site web
                ainsi que nos produits dérivés.
              </p>
              <p className="mb-8 leading-relaxed text-left">
                Hébergement du site sur un nom de domaine Ionos.
              </p>
              <div>
                <div>
                  <ul>
                    <li className="mb-2 leading-relaxed text-left">
                      J&apos;ai également crée une page{" "}
                      <AnchorLink
                        target="_blank"
                        rel="noreferrer"
                        href="https://www.linkedin.com/company/metadev-mrp/"
                        className="text-pink-500  hover:text-pink-800"
                      >
                        LinkedIn
                      </AnchorLink>{" "}
                      active pour ce projet.
                    </li>
                    <li className="mb-2 leading-relaxed text-left">
                      Initiation a Wordpress et PHP.
                    </li>
                    <li className="mb-2 leading-relaxed text-left">
                      Mise à jour du cahier des charges de l&apos;agence web.
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-8 italic font-bold">
                Wordpress / Elementor / Ionos
              </p>
              <div className="flex justify-center">
                <div className={styles.divImage}>
                  <a
                    href="https://metadev-mrp.fr/"
                    className={`${styles.iconsSpace} ${styles.zoomanim}`}
                  >
                    <LaunchIcon sx={{ fontSize: 40 }} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Projects;
