import React from "react";
import { CulturalPlace } from "../../../slices/cultureSlice";
import { Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";
interface PlaceProps {
  place: CulturalPlace;
}
const Place: React.FC<PlaceProps> = (porps) => {
  return (
    <div className="flex flex-col gap-md items-start p-md">
      <header className="flex flex-col">
        <Typography variant="h3">{porps.place.name}</Typography>
        <div className="flex text-primary-700 text-sm">
          <Link to="">
            location {porps.place.latitude}*, {porps.place.longitude}*
          </Link>
        </div>
        <p className="text-lg">{porps.place.region}</p>
      </header>
      <p className="flex text-neutral-500">{porps.place.description}</p>
    </div>
  );
};

export default Place;
