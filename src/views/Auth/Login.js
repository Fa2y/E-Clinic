import React from 'react';
// Componnents
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Link from '@material-ui/core/Link';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';

// Special for auth
import useSWR from 'swr';
import Auth from 'lib/api/authentication';
import { toast } from 'react-toastify';
import { extractErrorMsg, setUser, getToken } from 'lib/utils/helpers';
import { useHistory } from 'react-router-dom';

// Logo image
import logo from 'assets/img/cliniquelogo.png';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    width: theme.spacing(20),
    height: theme.spacing(20),
  },
  form: {
    width: '100%', // Fix IE 11 issue.
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

const Login = () => {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    email: '',
    password: '',
  });
  const [redirect, setRedirect] = React.useState(false);
  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };
  const history = useHistory();

  const { data: userData, error: userErr } = useSWR(['patients'], Auth.getUser);

  React.useEffect(() => {
    const token = getToken();
    if (redirect && token) {
      if (userData?.status < 200 || userData?.status > 299 || userErr) {
        const errors = extractErrorMsg(userData?.data);
        errors.map((parsedError) => toast.error(parsedError));
        if (userErr) toast.error(userErr);
      } else {
        toast.success('Redirecting...');
        setRedirect(false);
        setUser({ ...userData?.data, token });
        switch (userData?.data?.role) {
          case 'Admin':
          case 'GRH':
            history.push('/admin');
            break;
          case 'Doctor':
          case 'Nurse':
            history.push('/admin');
            break;
          default:
            history.push('/patient');
            break;
        }
      }
    }
  }, [userData, userErr, redirect, history]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data, status } = await Auth.login(values);

    if (status < 200 || status > 299) {
      const errors = extractErrorMsg(data);
      errors.map((error) => toast.error(error));
    } else {
      toast.success('Login successful');
      setUser({ token: data?.key });
      setRedirect(true);
      //   history.push('/login');
    }
  };
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar alt="E-Clinic" src={logo} className={classes.avatar} />
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoComplete="email"
                type="email"
                name="email"
                value={values.first_name}
                variant="outlined"
                required
                fullWidth
                onChange={handleChange}
                id="email"
                label="Email"
                autoFocus
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                onChange={handleChange}
                value={values.password}
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
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
            Login
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="/signup" variant="body2">
                You don&apos;t have an account! Login
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};

export default Login;
