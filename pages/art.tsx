import instantMeiliSearch from "@meilisearch/instant-meilisearch";
import { NextSeo } from "next-seo";
import React from "react";
import { connectHits, InstantSearch, RefinementList } from "react-instantsearch-dom";
import { Card, Checkbox, Container, Grid, List } from "semantic-ui-react";
import { ArtItem } from "../components/ArtItem";
import { CustomNavbar } from "../components/Navbar";
import { Art } from "../types/art";
import { connectRefinementList, MenuProvided } from "react-instantsearch-core";

const searchClient = instantMeiliSearch(
  "https://search.stiforr.tech",
  process.env.NEXT_PUBLIC_API_KEY
);

const FilterList = ({ items, currentRefinement, refine }: MenuProvided) => {
  return (
    <List>
      {items.map((item) => (
        <List.Item>
          <Checkbox
            value={item.isRefined ? currentRefinement : ""}
            onChange={() => {
              refine(item.value);
            }}
            checked={item.isRefined}
            label={`${item.label} ${item.count}`}
          />
        </List.Item>
      ))}
    </List>
  );
};

const ArtView = ({ hits }: { hits: Art[] }) =>
  hits.map((artItem) => <ArtItem key={artItem.id} art={artItem} />);

const CustomHits = connectHits(ArtView as any);
const CustomFilterList = connectRefinementList(FilterList as any);

const ArtPage = () => {
  return (
    <>
      <NextSeo title="Awesome AC | Art" />

      <InstantSearch searchClient={searchClient} indexName="art">
        <CustomNavbar />
        <Container style={{ padding: 10 }} fluid>
          <Grid as="container"></Grid>
          <Card.Group itemsPerRow={6}>
            <CustomHits />
          </Card.Group>
        </Container>
      </InstantSearch>
    </>
  );
};

export default ArtPage;
