import React from "react";
import AfterLogin from "../CostomerAfterLogin/AfterLogin";
import { Grid, Paper, Typography, TextField, Button } from "@mui/material";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import { NavBarCostomerProfile } from "./NavBarCostomerProfile";

const paperStyle = {
  padding: 20,
  height: "75vh",
  width: "400px",
  margin: "20px auto",
};
const fontStyle = {
  fontSize: "30px",
  color: "black",
  marginTop: "10px",
};

export const CostomerProfile = (props) => {
  
  const [firstName, setFirstName] = React.useState("Karan");
  const [isFirstNameFocused, setIsFirstNamedFocused] = React.useState(false);

  const [lastName, setLastName] = React.useState("khatik");
  const [isLastNameFocused, setIsLastNamedFocused] = React.useState(false);

  const [email, setEmail] = React.useState("this@mail.com");
  const [isEmailFocused, setIsEmailFocused] = React.useState(false);

  //Saved data
  const [save, setSave] = React.useState("save");

  function handleSave(e) {
    setSave("saved");
  }

  return (
    <>
      <NavBarCostomerProfile />
      <Grid container>
        <Paper elevation={10} style={paperStyle}>
          <Typography
            ml={12}
            variant="h4"
            style={{
              color: "white",
              backgroundColor: "#ff386a",
              width: "40%",
              borderRadius: "5px",
              align: "center",
            }}
          >
            <ManageAccountsIcon />
            Profile
          </Typography>
          <br />
          {/* First Name */}
          <div>
            <Typography
              variant="h5"
              style={{
                color: "#00000099",
               
              }}
            >
              First name
            </Typography>
            {!isFirstNameFocused ? (
              <Typography
                style={fontStyle}
                onClick={() => {
                  setIsFirstNamedFocused(true);
                }}
              >
                {firstName}
              </Typography>
            ) : (
              <TextField
                style={fontStyle}
                autoFocus
                value={firstName}
                onChange={(event) => setFirstName(event.target.value)}
                onBlur={(event) => setIsFirstNamedFocused(false)}
              />
            )}
          </div>
          <br />
          {/* LastName */}
          <div>
            <Typography
              variant="h5"
              style={{
                color: "#00000099",              
              }}
            >
              Last name
            </Typography>
            {!isLastNameFocused ? (
              <Typography
                style={fontStyle}
                onClick={() => {
                  setIsLastNamedFocused(true);
                }}
              >
                {lastName}
              </Typography>
            ) : (
              <TextField
                style={fontStyle}
                autoFocus
                value={lastName}
                onChange={(event) => setLastName(event.target.value)}
                onBlur={(event) => setIsLastNamedFocused(false)}
              />
            )}
          </div>
          <br />
          {/* Email adress */}
          <div>
            <Typography
              variant="h5"
              style={{
                color: "#00000099",
                
              }}
            >
              Email
            </Typography>
            {!isEmailFocused ? (
              <Typography
                style={fontStyle}
                onClick={() => {
                  setIsEmailFocused(true);
                }}
              >
                {email}
              </Typography>
            ) : (
              <TextField
                style={fontStyle}
                autoFocus
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                onBlur={(event) => setIsEmailFocused(false)}
              />
            )}
          </div>
          <br />
          <Grid ml={15}>
            <Button variant="contained" component="label" onClick={handleSave}>
              {save}
            </Button>
          </Grid>
        </Paper>
      </Grid>
    </>
  );
};
