import { Button, Dialog, DialogFooter } from "@material-tailwind/react";
import Place from "./Place";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../app/store";
import { toggleDetail } from "../../../slices/cultureSlice";

export default function ShowPlaceDetail() {
  const culturalPlaces = useSelector((state: RootState) => state.culture);
  const dispatch = useDispatch();
  const handleOpen = () => dispatch(toggleDetail());

  return (
    <>
      <Dialog open={culturalPlaces.showDetail} handler={handleOpen}>
        <div className="flex flex-col p-md">
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
          <Button variant="gradient" color="green" onClick={handleOpen}>
            <span>OK</span>
          </Button>
        </div>
      </Dialog>
    </>
  );
}
