import { useEffect, useRef } from "react";
import { useMap } from "react-leaflet";
import { useSelector } from "react-redux";
import { RootState } from "../../../app/store";

const LocatePlace = () => {
  const isMounted = useRef<boolean>(true);
  const culturalPlaces = useSelector((state: RootState) => state.culture);
  const map = useMap(); // Get the map instance
  const defaultZoom = useRef<number>(map.getZoom());
  console.log("defaultZoom", defaultZoom.current);
  // Function to fly to the custom location
  const handleFlyTo = (latlng: [number, number]) => {
    map.flyTo(latlng, defaultZoom.current + 4); // Fly to the custom coordinates
  };

  useEffect(() => {
    if (isMounted.current) {
      isMounted.current = false;
      return;
    }
    if (culturalPlaces.active) {
      const activePlace = culturalPlaces.places.find(
        (place) => place.name === culturalPlaces.active
      );
      if (activePlace) {
        handleFlyTo([activePlace.latitude, activePlace.longitude]);
      }
    }
  }, [culturalPlaces.active]);

  return null;
};

export default LocatePlace;
