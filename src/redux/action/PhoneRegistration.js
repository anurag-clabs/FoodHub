import { showMessage } from "react-native-flash-message";
import { apiInstance } from "../../httpclient/httpclient";
import { colors } from "../../utils/colors";

let msg = {
    type: 'info',
    backgroundColor: colors.errorColor,
  };

export const PhoneRegistration = async numberData => {
    try {
      const res = await apiInstance.post('register', numberData);
      showMessage({
        type: 'success',
        duration: 2000,
        message: res.data.message,
        backgroundColor: colors.green,
      });
      return res.data;
    } catch (err) {
      console.log(' register -=-=-=-=-=-=  err: ', err);
      showMessage({
        type: 'error',
        duration: 2000,
        backgroundColor: colors.errorColor,
        message: err.response.data.errors[0].msg,
      });
      return null;
    }
  };