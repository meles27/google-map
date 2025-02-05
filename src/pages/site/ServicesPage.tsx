import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  Input,
  Rating,
  Textarea,
  Typography,
} from "@material-tailwind/react";
import React, { useEffect, useRef, useState } from "react";

import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import EmptyList from "../../components/EmptyList";
import {
  useCreateFeedbackMutation,
  useListServicesQuery,
} from "../../services/serviceApi";
import { setActivePlace } from "../../slices/cultureSlice";
import { ServicesEntityType } from "../../types/entity_types";
import SpinnerPage from "../SpinnerPage";

const ServicesPage: React.FC = () => {
  const [searchParams, setSearchParams] = useState({
    category: "",
  });

  const serviceRef = useRef<ServicesEntityType | null>(null);

  const form = useForm<{ comment: string; rating: number }>();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen((state) => !state);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const servicesResonse = useListServicesQuery(searchParams);
  const [addFeedback, addFeedbackResponse] = useCreateFeedbackMutation();
  const onSubmit = (data: { comment: string; rating: number }) => {
    addFeedback({
      serviceId: serviceRef.current?.id || 0,
      ...data,
    });
  };

  useEffect(() => {
    if (addFeedbackResponse.isSuccess) {
      toast.success("successfully add comment");
    }

    if (addFeedbackResponse.isError) {
      toast.error(JSON.stringify(addFeedbackResponse.error));
    }
  }, [
    addFeedbackResponse.error,
    addFeedbackResponse.isError,
    addFeedbackResponse.isSuccess,
  ]);

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
            {servicesResonse.data?.results.length ? (
              servicesResonse.data?.results.map((service) => (
                <Card className="mt-6 w-96">
                  <CardHeader color="blue-gray" className="relative h-56">
                    <img
                      src={
                        Math.random() > 0.6
                          ? "/no-image.jpg"
                          : Math.random() < 0.5
                          ? "/services/one.jpg"
                          : "/services/two.jpg"
                      }
                      alt="card-image"
                    />
                  </CardHeader>
                  <CardBody>
                    <Typography variant="h5" color="blue-gray" className="mb-2">
                      {service.name}
                    </Typography>
                    <div className="flex items-baseline gap-sm">
                      <Rating value={5} color="yellow" />
                      <Typography variant="h3">{5}</Typography>
                    </div>
                    <Typography>{service.description}</Typography>
                  </CardBody>
                  <CardFooter className="flex pt-0 items-center justify-between gap-md">
                    <Button
                      onClick={() => {
                        dispatch(setActivePlace(service.name));
                        navigate(`/map`);
                      }}
                    >
                      Locate
                    </Button>
                    <Button
                      onClick={() => {
                        setOpen(true);
                        serviceRef.current = service;
                      }}
                    >
                      Add Comment
                    </Button>
                  </CardFooter>
                </Card>
              ))
            ) : (
              <div className="flex h-full pt-xl">
                <EmptyList itemName="Event" />
              </div>
            )}
          </div>
          <Dialog open={open} handler={() => setOpen((state) => !state)}>
            <div className="flex items-center justify-between">
              <DialogHeader className="flex flex-col items-start">
                <Typography className="mb-1" variant="h4">
                  New message to @
                </Typography>
              </DialogHeader>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="mr-3 h-5 w-5"
                onClick={handleOpen}
              >
                <path
                  fillRule="evenodd"
                  d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <DialogBody>
              <Typography className="mb-10 -mt-7 " color="gray" variant="lead">
                Write the message and then click button.
              </Typography>
              <form
                id="form-id"
                className="grid gap-6"
                onSubmit={form.handleSubmit(onSubmit)}
              >
                <Typography className="-mb-1" color="blue-gray" variant="h6">
                  comment
                </Typography>
                <Textarea
                  {...form.register("comment", { required: true })}
                  label="Message"
                />

                <Typography className="-mb-1" color="blue-gray" variant="h6">
                  rating
                </Typography>
                <div className="max-w-[4rem]">
                  <Input
                    crossOrigin={""}
                    type="number"
                    className="w-full"
                    {...form.register("rating", {
                      required: true,
                    })}
                    label="rating"
                  />
                </div>
              </form>
            </DialogBody>
            <DialogFooter className="space-x-2">
              <Button variant="text" color="gray" onClick={handleOpen}>
                cancel
              </Button>
              <Button
                variant="gradient"
                color="gray"
                form="form-id"
                type="submit"
              >
                {addFeedbackResponse.isLoading ? "Loading..." : "send message"}
              </Button>
            </DialogFooter>
          </Dialog>
        </div>
      )}
    </div>
  );
};

export default ServicesPage;
