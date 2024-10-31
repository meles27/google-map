import React from "react";
import {
  Input,
  Option,
  Select,
  Button,
  Dialog,
  Textarea,
  IconButton,
  Typography,
  DialogBody,
  DialogHeader,
  DialogFooter,
} from "@material-tailwind/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../app/store";
import { toggleAddPlace } from "../../../slices/cultureSlice";
import { useForm } from "react-hook-form";

export default function AddPlace() {
  const dispatch = useDispatch();
  const culturalPlaces = useSelector((state: RootState) => state.culture);
  const handleOpen = () => dispatch(toggleAddPlace());
  const form = useForm();
  return (
    <>
      <Dialog
        size="sm"
        open={culturalPlaces.place}
        handler={handleOpen}
        className=""
      >
        <DialogHeader className="relative m-0 block">
          <Typography variant="h4" color="blue-gray">
            Manage Item
          </Typography>
          <Typography className="mt-1 font-normal text-gray-600">
            Keep your records up-to-date and organized.
          </Typography>
          <IconButton
            size="sm"
            variant="text"
            className="!absolute right-3.5 top-3.5"
            onClick={handleOpen}
          >
            <XMarkIcon className="h-4 w-4 stroke-2" />
          </IconButton>
        </DialogHeader>
        <DialogBody className="space-y-4 pb-6 overflow-auto max-h-[calc(100vh-200px)]">
          <div>
            <Typography
              variant="small"
              color="blue-gray"
              className="mb-2 text-left font-medium"
            >
              Place Name
            </Typography>
            <Input
              color="gray"
              size="lg"
              placeholder="eg. White Shoes"
              className="placeholder:opacity-100 focus:!border-t-gray-900"
              containerProps={{
                className: "!min-w-full",
              }}
              labelProps={{
                className: "hidden",
              }}
              {...form.register("name", { required: "Name is required" })}
            />
          </div>
          <div>
            <Typography
              variant="small"
              color="blue-gray"
              className="mb-2 text-left font-medium"
            >
              Region Name
            </Typography>
            <Select
              className="!w-full !border-[1.5px] !border-blue-gray-200/90 !border-t-blue-gray-200/90 bg-white text-gray-800 ring-4 ring-transparent placeholder:text-gray-600 focus:!border-primary focus:!border-t-blue-gray-900 group-hover:!border-primary"
              placeholder="1"
              labelProps={{
                className: "hidden",
              }}
              {...form.register("region", { required: "Region is required" })}
            >
              <Option value="Amhara">Amhara</Option>
              <Option value="Oromia">Oromia</Option>
              <Option value="Tigray">Tigray</Option>
              <Option value="Somali">Somali</Option>
              <Option value="Afar">Afar</Option>
              <Option value="Benishangul-Gumuz">Benishangul-Gumuz</Option>
              <Option value="Gambela">Gambela</Option>
              <Option value="SNNPR">
                SNNPR (Southern Nations, Nationalities, and Peoples' Region)
              </Option>
              <Option value="Dire Dawa">Dire Dawa</Option>
              <Option value="Harari">Harari</Option>
              <Option value="Addis Ababa">Addis Ababa</Option>
              <Option value="Sidama">Sidama</Option>
              <Option value="South West Ethiopia">
                South West Ethiopia Peoples' Region
              </Option>
            </Select>
          </div>
          <div className="flex gap-4">
            <div className="w-full">
              <Typography
                variant="small"
                color="blue-gray"
                className="mb-2 text-left font-medium"
              >
                Latitude
              </Typography>
              <Input
                {...form.register("latitude", {
                  required: "Latitude is required",
                })}
                type="number"
                color="gray"
                size="lg"
                name="weight"
                className="placeholder:opacity-100 focus:!border-t-gray-900"
                containerProps={{
                  className: "!min-w-full",
                }}
                labelProps={{
                  className: "hidden",
                }}
              />
            </div>
            <div className="w-full">
              <Typography
                variant="small"
                color="blue-gray"
                className="mb-2 text-left font-medium"
              >
                Longitude
              </Typography>
              <Input
                {...form.register("longitude", {
                  required: "Longitude is required",
                })}
                type="number"
                color="gray"
                size="lg"
                name="size"
                className="placeholder:opacity-100 focus:!border-t-gray-900"
                containerProps={{
                  className: "!min-w-full",
                }}
                labelProps={{
                  className: "hidden",
                }}
              />
            </div>
          </div>
          <div>
            <Typography
              variant="small"
              color="blue-gray"
              className="mb-2 text-left font-medium"
            >
              Description
            </Typography>
            <Textarea
              rows={7}
              {...form.register("description", {
                required: "Description is required",
              })}
              placeholder="eg. This is a white shoes with a comfortable sole."
              className="!w-full !border-[1.5px] !border-blue-gray-200/90 !border-t-blue-gray-200/90 bg-white text-gray-600 ring-4 ring-transparent focus:!border-primary focus:!border-t-blue-gray-900 group-hover:!border-primary"
              labelProps={{
                className: "hidden",
              }}
            />
          </div>
        </DialogBody>
        <DialogFooter>
          <Button className="ml-auto" onClick={handleOpen}>
            Add Product
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}
