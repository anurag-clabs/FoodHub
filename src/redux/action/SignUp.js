import { showMessage } from "react-native-flash-message";
import { apiInstance } from "../../httpclient/httpclient";
import { colors } from "../../utils/colors";

let msg = {
  type: 'info',
  backgroundColor: colors.errorColor,
};

export const signup = async signupData => {
  try {
    const res = await apiInstance.post( 'signup', signupData);
    // console.log('res', res);
    return res.data;
  } catch (err) {
    console.log(' signup -=-=-=-=-=-=  err: ', err);
    showMessage({
      ...msg,
      message: err.response.data.message,
      duration: 5000,
    });
    return null;
  }
};