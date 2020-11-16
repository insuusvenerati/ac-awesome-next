import { GetStaticPaths, GetStaticProps } from "next";
import { NextSeo } from "next-seo";
import { ArtFullView } from "../../components/ArtFullView";
import { CustomNavbar } from "../../components/Navbar";
import { Art } from "../../types/art";

export const getStaticPaths: GetStaticPaths = async () => {
  const art: Art[] = require("../../acnhapi/v1a/art.json");
  return {
    paths: art.map((item) => `/art/${item.id}`),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const response = await fetch(`https://acnhapi.com/v1a/art/${params?.id}`);
  const art = await response.json();
  return { props: { art } };
};

const ArtItemPage = ({ art }: { art: Art }) => {
  return (
    <>
      <NextSeo
        openGraph={{
          title: art.name["name-USen"],
          description: art["museum-desc"],
          images: [
            {
              url: art.image_uri,
              alt: art.name["name-USen"],
              width: 128,
              height: 128,
            },
          ],
        }}
        title={`Awesome AC | ${art.name["name-USen"]}`}
      />
      <ArtFullView art={art} />
    </>
  );
};

export default ArtItemPage;
