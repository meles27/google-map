import {
  List,
  ListItem,
  ListItemPrefix,
  Avatar,
  Card,
  Typography,
  CardHeader,
  CardBody,
  Button,
  ListItemSuffix,
  Input,
} from "@material-tailwind/react";
import React from "react";
import { CulturalPlace, setActivePlace } from "../../../slices/cultureSlice";
import { useDispatch } from "react-redux";

interface ListPlaceProps {
  places: CulturalPlace[];
}

const ListPlace: React.FC<ListPlaceProps> = (props) => {
  const dispatch = useDispatch();
  const [search, setSearch] = React.useState<string>("");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    setSearch(event.target.value.toLowerCase());
  };

  return (
    <Card className="flex flex-col">
      <CardHeader
        floated={false}
        className="flex flex-1 flex-col h-2xl items-start justify-start border-2 gap-sm px-md py-sm shadow-none underline uppercase"
      >
        <Typography
          variant="h5"
          color="blue-gray"
          className="flex flex-row gap-2xl"
        >
          <span>list places</span>{" "}
          <span>
            {
              props.places.filter(
                (place) =>
                  place.name.toLowerCase().includes(search) ||
                  place.region.toLowerCase().includes(search)
              ).length
            }
          </span>
        </Typography>
        <Input label="search place" onChange={handleChange} />
      </CardHeader>
      <CardBody className="flex-9">
        <List>
          {props.places
            .filter(
              (place) =>
                place.name.toLowerCase().includes(search) ||
                place.region.toLowerCase().includes(search) ||
                place.description.toLowerCase().includes(search)
            )
            .map((place) => (
              <ListItem
                onClick={() => {
                  dispatch(setActivePlace(place.name));
                }}
              >
                <div className="flex flex-row">
                  <div className="flex flex-col">
                    <Typography variant="h6" color="blue-gray">
                      {place.name}
                    </Typography>
                    <Typography
                      variant="small"
                      color="gray"
                      className="font-normal"
                    >
                      {place.region}
                    </Typography>
                  </div>
                </div>
                <ListItemSuffix>
                  <Button>Show</Button>
                </ListItemSuffix>
              </ListItem>
            ))}
        </List>
      </CardBody>
    </Card>
  );
};

export default ListPlace;
