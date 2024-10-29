import GoogleMap from "../../components/site/GoogleMap";

const MapPage = () => {
  return (
    <div className="flex flex-row items-center justify-center gap-lg">
      <div className="flex">
        <GoogleMap />
      </div>
      <div className="flex">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
        voluptate dolorum eligendi, veritatis voluptas odio nam eos illum
        sapiente! Placeat exercitationem soluta animi reprehenderit ab impedit
        accusantium architecto ipsam error.
      </div>
    </div>
  );
};

export default MapPage;
