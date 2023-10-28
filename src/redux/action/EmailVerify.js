import { showMessage } from "react-native-flash-message";
import { apiInstance } from "../../httpclient/httpclient";
import { colors } from "../../utils/colors";
import { AUTH_TOKEN } from "../../utils/constant";
import { saveData } from "../../utils/storage";
import { setToken } from "../../httpclient/httpclient/clientHelper";

export const EmailVerify = async verifyData => {
    try {
      const res = await apiInstance.post('verify', verifyData);
      const token = res.data.token;
      saveData(AUTH_TOKEN, token)
      setToken(token);
      showMessage({
        type: 'success',
        duration: 2000,
        message: res.data.message,
        backgroundColor: colors.green,
      });
      return res.data;
    } catch (err) {
      console.log(' verifyEmail -=-=-=-=-=-=  err: ', err);
      showMessage({
        type: 'info',
        backgroundColor: colors.errorColor,
        message: err.response.data.error,
        duration: 2000,
      });
      return null;
    }
  };