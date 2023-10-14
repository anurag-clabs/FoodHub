import { showMessage } from "react-native-flash-message";
import { apiInstance } from "../../httpclient/httpclient";
import { colors } from "../../utils/colors";

export const PhoneNumberVerify = async (number) => {
    try {
      const res = await apiInstance.post('verifyNumber', number);
      showMessage({
        type: 'success',
        duration: 2000,
        message: res.data.message,
        backgroundColor: colors.green,
      });
      return res.data;
    } catch (err) {
      console.log(' verifyPhoneNumber -=-=-=-=-=-=  err: ', err);
      showMessage({
        type: 'info',
        backgroundColor: colors.errorColor,
        message: err.response.data.error,
        duration: 2000,
      });
      return null;
    }
  };