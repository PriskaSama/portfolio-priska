import Image from "next/image";
import priska from "../../assets/img/p-letter.png"

let styles = {
  navbar: "bg-black text-white h-auto grid grid-cols-2",
  ul: "uppercase flex flex-col",
  logo: "h-auto w-16 lg:w-80 ml-8 mt-8",
  divnav: "flex justify-end mr-8 my-4",
  divlogo: "flex justify-start",
};

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      {/* LOGO */}
      <div className={styles.logo}>
        <Image src={priska} />
      </div>
      {/* NAV BAR */}
      <div className={styles.divnav}>
        <ul className={styles.ul}>
          <li>
            <a href="#">Accueil</a>
          </li>
          <li>
            <a href="#apropos">01. A propos</a>
          </li>
          <li>
            <a href="#projets">02. Projets</a>
          </li>
          <li>
            <a href="#contact">03. Contact</a>
          </li>
          <li>
            <a href="#">Mon CV</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;