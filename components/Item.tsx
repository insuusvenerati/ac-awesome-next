import Image from "next/image";
import Link from "next/link";
import { memo } from "react";
import { Card, Label, List } from "semantic-ui-react";
import { Item as ItemType } from "../types/item";

const Item = ({ item }: { item: ItemType }) => (
  <Link href={`/item/${item._id}`}>
    <Card style={{ backgroundColor: "#F0EAD6" }} raised href={`/item/${item._id}`}>
      <Image width={256} height={256} layout="responsive" src={item.variants[0].image} />

      <Card.Content>
        <Card.Header>{item.name}</Card.Header>
        <Card.Meta> Birthday: {item.exchangePrice}</Card.Meta>
        <p style={{ color: "black" }}>{item.tag}</p>
        <List relaxed>
          <List.Item>
            <List.Icon style={{ color: "black" }} name="chat" />
            <List.Content style={{ color: "black" }}>{item.catalog}</List.Content>
          </List.Item>
          <List.Item>
            <List.Icon style={{ color: "black" }} name="tree" />
            <List.Content style={{ color: "black" }}>{item.customizationKitCost}</List.Content>
          </List.Item>
          <List.Item>
            <List.Icon style={{ color: "black" }} name="heart" />
            <List.Content style={{ color: "black" }}>{item.diy}</List.Content>
          </List.Item>
        </List>
      </Card.Content>
      <Card.Content extra>
        {/* <Label color="blue">{item.species}</Label>
        <Label color="green">{item.gender}</Label>
        <Label color="red">{item.personality}</Label> */}
      </Card.Content>
    </Card>
  </Link>
);

export default memo(Item);
