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
} from "@material-tailwind/react";
import React from "react";
import { CulturalPlace } from "../../../slices/cultureSlice";

interface ListPlaceProps {
  places: CulturalPlace[];
}

const ListPlace: React.FC<ListPlaceProps> = (props) => {
  return (
    <Card className="flex flex-col max-h-screen overflow-auto">
      <CardHeader
        floated={false}
        className="flex flex-1 h-2xl items-center justify-start px-md shadow-none underline uppercase"
      >
        <Typography
          variant="h5"
          color="blue-gray"
          className="flex flex-row gap-2xl"
        >
          <span>list places</span> <span>{props.places.length}</span>
        </Typography>
      </CardHeader>
      <CardBody className="flex-9">
        <List>
          {props.places.map((place) => (
            <ListItem>
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
