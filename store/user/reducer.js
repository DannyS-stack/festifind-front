// import { LOG_OUT, LOGIN_SUCCESS, TOKEN_STILL_VALID } from "./actions";
import { LOGIN_SUCCESS } from "./actions";

const initialState = {
  token: null,
  id: null,
  name: null,
  email: null,
  image: null,
  owner: null,
  participant: null,
  username: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return { ...state, ...action.payload };

    // case LOG_OUT:
    //   localStorage.removeItem("token");
    //   return { ...initialState, token: null };

    // case TOKEN_STILL_VALID:
    //   return { ...state, ...action.payload };

    default:
      return state;
  }
};
