import Link from "next/link";
import React, { ChangeEvent, SyntheticEvent } from "react";
import { DropdownProps, Form, Menu, StrictDropdownProps } from "semantic-ui-react";
import { Villager } from "../types/villagers";
import { FilterForm } from "./FilterOptions";

type CustomNavbarProps = {
  handleChange: (event: SyntheticEvent<HTMLElement, Event>, data: DropdownProps) => void;
  filterQuery: StrictDropdownProps["value"];
  query: string;
  handleSearch: (event: ChangeEvent<HTMLInputElement>) => void;
  villagers: Villager[];
};

export const CustomNavbar = ({
  query,
  handleSearch,
  handleChange,
  filterQuery,
}: CustomNavbarProps) => {
  return (
    <Menu>
      <Menu.Item>
        <h1>Awesome AC</h1>
      </Menu.Item>
      <Menu.Item>
        <FilterForm filterQuery={filterQuery} handleChange={handleChange} />
      </Menu.Item>

      <Menu.Menu position="right">
        <Menu.Item>
          <Form>
            <Form.Field>
              <input
                style={{ width: 500 }}
                value={query}
                onChange={handleSearch}
                type="text"
                placeholder="Search"
              />
            </Form.Field>
          </Form>
        </Menu.Item>
        <Menu.Item>
          <Link href="/">
            <a>Villagers</a>
          </Link>
        </Menu.Item>
        {/* <Menu.Item>
          <Link href="/items">
            <a>Items</a>
          </Link>
        </Menu.Item> */}
      </Menu.Menu>
    </Menu>
  );
};
