import Link from "next/link";
import { connectSearchBox } from "react-instantsearch-dom";
import { Dropdown, Input, Menu } from "semantic-ui-react";

const items = [
  {
    name: "Villagers",
    url: "/",
  },
  {
    name: "Art",
    url: "/art",
  },
  {
    name: "Music",
    url: "/music",
  },
  {
    name: "Sea",
    url: "/sea",
  },
  {
    name: "Fossils",
    url: "/fossils",
  },
  {
    name: "Fish",
    url: "/fish",
  },
  {
    name: "Bugs",
    url: "/bugs",
  },
];

const SearchBox = ({ currentRefinement, refine }: any) => (
  <Input
    value={currentRefinement}
    onChange={(event) => refine(event.currentTarget.value)}
    placeholder="Search"
    style={{ width: 500 }}
  />
);

const CustomSearch = connectSearchBox(SearchBox);

export const CustomNavbar = () => {
  return (
    <Menu>
      <Menu.Item>
        <Link href="/">
          <a style={{ color: "black" }}>
            <h1>Awesome AC</h1>
          </a>
        </Link>
      </Menu.Item>
      <Menu.Item>
        <h4>Animal Crossing database with filters and search!</h4>
      </Menu.Item>
      <Menu.Menu position="right">
        <Menu.Item>
          <CustomSearch />
        </Menu.Item>
        <Menu.Item>
          <Dropdown pointing text="Where to?">
            <Dropdown.Menu>
              {items.map((item) => (
                <Link key={item.name} href={item.url}>
                  <Dropdown.Item>
                    <a>{item.name}</a>
                  </Dropdown.Item>
                </Link>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  );
};
