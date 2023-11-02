import { showMessage } from "react-native-flash-message";
import { apiInstance } from "../../httpclient/httpclient";
import { colors } from "../../utils/colors";

export const CreateUserAddress = async addressData => {
    try {
      const res = await apiInstance.post('addresses', addressData);
      showMessage({
        type: 'success',
        duration: 2000,
        message: res.data.message,
        backgroundColor: colors.green,
      });
      return res.data;
    } catch (err) {
      showMessage({
        type: 'info',
        backgroundColor: colors.errorColor,
        message: err.response.data.error,
        duration: 2000,
      });
      return null;
    }
  };