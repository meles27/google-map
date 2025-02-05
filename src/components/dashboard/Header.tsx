import { AiOutlineMenu } from "react-icons/ai";
import React from "react";
import { Input } from "@material-tailwind/react";
import { useDispatch } from "react-redux";
import { openDashboardSidebar } from "../../slices/dashboardSlice";
const Header: React.FC = () => {
  const dispatch = useDispatch();
  return (
    <header className="sticky top-0 left-0 flex flex-row items-center justify-between h-14 z-[100] self-stretch shadow-sm bg-white px-md">
      <div className="max-w-md">
        <Input
          label="search"
          name="search"
          placeholder="Enter anything"
          className="max-w-96"
        />
      </div>
      <AiOutlineMenu
        className="!text-3xl !text-primary hover:cursor-pointer lg:hidden"
        onClick={() => {
          dispatch(openDashboardSidebar());
          console.log("messag");
        }}
      />
    </header>
  );
};

export default Header;
