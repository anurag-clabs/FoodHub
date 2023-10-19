import { apiInstance } from "../../httpclient/httpclient";
import { AUTH_TOKEN } from "../../utils/constant";
import { readData } from "../../utils/storage";
import * as actions from './index';

export const UpdateProfileAction = updatedData => {
  return async (dispatch) => {
    try {
      dispatch(actions.UpdateProfileRequest());
      const userToken = await readData(AUTH_TOKEN);
      if (userToken) {
        const headers = {
          'Authorization': `Bearer ${userToken}`,
          'Content-Type': 'multipart/form-data',
        };

        const formData = new FormData();
        formData.append('name', updatedData.name);
        formData.append('email', updatedData.email);
        formData.append('phoneNumber', updatedData.phoneNumber);
        formData.append('location', updatedData.location);
        formData.append('image', {
          uri: updatedData.image,
          type: 'image/jpeg',
        });

        const result = await apiInstance.put('profiles', formData, { headers });
        console.log('result', result?.data);
        dispatch(actions.UpdateProfileSuccess(result));
      } else {
        console.log('User token not found.');
      }
    } catch (error) {
      console.log('Error updating user profile:', error?.response?.data);
      dispatch(actions.UpdateProfileError(error?.response?.data?.message));
    }
  };
};