import instantMeiliSearch from "@meilisearch/instant-meilisearch";
import { GetStaticProps } from "next";
import React from "react";
import { connectHits, InstantSearch, RefinementList } from "react-instantsearch-dom";
import { Card, Container, Grid } from "semantic-ui-react";
import { CustomNavbar } from "../components/Navbar";
import Villager from "../components/Villager";
import { Villager as VillagerType } from "../types/villagers";

const searchClient = instantMeiliSearch(
  "https://search.stiforr.tech",
  process.env.NEXT_PUBLIC_API_KEY
);

export const getStaticProps: GetStaticProps = async () => {
  const villagers: VillagerType[] = require("../acnhapi/v1a/villagers.json");

  return { props: { villagers } };
};

const HitsView = ({ hits }: { hits: VillagerType[] }) =>
  hits.map((hit) => <Villager key={hit.id} villager={hit} />);
const CustomHits = connectHits(HitsView);

export default function Home({ villagers }: { villagers: VillagerType[] }) {
  return (
    <>
      <InstantSearch indexName="villagers" searchClient={searchClient}>
        <CustomNavbar />
        <Container style={{ padding: 10 }} fluid>
          <Grid as="container">
            <RefinementList attribute="gender" />
            <RefinementList attribute="personality" />
            <RefinementList attribute="species" />
            <RefinementList attribute="hobby" />
          </Grid>
          <Card.Group itemsPerRow={5}>
            <CustomHits />
          </Card.Group>
        </Container>
      </InstantSearch>
    </>
  );
}
