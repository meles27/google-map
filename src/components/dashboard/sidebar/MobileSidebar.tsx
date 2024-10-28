import { RootState } from "../../../app/store";
import { closeDashboardSidebar } from "../../../slices/dashboardSlice";
import { useDispatch, useSelector } from "react-redux";
import Sidebar from "./Sidebar";
import { Drawer } from "@material-tailwind/react";
import React from "react";
const MobileSidebar: React.FC = () => {
  const isDrawerOpen = useSelector(
    (state: RootState) => state.dashboard.sidebar
  );
  console.log("messsage", isDrawerOpen);
  const dispatch = useDispatch();

  return (
    <Drawer
      placement="left"
      placeholder={"left"}
      onPointerEnterCapture={() => {}}
      onPointerLeaveCapture={() => {}}
      open={isDrawerOpen}
      onClose={() => dispatch(closeDashboardSidebar())}
      className="flex w-full h-full "
    >
      <Sidebar />
    </Drawer>
  );
};

export default MobileSidebar;
