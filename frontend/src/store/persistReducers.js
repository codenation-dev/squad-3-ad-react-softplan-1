import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

export default reducers => {
  const persistedReducer = persistReducer(
    {
      key: "desafioFinal",
      storage,
      whitelist: ["auth"] // se precisar incluir outros no local storage basta incluir como parmetro.
    },
    reducers
  );
  return persistedReducer;
};
