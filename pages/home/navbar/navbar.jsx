import Image from "next/image";
import priskachill from "@src/assets/img/chill-working.png";
import AnchorLink from "react-anchor-link-smooth-scroll-v2";

let styles = {
  navbar: "bg-black text-white h-auto grid grid-cols-2 lg:grid-cols-3",
  ul: "uppercase lg:flex lg:flex-row hidden lg:text-xl font-roboto",
  logo: "h-auto w-24 pl-8 py-8 lg:w-40 lg:pl-4 lg:py-4",
  divnav:
    "flex justify-end items-center lg:items-center lg:justify-end lg:space-evenly mr-8 my-4 lg:col-span-3",
  divlogo: "flex justify-start",
  spaceul: "mx-12",
  hover: "hover:scale-125 hover:ease-in hover:duration-300 hover:text-pink-400",
  fontmontez: "font-montez text-4xl text-pink-500 lg:text-6xl",
  flex: "flex items-center lg:justify-center",
};

const Navbar = () => {
  return (
    <nav id="nav" className={styles.navbar}>
      {/* LOGO */}
      <div className={styles.logo}>
        <Image src={priskachill} alt="priskachill" />
      </div>
      <div className={styles.flex}>
        <h1 className={styles.fontmontez}>Prisca Derville</h1>
      </div>
      {/* NAV BAR */}
      <div className={styles.divnav}>
        <ul className={styles.ul}>
          <li className={styles.hover}>
            <a id="home" href="https://derville-portfolio.fr">
              Accueil
            </a>
          </li>
          <li className={styles.spaceul + " " + styles.hover}>
            <AnchorLink href="#a-propos">A propos</AnchorLink>
          </li>
          <li className={styles.hover}>
            <AnchorLink href="#projets">Projets</AnchorLink>
          </li>
          <li className={styles.spaceul + " " + styles.hover}>
            <AnchorLink href="#mon-parcours">Mon parcours</AnchorLink>
          </li>
          <li className={styles.hover}>
            <AnchorLink href="#contact">Contact</AnchorLink>
          </li>
          <li className={styles.spaceul + " " + styles.hover}>
            <a
              href="/docs/CV-PriscaDerville.pdf"
              class="border border-pink-400 rounded-md px-4 py-2"
            >
              Mon CV
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
