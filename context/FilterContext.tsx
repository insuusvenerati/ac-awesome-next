import Fuse from "fuse.js";
import { createContext, SyntheticEvent, useContext, useEffect, useState } from "react";
import { DropdownProps, StrictDropdownProps } from "semantic-ui-react";
import { Villager } from "../types/villagers";
import { VillagerContext } from "./VillagerContext";

type FilterContextType = {
  handleChange: (e: SyntheticEvent<HTMLElement, Event>, data: DropdownProps) => void;
  results: Fuse.FuseResult<Villager>[];
  query: StrictDropdownProps["value"];
};

export const FilterContext = createContext<FilterContextType>({} as FilterContextType);

export const FilterContextProvider: React.FC = ({ children }) => {
  const { villagers } = useContext(VillagerContext);
  const [results, setResults] = useState<Fuse.FuseResult<Villager>[]>([]);
  const [query, setQuery] = useState<StrictDropdownProps["value"] | []>([]);
  const fuse = new Fuse(villagers, {
    keys: ["personality", "gender", "species"],
    includeScore: true,
    threshold: 0.6,
  });

  function handleChange(e: SyntheticEvent<HTMLElement, Event>, data: DropdownProps) {
    setQuery(data.value);
  }

  useEffect(() => {
    const search = fuse.search(query?.toString() as string);
    setResults(search);
  }, [query]);

  return (
    <FilterContext.Provider value={{ handleChange, query, results }}>
      {children}
    </FilterContext.Provider>
  );
};
