import { Box } from "@mui/material";
import React from "react";
import { makeStyles } from "@mui/styles";
import Navbar from "components/Navbar";
import useMediaQuery from "@mui/material/useMediaQuery";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    justifyContent: "center",
  },
  text: {
    color: theme.palette.primary.main,
  },
}));

const PageContainer = (props) => {
  const classes = useStyles();
  const matches = useMediaQuery("(min-width:360px)");
  console.log(matches);
  return (
    <Box className={classes.container}>
      <Navbar />
      {props.children}
    </Box>
  );
};

export default PageContainer;
