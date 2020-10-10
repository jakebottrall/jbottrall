import axios from "axios";

export function apiCall(method, path, data) {
  return new Promise((resolve, reject) => {
    return axios[method](path, data)
      .then((res) => {
        return resolve(res.data);
      })
      .catch((err) => {
        return reject(err);
      });
  });
}

export const validateCaptcha = () => {
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
