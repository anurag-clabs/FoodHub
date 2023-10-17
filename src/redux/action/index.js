import { createAction } from 'redux-actions';
import * as constant from '../../utils/constant';

export const signupRequest = createAction(constant.SIGNUP_USER_REQUEST);
export const signupSuccess = createAction(constant.SIGNUP_USER_SUCCESS);
export const signupError = createAction(constant.SIGNUP_USER_ERROR);

export const CategoriesRequest = createAction(constant.CATEGORIES_USER_REQUEST)
export const CategoriesSuccess = createAction(constant.CATEGORIES_USER_SUCCESS)
export const CategoriesError = createAction(constant.CATEGORIES_USER_ERROR)

export const UserDetailRequest = createAction(constant.USER_DETAIL_REQUEST);
export const UserDetailSuccess = createAction(constant.USER_DETAIL_SUCCESS);
export const UserDetailError = createAction(constant.USER_DETAIL_ERROR);

export const UserDetailUpdateRequest = createAction(constant.UPDATE_USER_DETAIL_REQUEST);
export const UserDetailUpdateSuccess = createAction(constant.UPDATE_USER_DETAIL_SUCCESS);
export const UserDetailUpdateError = createAction(constant.UPDATE_USER_DETAIL_ERROR);