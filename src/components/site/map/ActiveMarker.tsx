import React from "react";
import { Marker } from "react-leaflet";
import L, { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix for missing default icon images
import iconRetinaUrl from "leaflet/dist/images/marker-icon-2x.png";
import iconUrl from "leaflet/dist/images/marker-icon.png";
import shadowUrl from "leaflet/dist/images/marker-shadow.png";
import { CulturalPlace } from "../../../slices/cultureSlice";
import Place from "./Place";

// Set the default icon options for the map
L.Marker.prototype.options.icon = new Icon({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const customIcon: Icon = new L.Icon({
  iconUrl: "/marker.png", // Replace with the URL of your custom marker
  iconSize: [50, 41], // Size of the icon
  iconAnchor: [12, 41], // Point of the icon which will correspond to marker's location
  popupAnchor: [1, -34], // Point from which the popup should open relative to the iconAnchor
  shadowUrl, // Optional shadow
  shadowSize: [41, 41],
});

interface ActiveMarkerProps {
  place: CulturalPlace;
}

const ActiveMarker: React.FC<ActiveMarkerProps> = (props) => {
  return (
    <Marker
      position={[props.place.latitude, props.place.longitude]}
      icon={customIcon}
    >
      <Place place={props.place} />
    </Marker>
  );
};

export default ActiveMarker;
