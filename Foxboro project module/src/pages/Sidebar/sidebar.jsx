import React from "react";
import { styled } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import Divider from "@mui/material/Divider";
import { useTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";
import PrintReportIcon from "@mui/icons-material/Print";
import DeviceManagerIcon from "@mui/icons-material/Memory";
import ComplaintIcon from "@mui/icons-material/AccessAlarm";
import AssetsIcon from "@mui/icons-material/AccountBalance";
import NotificationsIcon from "@mui/icons-material/NotificationsActive";
import Networkicon from "@mui/icons-material/CellTower";
import { useMediaQuery, Box } from "@mui/material";
import WellmasterIcon from "@mui/icons-material/Settings";
import WellmonitorIcon from "@mui/icons-material/Search";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import ForwardToInboxIcon from "@mui/icons-material/ForwardToInbox";
import PersonIcon from "@mui/icons-material/Person";
import { useSelector } from "react-redux";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: 0,
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function Sidebar({
  open,
  mobileOpen,
  handleDrawerClose,
  handleDrawerTransitionEnd,
  handleDrawerToggle,
}) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const role = useSelector((state) => state.auth.role);
  // const organizationLogo = localStorage.getItem("organizationLogo");

  console.log("logo", organizationLogo);

  const menuItems = [
    {
      name: "Admin",
      icon: <AdminPanelSettingsIcon sx={{ color: "black" }} />,
      path: "/dashboard",
      roles: ["admin"],
    },
    {
      name: "Dashboard",
      icon: <HomeIcon sx={{ color: "black" }} />,
      path: "/dashboard",
      roles: ["owner", "manager", "employee"],
    },
    {
      name: "Organization",
      icon: <AssetsIcon sx={{ color: "black" }} />,
      path: "/dashboard/ManageAsset",
      roles: ["owner"],
    },
    {
      name: "Well Manager",
      icon: <WellmasterIcon sx={{ color: "black" }} />,
      path: "/dashboard/wellmaster",
      roles: ["owner", "manager", "employee"],
    },
    {
      name: "Node Monitor",
      icon: <DeviceManagerIcon sx={{ color: "black" }} />,
      path: "/dashboard/DeviceManage",
      roles: ["owner", "manager", "employee"],
    },
    {
      name: "Well Monitor",
      icon: <WellmonitorIcon sx={{ color: "black" }} />,
      path: "/dashboard/monitor",
      roles: ["owner", "manager", "employee"],
    },
    {
      name: "Complaints",
      icon: <ComplaintIcon sx={{ color: "black" }} />,
      path: "/dashboard/complaint",
      roles: ["owner", "manager", "employee"],
    },
    {
      name: "Notifications",
      icon: <NotificationsIcon sx={{ color: "black" }} />,
      path: "/dashboard/notification",
      roles: ["owner", "manager", "employee"],
    },
    {
      name: "Print Report",
      icon: <PrintReportIcon sx={{ color: "black" }} />,
      path: "/dashboard/crystal",
      roles: ["owner", "manager", "employee"],
    },
    {
      name: "Message Box",
      icon: <ForwardToInboxIcon sx={{ color: "black" }} />,
      path: "/dashboard/message",
      roles: ["owner", "manager"],
    },
    {
      name: "Manage Users",
      icon: <PersonIcon sx={{ color: "black" }} />,
      path: "/dashboard/MesaageForwarding",
      roles: ["owner", "manager"],
    },
  ];

  const filteredMenuItems = menuItems.filter((item) =>
    item.roles.includes(role)
  );

  const handleListItemClick = () => {
    if (isMobile) {
      handleDrawerClose();
    }
  };

  return (
    <Drawer variant="permanent" open={open}>
      <DrawerHeader>
        {organizationLogo && (
          <img
            src={organizationLogo}
            alt="Organization Logo"
            style={{ width: "100%", height: 40, marginLeft: 8 }}
          />
        )}
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === "rtl" ? (
            <ChevronLeftIcon />
          ) : (
            <ChevronLeftIcon />
          )}
        </IconButton>
      </DrawerHeader>
      <Divider />
      <List>
        {filteredMenuItems.length === 0 ? (
          <ListItem>
            <ListItemText primary="No items available" />
          </ListItem>
        ) : (
          filteredMenuItems.map((item, index) => (
            <React.Fragment key={index}>
              <Link
                to={item.path}
                style={{ textDecoration: "none", color: "black" }}
                onClick={handleListItemClick}
              >
                <ListItem disablePadding>
                  <ListItemButton
                    sx={{ justifyContent: open ? "initial" : "center" }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 3 : "auto",
                        justifyContent: "center",
                      }}
                    >
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText
                      primary={item.name}
                      sx={{ opacity: open ? 1 : 0 }}
                    />
                  </ListItemButton>
                </ListItem>
              </Link>
              {/* Add a divider after certain items */}
              {["Dashboard", "Manage Gateway", "Print Report"].includes(
                item.name
              ) && <Divider />}
            </React.Fragment>
          ))
        )}
      </List>

      {/* Box to push the Technical Support to the bottom */}
      <Box sx={{ flexGrow: 1 }} />
      <Box sx={{ position: "absolute", bottom: 0, width: "100%" }}>
        <Divider />
        <List>
          <Link
            to="/dashboard/technicalSupport"
            style={{ textDecoration: "none", color: "black" }}
            onClick={handleListItemClick}
          >
            <ListItem disablePadding>
              <ListItemButton
                sx={{ justifyContent: open ? "initial" : "center" }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  <SupportAgentIcon sx={{ color: "black" }} />
                </ListItemIcon>
                <ListItemText
                  primary="Technical Support"
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </ListItem>
          </Link>
        </List>
      </Box>
    </Drawer>
  );
}
