// import { selectToken } from "./selectors";

export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
// export const TOKEN_STILL_VALID = "TOKEN_STILL_VALID";
// export const LOG_OUT = "LOG_OUT";

export const loginSuccess = (userInformation) => {
  console.log("its gets here");
  return {
    type: LOGIN_SUCCESS,
    payload: userInformation,
  };
};

// const tokenStillValid = (userWithoutToken) => ({
//   type: TOKEN_STILL_VALID,
//   payload: userWithoutToken,
// });

// export const logOut = () => ({ type: LOG_OUT });

// export const getUserWithStoredToken = () => {
//   return async (dispatch, getState) => {
//     // get token from the state
//     const token = selectToken(getState());

//     // if we have no token, stop
//     if (token === null) return;

//     dispatch(appLoading());
//     try {
//       // if we do have a token,
//       // check wether it is still valid or if it is expired
//       const response = await axios.get(`${apiUrl}/me`, {
//         headers: { Authorization: `Bearer ${token}` },
//       });

//       // token is still valid
//       dispatch(tokenStillValid(response.data));
//       dispatch(appDoneLoading());
//     } catch (error) {
//       if (error.response) {
//         console.log(error.response.message);
//       } else {
//         console.log(error);
//       }
//       // if we get a 4xx or 5xx response,
//       // get rid of the token by logging out
//       dispatch(logOut());
//       dispatch(appDoneLoading());
//     }
//   };
// };