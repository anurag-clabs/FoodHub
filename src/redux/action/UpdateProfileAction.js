import { showMessage } from "react-native-flash-message";
import { apiInstance } from "../../httpclient/httpclient";
import { colors } from "../../utils/colors";

export const UpdateProfileAction = async updatedData => {
  try {
    const result = await apiInstance.put('profile', updatedData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
    showMessage({
      type: 'success',
      duration: 2000,
      message: result.data.message,
      backgroundColor: colors.green,
    });
    console.log('Update result', result?.data);
    return result.data;
  } catch (error) {
    console.log('Error updating user profile:', error);
    return error;
  }
}