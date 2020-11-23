import Image from "next/image";
import Link from "next/link";
import { memo } from "react";
import { Card, List } from "semantic-ui-react";
import { numMonths, toUpperCase } from "../utility";
import { Sea } from "../types/sea";

const SeaItem = ({ sea }: { sea: Sea }) => (
  <Link href={`/sea/${sea.id}`}>
    <Card style={{ backgroundColor: "#F0EAD6" }} raised href={`/sea/${sea.id}`}>
      <Image width={256} height={256} layout="responsive" src={sea.image_uri} />

      <Card.Content>
        <Card.Header>{toUpperCase(sea.name["name-USen"])}</Card.Header>
        <Card.Meta> Price: {sea.price}</Card.Meta>
        <Card.Meta style={{ color: "black" }}>{sea["museum-phrase"]}</Card.Meta>

        <List relaxed>
          <List.Item>
            <List.Icon style={{ color: "black" }} name="chat" />
            <List.Content style={{ color: "black" }}>{sea["catch-phrase"]}</List.Content>
          </List.Item>

          <List.Item>
            <List.Content style={{ color: "black" }}>
              <h4>Speed</h4> {sea.speed}
            </List.Content>
          </List.Item>

          <List.Item>
            <List.Content style={{ color: "black" }}>
              <h4>Shadow</h4>
              {sea.shadow}
            </List.Content>
          </List.Item>

          <List.Item>
            <List.Header>Availability</List.Header>
            <List.Content>
              {sea.availability["month-array-northern"].map((month) => `${numMonths[month]} `)}
            </List.Content>
          </List.Item>
        </List>
      </Card.Content>
    </Card>
  </Link>
);

export default memo(SeaItem);
