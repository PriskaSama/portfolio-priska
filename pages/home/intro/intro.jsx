import Image from "next/image";
import priskachill from "@src/assets/img/chill-working.png";

let styles = {
  title: "text-lg py-4",
  title2: "uppercase text-4xl",
  template: "grid text-left px-8 py-12",
  button:
    "flex flex-row w-full justify-center py-4 border-solid border-2 border-yellow-400/75 hover:border-slate-400 rounded-md",
  intro: "py-16",
  profilphoto: "flex justify-center mt-8"
};

const Intro = () => {
  return (
    <>
      {/* INTRODUCTION */}
      <div className={styles.profilphoto}>
      <Image src={priskachill} alt="logo" height="300" width="300"/>
      </div>
      <div className={styles.template}>
        <h1 className={styles.title}>Bonjour, je suis</h1>
        <h1 className={styles.title2}>Priska Derville</h1>
        <h1 className={styles.title}>Et je suis développeuse web front-end</h1>
        <p className={styles.intro}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus tempora eligendi neque voluptatum officia architecto
          numquam molestias reprehenderit laborum, aspernatur consequatur veniam
          voluptatibus rerum autem magni exercitationem cupiditate consectetur
          modi.
        </p>
      <div className={styles.button}>
        <button>Ne perdez pas de temps, scrollez directement</button>
      </div>
      </div>
    </>
  );
};

export default Intro;
