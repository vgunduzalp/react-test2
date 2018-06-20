const USER_INIT = 'USER_INIT';

//action
export function userInit(user = {}) {
  return {
    type: USER_INIT,
    payload: user,
  };
}

//reducer
export default function userReducer(state = {}, action) {
  switch (action.type) {
    case USER_INIT:
      return Object.assign({}, action.payload);
      break;

    default:
      return state;
      break;
  }
}
