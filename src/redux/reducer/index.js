import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistCombineReducers } from "redux-persist";
import {GetCatecories} from "./GetCategories";

const config = {
    key: 'primary',
    storage: AsyncStorage,
  };

  const state = {
    GetCatecories,
  };


export default persistCombineReducers(config, state);
