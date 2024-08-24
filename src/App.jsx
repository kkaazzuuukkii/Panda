import { Provider } from "react-redux";
import store from "./store.js";

import Header from "./components/header";
import Nav from "./components/navigation";
import Cards from "./components/cards";
import Tables from "./components/tables";

import style from "./test.module.scss";

export default function App() {
  return (
    <Provider store={store}>
      <div className={style.container}>
        <Header />
        <Nav />

        <main>
          <Cards />
          <Tables />
        </main>
      </div>
    </Provider>
  );
}
