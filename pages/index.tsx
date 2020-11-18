import { NextSeo } from "next-seo";
import { useState } from "react";
import { Hit, MenuProvided } from "react-instantsearch-core";
import { connectHits, connectRefinementList, InstantSearch } from "react-instantsearch-dom";
import {
  Button,
  Card,
  Checkbox,
  Container,
  Grid,
  Icon,
  List,
  Segment,
  Sidebar,
} from "semantic-ui-react";
import { CustomNavbar } from "../components/Navbar";
import Villager from "../components/Villager";
import { searchClient } from "../searchClient";
import { Villager as VillagerType } from "../types/villagers";

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

const HitsView = ({ hits }: { hits: Hit<VillagerType>[] }) =>
  hits.map((hit) => <Villager key={hit.id} villager={hit} />);

const CustomFilterList = connectRefinementList(FilterList as any);
const CustomHits = connectHits(HitsView as any);

export default function Home() {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <NextSeo title="Awesome AC | Villagers" />
      <InstantSearch indexName="villagers" searchClient={searchClient}>
        <CustomNavbar />
        <Container style={{ padding: 10 }} fluid>
          <Button style={{ marginBottom: 10 }} onClick={() => setVisible(!visible)}>
            <Icon name="filter" />
            Filter
          </Button>
          <Sidebar.Pushable>
            <Sidebar animation="push" direction="top" visible={visible}>
              <Segment>
                <Grid as="container">
                  <Grid.Column>
                    <CustomFilterList attribute="gender" />
                  </Grid.Column>

                  <Grid.Column>
                    <CustomFilterList attribute="personality" />
                  </Grid.Column>

                  <Grid.Column>
                    <CustomFilterList attribute="species" />
                  </Grid.Column>

                  <Grid.Column>
                    <CustomFilterList attribute="hobby" />
                  </Grid.Column>
                </Grid>
              </Segment>
            </Sidebar>
            <Sidebar.Pusher>
              <Card.Group style={{ marginTop: 10 }} itemsPerRow={5}>
                <CustomHits />
              </Card.Group>
            </Sidebar.Pusher>
          </Sidebar.Pushable>
        </Container>
      </InstantSearch>
    </>
  );
}
