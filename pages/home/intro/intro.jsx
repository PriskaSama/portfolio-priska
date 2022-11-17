import Image from "next/image";
import priskachill from "@src/assets/img/chill-working.png";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import { motion } from "framer-motion";

let styles = {
  title: "text-lg py-4",
  title2: "uppercase text-4xl",
  template: "grid text-left px-8 py-12",
  text: "flex flex-row w-full justify-center py-4",
  intro: "py-16",
  profilphoto: "flex justify-center mt-8",
  icons: "flex justify-center py-8 md:hidden lg:hidden",
  animateBounce: "animate-bounce w-6 h-6",
  iconsSpace: "ml-4",
  zoomanim: "transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-pink-400 duration-300 cursor-pointer",
};

const Intro = () => {
  return (
    <>
      {/* INTRODUCTION */}
      <div className={styles.profilphoto}>
        <Image src={priskachill} alt="logo" height="300" width="300" />
      </div>
      <div className={styles.template}>
        <h1 className={styles.title}>Bonjour, je suis</h1>
        <h1 className={styles.title2}>Prisca Derville</h1>
        <h1 className={styles.title}>Et je suis développeuse web front-end</h1>
        <p className={styles.intro}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus tempora eligendi neque voluptatum officia architecto
          numquam molestias reprehenderit laborum, aspernatur consequatur veniam
          voluptatibus rerum autem magni exercitationem cupiditate consectetur
          modi.
        </p>
        <div className={styles.icons}>
           <a href="https://www.linkedin.com/in/dervilleprisca/" className={styles.zoomanim}>
            <LinkedInIcon sx={{ fontSize: 30 }} /> 
           </a>
           <a href="https://github.com/PriskaSama" className={styles.iconsSpace}>
           <GitHubIcon sx={{ fontSize: 30 }} />
           </a>
        </div>
        <div className={styles.text}>
          <p>Ne perdez pas de temps, scrollez directement pour voir la suite</p>
        </div>
        <div className={styles.profilphoto}>
        <KeyboardDoubleArrowDownIcon href="#about" className={styles.animateBounce + " " + styles.zoomanim}/>
        </div>
      </div>
    </>
  );
};

export default Intro;
