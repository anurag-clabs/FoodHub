import { showMessage } from "react-native-flash-message";
import { apiInstance } from "../../httpclient/httpclient";
import { colors } from "../../utils/colors";

export const DeleteUserAddressAction = async id => {
  try {
    const result = await apiInstance.delete(`addresses/${id}`);
    showMessage({
      type: 'success',
      duration: 2000,
      message: result.data.message,
      backgroundColor: colors.errorColor,
    });
    return result;
  } catch (error) {
    console.log('Error Delete User Address:', error);
    return error;
  }
}