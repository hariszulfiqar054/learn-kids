import React from "react";
import Stack from "./src/navigation/StackNavigation";
import { createStore } from "redux";
import { Provider } from "react-redux";
import Reducer from "./src/redux/Reducer";

export default function App() {
  const store = createStore(Reducer);
  return (
    <Provider store={store}>
      <Stack />
    </Provider>
  );
}
