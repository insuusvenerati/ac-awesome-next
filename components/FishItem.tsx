import Image from "next/image";
import Link from "next/link";
import { memo } from "react";
import { Card, List } from "semantic-ui-react";
import { toUpperCase } from "../utility";
import { Fish } from "../types/fish";
import { numMonths } from "../utility";

const FishItem = ({ fish }: { fish: Fish }) => (
  <Link href={`/fish/${fish.id}`}>
    <Card style={{ backgroundColor: "#F0EAD6" }} raised href={`/fish/${fish.id}`}>
      <Image width={1024} height={512} layout="fixed" src={fish.image_uri} />

      <Card.Content>
        <Card.Header>{toUpperCase(fish.name["name-USen"])}</Card.Header>
        <Card.Meta> Price: {fish.price}</Card.Meta>
        <Card.Meta style={{ color: "black" }}>{fish["museum-phrase"]}</Card.Meta>

        <List relaxed>
          <List.Item>
            <List.Icon style={{ color: "black" }} name="chat" />
            <List.Content style={{ color: "black" }}>{fish["catch-phrase"]}</List.Content>
          </List.Item>

          <List.Item>
            <List.Content style={{ color: "black" }}>
              <h4>Shadow</h4>
              {fish.shadow}
            </List.Content>
          </List.Item>

          <List.Item>
            <List.Header>Availability</List.Header>
            <List.Description>
              {fish.availability["month-array-northern"].map((month) => `${numMonths[month]} `)}
            </List.Description>
          </List.Item>
        </List>
      </Card.Content>
    </Card>
  </Link>
);

export default memo(FishItem);
