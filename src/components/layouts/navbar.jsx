import Image from "next/image";
import priska from "../../assets/img/p-letter.png"

let styles = {
  navbar: "bg-black text-white h-auto grid grid-cols-2",
  ul: "uppercase flex flex-col",
  logo: "h-auto w-12 lg:w-80",
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
            <a href="#">01. A propos</a>
          </li>
          <li>
            <a href="#">02. Skills</a>
          </li>
          <li>
            <a href="#">03. Projets</a>
          </li>
          <li>
            <a href="#">04. Contact</a>
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