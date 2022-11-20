// import Image from "next/image";
// import coral from "@src/assets/img/coral.png";
import Link from "next/link";

let styles = {
  template1: "bg-black/90 w-full mt-auto h-28 flex justify-center items-center font-silkscreen text-md",
  template2: "text-white text-center",
};

const Footer = () => {
  return (
    <footer className={styles.template1}>
      <div className={styles.template2}>
        <div>
          <span>
            © 2022 -
            <Link
              href="https://linkedin.com/in/dervilleprisca"
              target="_blank"
              rel="noreferrer noopener"
            >
              Priska Derville
            </Link>
          </span>
          <p>Made with my blood & tears🩸😭</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
