import { showMessage } from "react-native-flash-message";
import { colors } from "../../utils/colors";
import { apiInstance } from "../../httpclient/httpclient";

let msg = {
    type: 'info',
    backgroundColor: colors.errorColor,
  };

export const ForgotPassword = async ForgotPassword => {
    try {
      const res = await apiInstance.post('forgotPassword', ForgotPassword);
      return res.data;
    } catch (err) {
      console.log(' ForgotPassword -=-=-=-=-=-=  err: ', err);
      showMessage({
        ...msg,
        message: err.response.data.message,
        duration: 2000,
      });
      return null;
    }
  };
