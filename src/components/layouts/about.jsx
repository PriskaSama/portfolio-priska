import Image from "next/image";
import priskachill from "@src/assets/img/chill-working.png";

let styles = {
  template: "grid text-left px-8 py-12 bg-black text-white",
  skills: "grid grid-cols-2 gap-8 list-none uppercase py-20",
  profilepic: "flex justify-center py-8",
  title: "text-2xl uppercase underline pb-20",
  spacebtw: "mt-8",
};

const About = () => {
  return (
    // ABOUT ZONE
    <div className={styles.template}>
      <h2 className={styles.title}>01. A propos</h2>
      <p>
        Salut! Moi c'est Priska - "expliquer le commencement et ce que je
        faisais
      </p>
      <p>Pourquoi le changement?</p>
      <p>Ce que je fais aujourd'hui, ce que je cherche</p>
      <p className={styles.spacebtw}>
        Voici la stack technique sur laquelle je travail:{" "}
      </p>
      <ul className={styles.skills}>
        <li>HTML</li>
        <li>CSS</li>
        <li>Javascript</li>
        <li>PHP</li>
        <li>SQL</li>
        <li>Wordpress</li>
        <li>Tailwind css</li>
        <li>Bootstrap</li>
        <li>Node.js/ React.js/ Next.js</li>
        <li>Symfony / Express.js</li>
      </ul>
      <div className={styles.profilepic}>
        <Image src={priskachill} alt="profile-pic" height="200" width="200" />
      </div>
    </div>
  );
};

export default About;
