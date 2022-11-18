// import Image from "next/image";
// import mermaid from "@src/assets/img/mermaid.png";
// import priskachill from "@src/assets/img/chill-working.png";
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import BakeryDiningIcon from '@mui/icons-material/BakeryDining';
import SchoolIcon from '@mui/icons-material/School';

let styles = {
  template: "grid text-left bg-black text-white px-8 py-12 font-roboto",
  title: "uppercase pb-20 text-2xl",
  img: "flex justify-center py-8",
  text: "py-12",
  space: "py-4",
};

const Roadmap = () => {
  return (
    // ROADMAP, SUMMARIZE CV
    <main className={styles.template}>
      <h1 className={styles.title} id="mon-parcours">
        <span class="pr-2 text-pink-500"> 03.</span>Mon parcours
      </h1>
      <div className={styles.img}>
        <h1 class="text-xl pb-20 lg:text-6xl font-montez text-pink-500 hover:scale-110 hover:ease-in hover:duration-300">Comment j&apos;en suis arrivée là? (version courte)</h1>
      </div>
      <section
        class="text-gray-300 body-font"
        data-aos="zoom-in"
      >
        <div class="container px-5 py-24 mx-auto flex flex-wrap">
          <div class="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto">
            <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
              <div class="h-full w-1 bg-gray-800 pointer-events-none"></div>
            </div>
            <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-pink-500 text-white relative z-10 title-font font-medium text-sm">
              1
            </div>
            <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row hover:scale-110 hover:ease-in hover:duration-300">
              <div class="flex-shrink-0 w-24 h-24 bg-gray-800 text-pink-400 rounded-full inline-flex items-center justify-center">
                {/* <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-12 h-12"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg> */}
                <FlightTakeoffIcon sx={{ fontSize: 40 }} />
              </div>
              <div class="flex-grow sm:pl-6 mt-6 py-2 sm:mt-0 px-4 hover:bg-pink-800 rounded-lg">
                <h2 class="font-medium title-font text-pink-500 mb-1 text-xl">
                  Aout 2017
                </h2>
                <p class="leading-relaxed">
                  Je termine ma licence en commerce international à l&apos;université
                  de la Sorbonne Nouvelle sur Paris.
                </p>
                <p class="pt-2">
                  A la suite de cela, ne sachant pas dans quel métier spécifique me lancer et m&apos;appercevant que finallement je n&apos;appréciais pas vraiment le secteur du commerce car celui-ci ne m&apos;offrait pas assez de créativité, de challenges et d&apos;opportunités en géneral.
                  <p class="pt-2">
                  Je souhaitais également améliorer mes compétances en anglais oral; Ainsi j&apos;ai donc décidé de tout quitter pour partir m&apos;installer à Londres quelques années afin de mûrir mon projet professionel.
                  </p>
                </p>
              </div>
            </div>
          </div>
          <div class="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
            <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
              <div class="h-full w-1 bg-gray-800 pointer-events-none"></div>
            </div>
            <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-pink-500 text-white relative z-10 title-font font-medium text-sm">
              2
            </div>
            <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row hover:scale-110 hover:ease-in hover:duration-300">
              <div class="flex-shrink-0 w-24 h-24 bg-gray-800 text-pink-400 rounded-full inline-flex items-center justify-center">
                {/* <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-12 h-12"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg> */}
                <LocationCityIcon sx={{ fontSize: 40 }} />
              </div>
              <div class="flex-grow sm:pl-6 mt-6 py-2 sm:mt-0 px-4 hover:bg-pink-800 rounded-lg">
                <h2 class="font-medium title-font text-pink-500 mb-1 text-xl">
                  Mai 2020
                </h2>
                <p class="leading-relaxed">
                  Je suis Team Lead en relation client à Londres. J&apos;apprécie cette nouvelle expérience et mon poste me plaît, mais je continue toujours à réfléchir à mes véritables passions et comment je pourrais en faire des métiers concret. L&apos;épidémie
                  Covid-19 est la.
                </p>
                <p class="pt-2">
                  C&apos;est à ce moment précis en étant en télétravail chez moi que
                  je décide de me focaliser sur ma futur carrière
                  professionelle;
                </p>
                <p class="pt-2">
                  J&apos;assiste à de nombreux webinaire pour comprendre les métiers
                  du web. j&apos;ai la chance de pouvoir suivre durant une semaine des développeurs front-end à mon travail et comprendre en quoi consiste le métier. Je m&apos;inscris sur Codecademy afin d&apos;apprendre et comprendres les bases en
                  HTML et CSS.
                </p>
              </div>
            </div>
          </div>
          <div class="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
            <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
              <div class="h-full w-1 bg-gray-800 pointer-events-none"></div>
            </div>
            <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-pink-500 text-white relative z-10 title-font font-medium text-sm">
              3
            </div>
            <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row hover:scale-110 hover:ease-in hover:duration-300">
              <div class="flex-shrink-0 w-24 h-24 bg-gray-800 text-pink-400 rounded-full inline-flex items-center justify-center">
                {/* <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-12 h-12"
                  viewBox="0 0 24 24"
                >
                  <circle cx="12" cy="5" r="3"></circle>
                  <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
                </svg> */}
                <BakeryDiningIcon sx={{ fontSize: 40 }} />
              </div>
              <div class="flex-grow sm:pl-6 mt-6 py-2 sm:mt-0 px-4 hover:bg-pink-800/95 rounded-lg">
                <h2 class="font-medium title-font text-pink-500 mb-1 text-xl">
                  Novembre 2021
                </h2>
                <p class="leading-relaxed pt-2">
                  Je décide de démissioner de mon poste à Londres.
                  <p class="pt-2">Je retourne
                  m&apos;installer en France afin de poursuivre mes recherches pour
                  trouver une formation adéquate qui me permettra de développer les compétances nécessaires demandés sur le marché du travail. Je continue à suivre les webinaires de différentes écoles et centres de formation afin de trouver celle qui me correspondrait le mieux en fonction de la méthode d&apos;enseignement.
                  </p>
                </p>
              </div>
            </div>
          </div>
          <div class="flex relative pb-10 sm:items-center md:w-2/3 mx-auto">
            <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
              <div class="h-full w-1 bg-gray-800 pointer-events-none"></div>
            </div>
            <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-pink-500 text-white relative z-10 title-font font-medium text-sm">
              4
            </div>
            <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row hover:scale-110 hover:ease-in hover:duration-300">
              <div class="flex-shrink-0 w-24 h-24 bg-gray-800 text-pink-400 rounded-full inline-flex items-center justify-center">
                {/* <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-12 h-12"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg> */}
                <SchoolIcon sx={{ fontSize: 40 }} />
              </div>
              <div class="flex-grow sm:pl-6 mt-6 py-2 sm:mt-0 px-4 hover:bg-pink-800 rounded-lg">
                <h2 class="font-medium title-font mb-1 text-xl text-pink-500">
                  Juin 2022
                </h2>
                <p class="leading-relaxed pt-2">
                  Je trouve enfin ma formation en développement web fullstack au centre de
                  formation de l&apos;ACS (Access Code School) à Meaux. Là bas,
                  j&apos;apprends grâce à une pédagogie inversé le métier de
                  développeur web full stack au travers de nombreux projets et technologies.
                </p>
                <p class="pt-2">Cela a été un véritable tremplin dans cette nouvelle aventure que j&apos;ai décidé de poursuivre.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Roadmap;
