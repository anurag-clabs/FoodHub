import { apiInstance } from '../../httpclient/httpclient';
import { getToken } from '../../utils/token';
import * as actions from './index';

export const GetCategoriesAction = () => dispatch => {
    console.log('token', getToken());
  dispatch(actions.CategoriesRequest());
  const token = getToken();
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  console.log('headers', headers);
  apiInstance.get('categories', {headers})
    .then(result => {
      console.log('Categories', result);
      dispatch(actions.CategoriesSuccess(result));
    })
    .catch(error => {
      dispatch(actions.CategoriesError(error.response.message));
    });
};
