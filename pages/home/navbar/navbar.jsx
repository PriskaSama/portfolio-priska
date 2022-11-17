import Image from "next/image";
import priskaxcat from "@src/assets/img/grumpy.png";
import Burger from "@pages/home/burger/burger";

let styles = {
  navbar: "bg-black text-white h-auto grid grid-cols-2 lg:grid-cols-3",
  ul: "uppercase lg:flex lg:flex-row hidden lg:text-xl",
  logo: "h-auto w-24 lg:w-40 ml-8 mt-8",
  divnav: "flex justify-end items-center lg:items-center lg:space-evenly mr-8 my-4 lg:col-span-2",
  divlogo: "flex justify-start",
  spaceul: "mx-4",
  burgerhidden: "lg:hidden",
  hover: "hover:scale-125"
};


const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      {/* LOGO */}
      <div className={styles.logo}>
        <Image src={priskaxcat} alt="priskacat"/>
      </div>
      {/* NAV BAR */}
      <div className={styles.divnav}>
        <ul className={styles.ul}>
          <li className={styles.hover}>
            <a id="home" >Accueil</a>
          </li>
          <li className={styles.spaceul + " " + styles.hover}>
            <a href="#a-propos">A propos</a>
          </li>
          <li className={styles.hover}>
            <a href="#projets">Projets</a>
          </li>
          <li className={styles.spaceul + " " + styles.hover}>
            <a href="#mon-parcours">Mon parcours</a>
          </li>
          <li className={styles.hover}>
            <a href="#contact">Contact</a>
          </li>
          <li className={styles.spaceul + " " + styles.hover}>
            <a href="https://cv-priscaderville.netlify.app">Mon CV</a>
          </li>
        </ul>
        <div className={styles.burgerhidden}>
          <Burger />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;