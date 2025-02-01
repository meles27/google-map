import { Avatar, Card, CardBody, Typography } from "@material-tailwind/react";
import React from "react";
import { RegisteredEvent } from "../../types/dashboard_types";

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

interface RegisterdEventsProps {
  registed: RegisteredEvent[];
}
const RegisterdEvents: React.FC<RegisterdEventsProps> = (props) => {
  return (
    <Card className="w-full max-w-xl">
      <CardBody>
        <div className="mb-4 flex items-center justify-between">
          <Typography variant="h5" color="blue-gray" className="">
            Registerd Events{" "}
          </Typography>
          <Typography
            as="a"
            href="#"
            variant="small"
            color="blue"
            className="font-bold"
          >
            View all
          </Typography>
        </div>
        <div className="divide-y divide-gray-200">
          {props.registed.map((registerd, index) => (
            <div
              key={index}
              className="flex items-center justify-between pb-3 pt-3 last:pb-0"
            >
              <div className="flex items-center gap-x-3">
                <Avatar
                  size="sm"
                  src={customers[index].image}
                  alt={registerd.description}
                />
                <div>
                  <Typography color="blue-gray" variant="h6">
                    {registerd.title}
                  </Typography>
                  <Typography variant="small" color="gray">
                    {registerd.description?.slice(0, 40)}...
                  </Typography>
                </div>
              </div>
              <Typography color="blue-gray" variant="h6">
                {registerd.date.slice(0, 10)}
              </Typography>
            </div>
          ))}
        </div>
      </CardBody>
    </Card>
  );
};

export default RegisterdEvents;
