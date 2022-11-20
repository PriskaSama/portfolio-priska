import link from "next/link";

let styles = {
  error: "flex w-screen h-screen items-center justify-center",
};

const error404 = () => {
  return (
    <div className={styles.error}>
      <h1>ERREUR 404...triste, tu t&apos;es trompé</h1>
      <Link href="/index.html">
        <button>Retour à la page d&apos;accueil</button>
      </Link>
    </div>
  );
};

export default error404;
