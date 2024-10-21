import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { store } from "./store/store";
import { Provider } from "react-redux"; // Изменено: импорт из "react-redux"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* добавили состояние глобально*/}
      <App />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
