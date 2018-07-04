import { userConstants } from '../constants/user.constants';

const defaultUser = {
  name:'anonymous',
  role: 'anonymous',
  id:0,
  email: null
};

export const user = (state = defaultUser, action) => {
  switch (action.type) {
    case userConstants.USER_LOGIN:
      return action.user;
    default:
      return state
  }
};