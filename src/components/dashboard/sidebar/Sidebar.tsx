import { Cog6ToothIcon, PowerIcon } from "@heroicons/react/24/solid";
import {
  Button,
  Card,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  List,
  ListItem,
  ListItemPrefix,
  Typography,
} from "@material-tailwind/react";
import { useState } from "react";
import { FaUsersCog } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { useLocalStorage } from "usehooks-ts";

export default function Sidebar() {
  const navigate = useNavigate();
  const [openDialog, setOpenDialog] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [token, setToken, clearToken] = useLocalStorage("token", null);
  const handleLogout = () => {
    clearToken();
    navigate("/signin");
  };

  return (
    <Card className="h-screen w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
      <Link to={"/"} className="mb-2 p-4">
        <Typography variant="h5" color="blue-gray">
          MIT-Mekelle
        </Typography>
      </Link>
      <List className="flex flex-col h-[calc(100%-2rem)]">
        <ListItem onClick={() => navigate("/dashboard")}>
          <ListItemPrefix>
            <MdDashboard className="h-5 w-5" />
            {/* <BiCalendarEvent className="h-5 w-5" /> */}
          </ListItemPrefix>
          Dasboard
        </ListItem>
        <ListItem onClick={() => navigate("/dashboard/users")}>
          <ListItemPrefix>
            <FaUsersCog className="h-5 w-5" />
          </ListItemPrefix>
          Users
        </ListItem>
        <ListItem onClick={() => navigate("/dashboard/settings")}>
          <ListItemPrefix>
            <Cog6ToothIcon className="h-5 w-5" />
          </ListItemPrefix>
          Settings
        </ListItem>

        <div className="flex-1 flex flex-col justify-end">
          <ListItem
            onClick={() => setOpenDialog(true)}
            className="bg-red-500/50 hover:bg-red-500"
          >
            <ListItemPrefix>
              <PowerIcon className="h-5 w-5" />
            </ListItemPrefix>
            Log Out
          </ListItem>
        </div>
      </List>
      <Dialog open={openDialog} handler={() => setOpenDialog(false)}>
        <DialogHeader>Logout</DialogHeader>
        <DialogBody>Are you sure to leave this page?</DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={() => setOpenDialog(false)}
            className="mr-1"
          >
            <span>Cancel, I am in</span>
          </Button>
          <Button variant="gradient" color="green" onClick={handleLogout}>
            <span>Yes</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </Card>
  );
}
