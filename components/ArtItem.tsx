import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Card } from "semantic-ui-react";
import { toUpperCase } from "../toUpperCase";
import { Art } from "../types/art";

export const ArtItem = ({ art }: { art: Art }) => (
  <Link href={`/art/${art.id}`}>
    <Card style={{ backgroundColor: "#F0EAD6" }} raised href={`/art/${art.id}`}>
      <Image width={128} height={128} layout="responsive" src={art.image_uri} />

      <Card.Content>
        <Card.Header>{toUpperCase(art.name["name-USen"])}</Card.Header>
        <Card.Meta> Buy Price: ${art["buy-price"]}</Card.Meta>
        <Card.Meta> Sell Price: ${art["sell-price"]}</Card.Meta>
        <Card.Description>{art["museum-desc"]}</Card.Description>
      </Card.Content>
    </Card>
  </Link>
);
