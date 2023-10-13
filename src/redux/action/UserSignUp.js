import { showMessage } from "react-native-flash-message";
import { apiInstance } from "../../httpclient/httpclient";
import { colors } from "../../utils/colors";

let msg = {
  type: 'info',
  backgroundColor: colors.errorColor,
};

export const UserSignUp = async signupData => {
  try {
    const res = await apiInstance.post( 'signup', signupData);
    console.log('signup', res.data);
    showMessage({
      type: 'success',
      duration: 2000,
      message: res.data.message,
      backgroundColor: colors.green,
    });
    return res.data;
  } catch (error) {
    showMessage({
      type: 'error',
      duration: 2000,
      backgroundColor: colors.errorColor,
      message: error.response.data.errors[0].msg,
    });
    return null;
  }
};