import React from "react";
import { Fetch } from "../dbFetch.js";
import { useNavigate } from "react-router-dom";
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Typography,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useFormik } from "formik";
import * as yup from "yup";
import { AddCircleOutlineOutlined } from "@mui/icons-material";
import NavbarForCustomerSignup from './NavbarForCustomerSignup'
import { toast } from "react-toastify";
import { Footer } from "../LandingPage/Footer";

const theme = createTheme({
  palette: {
    primary: {
      main: "#ff386a",
    },
  },
});

const CustomerSignUp = () => {
  const paperStyle = {
    padding: 20,
    height: "",
    width: "500px",
    margin: "20px auto",
  };
  const avatarStyle = { backgroundColor: "#1bbd7e" };
  const btnstyle = { margin: "8px 0" };

  const formik = useFormik({
    //intial value to the the form name
    initialValues: {
      initialValues: {
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        password: "",
      },
    },
    //validation to the form
    validationSchema: yup.object({
      firstName: yup.string().required("required"),
      lastName: yup.string().required("required").min(3, "too short"),
      phone: yup
        .number()
        .required("required")
        .min(1000000000, "Not Valid Phone Number!")
        .max(9999999999, "Not Valid Phone Number!"),
      email: yup.string().required("required").email("Invalid email"),
      password: yup
        .string()
        .required("required")
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
          "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character",
        ),
    }),
    //All the value of form come here after submitting
    onSubmit: (values) => {
      signUpApi(values);
    },
  });
  const navigate = useNavigate();

  async function signUpApi(data) {
    const path = "/api/signin";
    delete data.initialValues;
    const response = await Fetch(path, data);
    if (response.success) {
      toast.success("Signup Successful");
      navigate("/");
    } else {
      toast.info(response.message);
    }
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <NavbarForCustomerSignup />
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
            <form onSubmit={formik.handleSubmit}>
              {/* Input First Name */}
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
              {/* Input Last Name */}
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
              {/* input Phone Number */}
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
              {/* Input Email Address */}
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
              {/* Input Password */}
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
              {/* Submit Form */}
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

export default CustomerSignUp;
