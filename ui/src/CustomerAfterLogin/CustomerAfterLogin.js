import React from "react";
import { AppBar, Typography, Toolbar, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import CustomerProfileMenu from "./CustomerProfileMenu";
import TiffinSectionForOrder from "./TiffinSectionForOrder";
import { Footer } from "../LandingPage/Footer";

const CustomerAfterLogin = () => {
  //Customer After Login
  return (
    <>
      <Grid container>
        <AppBar position="static" color="primary">
          <Toolbar>
            <Typography
              variant="h4"
              style={{
                flexGrow: 1,
                textDecoration: "none",
                color: "inherit",
                fontSize: "20px",
              }}
              component={Link}
              to="/"
            >
              Just Dabba
            </Typography>
            {/* Menubar of Profile */}
            <CustomerProfileMenu />
          </Toolbar>
        </AppBar>
      </Grid>
      {/* Tiifin Section cart */}
      <Grid container>
        <TiffinSectionForOrder />
      </Grid>
      <Footer />
    </>
  );
};

export default CustomerAfterLogin;
