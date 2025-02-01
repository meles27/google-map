import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useListServicesQuery } from "../../services/serviceApi";
import { setActivePlace } from "../../slices/cultureSlice";
import SpinnerPage from "../SpinnerPage";

const ServicesPage: React.FC = () => {
  const [searchParams, setSearchParams] = useState({
    category: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const servicesResonse = useListServicesQuery(searchParams);

  return (
    <div className="flex w-full h-full items-center justify-center">
      {servicesResonse.isLoading ? (
        <SpinnerPage />
      ) : servicesResonse.isError ? (
        <div>error</div>
      ) : (
        <div className="flex flex-col gap-md">
          <Typography variant="h3" className="ml-md">
            List of Services
          </Typography>
          <div className="grid grid-cols-2 gap-md">
            {servicesResonse.data?.map((service, index) => (
              <Card className="mt-6 w-96">
                <CardHeader color="blue-gray" className="relative h-56">
                  <img
                    src={`/services/image- (${index + 1}).jpg`}
                    alt="card-image"
                    className="block w-full h-full"
                  />
                </CardHeader>
                <CardBody>
                  <Typography variant="h5" color="blue-gray" className="mb-2">
                    {service.name}
                  </Typography>
                  <Typography>{service.description}</Typography>
                </CardBody>
                <CardFooter className="pt-0">
                  <Button
                    onClick={() => {
                      dispatch(setActivePlace(service.name));
                      navigate(`/map`);
                    }}
                  >
                    Locate
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ServicesPage;
