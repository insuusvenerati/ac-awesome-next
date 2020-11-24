import Image from "next/image";
import { Card, Container, Grid, Label, List } from "semantic-ui-react";
import { Item } from "../types/item";
import { toUpperCase } from "../utility";
import { CustomNavbar } from "./Navbar";

export const ItemFullView = ({ item }: { item: Item }) => {
  return (
    <>
      <CustomNavbar hasSearch={false} />
      <Container>
        <Grid columns={4}>
          <Grid.Column>
            <Card>
              <Card.Content>
                <Card.Header>{item.name["name-USen"]}</Card.Header>
              </Card.Content>
              {/* <Image layout="responsive" width={256} height={256} src={item.image_uri} /> */}
            </Card>
          </Grid.Column>
          <Grid.Column>
            <Card>
              <Card.Content>
                <Card.Header>All Details</Card.Header>
                <List>
                  <List.Item>
                    <List.Header content="ID" />
                    <List.Content content={item.id} />
                  </List.Item>
                  <List.Item>
                    <List.Header content="Birthday" />
                    <List.Content content={item.birthday} />
                  </List.Item>
                  <List.Item>
                    <List.Header content="Catch Phrase" />
                    <List.Content content={item["catch-phrase"]} />
                  </List.Item>
                  <List.Item>
                    <List.Header content="Gender" />
                    <List.Content content={item.gender} />
                  </List.Item>
                  <List.Item>
                    <List.Header content="Hobby" />
                    <List.Content content={item.hobby} />
                  </List.Item>
                  <List.Item>
                    <List.Header content="Personality" />
                    <List.Content content={item.personality} />
                  </List.Item>
                  <List.Item>
                    <List.Header content="Saying" />
                    <List.Content content={item.saying} />
                  </List.Item>
                  <List.Item>
                    <List.Header content="Species" />
                    <List.Content content={item.species} />
                  </List.Item>
                  <List.Item>
                    <List.Header content="Subtype" />
                    <List.Content content={item.subtype} />
                  </List.Item>
                  {/* <List.Item>
                    <List.Header content="Favorite Song" />
                    <List.Content content={itemExtra.favoriteSong} />
                  </List.Item>
                  <List.Item>
                    <List.Header content="Wallpaper" />
                    <List.Content content={toUpperCase(itemExtra.wallpaper)} />
                  </List.Item>
                  <List.Item>
                    <List.Header content="Flooring" />
                    <List.Content content={toUpperCase(itemExtra.flooring)} />
                  </List.Item> */}
                  {/* <List.Item>
                    <List.Header content="Furniture List" />

                    <List.Content
                      content={furnitureItem.map(([item]) => `${toUpperCase(item.name)} `)}
                    />
                  </List.Item> */}
                  <List.Item>
                    <List.Header content="Colors" />
                    <div style={{ display: "flex" }}>
                      <div
                        style={{
                          width: 20,
                          height: 20,
                          backgroundColor: `${item["bubble-color"]}`,
                        }}
                      />
                      <div
                        style={{
                          width: 20,
                          height: 20,
                          backgroundColor: `${item["text-color"]}`,
                        }}
                      />
                    </div>
                  </List.Item>
                  <Card.Content extra>
                    <Label color="blue">{item.species}</Label>
                    <Label color="green">{item.gender}</Label>
                    <Label color="red">{item.personality}</Label>
                  </Card.Content>
                </List>
              </Card.Content>
            </Card>
          </Grid.Column>
          <Grid.Column>
            <Card>
              <Card.Content>
                <Card.Header>Images</Card.Header>
                {/* <Image width={128} height={128} layout="fixed" src={itemExtra.iconImage} />
                <Image width={256} height={256} layout="fixed" src={itemExtra.houseImage} /> */}
              </Card.Content>
            </Card>
          </Grid.Column>
          <Grid.Column>
            <Card>
              <Card.Content>
                <Card.Header>Links and More Information</Card.Header>
                <List>
                  <List.Item>
                    <List.Header>
                      <a
                        target="blank"
                        href={`https://nookipedia.com/wiki/${item.name["name-USen"]}`}
                      >
                        Nookipedia
                      </a>
                    </List.Header>
                  </List.Item>
                </List>
              </Card.Content>
            </Card>
          </Grid.Column>
        </Grid>
      </Container>
    </>
  );
};
