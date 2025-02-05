import {
  Button,
  Drawer,
  IconButton,
  List,
  ListItem,
} from "@material-tailwind/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../../app/store";
import { closeNavbar } from "../../slices/siteSlice";
import config from "../../config";
import { useLocalStorage } from "usehooks-ts";
import { JwtTokenIface } from "../../types/types";
import { isAuthenticated } from "../../utils/auth";

const navLinks: { title: string; path: string; type?: "button" | "link" }[] = [
  {
    title: "Home",
    path: "/",
    type: "link",
  },
  {
    title: "News",
    path: "/news",
    type: "link",
  },
  {
    title: "Map",
    path: "/map",
    type: "link",
  },
  {
    title: "Events",
    path: "/events",
    type: "link",
  },
  {
    title: "Travel's",
    path: "/tourisms",
    type: "link",
  },
  {
    title: "services",
    path: "/services",
    type: "link",
  },
  {
    title: "businesses",
    path: "/businesses",
    type: "link",
  },
];
export const DesktopNavbar: React.FC = () => {
  const [token] = useLocalStorage<JwtTokenIface>(
    config.JWT_KEY_NAME,
    config.JWT_DEFAULT_VALUE
  );

  return (
    <nav className="hidden flex-row items-center gap-2xl lg:flex">
      <ul className="flex flex-row gap-lg">
        {navLinks.map((link) =>
          link.type === "link" ? (
            <li key={link.title}>
              <Link className="text-secondary" to={link.path}>
                {link.title}
              </Link>
            </li>
          ) : null
        )}
      </ul>
      <div className="flex flex-row items-center gap-sm">
        {isAuthenticated(token.access || "") ? (
          <Button className="bg-secondary w-32">
            <Link
              className="block w-full h-full text-primary-50"
              to="/dashboard"
            >
              Dashboard
            </Link>
          </Button>
        ) : (
          <>
            <Button
              className="bg-neutral-50 border-secondary p-0"
              variant="outlined"
            >
              <Link
                className="block w-full h-full text-secondary px-lg py-sm"
                to="/signin"
              >
                Sign In
              </Link>
            </Button>
            <Button className="bg-secondary w-32">
              <Link className="block w-full h-full text-primary-50" to="/login">
                Sign up
              </Link>
            </Button>
          </>
        )}
      </div>
    </nav>
  );
};

export function MobileNavbar() {
  const navbar = useSelector((state: RootState) => state.site.navbar);
  const dispatch = useDispatch();

  return (
    <Drawer
      placement="right"
      open={navbar}
      onClose={() => dispatch(closeNavbar())}
      className="fixed lg:hidden"
    >
      <div className="mb-6 flex flex-col items-start px-xl justify-between">
        <IconButton
          variant="text"
          color="blue-gray"
          className="self-end"
          onClick={() => dispatch(closeNavbar())}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-5 w-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </IconButton>
        <nav className="flex flex-col gap-xl">
          <List>
            {navLinks.map((link) => (
              <Link to={link.path} className="text-initial">
                <ListItem>{link.title}</ListItem>
              </Link>
            ))}
          </List>
          <div className="flex flex-col items-start gap-sm">
            <Button
              className="bg-neutral-50 border-secondary p-0"
              variant="outlined"
            >
              <Link
                className="block w-full h-full text-secondary px-lg py-sm"
                to="/signin"
              >
                Sign In
              </Link>
            </Button>
            <Button className="bg-secondary w-32">Sign Up</Button>
          </div>
        </nav>
      </div>
    </Drawer>
  );
}
