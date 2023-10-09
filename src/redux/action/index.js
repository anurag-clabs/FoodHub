import { createAction } from 'redux-actions';
import * as constant from '../../utils/constant';

export const signupRequest = createAction(constant.SIGNUP_USER_REQUEST);
export const signupSuccess = createAction(constant.SIGNUP_USER_SUCCESS);
export const signupError = createAction(constant.SIGNUP_USER_ERROR);