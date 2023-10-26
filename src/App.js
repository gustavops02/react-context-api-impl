import "./App.css";
import Counter from "./components/Counter";
import Header from "./components/Header";
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./reducers/CounterReducer";
import { Provider } from "react-redux";

function App() {
  const store = configureStore({reducer: counterReducer});

  return (
    <div className="App">
      <Provider store={store}>
        <Header />
        <Counter />
      </Provider>
    </div>
  );
}

export default App;
