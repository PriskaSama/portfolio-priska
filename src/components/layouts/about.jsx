import Image from "next/image";
import priskaxsukuna from "@src/assets/img/priskaxsukuna.png";

let styles = {
  template: "grid text-left px-8 py-12",
  skills: "grid grid-cols-2 gap-8 list-none uppercase py-8",
};

const about = () => {
  return (
    // ABOUT ZONE
    <div className={styles.template}>
    <h2>02. A propos</h2>
    <p>Salut! C'est moi Priska - "expliquer le commencement et ce que je faisais</p>
    <p>Pourquoi le changement</p>
    <p>Ce que je fais aujourd'hui, ce que je cherche</p>
    <p>Lister la stack tech sur laquelle on bosse:</p>
    <ul className={styles.skills}>
      <li>HTML</li>
      <li>CSS</li>
      <li>Javascript</li>
      <li>PHP</li>
      <li>SQL</li>
      <li>Wordpress</li>
      <li>Tailwind css</li>
      <li>Bootstrap</li>
      <li>Node/ React / Next</li>
    </ul>
    <div>
      <Image src={priskaxsukuna} alt="profile-pic" height="100" width="100" />
    </div>
    </div>
  );
};

export default About;