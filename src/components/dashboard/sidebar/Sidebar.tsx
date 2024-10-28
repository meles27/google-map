import { Typography, List, ListItem } from "@material-tailwind/react";
import React from "react";
import { GiBurningTree } from "react-icons/gi";
import { Link } from "react-router-dom";

const Sidebar: React.FC = () => {
  return (
    <nav className="flex flex-col">
      <Link to="/">
        <div
          id="logo"
          className="flex w-full items-center justify-start gap-sm py-md"
        >
          <GiBurningTree className="!text-secondary-400 !text-6xl" />
          <Typography className="text-secondary-400" variant="h3">
            Gc-Family
          </Typography>
        </div>
      </Link>

      <List className="gap-0 !flex flex-col">
        <Link
          className="flex w-full h-full items-center justify-start"
          to="/dashboard"
        >
          <ListItem className="text-primary-900">Dashboard</ListItem>
        </Link>
        <Link
          className="flex w-full h-full items-center justify-start"
          to="/dashboard/test"
        >
          <ListItem className="text-primary-900">Test page</ListItem>
        </Link>
        <Link
          className="flex w-full h-full items-center justify-start"
          to="/dashboard/not-found"
        >
          <ListItem className="text-primary-900">not found Page</ListItem>
        </Link>
      </List>
    </nav>
  );
};

export default Sidebar;
