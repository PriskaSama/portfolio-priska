import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="fr">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Serif:ital,wght@0,400;0,700;1,400;1,700&family=Silkscreen:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="font-silkscreen">
        <Main />
        <NextScript />
        <script src="bower_components/aos/dist/aos.js"></script>
        <script>
    AOS.init();
  </script>
      </body>
    </Html>
  );
}
