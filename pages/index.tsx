import Fuse from "fuse.js";
import { GetStaticProps } from "next";
import Head from "next/head";
import React, { ChangeEvent, useContext, useEffect, useState } from "react";
import { Card, Container } from "semantic-ui-react";
import { CustomNavbar } from "../components/Navbar";
import { Villagers } from "../components/Villagers";
import { FilterContext } from "../context/FilterContext";
import { useDebounce } from "../hooks/useDebounce";
import { Villager } from "../types/villagers";

export const getStaticProps: GetStaticProps = async () => {
  const villagers: Villager[] = require("../acnhapi/v1a/villagers.json");

  return { props: { villagers } };
};

export default function Home({ villagers }: { villagers: Villager[] }) {
  const { results } = useContext(FilterContext);
  const [query, setQuery] = useState("");
  const [villagerResults, setVillagerResults] = useState<Villager[]>([]);
  const debouncedSearchTerm = useDebounce(query, 500);

  const fuse = new Fuse(villagers, {
    keys: ["name.name-USen", "species"],
    includeScore: true,
    threshold: 0.1,
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

  function VillagerFromDataorFilter() {
    if (results.length > 0) {
      return <Villagers villagers={results.map((result) => result.item)} />;
    }
    return <Villagers villagers={villagerResults} />;
  }

  return (
    <>
      <Head>
        <title>Villagers</title>
      </Head>
      <CustomNavbar villagers={villagers} handleSearch={handleSearch} query={query} />

      <Container className="p-4" fluid>
        <Card.Group itemsPerRow={5}>
          <VillagerFromDataorFilter />
        </Card.Group>
      </Container>
    </>
  );
}
