import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistCombineReducers } from "redux-persist";
import {GetCatecories} from "./GetCategories";
import {GetUserDetail} from "./GetUserDetail";
import {UpdateProfile} from "./UpdateProfile";
import {GetUserAddress} from "./GetUserAddress";
import {GetResturents} from "./GetResturents";

const config = {
    key: 'primary',
    storage: AsyncStorage,
  };

  const state = {
    GetCatecories,
    GetUserDetail,
    UpdateProfile,
    GetUserAddress,
    GetResturents
  };


export default persistCombineReducers(config, state);
