import { apiInstance } from '../../httpclient/httpclient';
import { AUTH_TOKEN } from '../../utils/constant';
import { readData } from '../../utils/storage';
import * as actions from './index';

export const GetCategoriesAction = () => {
  return async (dispatch) => {
    try {
      dispatch(actions.CategoriesRequest());
      const userToken = await readData(AUTH_TOKEN);
      if (userToken) {
        const headers = {
          'Authorization': `Bearer ${userToken}`,
          'Content-Type': 'application/json',
        };
        const result = await apiInstance.get('categories', { headers });
        dispatch(actions.CategoriesSuccess(result.data));
      } else {
        console.log('User token not found.');
      }
    } catch (error) {
      console.log('No category list found');
      dispatch(actions.CategoriesError(error.response.data.message));
    }
  };
};
