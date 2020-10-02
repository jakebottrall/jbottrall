import {
  CLOSE_SNACKBAR,
  ENQUEUE_SNACKBAR,
  REMOVE_SNACKBAR,
} from "../actionTypes";

export const addSnackbar = (event, variant, options) => {
  console.log(event);
  const defaultOptions = {
    variant,
    autoHideDuration: 3000,
  };

  let message =
    event && event.message ? event.message : "Oops! Something went wrong";
  return {
    type: ENQUEUE_SNACKBAR,
    key: new Date().getTime() + Math.random(),
    notification: {
      message,
      options: options || defaultOptions,
    },
  };
};

export const closeSnackbar = (key) => ({
  key,
  dismissAll: !key,
  type: CLOSE_SNACKBAR,
});

export const removeSnackbar = (key) => ({
  key,
  type: REMOVE_SNACKBAR,
});
