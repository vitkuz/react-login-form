import { userConstants } from '../constants/user.constants';

export const login = (user) => ({
  type: userConstants.USER_LOGIN,
  user
});

export const register = (user) => ({
  type: userConstants.USER_REGISTER,
  user
});