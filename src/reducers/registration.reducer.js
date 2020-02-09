import { userConstants } from '../constants';

const INITIAL_STATE = () => ({
	registering: false,
});

export function registration(state = new INITIAL_STATE(), action) {
  switch (action.type) {
    case userConstants.REGISTER_REQUEST:
      return {
        registering: true
      };
    case userConstants.REGISTER_SUCCESS:
      return {
        registering: false
      };
    case userConstants.REGISTER_FAILURE:
      const newState = new INITIAL_STATE();
      return newState;
    default:
      return state
  }
}