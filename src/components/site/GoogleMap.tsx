import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";

const GoogleMap: React.FC = () => {
  const culturalPlaces = useSelector((state: RootState) => state.culture);
  return (
    <MapContainer
      center={[40.758, -73.9855]}
      zoom={13}
      className="h-[500px] w-[950px] rounded-xl"
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      {culturalPlaces.map((place, index) => (
        <Marker key={index} position={place.position}>
          <Popup>{place.name}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default GoogleMap;
