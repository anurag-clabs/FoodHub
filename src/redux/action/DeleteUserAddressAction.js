import { showMessage } from "react-native-flash-message";
import { apiInstance } from "../../httpclient/httpclient";
import { colors } from "../../utils/colors";

export const DeleteUserAddressAction = async id => {
  try {
    const result = await apiInstance.delete(`addresses/${id}`);
    showMessage({
      type: 'success',
      duration: 2000,
      message: 'Address updated successfully',
      backgroundColor: colors.green,
    });
    console.log('Addresses Deleted successfully', result);
    return result;
  } catch (error) {
    console.log('Error Delete User Address:', JSON.stringify(error));
    return error;
  }
}