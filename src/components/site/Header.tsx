import { GiBurningTree } from "react-icons/gi";
import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { DesktopNavbar } from "./SiteNavbar";
import { openNavbar } from "../../slices/siteSlice";
import { useDispatch } from "react-redux";

const Header: React.FC = () => {
  const dispatch = useDispatch();

  return (
    <div className="sticky top-0 left-0 flex h-full p-sm items-center justify-center bg-white text-neutral-900 z-10">
      <div className="container flex flex-row flex-1 items-center justify-between px-sm">
        <div id="logo" className="flex items-center justify-center gap-sm p-sm">
          <GiBurningTree className="!text-secondary-400 !text-3xl" />
          <Link to="/" className="text-3xl font-bold">
            Gc Family
          </Link>
        </div>
        <DesktopNavbar />
        <AiOutlineMenu
          className="!text-3xl !text-secondary lg:hidden hover:cursor-pointer"
          onClick={() => {
            dispatch(openNavbar());
          }}
        />
      </div>
    </div>
  );
};

export default Header;
