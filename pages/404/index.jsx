import Link from "next/link";

let styles = {
  error: "flex w-screen h-screen items-center justify-center",
};

const Error404 = () => {
  return (
    <div className={styles.error}>
      <h1>ERREUR 404...triste, la page n'existe pas</h1>
      <Link href="/">
        <button>Retour à la page d'accueil</button>
      </Link>
    </div>
  );
};

export default Error404;
