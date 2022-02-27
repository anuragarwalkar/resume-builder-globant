import { Toolbar, Typography } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import mainLogo from "../../images/globant_logo_white.png";
import "./navbar.styles.scss";

function NavBar() {
  return (
    <AppBar position="static" className="app-navbar">
      <Toolbar>
        <img
          src={mainLogo}
          width="40"
          alt="Globant Logo"
          className="app-navbar__logo"
        />
        <Typography variant="h6" className="app-navbar__header">
          Globant CV Builder
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
