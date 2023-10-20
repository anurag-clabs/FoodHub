import { apiInstance } from "../../httpclient/httpclient";
import * as actions from './index';

export const UpdateProfileAction = async updatedData => {
  try {
    // dispatch(actions.UpdateProfileRequest());
    const result = await apiInstance.put('profile', updatedData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
    console.log('Update result', result?.data);
    return result.data;
    // dispatch(actions.UpdateProfileSuccess(result));
  } catch (error) {
    console.log('Error updating user profile:', error?.response?.data);
    // dispatch(actions.UpdateProfileError(error?.response?.data?.message));
    return error;
  }
}