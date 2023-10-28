import * as constant from '../../utils/constant';

const initialState = {
  fetching: false,
  UpdateProfileData: {},
  error: {},
};

export const UpdateProfile = (state = initialState, action) => {
  switch (action.type) {
    case constant.UPDATE_USER_DETAIL_REQUEST:
      return {
        ...state,
        fetching: true,
      };
    case constant.UPDATE_USER_DETAIL_SUCCESS:
      return {
        ...state,
        UpdateProfileData: action.payload,
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
