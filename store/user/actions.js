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

// export function updateUsers(id, longitude, latitude) {
//   return async function thunk(dispatch, getState) {
//     console.log("DOES IT GET HERE?");
//     console.log(id);
//     console.log(longitude);
//     console.log(latitude);

//     const data = await axios.patch(`http://localhost:4000/graphql/update`, {
//       id,
//       longitude,
//       latitude,
//     });

//     console.log("THE UPDATED USER", data);
//   };
// }
