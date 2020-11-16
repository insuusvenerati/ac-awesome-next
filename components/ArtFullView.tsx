import Image from "next/image";
import { Card, Container } from "semantic-ui-react";
import { Art } from "../types/art";

export const ArtFullView = ({ art }: { art: Art }) => (
  <Container>
    <Card fluid>
      <Image layout="fixed" width={250} height={250} src={art.image_uri} />
      <Card.Content>
        <Card.Header>{art.name["name-USen"]}</Card.Header>
      </Card.Content>
    </Card>
  </Container>
);
