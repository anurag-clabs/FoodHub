import { showMessage } from "react-native-flash-message";
import { apiInstance } from "../../httpclient/httpclient";
import { colors } from "../../utils/colors";

let msg = {
    type: 'info',
    backgroundColor: colors.errorColor,
  };

export const Login = async loginData => {
    try {
      const res = await apiInstance.post('login', loginData);
      return res.data;
    } catch (err) {
      showMessage({
        ...msg,
        message: err.response.data.message,
        duration: 2000,
      });
      return null;
    }
  };