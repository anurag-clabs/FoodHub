import { apiInstance } from '../../httpclient/httpclient';
import * as actions from './index';

export const GetCategoriesAction = () => {
  return async (dispatch) => {
    try {
      dispatch(actions.CategoriesRequest());
        const result = await apiInstance.get('categories');
        dispatch(actions.CategoriesSuccess(result?.data?.data));
    } catch (error) {
      console.log('No category list found');
      dispatch(actions.CategoriesError(error?.response?.data?.message));
    }
  };
};
