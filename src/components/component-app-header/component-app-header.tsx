import logo from "../../assets/logo.png";
import MenuIcon from "@mui/icons-material/Menu";
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";

export const ComponentAppHeader = () => (
  <AppBar position="static">
    <Toolbar variant="dense">
      <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
        <MenuIcon />
      </IconButton>
      <Typography variant="h6" color="inherit" component="div">
        <img width={100} src={logo} alt="logo" />
      </Typography>
    </Toolbar>
  </AppBar>
);
