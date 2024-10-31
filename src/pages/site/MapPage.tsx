import { useDispatch, useSelector } from "react-redux";
import GoogleMap from "../../components/site/map/GoogleMap";
import { RootState } from "../../app/store";
import ListPlace from "../../components/site/map/ListPlace";
import { useWindowSize } from "usehooks-ts";
import { Button } from "@material-tailwind/react";
import { openAddPlace, toggleLines } from "../../slices/cultureSlice";
import Place from "../../components/site/map/Place";

const MapPage = () => {
  const culturalPlaces = useSelector((state: RootState) => state.culture);
  const { height } = useWindowSize();
  const dispatch = useDispatch();
  return (
    <div className="flex flex-row items-stretch justify-center gap-xs">
      <div className="flex flex-3 flex-col">
        <GoogleMap />
      </div>

      <div
        className="flex-1 overflow-auto"
        style={{
          maxHeight: height - 100,
        }}
      >
        <ListPlace places={culturalPlaces.places} />
      </div>
      <div className="flex flex-1 flex-col p-md">
        <div className="flex self-start justify-between w-full">
          <Button
            onClick={() => dispatch(toggleLines())}
            color="blue"
            variant="outlined"
          >
            {culturalPlaces.showLines ? "Hide Lines" : "Show Lines"}
          </Button>
          <Button onClick={() => dispatch(openAddPlace())} color="blue">
            Add Places
          </Button>
        </div>
        <div className="flex">
          <div className="">
            <Place
              place={
                culturalPlaces.places.filter(
                  (place) =>
                    place.name.toLowerCase() ===
                    culturalPlaces.active?.toLowerCase()
                )[0]
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapPage;
