import React from "react";
import { Provider } from "react-redux";

import configureStore from "./store/index";
import MainComponent from "./components/ImageGrid";

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <MainComponent />
    </Provider>
  );
}

export default App;
