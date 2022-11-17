import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="fr">
      <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;500&family=Silkscreen&display=swap" rel="stylesheet" />
      </Head>

      <body className="font-silkscreen">
        <Main />
        <NextScript />
        <script defer src="https://unpkg.com/aos@next/dist/aos.js%22%3E"></script>
        <script defer>AOS.init();</script>
      </body>
    </Html>
  );
}
