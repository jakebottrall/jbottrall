import React from "react";
import { connect } from "react-redux";

import {
  Button,
  Container,
  Link,
  TextField,
  Typography,
} from "@material-ui/core/";
import { makeStyles } from "@material-ui/core/styles";

import { apiCall } from "../services/api";
import { setLoader } from "../store/actions/loader";
import { addSnackbar } from "../store/actions/snackbars";

const baseUrl =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000/"
    : "https://jakebottrall.com";

const defaultState = {
  baseUrl,
  name: "",
  email: "",
  message: "",
  mailgunDomain: "MG_DACIA_TECH",
  recipient: "jakebottrall@gmail.com",
  logoUrl: "jakebottrall.com/public/img/logo.png",
  reCaptcha: { secretKey: "JAKE_BOTTRALL_SECRET_KEY" },
};

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = defaultState;
  }
  handleChange = (e) => {
    const target = e.target;
    const name = target.name;
    const value = target.type === "checkbox" ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = async (e) => {
    const { addSnackbar, setLoader, history } = this.props;
    try {
      setLoader(true);
      e.preventDefault();

      const contactUrl =
        process.env.NODE_ENV === "development"
          ? "http://localhost:2000/ghost-contact"
          : "https://jakebottrall.com/ghost-contact";

      const data = { ...this.state };

      console.log(data);

      data.reCaptcha.token = await this.validateCaptcha();

      await apiCall("post", contactUrl, data);
      addSnackbar({ message: "Message succefully sent" }, "success");
      this.setState(defaultState);
      history.push("/");
    } catch (error) {
      console.log(error);
      addSnackbar(
        {
          message:
            "Oops! Something went wrong. Please refresh the browser and try again.",
        },
        "error"
      );
    } finally {
      setLoader(false);
    }
  };

  validateCaptcha = () => {
    return new Promise((res, rej) => {
      window.grecaptcha.ready(() => {
        window.grecaptcha
          .execute("6LeErdIZAAAAAOAGjGEE_z4K5a1R9pt2_Ie6HxLU", {
            action: "submit",
          })
          .then((token) => {
            return res(token);
          });
      });
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <Container className={classes.root} maxWidth="sm">
        <form className={classes.form} onSubmit={this.handleSubmit}>
          <Typography variant="h4">Get in Touch</Typography>

          <TextField
            required
            fullWidth
            autoFocus
            name="name"
            label="Name"
            margin="normal"
            variant="outlined"
            autoComplete="name"
            value={this.state.name}
            onChange={this.handleChange}
          />

          <TextField
            required
            fullWidth
            name="email"
            type="email"
            label="Email"
            margin="normal"
            variant="outlined"
            autoComplete="email"
            value={this.state.email}
            onChange={this.handleChange}
          />

          <TextField
            required
            fullWidth
            multiline
            name="message"
            rows={5}
            label="Message"
            margin="normal"
            variant="outlined"
            value={this.state.message}
            onChange={this.handleChange}
          />

          <Button
            type="submit"
            color="primary"
            variant="outlined"
            className={classes.button}
          >
            Submit
          </Button>
        </form>
        <Typography component="p" colour="textSecondary" variant="caption">
          This site is protected by reCAPTCHA and the Google
          <Link href="https://policies.google.com/privacy" target="_blank">
            {" "}
            Privacy Policy{" "}
          </Link>
          and
          <Link href="https://policies.google.com/terms" target="_blank">
            {" "}
            Terms of Service{" "}
          </Link>
          apply.
        </Typography>
      </Container>
    );
  }
}

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 65,
  },
  form: {
    width: "100%",
  },
  button: {
    width: "100%",
  },
}));

function StyledWrapper(props) {
  const classes = useStyles();
  return <Contact {...props} classes={classes} />;
}

export default connect(null, {
  setLoader,
  addSnackbar,
})(StyledWrapper);
