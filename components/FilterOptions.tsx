import { useContext } from "react";
import { Dropdown } from "semantic-ui-react";
import { FilterContext } from "../context/FilterContext";

const personalities = [
  {
    key: "Cranky",
    text: "Cranky",
    value: "Cranky",
  },
  {
    key: "Lazy",
    text: "Lazy",
    value: "Lazy",
  },
  {
    key: "Jock",
    text: "Jock",
    value: "Jock",
  },
  {
    key: "Smug",
    text: "Smug",
    value: "Smug",
  },
  {
    key: "Snooty",
    text: "Snooty",
    value: "Snooty",
  },
  {
    key: "Normal",
    text: "Normal",
    value: "Normal",
  },
  {
    key: "Peppy",
    text: "Peppy",
    value: "Peppy",
  },
  {
    key: "Sisterly",
    text: "Sisterly",
    value: "Sisterly",
  },
];

const species = [
  { key: "Alligator", value: "Alligator", text: "Alligator" },
  { key: "Anteater", value: "Anteater", text: "Anteater" },
  { key: "Bear", value: "Bear", text: "Bear" },
  { key: "Bird", value: "Bird", text: "Bird" },
  { key: "Bull", value: "Bull", text: "Bull" },
  { key: "Cat", value: "Cat", text: "Cat" },
  { key: "Chicken", value: "Chicken", text: "Chicken" },
  { key: "Cow", value: "Cow", text: "Cow" },
  { key: "Cub", value: "Cub", text: "Cub" },
  { key: "Deer", value: "Deer", text: "Deer" },
  { key: "Dog", value: "Dog", text: "Dog" },
  { key: "Duck", value: "Duck", text: "Duck" },
  { key: "Eagle", value: "Eagle", text: "Eagle" },
  { key: "Elephant", value: "Elephant", text: "Elephant" },
  { key: "Frog", value: "Frog", text: "Frog" },
  { key: "Goat", value: "Goat", text: "Goat" },
  { key: "Gorilla", value: "Gorilla", text: "Gorilla" },
  { key: "Hamster", value: "Hamster", text: "Hamster" },
  { key: "Hippo", value: "Hippo", text: "Hippo" },
  { key: "Horse", value: "Horse", text: "Horse" },
  { key: "Kangaroo", value: "Kangaroo", text: "Kangaroo" },
  { key: "Koala", value: "Koala", text: "Koala" },
  { key: "Lion", value: "Lion", text: "Lion" },
  { key: "Monkey", value: "Monkey", text: "Monkey" },
  { key: "Mouse", value: "Mouse", text: "Mouse" },
  { key: "Octopus", value: "Octopus", text: "Octopus" },
  { key: "Ostrich", value: "Ostrich", text: "Ostrich" },
  { key: "Penguin", value: "Penguin", text: "Penguin" },
  { key: "Pig", value: "Pig", text: "Pig" },
  { key: "Rabbit", value: "Rabbit", text: "Rabbit" },
  { key: "Rhino", value: "Rhino", text: "Rhino" },
  { key: "Sheep", value: "Sheep", text: "Sheep" },
  { key: "Squirrel", value: "Squirrel", text: "Squirrel" },
  { key: "Tiger", value: "Tiger", text: "Tiger" },
  { key: "Wolf", value: "Wolf", text: "Wolf" },
];
const genders = [
  {
    key: "Male",
    value: "Male",
    text: "Male",
  },
  {
    key: "Female",
    value: "Female",
    text: "Female",
  },
];

const allFilterOptions = [...personalities, ...species, ...genders];

export const FilterForm = () => {
  const { handleChange, query, results } = useContext(FilterContext);

  return (
    <>
      {console.log(results)}
      <Dropdown
        onChange={handleChange}
        text="Filter"
        value={query}
        clearable
        options={allFilterOptions}
        multiple
        search
        selection
      />
    </>
  );
};
