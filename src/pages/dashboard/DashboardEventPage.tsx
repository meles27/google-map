import { ErrorMessage } from "@hookform/error-message";
import {
  Button,
  Dialog,
  DialogBody,
  Input,
  Textarea,
  Typography,
} from "@material-tailwind/react";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useCreateEventMutation } from "../../services/eventApi";

type EventInputsType = {
  title: string;
  place: string;
  category: string;
  description: string;
  date: string;
  latitude: number;
  longitude: number;
};

const DashboardEventPage = () => {
  const [open, setOpen] = React.useState(false);
  const form = useForm<EventInputsType>({
    defaultValues: {
      title: "new world",
      place: "new world",
      category: "Historical",
      description: "fsdfl",
      date: "2025-02-05",
      latitude: 30,
      longitude: 30,
    },
  });
  const [create, createResponse] = useCreateEventMutation();

  const handleOpen = () => setOpen(!open);

  const onSubmit = async (data: EventInputsType) => {
    const { latitude, longitude, ...rest } = data;
    const message = {
      ...rest,
      location: {
        latitude,
        longitude,
      },
    };
    console.log("message", message);
    create(message);
  };

  useEffect(() => {
    if (createResponse.isError) {
      toast.error(JSON.stringify(createResponse.error));
    }
    if (createResponse.isSuccess) {
      toast.success("sucessfully created");
    }
  }, [
    createResponse.data,
    createResponse.error,
    createResponse.isError,
    createResponse.isSuccess,
  ]);

  return (
    <div>
      <Button onClick={handleOpen} variant="gradient">
        Add Service
      </Button>
      <Dialog
        size="md"
        open={open}
        handler={handleOpen}
        className="h-[calc(100vh-0.5rem)] m-auto overflow-auto"
      >
        <DialogBody className="overflow-auto max-w-xl m-auto space-y-xl p-xl">
          <div className="m-auto">
            <Typography variant="h4" color="blue-gray">
              Create Event
            </Typography>
            <Typography color="gray" className="mt-1 font-normal">
              Nice to meet you! Enter your details to register.
            </Typography>
          </div>
          <form
            className="flex flex-col gap-md max-w-lg m-auto"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <div className="mb-1 flex flex-col gap-6">
              <div>
                <Typography variant="h6" color="blue-gray" className="">
                  Title
                </Typography>
                <Input
                  crossOrigin=""
                  {...form.register("title", { required: "title is Required" })}
                  size="lg"
                  className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
                <ErrorMessage errors={form.formState.errors} name="title" />
              </div>
              <div>
                <Typography variant="h6" color="blue-gray" className="">
                  Place
                </Typography>
                <Input
                  crossOrigin=""
                  {...form.register("place", { required: "place is Required" })}
                  size="lg"
                  className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
                <ErrorMessage errors={form.formState.errors} name="place" />
              </div>
              <div>
                <Typography variant="h6" color="blue-gray" className="">
                  Category
                </Typography>
                <Input
                  crossOrigin=""
                  {...form.register("category", {
                    required: "category is Required",
                  })}
                  size="lg"
                  className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
                <ErrorMessage errors={form.formState.errors} name="category" />
              </div>
              <div>
                <Typography variant="h6" color="blue-gray" className="">
                  Description
                </Typography>
                <Textarea
                  {...form.register("description", {
                    required: "description is Required",
                  })}
                  size="lg"
                  className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
                <ErrorMessage
                  errors={form.formState.errors}
                  name="description"
                />
              </div>
              <div>
                <Typography variant="h6" color="blue-gray" className="">
                  Date
                </Typography>
                <Input
                  crossOrigin=""
                  {...form.register("date", { required: "date is Required" })}
                  size="lg"
                  type="date"
                  className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
                <ErrorMessage errors={form.formState.errors} name="date" />
              </div>
            </div>
            <div className="flex gap-sm items-center">
              <div>
                <Typography variant="h6" color="blue-gray" className="">
                  Latitude
                </Typography>
                <Input
                  crossOrigin=""
                  {...form.register("latitude", {
                    required: "Latitude is Required",
                  })}
                  size="lg"
                  className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
                <ErrorMessage errors={form.formState.errors} name="latitude" />
              </div>
              <div>
                <Typography variant="h6" color="blue-gray" className="">
                  Longitude
                </Typography>
                <Input
                  crossOrigin=""
                  {...form.register("longitude", {
                    required: "Longitude is Required",
                  })}
                  size="lg"
                  className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
                <ErrorMessage errors={form.formState.errors} name="longitude" />
              </div>
            </div>
            <div className="flex flex-1 items-center justify-center mt-xl">
              <Button
                type="submit"
                size="lg"
                className="px-4xl bg-primary-700"
                loading={createResponse.isLoading}
              >
                sumit
                {/* {createResponse.isLoading ? <Spinner /> : "Submit"} */}
              </Button>
            </div>
          </form>
        </DialogBody>
      </Dialog>
    </div>
  );
};

export default DashboardEventPage;
