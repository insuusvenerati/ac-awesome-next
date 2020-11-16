import instantMeiliSearch from "@meilisearch/instant-meilisearch";
import { NextSeo } from "next-seo";
import React from "react";
import { connectHits, InstantSearch } from "react-instantsearch-dom";
import { Card, Container, Grid } from "semantic-ui-react";
import { ArtItem } from "../components/ArtItem";
import { CustomNavbar } from "../components/Navbar";
import { Art } from "../types/art";

const searchClient = instantMeiliSearch(
  "https://search.stiforr.tech",
  process.env.NEXT_PUBLIC_API_KEY
);

const ArtView = ({ hits }: { hits: Art[] }) =>
  hits.map((artItem) => <ArtItem key={artItem.id} art={artItem} />);
const CustomHits = connectHits(ArtView as any);

const ArtPage = () => {
  return (
    <>
      <NextSeo title="Awesome AC | Art" />

      <InstantSearch searchClient={searchClient} indexName="art">
        <CustomNavbar />
        <Container style={{ padding: 10 }} fluid>
          <Grid as="container">{/* <RefinementList /> */}</Grid>
          <Card.Group itemsPerRow={6}>
            <CustomHits />
          </Card.Group>
        </Container>
      </InstantSearch>
    </>
  );
};

export default ArtPage;
