import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistCombineReducers } from "redux-persist";
import { SignUp } from "./SignUp";

const config = {
    key: 'primary',
    storage: AsyncStorage,
  };

  const state = {
    
  };


export default persistCombineReducers(config, state);
