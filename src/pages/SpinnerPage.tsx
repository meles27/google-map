import { Spinner } from "@material-tailwind/react";
import React from "react";

const SpinnerPage: React.FC = () => {
  return (
    <div className="flex h-screen w-full bg-transparent items-center justify-center">
      <Spinner className="w-32 h-32 aspect-square" />
    </div>
  );
};

export default SpinnerPage;
