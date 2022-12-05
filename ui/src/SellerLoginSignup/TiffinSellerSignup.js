import React from "react";
import { Fetch } from "../dbFetch.js";
import { useNavigate } from "react-router-dom";
import { Footer } from "../LandingPage/Footer";
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Typography,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {  toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useFormik } from "formik";
import * as yup from "yup";
import { AddCircleOutlineOutlined } from "@mui/icons-material";
import NavbarForSellerSignup from "./NavbarForSellerSignup.js";

const theme = createTheme({
  palette: {
    primary: {
      main: "#ff386a",
    },
  },
});

const TiffinSellerSignup = () => {
  const navigate = useNavigate();

  const paperStyle = {
    padding: 20,
    height: "",
    width: "500px",
    margin: "20px auto",
  };
  const avatarStyle = { backgroundColor: "#1bbd7e" };
  const btnstyle = { margin: "8px 0" };

  const formik = useFormik({
    //initial value form
    initialValues: {
      initialValues: {
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        password: "",
      },
    },
    //validation
    validationSchema: yup.object({
      firstName: yup.string().required("required"),
      lastName: yup.string().required("required").min(3, "too short"),
      phone: yup.number().required("required")
                .min(1000000000, "Not Valid Phone Number!")
                .max(9999999999, "Not Valid Phone Number!"),
      email: yup.string().required("required").email("Invalid email"),
      password: yup.string().required("required")
                    .matches(
                      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
                    ),
    }),
    //on submot form all value come here
    onSubmit: (values) => {
      signUpApi(values);
    },
  });

  async function signUpApi(data) {
    const path = "/api/seller-signin";
    delete data.initialValues;
    
    
    

    const response = await Fetch(path, data);
    if (response.success) {
      navigate("/");
      toast.success("Signup Successful");
    } else {
      toast.info(response.message);
    }
  }
  return (
    <>
      <ThemeProvider theme={theme}>
        <NavbarForSellerSignup />
        <Grid container>
          <Paper elevation={10} style={paperStyle}>
            <Grid align="center">
              <Avatar style={avatarStyle}>
                <AddCircleOutlineOutlined />
              </Avatar>
              <Typography variant="h6" color="inherit">
                Signup
              </Typography>
            </Grid>
            <form onSubmit={formik.handleSubmit} encType="multipart/form-data">
              {/* input First name */}
              <TextField
                label="First Name"
                type="text"
                fullWidth
                name="firstName"
                value={formik.values.firstName}
                onChange={formik.handleChange}
                error={
                  formik.touched.firstName && Boolean(formik.errors.firstName)
                }
                onBlur={formik.handleBlur}
                helperText={formik.touched.firstName && formik.errors.firstName}
              />
              <br />
              <br />
              {/* input last name */}
              <TextField
                label="Last Name"
                type="text"
                fullWidth
                name="lastName"
                value={formik.values.lastName}
                onChange={formik.handleChange}
                error={
                  formik.touched.lastName && Boolean(formik.errors.lastName)
                }
                onBlur={formik.handleBlur}
                helperText={formik.touched.lastName && formik.errors.lastName}
              />
              <br />
              <br />
              {/* input phone number */}
              <TextField
                label="Phone Number"
                type="text"
                name="phone"
                fullWidth
                value={formik.values.phone}
                onChange={formik.handleChange}
                error={formik.touched.phone && Boolean(formik.errors.phone)}
                helperText={formik.touched.phone && formik.errors.phone}
                onBlur={formik.handleBlur}
              />
              <br />
              <br />
              {/* input email address */}
              <TextField
                label="Email"
                type="text"
                fullWidth
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                onBlur={formik.handleBlur}
                helperText={formik.touched.email && formik.errors.email}
              />
              <br />
              <br />
              {/* input password */}
              <TextField
                label="Password"
                type="password"
                fullWidth
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                onBlur={formik.handleBlur}
                helperText={formik.touched.password && formik.errors.password}
              />{" "}
              <br />
              {/* Submit Form Button */}
              <Button
                type="submit"
                variant="contained"
                style={btnstyle}
                fullWidth
              >
                Signup
              </Button>
              <br />
            </form>
          </Paper>
        </Grid>
      </ThemeProvider>
      <Footer />

    </>
  );
};

export default TiffinSellerSignup;
