import Link from "next/link";

let styles = {
  error:
    "flex h-screen items-center justify-center bg-[url('https://img.freepik.com/vecteurs-libre/zombie-sort-tombe-scene-effrayante-halloween_107791-11295.jpg?w=1380&t=st=1669130256~exp=1669130856~hmac=c1c6a7678f72d531a192bb29a840c15b98bbb1fd85ac90aadb1fad73ae6438f1')] bg-cover bg-no-repeat bg-center font-chakra text-extrabold",
  block: "backdrop-blur bg-white/20 rounded-xl py-12 px-12",
  text: "text-center mt-8 text-2xl",
  button:
    "flex justify-center mx-auto text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none rounded text-lg hover:scale-125 hover:ease-in hover:duration-300 hover:text-black font-bold",
};

const error404 = () => {
  return (
    <div className={styles.error}>
      <div className={styles.block} data-aos="flip-right">
        <h1 className="uppercase pb-4 text-center text-6xl">
          Tiens tiens, Erreur 404... 🧟‍♀️
        </h1>
        <div className={styles.text}>
          <p>Prêt pour la Zombie apocalypse? Moi oui</p>
          <p>
            Mais si vous ne l&apos;êtes pas, je vous invite à faire demi-tour en
            cliquant sur le lien ci-dessous
          </p>
        </div>
        <div class="p-2 w-full mt-16">
          <a href="https://derville-portfolio.fr/">
            <button class="flex mx-auto text-white bg-blue-600/80 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded-lg text-lg hover:scale-125 hover:ease-in hover:duration-300 hover:text-black font-bold">
              Retour vers des jours meilleurs 🤍
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default error404;
