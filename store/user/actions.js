export const LOGIN_SUCCESS = "LOGIN_SUCCESS";

export const loginSuccess = (userInformation) => {
  return {
    type: LOGIN_SUCCESS,
    payload: userInformation,
  };
};
