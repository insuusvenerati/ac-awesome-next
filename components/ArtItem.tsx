import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Card } from "semantic-ui-react";
import { Art } from "../types/art";

export const ArtItem = ({ art }: { art: Art }) => (
  <Link href={`/art/${art.id}`}>
    <Card style={{ backgroundColor: "#F0EAD6" }} raised href={`/art/${art.id}`}>
      <Image width={256} height={256} layout="responsive" src={art.image_uri} />

      <Card.Content>
        <Card.Header>{art.name["name-USen"].toUpperCase()}</Card.Header>
        <Card.Meta> Buy Price: ${art["buy-price"]}</Card.Meta>
        <Card.Meta> Sell Price: ${art["sell-price"]}</Card.Meta>
        <Card.Description>{art["museum-desc"]}</Card.Description>
      </Card.Content>
    </Card>
  </Link>
);
