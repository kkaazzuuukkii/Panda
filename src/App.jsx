import React from "react";
import { useSelector } from "react-redux";
import style from "./test.module.scss";

import Header from "./components/header";
import Nav from "./components/navigation";
import Cards from "./components/cards";
import Tables from "./components/tables";

export default function App() {
  const isThemeAct = useSelector((state) => state.theme.isThemeAct);

  return (
    <div className={isThemeAct ? style.container_dark : style.container}>
      <Header />
      <Nav />
      <Cards />
      <Tables />
    </div>
  );
}
