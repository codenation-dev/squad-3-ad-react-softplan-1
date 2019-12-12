export function signInRequest(email, pwd) {
  return {
    type: "@auth/SIGN_IN_REQUEST",
    payload: { email, pwd }
  };
}

export function signInSuccess(token) {
  return {
    type: "@auth/SIGN_IN_SUCCESS",
    payload: { token }
  };
}

export function signFailure() {
  return {
    type: "@auth/SIGN_FAILURE"
  };
}
