import React, { useState } from "react";
import {
  LightModeOutlined,
  DarkModeOutlined,
  Menu as MenuIcon,
  Search,
  SettingsOutlined,
  ArrowDropDownOutlined,
  DarkMode,
} from "@mui/icons-material";

import FlexBetween from "./FlexBetween";
import { useDispatch } from "react-redux";
import { setMode } from "state";
import profileImage from "assets/pica.jpeg";
import {
  AppBar,
  IconButton,
  Button,
  InputBase,
  Toolbar,
  useTheme,
} from "@mui/material";

const Navbar = ({user, isSidebarOpen, setIsSidebarOpen}) => {
  const dispatch = useDispatch();
  const theme = useTheme();

  const [anchorEl, setAnchorEl] = useState(null);
  const isOpen = Boolean(anchorEl);
  const handleClick = (event)=> setAnchorEl(event.currentTarget)
  const handleClose = ()=> setAnchorEl(null)

  return (
  <AppBar
    sx={{
      position: "static",
      background: "none",
      boxShadow: "none",
    }}
  >
    <Toolbar sx={{ justifyContent: "space-between" }}>
      {/* LEFT SIDE */}
      <FlexBetween>
        <IconButton onClick={() => console.log("open/close sidebar")}>
          <MenuIcon />
        </IconButton>
        <FlexBetween
          backgroundColor={theme.palette.background.alt}
          borderRadius="9px"
          gap="3rem"
          p="0.1rem 1.5rem"
        >
          <InputBase placeholder="Search..." />
          <IconButton>
            <Search />
          </IconButton>
        </FlexBetween>
      </FlexBetween>
      {/* RIGHT SIDE  */}
      <FlexBetween gap="1.5rem">
        <IconButton onClick={() => dispatch(setMode())}>
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlined sx={{ fontSize: "25px" }} />
          ) : (
            <LightModeOutlined sx={{ fontSize: "25px" }} />
          )}
        </IconButton>
        <IconButton>
          <SettingsOutlined sx={{ fontSize: "25px" }} />
        </IconButton>
        <FlexBetween>
          <Button onClick={handleClick} sx = {{display: "flex", justifyContent: "spaceBetween", alignItems: "center", textTransform: "none", gap: "1rem" }} >

          </Button>
        </FlexBetween>
      </FlexBetween>
    </Toolbar>
  </AppBar>
  )
};

export default Navbar;
