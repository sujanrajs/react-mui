import React from "react";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Switch,
} from "@mui/material";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import PeopleAltRoundedIcon from "@mui/icons-material/PeopleAltRounded";
import Groups2RoundedIcon from "@mui/icons-material/Groups2Rounded";
import SettingsSuggestRoundedIcon from "@mui/icons-material/SettingsSuggestRounded";
import DarkModeIcon from "@mui/icons-material/DarkMode";

const Sidebar = ({ mode, setMode }) => {
  return (
    <Box
      //bgcolor="red"
      flex={1}
      padding={2}
      sx={{ display: { xs: "none", sm: "block" } }}
    >
      <Box sx={{ position: "fixed" }}>
        <List>
          <ListItem disablePadding>
            <ListItemButton component="a" href="home">
              <ListItemIcon>
                <HomeRoundedIcon />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component="a" href="#">
              <ListItemIcon>
                <AccountCircleRoundedIcon />
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component="a" href="#">
              <ListItemIcon>
                <PeopleAltRoundedIcon />
              </ListItemIcon>
              <ListItemText primary="Friends" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component="a" href="#">
              <ListItemIcon>
                <Groups2RoundedIcon />
              </ListItemIcon>
              <ListItemText primary="Groups" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component="a" href="#">
              <ListItemIcon>
                <SettingsSuggestRoundedIcon />
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#">
              <ListItemIcon>
                <DarkModeIcon />
              </ListItemIcon>
              <Switch
                onChange={(e) => setMode(mode === "light" ? "dark" : "light")}
              />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default Sidebar;
