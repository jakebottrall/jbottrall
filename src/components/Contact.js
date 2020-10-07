import React, { useState } from "react";
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

// configure contact form urls based on environment
const baseUrl =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000/"
    : "https://jakebottrall.com";

const contactUrl =
  process.env.NODE_ENV === "development"
    ? "http://localhost:2000/ghost-contact"
    : "https://jakebottrall.com/ghost-contact";

// define default form state
const defaultForm = {
  baseUrl,
  name: "",
  email: "",
  message: "",
  mailgunDomain: "MG_DACIA_TECH",
  recipient: "jakebottrall@gmail.com",
  logoUrl: "jakebottrall.com/public/img/logo.png",
  reCaptcha: { secretKey: "JAKE_BOTTRALL_SECRET_KEY" },
};

function Contact(props) {
  const [form, setForm] = useState(defaultForm);

  const handleChange = (e) => {
    e.preventDefault();
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { addSnackbar, setLoader, history } = props;
    try {
      // engage redux loader
      setLoader(true);

      // grab form data
      const data = { ...form };

      // validate reCaptcha
      data.reCaptcha.token = await validateCaptcha();

      // post form to ghost-contact
      await apiCall("post", contactUrl, data);

      // if successful notify user, reset form and go back to landing page
      addSnackbar({ message: "Message succefully sent" }, "success");
      setForm(defaultForm);
      history.push("/");
    } catch (error) {
      // if unsuccessful display error message
      addSnackbar({ message: "Oops! Something went wrong" }, "error");
    } finally {
      // disengage redux loader no matter what outcome
      setLoader(false);
    }
  };

  const validateCaptcha = () => {
    return new Promise((res, rej) => {
      window.grecaptcha.ready(() => {
        window.grecaptcha
          .execute("6LeErdIZAAAAAOAGjGEE_z4K5a1R9pt2_Ie6HxLU", {
            action: "submit",
          })
          .then((token) => {
            return res(token);
          })
          .catch((error) => {
            throw error;
          });
      });
    });
  };

  const classes = useStyles();
  return (
    <Container className={classes.root} maxWidth="sm">
      <form className={classes.form} onSubmit={handleSubmit}>
        <Typography variant="h4">Get in Touch</Typography>

        <TextField
          required
          fullWidth
          autoFocus
          name="name"
          label="Name"
          margin="normal"
          value={form.name}
          variant="outlined"
          autoComplete="name"
          onChange={handleChange}
        />

        <TextField
          required
          fullWidth
          name="email"
          type="email"
          label="Email"
          margin="normal"
          variant="outlined"
          value={form.email}
          autoComplete="email"
          onChange={handleChange}
        />

        <TextField
          required
          rows={5}
          fullWidth
          multiline
          name="message"
          label="Message"
          margin="normal"
          variant="outlined"
          value={form.message}
          onChange={handleChange}
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

export default connect(null, {
  setLoader,
  addSnackbar,
})(Contact);
