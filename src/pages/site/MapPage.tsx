import { useSelector } from "react-redux";
import GoogleMap from "../../components/site/map/GoogleMap";
import { RootState } from "../../app/store";
import ListPlace from "../../components/site/map/ListPlace";

const MapPage = () => {
  const places = useSelector((state: RootState) => state.culture);
  return (
    <div className="flex flex-row items-stretch justify-center gap-xs">
      <div className="flex flex-3 flex-col">
        <GoogleMap />
      </div>
      <div className="flex flex-1">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo voluptate
        non unde, tempore nostrum, quaerat fugit delectus facilis quia
        doloremque distinctio soluta? Commodi quidem blanditiis culpa laboriosam
        eligendi quae reprehenderit.
      </div>
      <div className="flex-1">
        <ListPlace places={places} />
      </div>
    </div>
  );
};

export default MapPage;
