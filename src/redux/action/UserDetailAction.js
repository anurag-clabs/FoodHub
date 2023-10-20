import { apiInstance } from '../../httpclient/httpclient';
import { AUTH_TOKEN } from '../../utils/constant';
import { readData } from '../../utils/storage';
import * as actions from './index';

export const GetUserDetailAction = () => {
  return async (dispatch) => {
    try {
      dispatch(actions.UserDetailRequest());
        const result = await apiInstance.get('profile');
        dispatch(actions.UserDetailSuccess(result));
    } catch (error) {
      console.log('No User Data found');
      dispatch(actions.UserDetailError(error?.response?.data?.message));
    }
  };
};
