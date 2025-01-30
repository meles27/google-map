/* eslint-disable react-refresh/only-export-components */
import React from "react";
import withAnimation from "../../components/route-animation/withAnimation";

const DashboardHomePage: React.FC = () => {
  return (
    <div className="w-full h-full">
      home page
    </div>
  );
};

// export default WithAnimation(DashboardHomePage);
export default withAnimation(DashboardHomePage);
