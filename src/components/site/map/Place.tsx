import React from "react";
import { CulturalPlace } from "../../../slices/cultureSlice";

const Place: React.FC<CulturalPlace> = (place) => {
  return (
    <div>
      <h1>{place.name}</h1>
      <div className="flex">
        {place.latitude}, {place.longitude}
      </div>
      <p>{place.region}</p>
      <p className="flex">{place.description}</p>
    </div>
  );
};

export default Place;
