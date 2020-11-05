import { GetStaticPaths, GetStaticProps } from "next";
import { Villager } from "../../types/villagers";
import fetch from "isomorphic-unfetch";
import { VillagerItem } from "../../components/Villager";

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
  return <VillagerItem villager={villager} />;
}
