import "semantic-ui-css/semantic.min.css";
import Head from "next/head";
import { NextSeo } from "next-seo";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="prefetch" href="https://acnhapi.com" />
      </Head>
      <NextSeo
        openGraph={{
          type: "website",
          url: "https://ac-awesome-next.vercel.app/",
          title: "Awesome AC",
          description: "Animal Crossing database with filters and search!",
          images: [
            {
              url: "https://i.imgur.com/HFsavvk.jpeg",
              width: 800,
              height: 600,
              alt: "Animal Crossing Logo",
            },
            {
              url: "https://i.imgur.com/HFsavvk.jpeg",
              width: 800,
              height: 600,
              alt: "Animal Crossing Logo 2",
            },
          ],
        }}
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
