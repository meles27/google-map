import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useSelector } from "react-redux";
import { RootState } from "../../../app/store";
import Place from "./Place";
import DisplayZoomLevel from "./DisplayZoomLevel";
import ActiveMarker from "./ActiveMarker";

const GoogleMap: React.FC = () => {
  const culturalPlaces = useSelector((state: RootState) => state.culture);
  return (
    <MapContainer
      center={[13.5, 39.0]}
      zoom={7}
      className="h-[500px] min-w-[600px] rounded-xl"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <div className="flex absolute left-16 top-0 z-[888888888]">
        <DisplayZoomLevel />
      </div>

      {culturalPlaces.map((place, index) =>
        index != 5 ? (
          <Marker
            key={index}
            position={{
              lat: place.latitude,
              lng: place.longitude,
            }}
          >
            <Popup>
              <Place {...place} />
            </Popup>
          </Marker>
        ) : (
          <ActiveMarker place={place} key={index} />
        )
      )}
    </MapContainer>
  );
};

export default GoogleMap;
