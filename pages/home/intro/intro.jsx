// import Image from "next/image";
// import priskachill from "@src/assets/img/chill-working.png";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import AnchorLink from "react-anchor-link-smooth-scroll-v2";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";

let styles = {
  title: "text-lg py-4 lg:py-0 lg:text-4xl",
  title2: "uppercase text-4xl lg:text-7xl",
  template:
    "mt-40 h-[85vh] lg:h-[85vh] px-8 py-12 lg:p-0 lg:flex lg:flex-col lg:justify-evenly lg:items-center lg:pt-8",
  text: "flex flex-row w-full justify-center py-4 text-center",
  intro: "py-16 lg:px-10 lg:text-center",
  profilphoto: "flex justify-center mt-8 lg:mt-0",
  icons: "flex justify-center py-8",
  animateBounce: "animate-bounce w-6 h-6",
  iconsSpace: "ml-4",
  zoomanim:
    "cursor-pointer hover:scale-125 hover:ease-in hover:duration-300 hover:text-pink-400",
};

const Intro = () => {
  return (
    <>
      {/* INTRODUCTION */}
      {/* <div className={styles.profilphoto}>
        <Image src={priskachill} alt="logo" height="300" width="300" />
      </div> */}

      <div className={styles.template} data-aos="zoom-in">
        <div className="text-center lg:flex lg:flex-col lg:items-center lg:pb-8">
          <h1 className={styles.title}>Bonjour, moi c&apos;est</h1>
          <h1 className={styles.title2}>Prisca Derville</h1>
          <h1 className="text-center lg:text-5xl">Et je suis une</h1>
          <h1 className={styles.title}>
            <TypeAnimation
              sequence={[
                "Développeuse web Front-End", // Types 'One'
                1000, // Waits 1s
                "Développeuse web React", // Deletes 'One' and types 'Two'
                2000, // Waits 2s
                // "Two Three", // Types 'Three' without deleting 'Two'
              ]}
              wrapper="div"
              cursor={true}
              repeat={Infinity}
            />
          </h1>
        </div>
        {/* <p className={styles.intro}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus tempora eligendi neque voluptatum officia architecto
          numquam molestias reprehenderit laborum, aspernatur consequatur veniam
          voluptatibus rerum autem magni exercitationem cupiditate consectetur
          modi.
        </p> */}
        <div className={styles.icons}>
          <a
            href="https://www.linkedin.com/in/dervilleprisca/"
            className={styles.zoomanim}
            aria-label="link to my Linkedin"
          >
            <LinkedInIcon sx={{ fontSize: 50 }} />
          </a>
          <a
            href="https://github.com/PriskaSama"
            className={`${styles.iconsSpace} ${styles.zoomanim}`}
            aria-label="link to my Github"
          >
            <GitHubIcon sx={{ fontSize: 50 }} />
          </a>
        </div>
        <div className={styles.text}>
          <p className="text-pink-500">Cliquez en dessous pour voir la suite</p>
        </div>
        <div className={styles.profilphoto}>
          <AnchorLink href="#about" aria-label="link to about part">
            <KeyboardDoubleArrowDownIcon
              className={`${styles.animateBounce} ${styles.zoomanim}`}
            />
          </AnchorLink>
        </div>
      </div>
    </>
  );
};

export default Intro;
