import { connectRefinementList, Hit, InstantSearch, MenuProvided } from "react-instantsearch-core";
import { connectHits } from "react-instantsearch-dom";
import { Card, Checkbox, Container, List } from "semantic-ui-react";
import FishItem from "../components/FishItem";
import { CustomNavbar } from "../components/Navbar";
import { searchClient } from "../searchClient";
import { Fish } from "../types/fish";

const HitsView = ({ hits }: { hits: Hit<Fish>[] }) =>
  hits.map((hit) => <FishItem key={hit.id} fish={hit} />);

const FilterList = ({ items, currentRefinement, refine }: MenuProvided) => {
  return (
    <List>
      {items.map((item) => (
        <List.Item key={item.value}>
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

const CustomFilterList = connectRefinementList(FilterList as any);
const CustomHits = connectHits(HitsView as any);

export default function FishPage() {
  return (
    <>
      <InstantSearch searchClient={searchClient} indexName="fish">
        <CustomNavbar />
        {/* <CustomFilterList attribute="shadow" /> */}
        <Container style={{ padding: 10 }} fluid>
          <Card.Group style={{ marginTop: 10 }} itemsPerRow={2}>
            <CustomHits />
          </Card.Group>
        </Container>
      </InstantSearch>
    </>
  );
}
