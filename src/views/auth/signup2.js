import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import MuiPhoneInput from "material-ui-phone-number";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Auth from "lib/api/authentication.js";
import { toast } from "react-toastify";
import { extractErrorMsg } from "lib/utils/helpers";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="/">
        E-CLINIC
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));
export default function SignUp() {
  const education_levels = {
    Teacher: ["MA-A", "MA-B", "MC-A", "MC-B", "Professor"],
    Student: [
      "1CPI",
      "2CPI",
      "1CS",
      "2CS-ISI",
      "2CS-SIW",
      "3CS-ISI",
      "3CS-SIW",
    ],
    ATP: ["NONE"],
  };
  const [values, setValues] = React.useState({
    first_name: "",
    last_name: "",
    password1: "",
    password2: "",
    email: "",
    sex: "",
    date_of_birth: "",
    phone: "",
    education_level: "",
    type: "Student",
  });
  const handleChange = (event) => {
    if (event?.target) {
      setValues({
        ...values,
        [event.target.name]: event.target.value,
      });
    } else {
      setValues({
        ...values,
        phone: event,
      });
    }
  };
  const validateData = (data) => {}; //TO-DO

  const handleSubmit = async (e) => {
    e.preventDefault();
    validateData(values);
    //Reshape the object to send
    const { type, education_level, ...user } = values;

    const sendData = {
      user: user,
      type: values.type,
      education_level: values.education_level,
    };

    const { data, status } = await Auth.signUp(sendData);

    if (status < 200 || status > 299) {
      const errors = extractErrorMsg(data);
      errors.map((error) => {
        toast.error(error);
      });
    } else {
      toast.success("Sign Up successful!");
      toast.info("Check your email for confirmation");
    }
  };

  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="first_name"
                value={values.first_name}
                variant="outlined"
                required
                fullWidth
                onChange={handleChange}
                id="firstName"
                label="First Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="last_name"
                value={values.last_name}
                onChange={handleChange}
                autoComplete="lname"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                value={values.email}
                onChange={handleChange}
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password1"
                onChange={handleChange}
                value={values.password1}
                label="Password"
                type="password"
                id="password1"
                autoComplete="current-password"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password2"
                onChange={handleChange}
                value={values.password2}
                label="Password Comfirmation"
                type="password"
                id="password2"
                autoComplete="current-password"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-label">Gender</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  name="sex"
                  onChange={handleChange}
                  value={values.sex}
                >
                  <MenuItem value="Male">Male</MenuItem>
                  <MenuItem value="Female">Female</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="date"
                label="Birthday"
                type="date"
                name="date_of_birth"
                defaultValue="1970-01-01"
                onChange={handleChange}
                value={values.date_of_birth}
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <MuiPhoneInput
                defaultCountry="dz"
                onlyCountries={["dz"]}
                name="phone"
                value={values.phone}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-label">Type</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  name="type"
                  onChange={handleChange}
                  value={values.type}
                >
                  <MenuItem value="Student">Student</MenuItem>
                  <MenuItem value="Teacher">Teacher</MenuItem>
                  <MenuItem value="ATP">ATP</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-label">Level</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  defaultValue="1CS"
                  name="education_level"
                  value={values.education_level}
                  onChange={handleChange}
                >
                  {education_levels[values.type].map((level) => {
                    return <MenuItem value={level}>{level}</MenuItem>;
                  })}
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            onClick={handleSubmit}
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="/login" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}
