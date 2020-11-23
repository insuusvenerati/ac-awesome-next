import Image from "next/image";
import { useEffect, useState } from "react";
import { Card, Container, Grid, Label, List } from "semantic-ui-react";
import { Item } from "../types/item";
import { Villager, VillagerExtra } from "../types/villagers";
import { toUpperCase } from "../utility";
import { CustomNavbar } from "./Navbar";

export const VillagerFullView = ({
  villager,
  villagerExtra,
}: {
  villager: Villager;
  villagerExtra: VillagerExtra;
}) => {
  const [furnitureItem, setFurnitureItem] = useState<Array<Array<Item>>>([]);

  useEffect(() => {
    async function findFurnitureFromList() {
      const furnitureListArray = villagerExtra.furnitureList.split(";");
      const results: Array<Array<Item>> = await Promise.all(
        furnitureListArray.map((item) =>
          fetch(`http://localhost:1337/items/${item}`).then((response) => response.json())
        )
      );
      setFurnitureItem(results);
    }
    findFurnitureFromList();
  }, []);

  return (
    <>
      <CustomNavbar hasSearch={false} />
      <Container>
        <Grid columns={4}>
          <Grid.Column>
            <Card>
              <Card.Content>
                <Card.Header>{villager.name["name-USen"]}</Card.Header>
              </Card.Content>
              <Image layout="responsive" width={256} height={256} src={villager.image_uri} />
            </Card>
          </Grid.Column>
          <Grid.Column>
            <Card>
              <Card.Content>
                <Card.Header>All Details</Card.Header>
                <List>
                  <List.Item>
                    <List.Header content="ID" />
                    <List.Content content={villager.id} />
                  </List.Item>
                  <List.Item>
                    <List.Header content="Birthday" />
                    <List.Content content={villager.birthday} />
                  </List.Item>
                  <List.Item>
                    <List.Header content="Catch Phrase" />
                    <List.Content content={villager["catch-phrase"]} />
                  </List.Item>
                  <List.Item>
                    <List.Header content="Gender" />
                    <List.Content content={villager.gender} />
                  </List.Item>
                  <List.Item>
                    <List.Header content="Hobby" />
                    <List.Content content={villager.hobby} />
                  </List.Item>
                  <List.Item>
                    <List.Header content="Personality" />
                    <List.Content content={villager.personality} />
                  </List.Item>
                  <List.Item>
                    <List.Header content="Saying" />
                    <List.Content content={villager.saying} />
                  </List.Item>
                  <List.Item>
                    <List.Header content="Species" />
                    <List.Content content={villager.species} />
                  </List.Item>
                  <List.Item>
                    <List.Header content="Subtype" />
                    <List.Content content={villager.subtype} />
                  </List.Item>
                  <List.Item>
                    <List.Header content="Favorite Song" />
                    <List.Content content={villagerExtra.favoriteSong} />
                  </List.Item>
                  <List.Item>
                    <List.Header content="Wallpaper" />
                    <List.Content content={toUpperCase(villagerExtra.wallpaper)} />
                  </List.Item>
                  <List.Item>
                    <List.Header content="Flooring" />
                    <List.Content content={toUpperCase(villagerExtra.flooring)} />
                  </List.Item>
                  <List.Item>
                    <List.Header content="Furniture List" />

                    <List.Content
                      content={furnitureItem.map(([item]) => `${toUpperCase(item.name)} `)}
                    />
                  </List.Item>
                  <List.Item>
                    <List.Header content="Colors" />
                    <div style={{ display: "flex" }}>
                      <div
                        style={{
                          width: 20,
                          height: 20,
                          backgroundColor: `${villager["bubble-color"]}`,
                        }}
                      />
                      <div
                        style={{
                          width: 20,
                          height: 20,
                          backgroundColor: `${villager["text-color"]}`,
                        }}
                      />
                    </div>
                  </List.Item>
                  <Card.Content extra>
                    <Label color="blue">{villager.species}</Label>
                    <Label color="green">{villager.gender}</Label>
                    <Label color="red">{villager.personality}</Label>
                  </Card.Content>
                </List>
              </Card.Content>
            </Card>
          </Grid.Column>
          <Grid.Column>
            <Card>
              <Card.Content>
                <Card.Header>Images</Card.Header>
                <Image width={128} height={128} layout="fixed" src={villagerExtra.iconImage} />
                <Image width={256} height={256} layout="fixed" src={villagerExtra.houseImage} />
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
                        href={`https://nookipedia.com/wiki/${villager.name["name-USen"]}`}
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
