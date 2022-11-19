import Image from "next/image";
import priskachill from "@src/assets/img/chill-working.png";
import AnchorLink from "react-anchor-link-smooth-scroll-v2";

let styles = {
  navbar:
    "h-auto bg-black text-white lg:grid lg:grid-cols-3 fixed top-0 w-full overflow-hidden z-20",
  divlogo: "flex justify-center",
  logo: "h-auto w-24 lg:w-40 lg:mt-4 lg:ml-4",
  divnav:
    "flex justify-end items-center lg:items-center lg:justify-end lg:space-evenly mr-8 my-4 lg:pb-4",
  div2: "lg:grid lg:col-span-2",
  div3: "lg:flex lg:flex-col lg:justify-center",
  div4: "lg:flex lg:justify-center py-8",
  ul: "uppercase lg:flex lg:flex-row lg:justify-end hidden lg:text-xl font-roboto",
  spaceul: "mx-12",
  divname: "w-max pb-4 flex",
  hover: "hover:scale-125 hover:ease-in hover:duration-300 hover:text-pink-400",
  fontmontez: "font-montez text-4xl text-pink-500 lg:text-6xl",
  divlogo: "flex lg:flex lg:justify-center",
};

const Navbar = () => {
  return (
    <nav id="nav" className={styles.navbar}>
      {/* LOGO */}
      <div className={styles.divlogo}>
        <div className={styles.logo}>
          <Image src={priskachill} alt="priskachill" />
          <div className={styles.divname}>
            <h1 className={styles.fontmontez}>Prisca Derville</h1>
          </div>
        </div>
      </div>
      <div className={styles.div2}>
        <div className={styles.div3}>
          <div>
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
        </div>
      </div>
      {/* NAV BAR */}
    </nav>
  );
};

export default Navbar;
