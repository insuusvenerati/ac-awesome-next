import Fuse from "fuse.js";
import { GetStaticProps } from "next";
import Head from "next/head";
import React, { ChangeEvent, useEffect, useState } from "react";
import { Container, Form, FormControl, Navbar, Row } from "react-bootstrap";
import { VillagerItem } from "../components/Villager";
import { useDebounce } from "../hooks/useDebounce";
import { Villager } from "../types/villagers";

export const getStaticProps: GetStaticProps = async () => {
  const villagers: Villager[] = require("../acnhapi/v1a/villagers.json");

  return { props: { villagers } };
};

export default function Home({ villagers }: { villagers: Villager[] }) {
  const [query, setQuery] = useState("");
  const [villagerResults, setVillagerResults] = useState<Villager[]>([]);
  const debouncedSearchTerm = useDebounce(query, 1000);

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
      <Navbar className="bg-light mb-4 justify-content-between">
        <h1>Villagers</h1>
        <Form inline>
          <FormControl
            value={query}
            onChange={handleSearch}
            type="text"
            placeholder="Search"
            className="mr-sm-2"
          />
        </Form>
      </Navbar>
      <Container fluid>
        <Row>
          {villagerResults &&
            villagerResults.map((villager: Villager) => (
              <VillagerItem key={villager.id} villager={villager} />
            ))}
        </Row>
      </Container>
    </>
  );
}
