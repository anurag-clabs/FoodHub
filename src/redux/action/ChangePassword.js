import { showMessage } from "react-native-flash-message";
import { colors } from "../../utils/colors";
import { apiInstance } from "../../httpclient/httpclient";

let msg = {
  type: 'info',
  backgroundColor: colors.errorColor,
};

export const ChangePassword = async changePassword => {
  try {
      const res = await apiInstance.put('changePassword', changePassword);
      console.log('success', res.data);
      showMessage({
        type: 'success',
        duration: 2000,
        message: res.data.message,
        backgroundColor: colors.green,
      });
      return res;
  } catch (err) {
    console.log('ForgotPassword -=-=-=-=-=-=  err: ', err);
    showMessage({
      ...msg,
      message: err?.response?.data?.errors[0]?.msg,
      duration: 2000,
    });
    return null;
  }
};
