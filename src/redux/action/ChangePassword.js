import { showMessage } from "react-native-flash-message";
import { colors } from "../../utils/colors";
import { apiInstance } from "../../httpclient/httpclient";
import { readData } from "../../utils/storage";
import { AUTH_TOKEN } from "../../utils/constant";

let msg = {
  type: 'info',
  backgroundColor: colors.errorColor,
};

export const ChangePassword = async changePassword => {
  try {
    const userToken = await readData(AUTH_TOKEN);
    console.log('change token', userToken);
    const res = await apiInstance.put('changePassword', changePassword, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
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
