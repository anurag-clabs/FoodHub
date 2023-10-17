import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistCombineReducers } from "redux-persist";
import {GetCatecories} from "./GetCategories";
import {GetUserDetail} from "./GetUserDetail";

const config = {
    key: 'primary',
    storage: AsyncStorage,
  };

  const state = {
    GetCatecories,
    GetUserDetail,
  };


export default persistCombineReducers(config, state);
