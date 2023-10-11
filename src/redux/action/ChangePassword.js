import { showMessage } from "react-native-flash-message";
import { colors } from "../../utils/colors";
import { apiInstance } from "../../httpclient/httpclient";
import { getToken } from "../../utils/token";

let msg = {
  type: 'info',
  backgroundColor: colors.errorColor,
};

export const ChangePassword = async changePassword => {
  try {
    const userToken = await getToken();
    if (userToken) {
      const headers = {
        'Authorization': `Bearer ${userToken}`,
        'Content-Type': 'application/json',
      };

      const res = await apiInstance.put('changePassword', changePassword, { headers });
      return res;
    } else {
      console.log('User token not found.');
      showMessage({
        ...msg,
        message: 'User token not found.',
        duration: 2000,
      });
      return null;
    }
  } catch (err) {
    console.log('ForgotPassword -=-=-=-=-=-=  err: ', err);
    showMessage({
      ...msg,
      message: err.response.data.message,
      duration: 2000,
    });
    return null;
  }
};
