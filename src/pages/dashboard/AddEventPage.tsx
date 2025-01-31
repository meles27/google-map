import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import {
    Button,
    Card,
    CardBody,
    CardHeader,
    Input,
    Popover,
    PopoverContent,
    PopoverHandler,
    Spinner,
    Textarea,
    Typography,
} from "@material-tailwind/react";
import { format } from "date-fns";
import { useEffect, useState } from "react";
import { DayPicker } from "react-day-picker";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import withAnimation from "../../components/route-animation/withAnimation";
import { useCreateEventMutation } from "../../services/eventApi";

type DashboardEvent = {
  title: string;
  description: string;
  category: string;
  location: string;
};
const AddEventPage: React.FC = withAnimation(() => {
  const [date, setDate] = useState<Date>();
  const form = useForm<DashboardEvent>({
    defaultValues: {
      title: "Annual Science Explorers Fair 2025",
      category: "Education",
      description:
        "A platform for students to present their science projects and innovations to the community and judges.",
      location: "Mekelle University, Mekelle",
    },
  });
  const [addEvent, addEventResponse] = useCreateEventMutation();
  const handleSubmit = (data: DashboardEvent) => {
    if (!date) {
      toast.error("Please select a date");
      return;
    }
    console.log(date, date?.toISOString());
    addEvent({ ...data, date: date?.toISOString() ?? "" });
    console.log("data", data);
  };

  useEffect(() => {
    if (addEventResponse.isSuccess) {
      toast.success("Event added successfully");
    }
  }, [addEventResponse.isSuccess]);

  return (
    <div className="w-full h-full py-xl">
      <Card className="max-w-xl m-auto rounded-xl shadow-xl overflow-hidden border border-neutral-400">
        <CardHeader floated={false} className="p-md">
          <Typography variant="h4" color="blue-gray">
            Add Event
          </Typography>
          <Typography className="mt-1 font-normal text-gray-600">
            Keep your records up-to-date and organized.
          </Typography>
        </CardHeader>
        <CardBody>
          <form
            className="space-y-4 pb-6"
            onSubmit={form.handleSubmit(handleSubmit)}
          >
            <div>
              <Typography
                variant="small"
                color="blue-gray"
                className="mb-2 text-left font-medium"
              >
                Name
              </Typography>
              <Input
                {...form.register("title", { required: "true" })}
                required
                crossOrigin={""}
                color="gray"
                size="lg"
                placeholder="eg. White Shoes"
                name="title"
                className="placeholder:opacity-100 focus:!border-t-gray-900"
                containerProps={{
                  className: "!min-w-full",
                }}
                labelProps={{
                  className: "hidden",
                }}
              />
            </div>
            <div>
              <Typography
                variant="small"
                color="blue-gray"
                className="mb-2 text-left font-medium"
              >
                Category
              </Typography>
              <Input
                crossOrigin={""}
                color="gray"
                size="lg"
                placeholder="eg. White Shoes"
                {...form.register("category", { required: "true" })}
                required
                className="placeholder:opacity-100 focus:!border-t-gray-900"
                containerProps={{
                  className: "!min-w-full",
                }}
                labelProps={{
                  className: "hidden",
                }}
              />
            </div>
            <div className="">
              <Typography>Date</Typography>
              <Popover placement="bottom">
                <PopoverHandler>
                  <Input
                    crossOrigin={""}
                    label="Select a Date"
                    onChange={() => null}
                    value={date ? format(date, "PPP") : ""}
                  />
                </PopoverHandler>
                <PopoverContent>
                  <DayPicker
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    showOutsideDays
                    className="border-0"
                    classNames={{
                      caption:
                        "flex justify-center py-2 mb-4 relative items-center",
                      caption_label: "text-sm font-medium text-gray-900",
                      nav: "flex items-center",
                      nav_button:
                        "h-6 w-6 bg-transparent hover:bg-blue-gray-50 p-1 rounded-md transition-colors duration-300",
                      nav_button_previous: "absolute left-1.5",
                      nav_button_next: "absolute right-1.5",
                      table: "w-full border-collapse",
                      head_row: "flex font-medium text-gray-900",
                      head_cell: "m-0.5 w-9 font-normal text-sm",
                      row: "flex w-full mt-2",
                      cell: "text-gray-600 rounded-md h-9 w-9 text-center text-sm p-0 m-0.5 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-gray-900/20 [&:has([aria-selected].day-outside)]:text-white [&:has([aria-selected])]:bg-gray-900/50 first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
                      day: "h-9 w-9 p-0 font-normal",
                      day_range_end: "day-range-end",
                      day_selected:
                        "rounded-md bg-gray-900 text-white hover:bg-gray-900 hover:text-white focus:bg-gray-900 focus:text-white",
                      day_today: "rounded-md bg-gray-200 text-gray-900",
                      day_outside:
                        "day-outside text-gray-500 opacity-50 aria-selected:bg-gray-500 aria-selected:text-gray-900 aria-selected:bg-opacity-10",
                      day_disabled: "text-gray-500 opacity-50",
                      day_hidden: "invisible",
                    }}
                    components={{
                      IconLeft: ({ ...props }) => (
                        <ChevronLeftIcon
                          {...props}
                          className="h-4 w-4 stroke-2"
                        />
                      ),
                      IconRight: ({ ...props }) => (
                        <ChevronRightIcon
                          {...props}
                          className="h-4 w-4 stroke-2"
                        />
                      ),
                    }}
                  />
                </PopoverContent>
              </Popover>
            </div>
            <div>
              <Typography
                variant="small"
                color="blue-gray"
                className="mb-2 text-left font-medium"
              >
                location
              </Typography>
              <Input
                {...form.register("location", { required: "true" })}
                required
                placeholder="eg. This is a white shoes with a comfortable sole."
                className="!w-full !border-[1.5px] !border-blue-gray-200/90 !border-t-blue-gray-200/90 bg-white text-gray-600 ring-4 ring-transparent focus:!border-primary focus:!border-t-blue-gray-900 group-hover:!border-primary"
                labelProps={{
                  className: "hidden",
                }}
              />
            </div>
            <div>
              <Typography
                variant="small"
                color="blue-gray"
                className="mb-2 text-left font-medium"
              >
                Description (Optional)
              </Typography>
              <Textarea
                {...form.register("description", { required: "true" })}
                required
                rows={7}
                placeholder="eg. This is a white shoes with a comfortable sole."
                className="!w-full !border-[1.5px] !border-blue-gray-200/90 !border-t-blue-gray-200/90 bg-white text-gray-600 ring-4 ring-transparent focus:!border-primary focus:!border-t-blue-gray-900 group-hover:!border-primary"
                labelProps={{
                  className: "hidden",
                }}
              />
            </div>
            <Button type="submit" className="ml-auto">
              Add Event {addEventResponse.isLoading && <Spinner />}
            </Button>
          </form>
        </CardBody>
      </Card>
    </div>
  );
});

export default AddEventPage;
