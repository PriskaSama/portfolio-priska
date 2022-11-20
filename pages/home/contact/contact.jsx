import Image from "next/image";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import AnchorLink from "react-anchor-link-smooth-scroll-v2";

let styles = {
  template: "font-roboto grid text-left px-8 py-12 text-gray-600 body-font relative",
  title: "text-2xl uppercase pb-20 text-gray-900",
  intro: "py-4",
  icons: "flex justify-center text-gray-500",
  contactpic: "flex justify-center",
  iconsSpace: "ml-4",
  zoomanim:"cursor-pointer hover:scale-125 hover:ease-in hover:duration-300 hover:text-pink-500",
  button1: "p-2 w-full",
  iconsSpace: "ml-4",
  animateBounce: "animate-bounce w-6 h-6 ml-12",
};

const Contacts = () => {
  return (
    // CONTACT DETAILS + FORM TO ADD

    <section className={styles.template}>
      <h1 id="contact" className={styles.title}>
        <span class="pr-2 text-pink-600">05.</span>Contact
      </h1>
      {/* <div className={styles.contactpic}>
        <Image src={contactme} alt="contactme" height="180" width="180" />
      </div> */}
      <div
        className="container px-5 py-12 mx-auto backdrop-blur bg-white/20 rounded-xl"
        data-aos="fade-up"
  
        
      >
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="text-4xl pb-20 lg:text-6xl font-montez text-pink-600 hover:scale-110 hover:ease-in hover:duration-300" data-aos="flip-right">
            Contactez moi
          </h1>
          <p className="leading-relaxed text-base">
            Que ce soit pour me proposer un job, un projet en collaboration ou
            juste me faire un petit coucou, n&apos;hésitez pas à m&apos;envoyez un message
            😊
          </p>
        </div>
        <div className="lg:w-1/2 md:w-2/3 mx-auto">
          <div className="flex flex-wrap -m-2">
            <div className="p-2 w-1/2">
              <div className="relative">
                <label for="name" className="leading-7 text-sm text-gray-600">
                  Nom
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-pink-500 focus:bg-white focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                ></input>
              </div>
            </div>
            <div className="p-2 w-1/2">
              <div className="relative">
                <label for="email" className="leading-7 text-sm text-gray-600">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-pink-500 focus:bg-white focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                ></input>
              </div>
            </div>
            <div className="p-2 w-full">
              <div className="relative">
                <label
                  for="message"
                  className="leading-7 text-sm text-gray-600"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-pink-500 focus:bg-white focus:ring-2 focus:ring-pink-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                ></textarea>
              </div>
            </div>
            <div className={styles.zoomanim + " " + styles.button1}>
              <button className="flex mx-auto text-white bg-pink-500 border-0 py-2 px-8 focus:outline-none rounded text-lg hover:scale-125 hover:ease-in hover:duration-300 hover:text-black">
                Envoyer
              </button>
            </div>
            <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
              <div className={styles.zoomanim + " " + styles.button1}>
              <a className="text-pink-500 cursor-pointer hover:scale-125 focus:outline-none hover:ease-in hover:duration-300 hover:text-pink-800" href="mailto:contact@derville-portfolio.fr">contact@derville-portfolio.fr</a>
              </div>
              <p className="leading-normal my-5">77100, Meaux (France)</p>
              <span className="inline-flex">
                <div className={styles.icons}>
                  <a
                    href="https://www.linkedin.com/in/dervilleprisca/"
                    className={styles.iconsSpace + " " + styles.zoomanim}
                  >
                    <LinkedInIcon sx={{ fontSize: 30 }} />
                  </a>
                  <a
                    href="https://github.com/PriskaSama"
                    className={styles.iconsSpace + " " + styles.zoomanim}
                  >
                    <GitHubIcon sx={{ fontSize: 30 }} />
                  </a>
                </div>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="flex justify-end">
        <AnchorLink href="#nav">
          <KeyboardDoubleArrowUpIcon
            className={styles.animateBounce + " " + styles.zoomanim}
          />
        </AnchorLink>
        {/* <p className={styles.intro}>Retour vers le haut</p> */}
      </div>
    </section>
  );
};

export default Contacts;
