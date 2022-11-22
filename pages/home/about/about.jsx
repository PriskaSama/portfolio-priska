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

let styles = {
  template: "flex flex-col text-left px-8 py-12 bg-black text-white font-chakra",
  skills: "grid grid-cols-2 gap-8 list-none uppercase py-20",
  profilepic: "flex justify-center py-8",
  title: "text-2xl uppercase pb-20",
  spacebtw: "mt-8",
  title2: "text-4xl lg:text-5xl pb-20 pl-8 font-silkscreen text-pink-500 hover:scale-110 hover:ease-in hover:duration-300",
  hoverzoom: "hover:scale-100",
  img: "w-16 h-16 bg-black object-cover object-center flex-shrink-0 rounded-full mr-4",
  img2: "bg-black object-cover object-center flex-shrink-0 rounded-full mr-4",
  introbox: "text-justify lg:w-2/3 lg:pt-12",
  divimg: "lg:h-[23rem] flex justify-center",
  pp: "h-auto w-[600px] lg:w-[600px]",
};

const About = () => {
  return (
    // ABOUT ZONE
    <div id="about" className={styles.template}>
      <h2 className={styles.title} id="a-propos">
        <span className="text-pink-600 pr-2" data-aos="fade-right">01.</span>A propos
      </h2>
      <section className="text-gray-100 body-font" data-aos="fade-up">
        <div className="container lg:px-5 py-12 lg:mx-auto">
          <div className="flex flex-col lg:w-full mb-20 lg:text-center">
            <h1 className={styles.title2} data-aos="flip-right">Hello world!</h1>
            <div className={styles.divimg} data-aos="flip-left">
        <span className={styles.pp}>
          <Image src={priskapp} alt="priskapic" />
        </span>
      </div>
            <div className={styles.introbox} data-aos="fade-up-right" data-aos-duration="1500">
              <p>Je suis une dev web junior spécialisée en front-end.</p>
              <p className="pt-2">
                En tant que développeuse, j&apos;aime le processus de création,
                de brainstorming et de recherche (lecture de la doc bien sûr) précedant
                le moment où l&apos;on se retrousse les manches pour passer aux
                choses sérieuses et coder!
              </p>
              <p className="pt-2">
                Le développement web est devenu une évidence durant l&apos;année
                2020, mais l&apos;informatique en général a toujours été
                l&apos;une de mes passions les plus chère.
              </p>
              <p className="mx-auto leading-relaxed text-base mt-8 lg:text-lg font-extrabold text-pink-500">
                Voici un petit aperçu des technologies que j&apos;utilise :
              </p>
            </div>
          </div>
          <div className="flex flex-wrap -m-2">
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
                  <h2 className="text-gray-200 title-font font-medium ml-4">CSS</h2>
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
                  <h2 className="text-gray-200 title-font font-medium ml-4">PHP</h2>
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
