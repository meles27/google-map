import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { LatLngExpression } from "leaflet";
import withAnimation from "../route-animation/withAnimation";

// Define the component's props type
interface GoogleMapProps {
  center: LatLngExpression;
  zoom: number;
}

const GoogleMap: React.FC<Partial<GoogleMapProps>> = (
  { center, zoom } = { center: [51.505, -0.09], zoom: 13 }
) => {
  console.log("fsldfasldf", center, zoom);
  return (
    <MapContainer
      center={[51.505, -0.09]}
      zoom={13}
      scrollWheelZoom={false}
      className="border-2 border-indigo-500 w-full max-w-screen-lg h-[500px] bg-green-300"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[51.505, -0.09]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default withAnimation(GoogleMap);
