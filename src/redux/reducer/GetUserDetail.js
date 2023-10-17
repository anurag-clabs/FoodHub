import * as constant from '../../utils/constant';

const initialState = {
  fetching: false,
  profileData: {},
  error: {},
};

export const GetUserDetail = (state = initialState, action) => {
  switch (action.type) {
    case constant.USER_DETAIL_REQUEST:
      return {
        ...state,
        fetching: true,
      };
    case constant.USER_DETAIL_SUCCESS:
      return {
        ...state,
        profileData: action.payload,
        fetching: false,
      };
    case constant.USER_DETAIL_ERROR:
      return {
        ...state,
        fetching: false,
      };
    default:
      return state;
  }
};
