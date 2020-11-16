import Link from "next/link";
import { connectSearchBox } from "react-instantsearch-dom";
import { Input, Menu } from "semantic-ui-react";

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
        <h1>Awesome AC</h1>
      </Menu.Item>
      <Menu.Item>
        <h4>Animal Crossing database with filters and search!</h4>
      </Menu.Item>
      <Menu.Menu position="right">
        <Menu.Item>
          <CustomSearch />
        </Menu.Item>
        <Menu.Item>
          <Link href="/">
            <a>Villagers</a>
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link href="/art">
            <a>Art</a>
          </Link>
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  );
};
