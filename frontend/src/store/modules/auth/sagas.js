import { takeLatest, call, put, all } from "redux-saga/effects";

import history from "../../../services/history";
import { login } from "../../../services/api";
import { signInSuccess } from "./actions";

export function* signIn({ payload }) {
  const { email, password } = payload;

  const response = yield call(login.post, "login", {
    email,
    password
  });

  const { token, user } = response.data;
  //promisse
  yield put(signInSuccess(token, user));

  history.push("/dashboard");
}

export default all([takeLatest("@auth/SIGN_IN_REQUEST", signIn)]);
