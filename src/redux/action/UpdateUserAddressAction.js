import { showMessage } from "react-native-flash-message";
import { apiInstance } from "../../httpclient/httpclient";
import { colors } from "../../utils/colors";

export const UpdateUserAddressAction = async (id, updatedData) => {
  try {
    const result = await apiInstance.put(`addresses/${id}`, updatedData);
    showMessage({
      type: 'success',
      duration: 2000,
      message: 'Address updated successfully',
      backgroundColor: colors.green,
    });
    return result.data;
  } catch (error) {
    console.log('Error updating user Address:', error);
    return error;
  }
}