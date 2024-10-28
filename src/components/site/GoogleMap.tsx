import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const mapContainerStyle: React.CSSProperties = {
  height: "400px",
  width: "800px",
};

const center = {
  lat: -3.745,
  lng: -74.35,
};

const MyMapComponent: React.FC = () => {
  return (
    <LoadScript googleMapsApiKey="YOUR_API_KEY">
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={10}
      >
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
};

export default MyMapComponent;
