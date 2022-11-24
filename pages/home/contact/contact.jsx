// import Image from "next/image";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import AnchorLink from "react-anchor-link-smooth-scroll-v2";
import Link from "next/link";

let styles = {
  template:
    "font-chakra grid text-left px-8 py-12 text-gray-600 body-font relative",
  title: "text-2xl uppercase pb-20 text-gray-900",
  intro: "py-4",
  icons: "flex justify-center text-gray-500",
  contactpic: "flex justify-center",
  zoomanim:
    "cursor-pointer hover:scale-125 hover:ease-in hover:duration-300 hover:text-pink-400 p-2 w-full ",
  iconsSpace: "ml-4",
  animateBounce: "animate-bounce w-6 h-6 ml-12",
};

const Contacts = () => {
  return (
    // CONTACT DETAILS + FORM TO ADD

    <section className={styles.template}>
      <h1 id="contact" className={styles.title}>
        <span className="pr-2 text-pink-600">05.</span>Contact
      </h1>
      <div
        className="container px-5 py-12 mx-auto backdrop-blur-sm bg-white/20 rounded-xl"
        data-aos="fade-up"
      >
        <div className="flex flex-col text-center w-full mb-12">
          <h1
            className="text-4xl pb-20 lg:text-5xl font-silkscreen text-pink-600 hover:scale-110 hover:ease-in hover:duration-300"
            data-aos="flip-right"
          >
            Me Contacter
          </h1>
          <p
            className="leading-relaxed text-base font-bold"
            data-aos="fade-up-left"
          >
            Que ce soit pour me proposer un job, un projet en collaboration ou
            juste me faire un petit coucou, n&apos;hésitez pas à m&apos;envoyez
            un message 😊
          </p>
        </div>
        <div className="lg:w-1/2 md:w-2/3 mx-auto">
          <div className="flex flex-wrap -m-2">
            <div className="p-2 w-1/2">
              <div className="relative">
                <label
                  htmlFor="name"
                  className="leading-7 text-sm text-gray-600 font-bold"
                >
                  Votre nom :
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Votre nom"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-pink-500 focus:bg-white focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                ></input>
              </div>
            </div>
            <div className="p-2 w-1/2">
              <div className="relative">
                <label
                  htmlFor="email"
                  className="leading-7 text-sm text-gray-600 font-bold"
                >
                  Votre e-mail :
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Votre email"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-pink-500 focus:bg-white focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                ></input>
              </div>
            </div>
            <div className="p-2 w-full">
              <div className="relative">
                <label
                  htmlFor="message"
                  className="leading-7 text-sm text-gray-600 font-bold"
                >
                  Votre message :
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Dites moi tout"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-pink-500 focus:bg-white focus:ring-2 focus:ring-pink-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                ></textarea>
              </div>
            </div>
            <div className={styles.zoomanim}>
              <button className="flex mx-auto text-white bg-pink-500 border-0 py-2 px-8 focus:outline-none rounded text-lg hover:scale-125 hover:ease-in hover:duration-300 hover:text-black font-bold">
                Envoyer
              </button>
            </div>
            <div className="p-2 w-full pt-8 mt-8 border-t border-gray-400 text-center">
              <div className={styles.zoomanim}>
                <a
                  className="text-pink-500 cursor-pointer hover:scale-125 focus:outline-none hover:ease-in hover:duration-300 hover:text-pink-800 font-bold"
                  href="mailto:contact@derville-portfolio.fr"
                  aria-label="link to email"
                >
                  <a>contact@derville-portfolio.fr</a>
                </a>
              </div>
              <span className="inline-flex mt-4">
                <div className={styles.icons}>
                  <a
                    href="https://www.linkedin.com/in/dervilleprisca/"
                    className={`${styles.iconsSpace} ${styles.zoomanim}`}
                    aria-label="link to my Linkedin"
                  >
                    <LinkedInIcon sx={{ fontSize: 30 }} />
                  </a>
                  <a
                    href="https://github.com/PriskaSama"
                    className={`${styles.iconsSpace} ${styles.zoomanim}`}
                    aria-label="link to my Github"
                  >
                    <GitHubIcon sx={{ fontSize: 30 }} />
                  </a>
                </div>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
