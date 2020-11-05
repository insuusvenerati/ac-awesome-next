import Image from "next/image";
import { Card, Label, List } from "semantic-ui-react";
import { Villager } from "../types/villagers";

export const VillagerItem = ({ villager }: { villager: Villager }) => (
  <Card style={{ backgroundColor: "#F0EAD6" }} raised as="a">
    <Image width={256} height={256} layout="responsive" src={villager.image_uri} />

    <Card.Content>
      <Card.Header> {villager.name["name-USen"]} </Card.Header>
      <Card.Meta> Birthday: {villager.birthday}</Card.Meta>
      <p style={{ color: "black" }}>{villager.saying}</p>
      <List relaxed>
        <List.Item>
          <List.Icon style={{ color: "black" }} name="chat" />
          <List.Content style={{ color: "black" }}>{villager["catch-phrase"]}</List.Content>
        </List.Item>
        <List.Item>
          <List.Icon style={{ color: "black" }} name="tree" />
          <List.Content style={{ color: "black" }}>{villager.hobby}</List.Content>
        </List.Item>
        <List.Item>
          <List.Icon style={{ color: "black" }} name="heart" />
          <List.Content style={{ color: "black" }}>{villager.personality}</List.Content>
        </List.Item>
        <List.Item>
          <div style={{ display: "flex" }}>
            <div
              style={{ width: 20, height: 20, backgroundColor: `${villager["bubble-color"]}` }}
            />
            <div style={{ width: 20, height: 20, backgroundColor: `${villager["text-color"]}` }} />
          </div>
        </List.Item>
      </List>
    </Card.Content>
    <Card.Content extra>
      <Label color="blue">{villager.species}</Label>
      <Label color="green">{villager.gender}</Label>
      <Label color="red">{villager.personality}</Label>
    </Card.Content>
  </Card>
);
