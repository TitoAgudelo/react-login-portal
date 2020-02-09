import { userConstants } from '../constants';
import { userService } from '../services';
import { alertActions } from './';
import { history } from '../helpers';

export const userActions = {
  login,
  logout,
  register
};

function login(username, password) {
  // return the promise using fetch which adds to localstorage on resolve
  return dispatch => {
    dispatch(request());
    userService.login(username, password)
      .then(
        user => {
          dispatch(success(user));
          localStorage.setItem('user', user);
          history.push('/');
          dispatch(alertActions.success(''));
        },
        error => {
          dispatch(failure(error));
          dispatch(alertActions.error(error));
        }
      );
  }

  function request(user) { return { type: userConstants.LOGIN_REQUEST, user } }
  function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
  function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
}

function logout() {
  userService.logout();
  history.push('/login');
  return { type: userConstants.LOGOUT };
}

function register(user) {
    // return the promise using fetch which dispatches appropriately
    return dispatch => {
      dispatch(request(user));
      userService.register(user)
        .then(
          user => {
            dispatch(success(user));
            history.push('/login');
            dispatch(alertActions.success('Registration successful'));
          },
          error => {
            dispatch(failure(error));
            dispatch(alertActions.error(error));
          }
        );
    }

    function request(user) { return { type: userConstants.REGISTER_REQUEST, user } }
    function success(user) { return { type: userConstants.REGISTER_SUCCESS, user } }
    function failure(error) { return { type: userConstants.REGISTER_FAILURE, error } }
}
