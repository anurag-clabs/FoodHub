import * as constant from '../../utils/constant';

const initialState = {
  fetching: false,
  userData: {},
  error: {},
};

export const SignUp = (state = initialState, action) => {
  switch (action.type) {
    case constant.SIGNUP_USER_REQUEST:
      return {
        ...state,
        fetching: true,
      };
    case constant.SIGNUP_USER_SUCCESS:
      return {
        ...state,
        userData: action.payload,
        fetching: false,
      };
    case constant.SIGNUP_USER_ERROR:
      return {
        ...state,
        fetching: false,
      };
    default:
      return state;
  }
};
