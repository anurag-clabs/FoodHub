import * as constant from '../../utils/constant';

const initialState = {
  fetching: false,
  getAddressData: {},
  error: {},
};

export const GetUserAddress = (state = initialState, action) => {
  switch (action.type) {
    case constant.USER_ADDRESS_REQUEST:
      return {
        ...state,
        fetching: true,
      };
    case constant.USER_ADDRESS_SUCCESS:
      return {
        ...state,
        getAddressData: action.payload,
        fetching: false,
      };
    case constant.USER_ADDRESS_ERROR:
      return {
        ...state,
        fetching: false,
      };
    default:
      return state;
  }
};
