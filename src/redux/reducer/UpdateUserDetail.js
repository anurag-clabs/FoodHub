import * as constant from '../../utils/constant';

const initialState = {
  fetching: false,
  profileData: {},
  error: {},
};

export const UpdateUserDetail = (state = initialState, action) => {
  switch (action.type) {
    case constant.UPDATE_USER_DETAIL_REQUEST:
      return {
        ...state,
        fetching: true,
      };
    case constant.UPDATE_USER_DETAIL_SUCCESS:
      return {
        ...state,
        profileData: action.payload,
        fetching: false,
      };
    case constant.UPDATE_USER_DETAIL_ERROR:
      return {
        ...state,
        fetching: false,
      };
    default:
      return state;
  }
};
