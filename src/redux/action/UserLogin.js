import { showMessage } from "react-native-flash-message";
import { apiInstance } from "../../httpclient/httpclient";
import { colors } from "../../utils/colors";
import { setToken } from "../../httpclient/httpclient/clientHelper";
import { saveData } from "../../utils/storage";
import { AUTH_TOKEN } from "../../utils/constant";

export const UserLogin = async loginData => {
    try {
      const res = await apiInstance.post('login', loginData);
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
      showMessage({
        type: 'info',
        backgroundColor: colors.errorColor,
        message: err.response.data.error,
        duration: 2000,
      });
      return null;
    }
  };