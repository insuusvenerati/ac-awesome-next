import { createContext } from "react";
import { Villager } from "../types/villagers";

type VillagerContextType = {
  villagers: Villager[];
};

export const VillagerContext = createContext<VillagerContextType>({} as VillagerContextType);

export const VillagerContextProvider: React.FC = ({ children }) => {
  const villagers: Villager[] = require("../acnhapi/v1a/villagers.json");

  return <VillagerContext.Provider value={{ villagers }}>{children}</VillagerContext.Provider>;
};
