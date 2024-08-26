import { useState } from "react";
import { Provider } from "react-redux";
import store from "./store.js";
import style from "./test.module.scss";

import Header from "./components/header";
import Nav from "./components/navigation";
import Cards from "./components/cards";
import Tables from "./components/tables";

export default function App() {
  const [isDark, setIsDark] = useState(false);

  return (
    <Provider store={store}>
      <div className={isDark ? style.container_dark : style.container}>
        <Header isDark={isDark} setIsDark={setIsDark} />
        <Nav isDark={isDark} setIsDark={setIsDark} />

        <main>
          <Cards isDark={isDark} setIsDark={setIsDark} />
          <Tables isDark={isDark} setIsDark={setIsDark} />
        </main>
      </div>
    </Provider>
  );
}
