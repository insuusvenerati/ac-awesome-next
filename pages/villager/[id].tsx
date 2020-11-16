import fetch from "isomorphic-unfetch";
import { GetStaticPaths, GetStaticProps } from "next";
import { NextSeo } from "next-seo";
import { VillagerFullView } from "../../components/VillagerFullView";
import { Villager } from "../../types/villagers";

export const getStaticPaths: GetStaticPaths = async () => {
  const villagers: Villager[] = require("../../acnhapi/v1a/villagers.json");
  return {
    paths: villagers.map((villager) => `/villager/${villager.id}`),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const response = await fetch(`https://acnhapi.com/v1a/villagers/${params?.id}`);
  const villager = await response.json();
  return { props: { villager } };
};

export default function VillagerPage({ villager }: { villager: Villager }) {
  return (
    <>
      <NextSeo
        openGraph={{
          title: villager.name["name-USen"],
          description: villager["catch-phrase"],
          images: [
            {
              url: villager.image_uri,
              alt: villager.name["name-USen"],
              height: 256,
              width: 256,
            },
          ],
        }}
        title={`Awesome AC | ${villager.name["name-USen"]}`}
      />
      <VillagerFullView villager={villager} />
    </>
  );
}
