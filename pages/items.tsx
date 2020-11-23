import { NextSeo } from "next-seo";
import React from "react";
import { connectHits, Hit } from "react-instantsearch-core";
import { InstantSearch } from "react-instantsearch-dom";
import { Card, Container } from "semantic-ui-react";
import Item from "../components/Item";
import { CustomNavbar } from "../components/Navbar";
import { searchClient } from "../searchClient";
import { Item as ItemType } from "../types/item";

const HitsView = ({ hits }: { hits: Hit<ItemType>[] }) =>
  hits.map((hit) => <Item key={hit._id} item={hit} />);

const CustomHits = connectHits(HitsView as any);

export default function ItemsPage() {
  return (
    <>
      <NextSeo title="Awesome AC | Items" />
      <InstantSearch searchClient={searchClient} indexName="items">
        <CustomNavbar />
        <Container style={{ padding: 10 }} fluid>
          <Card.Group style={{ marginTop: 10 }} itemsPerRow={5}>
            <CustomHits />
          </Card.Group>
        </Container>
      </InstantSearch>
    </>
  );
}
