import {getToken} from "../utils";
import { BASE_URL } from '@env';


/**
 * Object Request Header
 */
export const requestHeader = {
  Accept: "application/json",
  "Content-Type": "",
  Authorization: "",
};

/**
 *
 * @param {string} url
 * @param {string, [GET, POST, PATCH, PUT...]} method
 * @param {{}} payload
 * @param {boolean} token
 * @param {boolean} text
 * @param {boolean} form
 * @returns Response Data;
 */
export async function request(url, method, payload, token, text, form) {

  url = BASE_URL + url;

  const bToken = await getToken();

  requestHeader.Authorization = bToken ? `Bearer ${bToken}` : undefined;

  console.log({url});

  requestHeader["Content-Type"] =
    form === true ? "multipart/form-data" : "application/json";

  if (method === "GET") {
    return fetch(url, {
      method,
      headers: Object.assign(requestHeader),
    })
      .then((res) => {
        if (text === true) {
          return res.text();
        } else if (res) {
          return res.json();
        } else {
          return res.json();
        }
      })
      .catch((err) => {
        // let errMsg = errorSeeker(`${err}`);
        // _errorPrompt(errMsg);
        console.log(`Request Error __ ${url}: `, err);
        // throw new Error(err);
        return err;
      });
  } else {
    return fetch(url, {
      method,
      mode: "no-cors",
      cache: "no-cache",
      headers: Object.assign(requestHeader),
      body: form === true ? payload : JSON.stringify(payload),
    })
      .then((res) => {
        if (text === true) {
          return res.text();
        } else if (res) {
          return res.json();
        } else {
          return res.json();
        }
      })
      .catch((err) => {
        // let errMsg = errorSeeker(`${err}`);
        // _errorPrompt(errMsg);
        console.log(`Request Error ${url}: `, err);
        // throw new Error(err);
        return err;

      });
  }
}
