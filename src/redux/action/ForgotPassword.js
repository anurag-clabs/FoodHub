import { showMessage } from "react-native-flash-message";
import { colors } from "../../utils/colors";
import { apiInstance } from "../../httpclient/httpclient";

export const ForgotPassword = async ForgotPassword => {
    try {
      const res = await apiInstance.post('forgotPassword', ForgotPassword);
      showMessage({
        type: 'success',
        duration: 2000,
        message: res.data.message,
        backgroundColor: colors.green,
      });
      return res.data;
    } catch (err) {
      console.log(' ForgotPassword -=-=-=-=-=-=  err: ', err);
      showMessage({
        type: 'info',
        backgroundColor: colors.errorColor,
        message: err.response.data.error,
        duration: 2000,
      });
      return null;
    }
  };
