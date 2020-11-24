import { GetStaticPaths, GetStaticProps } from "next";
import { ItemFullView } from "../../components/ItemFullView";
import { Item } from "../../types/item";

export const getStaticPaths: GetStaticPaths = async () => {
  const items: Item[] = require("../../items.json");

  return {
    paths: items.map((item) => `/item/${item.id}`),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URI}/items/filter?id=${params?.id}`);
  const item: Item = await response.json();
  return {
    props: { item },
  };
};

export default function ItemPage({ item }: { item: Item }) {
  return (
    <>
      <ItemFullView item={item} />
    </>
  );
}
