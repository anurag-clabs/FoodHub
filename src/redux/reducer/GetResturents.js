import * as constant from '../../utils/constant';

const initialState = {
  fetching: false,
  resturentData: [],
  error: {},
};

export const GetResturents = (state = initialState, action) => {
  switch (action.type) {
    case constant.RESTURENT_REQUEST:
      return {
        ...state,
        fetching: true,
      };
    case constant.RESTURENT_SUCCESS:
      return {
        ...state,
        resturentData: action.payload,
        fetching: false,
      };
    case constant.RESTURENT_ERROR:
      return {
        ...state,
        fetching: false,
      };
    default:
      return state;
  }
};
