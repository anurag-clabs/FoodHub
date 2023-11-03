import { apiInstance } from '../../httpclient/httpclient';
import * as actions from './index';

export const GetResturentAction = () => {
  return async (dispatch) => {
    try {
      dispatch(actions.RestaurantRequest());
        const result = await apiInstance.get('restaurants');
        dispatch(actions.RestaurantSuccess(result?.data?.data));
    } catch (error) {
      console.log('No Resturent Data found');
      dispatch(actions.RestaurantError(error?.response?.data?.message));
    }
  };
};
