import { GetStaticProps } from "next";
import Head from "next/head";
import React, { ChangeEvent, useContext, useEffect, useState } from "react";
import { Card, Container } from "semantic-ui-react";
import { CustomNavbar } from "../components/Navbar";
import { Villagers } from "../components/Villagers";
import { FilterContext } from "../context/FilterContext";
import { useDebounce } from "../hooks/useDebounce";
import { Villager } from "../types/villagers";
import fetch from "isomorphic-unfetch";

export const getStaticProps: GetStaticProps = async () => {
  const villagers: Villager[] = require("../acnhapi/v1a/villagers.json");

  return { props: { villagers } };
};

export default function Home({ villagers }: { villagers: Villager[] }) {
  const { filterResults } = useContext(FilterContext);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<Villager[]>([]);
  const debouncedSearchTerm: string = useDebounce(searchQuery, 1000);

  async function getResults(query = {}) {
    const response = await fetch(`${process.env.NEXT_PUBLIC_SEARCH_URL}/indexes/villagers/search`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Meili-API-Key": process.env.NEXT_PUBLIC_API_KEY as string,
      },
      body: JSON.stringify(query),
    });

    const data = await response.json();
    return data;
  }

  function handleSearch(event: ChangeEvent<HTMLInputElement>) {
    setSearchQuery(event.currentTarget.value);
  }

  useEffect(() => {
    if (debouncedSearchTerm) {
      getResults({ q: debouncedSearchTerm }).then((data) => setSearchResults(data.hits));
    }
    if (!debouncedSearchTerm) {
      setSearchResults([]);
    }
  }, [debouncedSearchTerm]);

  const VillagerFromResults = () => {
    if (searchResults.length > 0) return <Villagers villagers={searchResults} />;
    if (filterResults.length > 0) return <Villagers villagers={filterResults} />;
    return <Villagers villagers={villagers.slice(0, 10)} />;
  };

  return (
    <>
      <Head>
        {console.log("searchResults", searchResults)}
        {console.log("filterResults", filterResults)}
        <title>Villagers</title>
      </Head>
      <CustomNavbar villagers={villagers} handleSearch={handleSearch} query={searchQuery} />

      <Container style={{ padding: 10 }} fluid>
        <Card.Group itemsPerRow={5}>
          <VillagerFromResults />
        </Card.Group>
      </Container>
    </>
  );
}
