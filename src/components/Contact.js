import { useSnackbar } from "notistack";
import React, { useState } from "react";

import {
  Button,
  Container,
  Link,
  TextField,
  Typography,
} from "@material-ui/core/";
import { makeStyles } from "@material-ui/core/styles";

import { apiCall, validateCaptcha } from "../services/api";
import Loader from "./Feedback/Loader";

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

export default function Contact(props) {
  const { history } = props;
  const { enqueueSnackbar } = useSnackbar();

  const [form, setForm] = useState(defaultForm);
  const [loader, setLoader] = useState(false);

  const handleChange = (e) => {
    e.preventDefault();
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      // enable loader
      setLoader(true);

      // grab form data
      const data = { ...form };

      // validate reCaptcha
      data.reCaptcha.token = await validateCaptcha();

      // post form to ghost-contact
      await apiCall("post", contactUrl, data);

      // if successful notify user, reset form and go back to landing page
      enqueueSnackbar("Message sent successfully!", {
        variant: "success",
      });

      setForm(defaultForm);
      history.push("/");
    } catch (error) {
      console.log(error);
      // if unsuccessful display error message
      enqueueSnackbar("Oops! Something went wrong.", {
        variant: "error",
      });
    } finally {
      // diable loader no matter what outcome
      setLoader(false);
    }
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
          inputProps={{ "data-testid": "name" }}
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
          inputProps={{ "data-testid": "email" }}
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
          inputProps={{ "data-testid": "message" }}
        />

        <Button
          type="submit"
          color="primary"
          variant="outlined"
          className={classes.button}
          data-testid="contact-form-button"
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
      <Loader open={loader} />
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
