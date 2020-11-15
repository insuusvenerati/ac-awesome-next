import fetch from "isomorphic-unfetch";
import { GetStaticPaths, GetStaticProps } from "next";
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
      <VillagerFullView villager={villager} />
    </>
  );
}
