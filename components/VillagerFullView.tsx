import Image from "next/image";
import { Card, Container } from "semantic-ui-react";
import { Villager } from "../types/villagers";

export const VillagerFullView = ({ villager }: { villager: Villager }) => (
  <Container>
    <Card fluid>
      <Image layout="fixed" width={250} height={250} src={villager.image_uri} />
      <Card.Content>
        <Card.Header>{villager.name["name-USen"]}</Card.Header>
      </Card.Content>
    </Card>
  </Container>
);
