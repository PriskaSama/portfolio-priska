import Image from "next/image";
import priskaxsukuna from "@src/assets/img/priskaxsukuna.png";

let styles = {
  title: "text-lg py-4",
  title2: "uppercase text-4xl",
  template: "grid text-left px-8 py-12",
  button:
    "flex flex-row w-full justify-center py-4 border-solid border-2 border-yellow-400/75 hover:border-slate-400 rounded-md",
  intro: "py-10",
};

const Content = () => {
  return (
    <>
      {/* INTRODUCTION */}
      <Image src={priskaxsukuna} alt="logo" height="300" width="300" />
      <div className={styles.template}>
        <h1 className={styles.title}>Bonjour, je suis</h1>
        <h1 className={styles.title2}>Priska Derville</h1>
        <h1 className={styles.title}>Et je suis développeuse web</h1>
        <p className={styles.intro}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus tempora eligendi neque voluptatum officia architecto
          numquam molestias reprehenderit laborum, aspernatur consequatur veniam
          voluptatibus rerum autem magni exercitationem cupiditate consectetur
          modi.
        </p>
      <div className={styles.button}>
        <button>Pour en savoir plus, je vous invite à scroller</button>
      </div>
      </div>
    </>
  );
};

export default Content;
