import { NextSeo } from "next-seo";
import { connectHits, Hit, Index, InstantSearch } from "react-instantsearch-core";
import { Hits } from "react-instantsearch-dom";
import { Card, Container } from "semantic-ui-react";
import { Item } from "../components/Item";
import { CustomNavbar } from "../components/Navbar";
import { searchClient } from "../searchClient";
import { Item as ItemType } from "../types/item";

const CustomHitsView = ({ hits }: { hits: Hit<ItemType>[] }) =>
  hits.map((hit) => <Item key={hit._id} item={hit} />);

const TestHits = ({ hits }: { hits: Hit<ItemType>[] }) => (
  <>
    {console.log(hits)}
    {/* {hits[0].name} */}
  </>
);

const CustomHitsItems = connectHits(CustomHitsView as any);

export default function ItemsPage() {
  return (
    <>
      <NextSeo title="Awesome AC | Items" />
      <InstantSearch searchClient={searchClient} indexName="items">
        <CustomNavbar />
        <Container style={{ padding: 10 }} fluid>
          <Card.Group style={{ marginTop: 10 }} itemsPerRow={5}>
            <CustomHitsItems />
          </Card.Group>
        </Container>
      </InstantSearch>
    </>
  );
}
