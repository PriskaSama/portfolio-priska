import Image from "next/image";
import priskachill from "@src/assets/img/chill-working.png";
import AnchorLink from "react-anchor-link-smooth-scroll-v2";
import Link from "next/link";

let styles = {
  navbar: "lg:h-[15vh] bg-black/90 backdrop-blur text-white lg:grid lg:grid-cols-3 fixed top-0 w-full overflow-hidden z-20",
  name: "flex justify-around lg:justify-center lg:items-center",
  logo: "h-auto pt-2 w-24 lg:hidden",
  divnav: "flex justify-end items-center lg:items-center lg:justify-end lg:space-evenly mr-8 my-4 lg:pb-4",
  div2: "lg:grid lg:col-span-2",
  div3: "lg:flex lg:flex-col lg:justify-center lg:pt-4",
  div4: "lg:flex lg:justify-center py-8",
  ul: "uppercase lg:flex lg:flex-row lg:justify-end hidden lg:text-xl font-roboto",
  spaceul: "mx-12",
  hover: "hover:scale-125 hover:ease-in hover:duration-300 hover:text-pink-400",
  fontmontez: "font-montez text-5xl text-pink-500 lg:text-7xl",
};

const Navbar = () => {
  return (
    <nav id="nav" className={styles.navbar}>
      {/* LOGO */}
      <div className={styles.name}>
        <div className={styles.logo}>
          <Image src={priskachill} alt="priskachill" />
        </div>
          <div className={styles.div4}>
            <h1 className={styles.fontmontez}>Prisca Derville</h1>
          </div>
      </div>
      <div className={styles.div2}>
        <div className={styles.div3}>
          <div>
            <ul className={styles.ul}>
              <li className={styles.hover}>
                <Link id="home" href="https://derville-portfolio.fr">
                  Accueil
                </Link>
              </li>
              <li className={`${styles.spaceul} ${styles.hover}`}>
                <AnchorLink href="#a-propos">A propos</AnchorLink>
              </li>
              <li className={styles.hover}>
                <AnchorLink href="#projets">Projets</AnchorLink>
              </li>
              <li className={`${styles.spaceul} ${styles.hover}`}>
                <AnchorLink href="#mon-parcours">Mon parcours</AnchorLink>
              </li>
              <li className={styles.hover}>
                <AnchorLink href="#contact">Contact</AnchorLink>
              </li>
              <li className={`${styles.spaceul} ${styles.hover}`}>
                <Link
                  href="/docs/CV-PriscaDerville.pdf"
                  className="border border-pink-400 rounded-md px-4 py-2"
                >
                  Mon CV
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
