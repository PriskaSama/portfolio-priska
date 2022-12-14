import Image from "next/image";
// import mermaid from "@src/assets/img/mermaid.png";
import priskapp from "@src/assets/img/priskapp.png";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import BakeryDiningIcon from "@mui/icons-material/BakeryDining";
import SchoolIcon from "@mui/icons-material/School";

let styles = {
  template: "grid text-left bg-black text-white py-12 font-chakra",
  title: "uppercase pb-20 pl-4 text-2xl",
  img: "flex justify-center py-8",
  text: "py-12",
  space: "py-4",
  divimg: "w-screen lg:h-[23rem] lg:ml-12 flex justify-center",
  pp: "h-auto w-[350px] lg:w-[600px] hue-rotate-0 hover:hue-rotate-[285deg]",
};

const Roadmap = () => {
  return (
    // ROADMAP, SUMMARIZE CV
    <main className={styles.template}>
      <h1 className={styles.title} id="mon-parcours">
        <span className="pr-2 text-pink-500" data-aos="fade-right">
          {" "}
          03.
        </span>
        Mon parcours
      </h1>
      <div className={styles.img} data-aos="fade-up-left">
        <h1 className="text-4xl lg:text-5xl font-silkscreen text-pink-500 hover:scale-110 hover:ease-in hover:duration-300">
          Mon expérience
        </h1>
      </div>
      <section className="text-gray-200 body-font lg:text-xl" data-aos="zoom-in">
        <div className="container px-5 pb-24 lg:pt-32 mx-auto flex flex-wrap">
          <div className="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto">
            <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
              <div className="h-full w-1 bg-gray-800 pointer-events-none"></div>
            </div>
            <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-pink-500 text-white relative z-10 title-font font-medium text-sm">
              1
            </div>
            <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row hover:scale-110 hover:ease-in hover:duration-300">
              <div className="flex-shrink-0 w-24 h-24 bg-gray-800 text-pink-400 rounded-full inline-flex items-center justify-center">
                {/* <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-12 h-12"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg> */}
                <FlightTakeoffIcon sx={{ fontSize: 40 }} />
              </div>
              <div className="flex-grow sm:pl-6 mt-6 sm:mt-0 px-4 py-4 hover:bg-pink-800/50 rounded-3xl">
                <h2 className="font-medium title-font text-pink-500 mb-1 text-xl font-silkscreen">
                  Aout 2017
                </h2>
                <p
                  className="leading-relaxed"
                  data-aos="zoom-in-left"
                  data-aos-duration="1500"
                >
                  Je termine ma licence en commerce international à
                  l&apos;université de la Sorbonne Nouvelle.
                </p>
                <p
                  className="pt-2"
                  data-aos="zoom-in-left"
                  data-aos-duration="1500"
                >
                  A la suite de cela, ne sachant pas dans quel métier spécifique
                  me lancer et m&apos;appercevant que je n&apos;appréciais plus
                  le secteur du commerce car celui-ci ne m&apos;offrait pas
                  assez de créativité, de challenges et d&apos;opportunités,
                  <span className="text-pink-500"> j&apos;ai décidé de tout quitter pour m&apos;installer à
                  Londres </span> afin d&apos;améliorer mes compétences en anglais et de
                  mûrir mon projet professionnel.
                </p>
                {/* <p
                  className="pt-2"
                  data-aos="zoom-in-left"
                  data-aos-duration="1500"
                >
                  Je souhaitais également améliorer mes compétances en anglais
                  oral; Ainsi j&apos;ai donc décidé de tout quitter pour partir
                  m&apos;installer à Londres quelques années afin de mûrir mon
                  projet professionel.
                </p> */}
              </div>
            </div>
          </div>
          <div className="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
            <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
              <div className="h-full w-1 bg-gray-800 pointer-events-none"></div>
            </div>
            <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-pink-500 text-white relative z-10 title-font font-medium text-sm">
              2
            </div>
            <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row hover:scale-110 hover:ease-in hover:duration-300">
              <div className="flex-shrink-0 w-24 h-24 bg-gray-800 text-pink-400 rounded-full inline-flex items-center justify-center">
                {/* <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-12 h-12"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg> */}
                <LocationCityIcon sx={{ fontSize: 40 }} />
              </div>
              <div className="flex-grow sm:pl-6 mt-6 py-4 sm:mt-0 px-4 hover:bg-pink-800/50 rounded-3xl">
                <h2 className="font-medium title-font text-pink-500 mb-1 text-xl font-silkscreen">
                  Mai 2020
                </h2>
                <p
                  className="leading-relaxed"
                  data-aos="zoom-in-left"
                  data-aos-duration="1500"
                >
                  Je suis Team Lead en relation client à Londres.
                  J&apos;apprécie cette nouvelle expérience et mon poste me
                  plaît mais je continue à réfléchir à mes véritables
                  passions et comment je pourrais en faire un métier concret.
                </p>
                <p
                  className="pt-2"
                  data-aos="zoom-in-left"
                  data-aos-duration="1500"
                >
                  Le Covid arrive, c&apos;est à ce moment chez moi en télétravail,
                  que je décide de me focaliser sur ma futur carrière
                  professionelle.
                </p>
                <p
                  className="pt-2"
                  data-aos="zoom-in-left"
                  data-aos-duration="1500"
                >
                  J&apos;assiste à de nombreux webinaire pour comprendre les
                  métiers du web. J&apos;ai la chance de pouvoir <span className="text-pink-500"> suivre durant
                  une semaine des développeurs Front-End sur mon lieu de travail </span> 
                  et comprendre en quoi consiste le métier. Je m&apos;inscris
                  sur Codecademy afin d&apos;en apprendre plus.
                </p>
              </div>
            </div>
          </div>
          <div className="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
            <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
              <div className="h-full w-1 bg-gray-800 pointer-events-none"></div>
            </div>
            <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-pink-500 text-white relative z-10 title-font font-medium text-sm">
              3
            </div>
            <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row hover:scale-110 hover:ease-in hover:duration-300">
              <div className="flex-shrink-0 w-24 h-24 bg-gray-800 text-pink-400 rounded-full inline-flex items-center justify-center">
                {/* <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-12 h-12"
                  viewBox="0 0 24 24"
                >
                  <circle cx="12" cy="5" r="3"></circle>
                  <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
                </svg> */}
                <BakeryDiningIcon sx={{ fontSize: 40 }} />
              </div>
              <div className="flex-grow sm:pl-6 mt-6 py-4 sm:mt-0 px-4 hover:bg-pink-800/50 rounded-3xl">
                <h2 className="font-medium title-font text-pink-500 mb-1 text-xl font-silkscreen">
                  Novembre 2021
                </h2>
                <p
                  className="leading-relaxed pt-2"
                  data-aos="zoom-in-left"
                  data-aos-duration="1500"
                >
                  Je décide de démissioner de mon poste à Londres.
                </p>
                <p
                  className="pt-2"
                  data-aos="zoom-in-left"
                  data-aos-duration="1500"
                > <span className="text-pink-500">Je retourne m&apos;installer en France </span>
                    afin de trouver une
                  formation adéquate qui me permettra de développer les
                  compétences nécessaires attendues sur le marché du travail.
                </p>
              </div>
            </div>
          </div>
          <div className="flex relative pb-10 sm:items-center md:w-2/3 mx-auto">
            <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
              <div className="h-full w-1 bg-gray-800 pointer-events-none"></div>
            </div>
            <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-pink-500 text-white relative z-10 title-font font-medium text-sm">
              4
            </div>
            <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row hover:scale-110 hover:ease-in hover:duration-300">
              <div className="flex-shrink-0 w-24 h-24 bg-gray-800 text-pink-400 rounded-full inline-flex items-center justify-center">
                {/* <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-12 h-12"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg> */}
                <SchoolIcon sx={{ fontSize: 40 }} />
              </div>
              <div className="flex-grow sm:pl-6 mt-6 py-4 sm:mt-0 px-4 hover:bg-pink-800/50 rounded-3xl">
                <h2 className="font-medium title-font mb-1 text-xl text-pink-500 font-silkscreen">
                  Juin 2022
                </h2>
                <p
                  className="leading-relaxed pt-2"
                  data-aos="zoom-in-left"
                  data-aos-duration="1500"
                >
                  Je trouve ma <span className="text-pink-500">formation en développement web FullStack au
                  centre de formation de l&apos;ACS - Access Code School à Meaux </span> 
                  où j&apos;y apprend le métier de développeur web et web
                  mobile.
                  <br />
                  J&apos;y acquiert énormément de connaissances au travers de
                  nombreux projets et technologies, me permettant de préparer le
                  titre professionnel de développeur web et web mobile de niveau
                  III.
                </p>
                <p
                  className="pt-2"
                  data-aos="zoom-in-left"
                  data-aos-duration="1500"
                >
                  Cela a été un véritable tremplin dans cette nouvelle aventure
                  que j&apos;ai décidé de poursuivre en me spécialisant en
                  développement web Front-End React.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Roadmap;
