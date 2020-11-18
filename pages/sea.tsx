import { NextSeo } from "next-seo";
import { connectHits, InstantSearch } from "react-instantsearch-dom";
import { Card, Container } from "semantic-ui-react";
import { CustomNavbar } from "../components/Navbar";
import SeaItem from "../components/SeaItem";
import { searchClient } from "../searchClient";
import { Sea } from "../types/sea";
import { Hit, MenuProvided } from "react-instantsearch-core";

const HitsView = ({ hits }: { hits: Hit<Sea>[] }) =>
  hits.map((hit) => <SeaItem key={hit.id} sea={hit} />);

const CustomHits = connectHits(HitsView as any);

const SeaPage = () => {
  return (
    <>
      <NextSeo title="Awesome AC | Sea" />
      <InstantSearch indexName="sea" searchClient={searchClient}>
        <CustomNavbar />
        <Container style={{ padding: 10 }} fluid>
          <Card.Group style={{ marginTop: 10 }} itemsPerRow={5}>
            <CustomHits />
          </Card.Group>
        </Container>
      </InstantSearch>
    </>
  );
};

export default SeaPage;
