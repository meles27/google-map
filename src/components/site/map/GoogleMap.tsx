import "leaflet/dist/leaflet.css";
import React from "react";
import {
  CircleMarker,
  MapContainer,
  Marker,
  Popup,
  TileLayer
} from "react-leaflet";
import { useSelector } from "react-redux";
import { RootState } from "../../../app/store";
import DisplayZoomLevel from "./DisplayZoomLevel";
import LocatePlace from "./LocatePlace";
import Place from "./Place";

const GoogleMap: React.FC = () => {
  const culturalPlaces = useSelector((state: RootState) => state.culture);

  // const activePlace = culturalPlaces.places
  //   .filter((place) => place.name === culturalPlaces.active)
  //   .map((place) => [place.latitude, place.longitude])[0];

  // const polyline = culturalPlaces.places.map((place, index, array) => {
  //   return [activePlace, [place.latitude, place.longitude]];
  // });

  return (
    <div className="w-full h-full">
      <MapContainer
        center={[13.5, 39.0]}
        zoom={6}
        className="h-[500px] rounded-xl"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <div className="flex absolute left-16 top-0 z-[8888888] -translate-y-8">
          <DisplayZoomLevel />
        </div>

        {culturalPlaces.places.map((place, index) =>
          culturalPlaces.active === place.name ? (
            <CircleMarker
              center={[place.latitude, place.longitude]}
              pathOptions={{ color: "red" }}
              radius={10}
            >
              <Marker
                key={index}
                position={{
                  lat: place.latitude,
                  lng: place.longitude,
                }}
              >
                <Popup>
                  <Place place={place} />
                </Popup>
              </Marker>
            </CircleMarker>
          ) : (
            <Marker
              key={index}
              position={{
                lat: place.latitude,
                lng: place.longitude,
              }}
            >
              <Popup>
                <Place place={place} />
              </Popup>
            </Marker>
          )
        )}

        {/* {culturalPlaces.showLines &&
          polyline.map((poly, index) => {
            console.log("colur", colors[index], index);
            console.log("length", polyline.length);
            return (
              <Polyline
                pathOptions={{
                  color: colors[index % colors.length],
                }}
                positions={poly}
              />
            );
          })} */}
        {/* locate the current active location */}
        <LocatePlace />
      </MapContainer>
    </div>
  );
};

export default GoogleMap;
