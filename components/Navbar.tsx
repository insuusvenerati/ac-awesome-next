import Link from "next/link";
import React, { ChangeEvent } from "react";
import { Form, Menu } from "semantic-ui-react";
import { Villager } from "../types/villagers";
import { FilterForm } from "./FilterOptions";

export const CustomNavbar = ({
  query,
  handleSearch,
  villagers,
}: {
  query: string;
  handleSearch: (event: ChangeEvent<HTMLInputElement>) => void;
  villagers: Villager[];
}) => {
  return (
    <Menu>
      <Menu.Item>
        <h1>Awesome AC</h1>
      </Menu.Item>
      <Menu.Item>
        <FilterForm />
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
