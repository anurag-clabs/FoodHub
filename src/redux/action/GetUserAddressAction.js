import { apiInstance } from '../../httpclient/httpclient';
import * as actions from './index';

export const GetUserAddressAction = () => {
  return async (dispatch) => {
    try {
      dispatch(actions.UserAddressRequest());
        const result = await apiInstance.get('addresses');
        dispatch(actions.UserAddressSuccess(result?.data));
    } catch (error) {
      console.log('No User Address found', error?.response?.data);
      dispatch(actions.UserAddressError(error?.response?.data?.message));
    }
  };
};
