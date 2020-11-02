import Image from "next/image";
import { Villager } from "../types/villagers";

type VillagerItemProps = {
  villager: Villager;
};

export const VillagerItem = ({ villager }: VillagerItemProps) => (
  <>
    <Image width={128} height={128} key={villager.id} src={villager.icon_uri} alt="" />
    <h4>{villager.name["name-USen"]}</h4>
  </>
);
