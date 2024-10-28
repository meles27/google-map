import { Card } from "@material-tailwind/react";
import Sidebar from "./Sidebar";
import React from "react";

const DesktopSidebar: React.FC = () => {
  return (
    <Card
      shadow={false}
      className="h-full w-full shadow-none rounded-none"
      placeholder={true}
      onPointerEnterCapture={() => {}}
      onPointerLeaveCapture={() => {}}
    >
      <Sidebar />
    </Card>
  );
};

export default DesktopSidebar;
