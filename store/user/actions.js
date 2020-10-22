// import { selectToken } from "./selectors";
import axios from "axios";

export const LOGIN_SUCCESS = "LOGIN_SUCCESS";

export const loginSuccess = (userInformation) => {
  console.log("its gets here");
  return {
    type: LOGIN_SUCCESS,
    payload: userInformation,
  };
};
