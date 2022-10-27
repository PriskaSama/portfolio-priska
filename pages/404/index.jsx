import Link from "next/link";

let styles = {
  error: "flex w-screen h-screen items-center justify-center",
};

const Error404 = () => {
  return (
    <div className={styles.error}>
      <h1>ERREUR 404...triste, tu tes trompé</h1>
      <Link href="/index.html">
        <button>Retour à la page daccueil</button>
      </Link>
    </div>
  );
};

export default Error404;
