import { apiInstance } from '../../httpclient/httpclient';
import { AUTH_TOKEN } from '../../utils/constant';
import { readData } from '../../utils/storage';
import * as actions from './index';

export const GetUserDetailAction = () => {
  return async (dispatch) => {
    try {
      dispatch(actions.UserDetailRequest());
      const userToken = await readData(AUTH_TOKEN);
      if (userToken) {
        const headers = {
          'Authorization': `Bearer ${userToken}`,
          'Content-Type': 'application/json',
        };
        const result = await apiInstance.get('profiles', { headers });
        dispatch(actions.UserDetailSuccess(result));
      } else {
        console.log('User token not found.');
      }
    } catch (error) {
      console.log('No User Data found');
      dispatch(actions.UserDetailError(error?.response?.data?.message));
    }
  };
};
