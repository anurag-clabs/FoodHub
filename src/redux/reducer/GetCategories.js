import * as constant from '../../utils/constant';

const initialState = {
  fetching: false,
  categoriesGet: [],
  error: {},
};

export const GetCatecories = (state = initialState, action) => {
  switch (action.type) {
    case constant.CATEGORIES_USER_REQUEST:
      return {
        ...state,
        fetching: true,
      };
    case constant.CATEGORIES_USER_SUCCESS:
      return {
        ...state,
        categoriesGet: action,
        fetching: false,
      };
    case constant.CATEGORIES_USER_ERROR:
      return {
        ...state,
        fetching: false,
      };
    default:
      return state;
  }
};
