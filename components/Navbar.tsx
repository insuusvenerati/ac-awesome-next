import Link from "next/link";
import { SyntheticEvent } from "react";
import { connectMenu, connectSearchBox } from "react-instantsearch-dom";
import { Dropdown, Input, Menu, StrictDropdownProps } from "semantic-ui-react";

const SearchBox = ({ currentRefinement, refine }) => (
  <Input
    value={currentRefinement}
    onChange={(event) => refine(event.currentTarget.value)}
    placeholder="Search"
    style={{ width: 500 }}
  />
);

const MenuSelect = ({ items, currentRefinement, refine }) => (
  <>
    <Dropdown
      text="Gender"
      // value={items.isRefined ? currentRefinement : items.value}
      clearable
      options={items.map((item) => {
        const options = {
          text: item.value,
          value: item.value,
        };
        return options;
      })}
      search
      selection
      onChange={(event: SyntheticEvent<HTMLElement>, data: StrictDropdownProps) =>
        refine(data.value)
      }
    />
  </>
);

const CustomSelect = connectMenu(MenuSelect);
const CustomSearch = connectSearchBox(SearchBox);

export const CustomNavbar = () => {
  return (
    <Menu>
      <Menu.Item>
        <h1>Awesome AC</h1>
      </Menu.Item>
      {/* <Menu.Item>
        <CustomSelect attribute="gender" />
      </Menu.Item> */}
      {/* <Menu.Item>
        <CustomSelect attribute="personality" />
      </Menu.Item> */}
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
