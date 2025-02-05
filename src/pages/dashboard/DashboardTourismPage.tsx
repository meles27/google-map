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
import { useCreateTourismsMutation } from "../../services/tourismApi";

type TourismInputsType = {
  name: string;
  category: string;
  image: FileList;
  description: string;
  latitude: number;
  longitude: number;
};

const DashboardTourismPage = () => {
  const [open, setOpen] = React.useState(false);
  const form = useForm<TourismInputsType>({
    defaultValues: {},
  });
  const [create, createResponse] = useCreateTourismsMutation();

  const handleOpen = () => setOpen(!open);

  const onSubmit = async (data: TourismInputsType) => {
    const { latitude, longitude, image, ...rest } = data;
    const formData = new FormData();

    const location = { latitude, longitude };

    Object.entries(rest).map(([key, value]) => {
      formData.append(key, value);
    });
    formData.append("image", image[0]);
    formData.append("location", JSON.stringify(location));
    create(formData);
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
              Add Business information
            </Typography>
            <Typography color="gray" className="mt-1 font-normal">
              Nice to meet you! Enter your details to register.
            </Typography>
          </div>
          <form
            encType="multipart/form-data"
            className="flex flex-col gap-md max-w-lg m-auto"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <div className="mb-1 flex flex-col gap-6">
              <div>
                <Typography variant="h6" color="blue-gray" className="">
                  Name
                </Typography>
                <Input
                  crossOrigin=""
                  {...form.register("name", { required: "name is Required" })}
                  size="lg"
                  className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
                <ErrorMessage errors={form.formState.errors} name="name" />
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
            <div>
              <Typography variant="h6" color="blue-gray" className="">
                Image
              </Typography>
              <div>
                <div className="flex items-center justify-center w-full">
                  <label
                    htmlFor="dropzone-file"
                    className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500"
                  >
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <svg
                        className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 16"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                        />
                      </svg>
                      <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                        <span className="font-semibold">Click to upload</span>{" "}
                        or drag and drop
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        SVG, PNG, JPG or GIF (MAX. 800x400px)
                      </p>
                    </div>
                    <input
                      {...form.register("image", {
                        required: "image is required",
                      })}
                      id="dropzone-file"
                      type="file"
                      className="hidden"
                    />
                  </label>
                </div>
              </div>
              <ErrorMessage errors={form.formState.errors} name="image" />
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

export default DashboardTourismPage;
