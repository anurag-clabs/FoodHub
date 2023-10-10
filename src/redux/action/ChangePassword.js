import { showMessage } from "react-native-flash-message";
import { colors } from "../../utils/colors";
import { apiInstance } from "../../httpclient/httpclient";

let msg = {
    type: 'info',
    backgroundColor: colors.errorColor,
  };

export const ChangePassword = async changePassword => {
    try {
        console.log("Attempting to change password:", changePassword);
      const res = await apiInstance.put('changePassword', changePassword);
      console.log("Password change response:", res.data);
      return res.data;
    } catch (err) {
      console.log(' corgotPassword -=-=-=-=-=-=  err: ', err);
      showMessage({
        ...msg,
        message: err.response.data.message,
        duration: 2000,
      });
      return null;
    }
  };
