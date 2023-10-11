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
      console.log('Registered', res);
      return res.data;
    } catch (err) {
      console.log(' register -=-=-=-=-=-=  err: ', err);
      showMessage({
        ...msg,
        message: err.response.data.message,
        duration: 2000,
      });
      return null;
    }
  };