import Fuse from "fuse.js";
import { GetStaticProps } from "next";
import Head from "next/head";
import React, { ChangeEvent, useEffect, useState } from "react";
import { Card, Container, Grid } from "semantic-ui-react";
import { CustomNavbar } from "../components/Navbar";
import { Villagers } from "../components/Villagers";
import { useDebounce } from "../hooks/useDebounce";
import { Villager } from "../types/villagers";

export const getStaticProps: GetStaticProps = async () => {
  const villagers: Villager[] = require("../acnhapi/v1a/villagers.json");

  return { props: { villagers } };
};

export default function Home({ villagers }: { villagers: Villager[] }) {
  const [query, setQuery] = useState("");
  const [villagerResults, setVillagerResults] = useState<Villager[]>([]);
  const debouncedSearchTerm = useDebounce(query, 500);

  const fuse = new Fuse(villagers, {
    keys: ["name.name-USen", "species"],
    includeScore: true,
  });

  function handleSearch(event: ChangeEvent<HTMLInputElement>): void {
    setQuery(event.currentTarget.value);
  }

  useEffect(() => {
    const results = fuse.search(debouncedSearchTerm);
    debouncedSearchTerm
      ? setVillagerResults(results.map((result) => result.item))
      : setVillagerResults(villagers);
  }, [debouncedSearchTerm]);

  return (
    <>
      <Head>
        <title>Villagers</title>
      </Head>
      <CustomNavbar handleSearch={handleSearch} query={query} />

      {/* <Grid container columns={4}>
        <Grid.Row> */}
      <Container>
        <Card.Group itemsPerRow={4}>
          <Villagers villagers={villagerResults} />
        </Card.Group>
      </Container>
      {/* </Grid.Row> */}
      {/* </Grid> */}
    </>
  );
}
