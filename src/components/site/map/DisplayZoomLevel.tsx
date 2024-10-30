import { useState, useEffect } from "react";
import { useMap } from "react-leaflet";

function DisplayZoomLevel() {
  const map = useMap();
  const [zoomLevel, setZoomLevel] = useState(map.getZoom());

  useEffect(() => {
    const onZoom = () => {
      setZoomLevel(map.getZoom());
    };

    map.on("zoomend", onZoom);
    return () => {
      map.off("zoomend", onZoom);
    };
  }, [map]);

  return (
    <div className="z-50 bottom-2 left-2 text-xl">
      Current Zoom Level: {zoomLevel}
    </div>
  );
}

export default DisplayZoomLevel;
