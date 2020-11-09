import { createContext, SyntheticEvent, useEffect, useState } from "react";
import { DropdownProps, StrictDropdownProps } from "semantic-ui-react";
import { Villager } from "../types/villagers";

type FilterContextType = {
  handleChange: (e: SyntheticEvent<HTMLElement, Event>, data: DropdownProps) => void;
  filterResults: Villager[];
  filterQuery: StrictDropdownProps["value"];
};

export const FilterContext = createContext<FilterContextType>({} as FilterContextType);

export const FilterContextProvider: React.FC = ({ children }) => {
  const [filterResults, setFilterResults] = useState<Villager[]>([]);
  const [filterQuery, setFilterQuery] = useState<StrictDropdownProps["value"]>([]);

  function handleChange(e: SyntheticEvent<HTMLElement, Event>, data: DropdownProps) {
    setFilterQuery(data.value);
  }

  async function getResults(data = {}) {
    const resultsFromApi = await fetch(
      `${process.env.NEXT_PUBLIC_SEARCH_URL}/indexes/villagers/search`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Meili-API-Key": process.env.NEXT_PUBLIC_API_KEY as string,
        },
        body: JSON.stringify(data),
      }
    );

    return resultsFromApi.json();
  }

  useEffect(async () => {
    if (filterQuery?.toString()?.length > 0) {
      const filterResults = await getResults({ q: filterQuery?.toString() });
      setFilterResults(filterResults.hits);
    }

    if (filterQuery?.toString().length < 1) {
      setFilterResults([]);
    }
  }, [filterQuery]);

  return (
    <FilterContext.Provider value={{ handleChange, filterQuery, filterResults }}>
      {children}
    </FilterContext.Provider>
  );
};
