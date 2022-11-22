import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="fr">
      <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@300&family=Silkscreen&display=swap" rel="stylesheet" />
      </Head>

      <body className="font-silkscreen">
        <Main />
        <NextScript />
        <Script id="my-script" defer src="https://unpkg.com/aos@next/dist/aos.js%22%3E"></Script>
        <Script id="my-script" defer>Aos.init();</Script>
      </body>
    </Html>
  );
}
