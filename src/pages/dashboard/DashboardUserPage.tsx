import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { PencilIcon } from "@heroicons/react/24/solid";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Chip,
  IconButton,
  Input,
  Spinner,
  Tab,
  Tabs,
  TabsHeader,
  Tooltip,
  Typography,
} from "@material-tailwind/react";
import { useEffect } from "react";
import { BiUserPlus } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import EmptyList from "../../components/EmptyList";
import withAnimation from "../../components/route-animation/withAnimation";
import { useListUsersQuery } from "../../services/authApi";

const TABS = [
  {
    label: "All",
    value: "all",
  },
  {
    label: "Monitored",
    value: "monitored",
  },
  {
    label: "Unmonitored",
    value: "unmonitored",
  },
];

const TABLE_HEAD = ["Member", "Position", "Status", "Employed", ""];

const DashboardUserPage = withAnimation(() => {
  // const usersResponse =
  const navigate = useNavigate();

  const usersResponse = useListUsersQuery();

  useEffect(() => {
    if (usersResponse.isSuccess) {
      console.log("usersResponse", usersResponse.data);
    }
  }, [usersResponse.data, usersResponse.isSuccess]);

  if (usersResponse.isLoading) {
    return (
      <div className="flex items-center justify-center w-full h-full">
        <Spinner />
      </div>
    );
  } else if (usersResponse.isError) {
    return (
      <div className="flex items-center justify-center w-full h-full">
        {JSON.stringify(usersResponse.error)}
      </div>
    );
  }
  return (
    <Card className="h-full w-full shadow-none">
      <CardHeader floated={false} shadow={false} className="rounded-none">
        <div className="mb-8 flex items-center justify-between gap-8">
          <div>
            <Typography variant="h5" color="blue-gray">
              Event list
            </Typography>
            <Typography color="gray" className="mt-1 font-normal">
              See information about all events
            </Typography>
          </div>
          <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
            <Button
              className="flex items-center gap-3"
              size="md"
              onClick={() => navigate("/dashboard/add-event")}
            >
              {/* <MdEventAvailable strokeWidth={2} className="h-4 w-4" /> */}
              <BiUserPlus strokeWidth={2} className="h-4 w-4" />
              Add User
            </Button>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <Tabs value="all" className="w-full md:w-max">
            <TabsHeader>
              {TABS.map(({ label, value }) => (
                <Tab key={value} value={value}>
                  &nbsp;&nbsp;{label}&nbsp;&nbsp;
                </Tab>
              ))}
            </TabsHeader>
          </Tabs>
          <div className="w-full md:w-72">
            <Input
              crossOrigin={""}
              label="Search"
              icon={<MagnifyingGlassIcon className="h-5 w-5" />}
            />
          </div>
        </div>
      </CardHeader>
      <CardBody className="overflow-auto px-0">
        <table className="mt-4 w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {usersResponse.data?.results.length ? (
              usersResponse.data?.results.map((user, index) => {
                const isLast =
                  index === usersResponse.data?.results.length || 0 - 1;
                const classes = isLast
                  ? "p-4"
                  : "p-4 border-b border-blue-gray-50";

                return (
                  <tr key={user.id}>
                    <td className={classes}>
                      <div className="flex items-center gap-3">
                        {/* <Avatar src={img} alt={name} size="sm" /> */}
                        <div className="flex flex-col">
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {user.first_name + " " + user.last_name}
                          </Typography>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal opacity-70"
                          >
                            {user.username}
                          </Typography>
                        </div>
                      </div>
                    </td>
                    <td className={classes}>
                      <div className="flex flex-col">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          <span className="flex">
                            <Chip
                              variant="ghost"
                              color={
                                user.is_superuser
                                  ? "blue"
                                  : user.is_staff
                                  ? "indigo"
                                  : "green"
                              }
                              value={
                                user.is_superuser
                                  ? "Super User"
                                  : user.is_staff
                                  ? "Admin"
                                  : "User"
                              }
                            />
                          </span>
                        </Typography>
                        {/* <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal opacity-70"
                        >
                          {org}
                        </Typography> */}
                      </div>
                    </td>
                    <td className={classes}>
                      <div className="w-max">
                        <Chip
                          variant="ghost"
                          size="sm"
                          value={user.is_active ? "active" : "suspended"}
                          color={user.is_active ? "green" : "blue-gray"}
                        />
                      </div>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {user.date_joined}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Tooltip content="Edit User">
                        <IconButton variant="text">
                          <PencilIcon className="h-4 w-4" />
                        </IconButton>
                      </Tooltip>
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan={5}>
                  <EmptyList itemName="user" />
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </CardBody>
    </Card>
  );
});

export default DashboardUserPage;
