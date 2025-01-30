import { Button } from "@material-tailwind/react";
import { useDispatch, useSelector } from "react-redux";
import { useWindowSize } from "usehooks-ts";
import { RootState } from "../../app/store";
import GoogleMap from "../../components/site/map/GoogleMap";
import ListPlace from "../../components/site/map/ListPlace";
import { openAddPlace } from "../../slices/cultureSlice";

const MapPage = () => {
  const culturalPlaces = useSelector((state: RootState) => state.culture);
  const { height } = useWindowSize();
  const dispatch = useDispatch();
  return (
    <div className="flex flex-row items-stretch justify-center gap-xs">
      <div className="flex flex-[7] flex-col">
        <GoogleMap />
      </div>

      <div
        className="flex-[3] overflow-auto"
        style={{
          maxHeight: height - 100,
        }}
      >
        <div className="flex self-start justify-between w-full py-sm px-sm">
          {/* <Button
            onClick={() => dispatch(toggleLines())}
            color="blue"
            variant="outlined"
          >
            {culturalPlaces.showLines ? "Hide Lines" : "Show Lines"}
          </Button> */}
          <Button onClick={() => dispatch(openAddPlace())} color="blue">
            Add Places
          </Button>
        </div>
        <ListPlace places={culturalPlaces.places} />
      </div>
    </div>
  );
};

export default MapPage;
