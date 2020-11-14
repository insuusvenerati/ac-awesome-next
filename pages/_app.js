import "semantic-ui-css/semantic.min.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="prefetch" href="https://acnhapi.com" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
