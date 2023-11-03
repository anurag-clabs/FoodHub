import { createAction } from 'redux-actions';
import * as constant from '../../utils/constant';

export const CategoriesRequest = createAction(constant.CATEGORIES_USER_REQUEST)
export const CategoriesSuccess = createAction(constant.CATEGORIES_USER_SUCCESS)
export const CategoriesError = createAction(constant.CATEGORIES_USER_ERROR)

export const UserDetailRequest = createAction(constant.USER_DETAIL_REQUEST);
export const UserDetailSuccess = createAction(constant.USER_DETAIL_SUCCESS);
export const UserDetailError = createAction(constant.USER_DETAIL_ERROR);

export const UpdateProfileRequest = createAction(constant.UPDATE_USER_DETAIL_REQUEST);
export const UpdateProfileSuccess = createAction(constant.UPDATE_USER_DETAIL_SUCCESS);
export const UpdateProfileError = createAction(constant.UPDATE_USER_DETAIL_ERROR);

export const UserAddressRequest = createAction(constant.USER_ADDRESS_REQUEST);
export const UserAddressSuccess = createAction(constant.USER_ADDRESS_SUCCESS);
export const UserAddressError = createAction(constant.USER_ADDRESS_ERROR);

export const RestaurantRequest = createAction(constant.RESTURENT_REQUEST);
export const RestaurantSuccess = createAction(constant.RESTURENT_SUCCESS);
export const RestaurantError = createAction(constant.RESTURENT_ERROR);