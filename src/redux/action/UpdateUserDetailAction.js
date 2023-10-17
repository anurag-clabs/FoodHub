import { apiInstance } from "../../httpclient/httpclient";
import { AUTH_TOKEN } from "../../utils/constant";
import { readData } from "../../utils/storage";
import * as actions from './index';

export const UpdateUserDetailAction = (updatedData) => {
    return async (dispatch) => {
      try {
        dispatch(actions.UserDetailUpdateRequest());
        const userToken = await readData(AUTH_TOKEN);
        if (userToken) {
          const headers = {
            'Authorization': `Bearer ${userToken}`,
            'Content-Type': 'application/json',
          };
          const result = await apiInstance.put('profiles', updatedData, { headers });
          dispatch(actions.UserDetailUpdateSuccess(result));
        } else {
          console.log('User token not found.');
        }
      } catch (error) {
        console.log('Error updating user profile:', error);
        dispatch(actions.UserDetailUpdateError(error.response.data.message));
      }
    };
  };