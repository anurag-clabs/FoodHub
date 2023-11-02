import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistCombineReducers } from "redux-persist";
import {GetCatecories} from "./GetCategories";
import {GetUserDetail} from "./GetUserDetail";
import {UpdateProfile} from "./UpdateProfile";
import {GetUserAddress} from "./GetUserAddress";

const config = {
    key: 'primary',
    storage: AsyncStorage,
  };

  const state = {
    GetCatecories,
    GetUserDetail,
    UpdateProfile,
    GetUserAddress
  };


export default persistCombineReducers(config, state);
