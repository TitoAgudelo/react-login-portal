import { userConstants } from '../constants';

const initialState = {
  loggedIn: false,
  user: {},
  error: {} };

export function authentication(state = initialState, action) {
  switch (action.type) {
    case userConstants.LOGIN_REQUEST:
      return {
        loggingIn: true,
        user: action.user
      };
    case userConstants.LOGIN_SUCCESS:
      return {
        loggedIn: true,
        user: action.user
      };
    case userConstants.LOGIN_FAILURE:
      return {
        loggedIn: false,
        user: {},
        error: Object.assign({}, action.error)
      };
    case userConstants.LOGOUT:
      return {
        loggedIn: false,
        user: {},
        error: {}
      };
    default:
      return state
  }
}