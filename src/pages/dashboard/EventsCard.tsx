import { Avatar, Card, CardBody, Typography } from "@material-tailwind/react";
import { UpcomingEvent } from "../../types/dashboard_types";

const customers = [
  {
    name: "Tania Andrew",
    email: "tania@gmail.com",
    price: 400,
    image:
      "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-1.jpg",
  },
  {
    name: "John Micheal",
    email: "john@gmail.com",
    price: 420,
    image:
      "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-6.jpg",
  },
  {
    name: "Alexa Liras",
    email: "alexa@gmail.com",
    price: 340,
    image:
      "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-2.jpg",
  },
  {
    name: "Richard Gran",
    email: "richard@gmail.com",
    price: 520,
    image:
      "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg",
  },
  {
    name: "Micheal Levi",
    email: "levi@gmail.com",
    price: 780,
    image:
      "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-4.jpg",
  },
];

type EventsCardProps = {
  event: UpcomingEvent[];
};
const EventsCard: React.FC<EventsCardProps> = (props) => {
  console.log(props);
  return (
    <Card className="flex-1 shadow-2xl shadow-neutral-500">
      <CardBody>
        <div className="mb-4 flex items-center justify-between">
          <Typography variant="h5" color="blue-gray" className="">
            Latest Events
          </Typography>
          <Typography
            as="a"
            href="#"
            variant="small"
            color="blue"
            hidden
            className="font-bold"
          >
            View all
          </Typography>
        </div>
        <div className="divide-y divide-gray-200">
          {props.event.map((event, index) => (
            <div
              key={event.id}
              className="flex items-center justify-between pb-3 pt-3 last:pb-0"
            >
              <div className="flex items-center gap-x-3">
                <div>
                  <Typography color="blue-gray" variant="h6">
                    {event.title}
                  </Typography>
                  <Typography variant="small" color="gray">
                    {event.location}
                  </Typography>
                </div>
              </div>
              <Typography color="blue-gray" variant="h6">
                {event.updatedAt.slice(0, 10)}
              </Typography>
            </div>
          ))}
        </div>
      </CardBody>
    </Card>
  );
};

export default EventsCard;
