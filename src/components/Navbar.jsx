import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import { Box, Typography } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    width: "100%",
    justifyContent: "space-around",
  },
  text: {
    color: theme.palette.primary.main,
  },
}));

export default function BasicMenu() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box className={classes.container}>
      <Button
        id="basic-button"
        aria-controls="basic-menu"
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <Typography className={classes.text}> DOMAINE 4 PIERRES </Typography>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}>
          <Link to="/">Le domaine</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link to="/vins">Nos vins</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link to="/partenaires">Les partenaires</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link to="/galerie">Galerie</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link to="/contact">Contact</Link>
        </MenuItem>
      </Menu>
    </Box>
  );
}
