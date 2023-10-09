import { showMessage } from "react-native-flash-message";
import { apiInstance } from "../../httpclient/httpclient";
import { setToken } from "../../httpclient/httpclient/clientHelper";

export const signup = async signupData => {
    try {
      const res = await apiInstance.post('signup', signupData);
      setToken(res.data.data.authToken);
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