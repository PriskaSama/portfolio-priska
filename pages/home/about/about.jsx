import Image from "next/image";
import bootstrap from "@src/assets/img/bootstrap.webp";
import symfony from "@src/assets/img/symfony.svg";
import react from "@src/assets/img/react.webp";
import tailwind from "@src/assets/img/tailwind.webp";
import wordpress from "@src/assets/img/wordpress.webp";
import php from "@src/assets/img/php.png";
import js from "@src/assets/img/js.png";
import css from "@src/assets/img/css.png";
import html from "@src/assets/img/html.png";
import Link from "next/link";
import priskapp from "@src/assets/img/priskapp.png";
import AnchorLink from "react-anchor-link-smooth-scroll-v2";

let styles = {
  template:
    "flex flex-col text-left px-8 py-12 bg-black text-white font-chakra",
  skills: "grid grid-cols-2 gap-8 list-none uppercase py-20",
  profilepic: "lg:flex lg:justify-center lg:py-8",
  divabout: "mx-auto flex flex-col lg:flex lg:flex-col lg:justify-center lg:mt-28 lg:ml-32 lg:text-xl",
  title: "text-2xl uppercase pb-20",
  spacebtw: "mt-8",
  title2:
    "text-4xl lg:text-5xl pb-20 pl-8 font-silkscreen text-pink-500 hover:scale-110 hover:ease-in hover:duration-300",
  hoverzoom: "hover:scale-100",
  img: "w-16 h-16 bg-black object-cover object-center flex-shrink-0 rounded-full mr-4",
  img2: "bg-black object-cover object-center flex-shrink-0 rounded-full mr-4",
  introbox: "text-justify lg:w-2/3 lg:pt-12 lg:text-xl",
  divimg: "lg:h-[23rem] lg:flex lg:justify-end lg:mb-44 lg:mt-16",
  pp: "h-auto w-[600px] lg:w-[600px]",
};

const About = () => {
  return (
    // ABOUT ZONE
    <div id="about" className={styles.template}>
      <h2 className={styles.title} id="a-propos">
        <span className="text-pink-600 pr-2" data-aos="fade-right">
          01.
        </span>
        A propos
      </h2>
      <section className="text-gray-100 body-font" data-aos="fade-up">
        <div className="container lg:px-5 py-12 lg:mx-auto">
          <div className="flex flex-col lg:flex lg:w-full mb-20 lg:text-center">
            <h1 className={styles.title2} data-aos="flip-right">
              Hello world!
            </h1>
            <div className={styles.divimg}>
              <span className={styles.pp}>
                <Image src={priskapp} alt="priskapic" data-aos="flip-left" data-aos-duration="1500"/>
              </span>
              <div className={styles.divabout}
              >
                <p className="pt-8 lg:mr-56" data-aos="fade-right" data-aos-duration="1500">
                  <span className="text-pink-500 pr-24"> Age : </span><span>31 ans</span> 
                </p>
                <p className="pt-8 lg:mr-40" data-aos="fade-right" data-aos-duration="1500">
                  <span className="text-pink-500 pr-12"> Téléphone : </span><span>07.86.80.56.91</span>
                </p>
                <p className="pt-8 lg:mr-8" data-aos="fade-right" data-aos-duration="1500">
                  <span className="text-pink-500 pr-20"> Email : </span><span className="pl-1">contact@derville-portfolio.fr</span>
                </p>
                <p className="pt-8 pb-20 lg:mr-4" data-aos="fade-right" data-aos-duration="1500">
                  <span className="text-pink-500 pr-16"> Raison : </span><span className="pl-2">En reconversion professionelle</span>
                </p>
              </div>
            </div>
               <span className="border border-pink-500 w-1/2 mx-auto lg:w-1/4"></span>
            <div
              className={styles.introbox}
              data-aos="fade-up-right"
              data-aos-duration="1500"
            >
              <p className="pt-20">
                Je suis une développeuse web et web mobile spécialisée en
                <span className="text-pink-500"> Front-End</span>.
              </p>
              <p className="pt-4">
                En tant que développeuse web, j&apos;aime le processus de{" "}
                <span className="text-pink-500">
                  {" "}
                  création, de brainstorming et de recherche
                </span>{" "}
                (en lisant la doc 😏) précedant le moment où l&apos;on se
                retrousse les manches pour passer aux choses sérieuses et
                développer notre application !
              </p>
              <p className="pt-4">
                Ce que je recherche après la formation que j&apos;ai commencée,
                c&apos;est d&apos;acquérir de l&apos;expérience et de{" "}
                <span className="text-pink-500 hover:text-pink-800">
                  me spécialiser en Front-End sur React.JS
                </span>
                . C&apos;est un environnement que j&apos;apprécie pour sa
                fiabilité et sa flexibilité, raison pour laquelle je tiens à
                approfondir et maîtriser cette librairie.
              </p>
              <p className="pt-4">
                L&apos;informatique en général m&apos;a toujours passionnée mais
                le développement web est réellement devenu une évidence pour moi
                durant l&apos;année 2020. Vous trouverez plus
                d&apos;informations à mon sujet dans la section{" "}
                <AnchorLink
                  href="#mon-parcours"
                  className="text-pink-500 hover:text-pink-800"
                >
                  parcours
                </AnchorLink>
                .
              </p>
              <p className="mx-2 lg:mx-auto leading-relaxed text-base mt-8 lg:text-xl font-extrabold text-pink-500">
                Voici un petit aperçu des technologies que j&apos;utilise :
              </p>
            </div>
          </div>
          <div className="flex flex-wrap -m-2 lg:text-xl">
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full" data-aos="flip-up">
              <div className="h-full flex items-center shadow-md shadow-pink-500/50 border-pink-400 border p-4 rounded-lg hover:scale-110 hover:ease-in hover:duration-300 lg:h-4/8 hover:bg-pink-800">
                <Image
                  src={html}
                  alt="html"
                  className={styles.img}
                  height="60"
                  width="60"
                />
                <div className="flex-grow">
                  <h2 className="text-gray-200 title-font font-medium ml-4">
                    HTML
                  </h2>
                </div>
              </div>
            </div>
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full" data-aos="flip-up">
              <div className="h-full flex items-center border-pink-400 border p-4 rounded-lg hover:scale-110 hover:ease-in shadow-md shadow-pink-500/50 hover:duration-300 lg:h-4/8 hover:bg-pink-800">
                <Image
                  src={css}
                  alt="css"
                  className={styles.img}
                  height="60"
                  width="60"
                />
                <div className="flex-grow">
                  <h2 className="text-gray-200 title-font font-medium ml-4">
                    CSS
                  </h2>
                </div>
              </div>
            </div>
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full" data-aos="flip-up">
              <div className="h-full flex items-center border-pink-400 border p-4 rounded-lg hover:scale-110 hover:ease-in shadow-md shadow-pink-500/50 hover:duration-300 lg:h-4/8 hover:bg-pink-800">
                <Image
                  src={js}
                  alt="js"
                  className={styles.img}
                  height="60"
                  width="60"
                />
                <div className="flex-grow">
                  <h2 className="text-gray-200 title-font font-medium ml-4">
                    JAVASCRIPT
                  </h2>
                </div>
              </div>
            </div>
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full" data-aos="flip-up">
              <div className="h-full flex items-center border-pink-400 border p-4 rounded-lg hover:scale-110 hover:ease-in shadow-md shadow-pink-500/50 hover:duration-300 lg:h-4/8 hover:bg-pink-800">
                <Image
                  src={php}
                  alt="php"
                  className={styles.img}
                  height="70"
                  width="60"
                />
                <div className="flex-grow">
                  <h2 className="text-gray-200 title-font font-medium ml-4">
                    PHP
                  </h2>
                  <p className="ml-4 text-gray-200 title-font font-medium">
                    MySQL
                  </p>
                </div>
              </div>
            </div>
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full" data-aos="flip-up">
              <div className="h-full flex items-center border-pink-400 border p-4 rounded-lg hover:scale-110 hover:ease-in shadow-md shadow-pink-500/50 hover:duration-300 lg:h-4/8 hover:bg-pink-800">
                <Image src={wordpress} alt="wordpress" className={styles.img} />
                <div className="flex-grow">
                  <h2 className="text-gray-200 title-font font-medium ml-4">
                    WORDPRESS
                  </h2>
                </div>
              </div>
            </div>
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full" data-aos="flip-up">
              <div className="h-full flex items-center border-pink-400 border p-4 rounded-lg hover:scale-110 hover:ease-in shadow-md shadow-pink-500/50 hover:duration-300 lg:h-4/8 hover:bg-pink-800">
                <Image src={tailwind} alt="tailwind" className={styles.img} />
                <div className="flex-grow">
                  <h2 className="text-gray-200 title-font font-medium ml-4">
                    TAILWIND CSS
                  </h2>
                </div>
              </div>
            </div>
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full" data-aos="flip-up">
              <div className="h-full flex items-center border-pink-400 border p-4 rounded-lg hover:scale-110 hover:ease-in shadow-md shadow-pink-500/50 hover:duration-300 lg:h-4/8 hover:bg-pink-800">
                <Image
                  src={react}
                  alt="react"
                  className={styles.img}
                  height="60"
                  width="60"
                />
                <div className="flex-grow">
                  <h2 className="text-gray-200 title-font font-medium ml-4">
                    NODE.JS
                  </h2>
                  <p className="text-gray-200 title-font font-medium ml-4">
                    REACT.JS
                  </p>
                  <p className="text-gray-200 title-font font-medium ml-4">
                    NEXT.JS
                  </p>
                </div>
              </div>
            </div>
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full" data-aos="flip-up">
              <div className="h-full flex items-center border-pink-400 border p-4 rounded-lg hover:scale-110 hover:ease-in shadow-md shadow-pink-500/50 hover:duration-300 lg:h-4/8 hover:bg-pink-800">
                <Image
                  src={symfony}
                  alt="symfony"
                  className={styles.img2}
                  height="60"
                  width="60"
                />
                <div className="flex-grow">
                  <h2 className="text-gray-200 title-font font-medium ml-4">
                    SYMFONY
                  </h2>
                  <p className="text-gray-200 title-font font-medium ml-4">
                    EXPRESS.JS
                  </p>
                </div>
              </div>
            </div>
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full" data-aos="flip-up">
              <div className="h-full flex items-center border-pink-400 border p-4 rounded-lg hover:scale-110 hover:ease-in shadow-md shadow-pink-500/50 hover:duration-300 lg:h-4/8 hover:bg-pink-800">
                <Image src={bootstrap} alt="bootstrap" className={styles.img} />
                <div className="flex-grow">
                  <h2 className="text-gray-200 title-font font-medium ml-4">
                    BOOTSTRAP
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
