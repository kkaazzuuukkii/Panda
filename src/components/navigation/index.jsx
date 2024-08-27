import style from "./style.module.scss";
import { useSelector } from "react-redux";

import ic1 from "../../assets/icons/ic1.png";
import ic2 from "../../assets/icons/ic2.png";
import ic3 from "../../assets/icons/ic3.png";
import ic4 from "../../assets/icons/ic4.png";
import ic5 from "../../assets/icons/ic5.png";
import ic6 from "../../assets/icons/ic6.png";
import ic7 from "../../assets/icons/ic7.png";
import ic8 from "../../assets/icons/ic8.png";
import ic9 from "../../assets/icons/ic9.png";
import ic10 from "../../assets/icons/ic10.png";
import ic11 from "../../assets/icons/ic11.png";
import ic12 from "../../assets/icons/ic12.png";
import ic13 from "../../assets/icons/ic13.png";
import ic14 from "../../assets/icons/ic14.png";

import more from "../../assets/more.png";
import more_act from "../../assets/more_act.png";

export default function Nav() {
  const isNavVisible = useSelector((state) => state.nav.isNavVisible);
  const isThemeAct = useSelector((state) => state.theme.isThemeAct);

  const array = [
    { text: "Sass", style: style.li },
    { text: "Finance", style: style.li },
    { text: "Sass", style: style.li_act },
    { text: "Finance", style: style.li },
    { text: "Finance", style: style.li },
  ];
  const main = [
    {
      text: "Dashboard",
      icon: ic1,
      style: style.component,
      more: "",
      mores: "",
    },
    {
      text: "Calendar",
      icon: ic2,
      style: style.component,
      more: "",
      mores: "",
    },
    {
      text: "Email",
      icon: ic3,
      style: style.component,
      more: more,
      mores: style.more,
    },
  ];
  const components = [
    {
      text: "Ui Elements",
      icon: ic4,
      style: style.component,
      more: more,
      mores: style.more,
    },
    {
      text: "Forms",
      icon: ic5,
      style: style.component,
      more: more,
      mores: style.more,
    },
    {
      text: "Charts",
      icon: ic6,
      style: style.component,
      more: more,
      mores: style.more,
    },
    {
      text: "Tables",
      icon: ic7,
      style: style.component,
      more: more,
      mores: style.more,
    },
    {
      text: "Icons",
      icon: ic8,
      style: style.component_act,
      more: more_act,
      mores: style.more,
    },
  ];
  const extras = [
    {
      text: "Layouts",
      icon: ic10,
      style: style.component,
      more: more,
      mores: style.more,
    },
    {
      text: "Authentication",
      icon: ic11,
      style: style.component,
      more: more,
      mores: style.more,
    },
    {
      text: "Experienxes",
      icon: ic12,
      style: style.component,
      more: more,
      mores: style.more,
    },
    {
      text: "File Manager",
      icon: ic13,
      style: style.component,
      more: more,
      mores: style.more,
    },
    {
      text: "E-Commerce",
      icon: ic14,
      style: style.component,
      more: more,
      mores: style.more,
    },
  ];

  return (
    <nav
      className={`${isNavVisible ? style.nav_open : style.nav_close} ${
        isThemeAct ? style.nav_dark : ""
      }`}>
      <div className={style.logo_container}>
        <p className={style.header_logo}>Panda</p>
      </div>
      <div className={style.nav_container}>
        <div className={style.nav_content}>
          <div className={style.main}>
            <h1>Main</h1>

            {main.map((v, i) => (
              <div key={i} className={v.style}>
                <img src={v.icon} className={style.component_icon} />
                <a href='#'>{v.text}</a>
                <img src={v.more} className={v.mores} />
              </div>
            ))}
          </div>

          <div className={style.components}>
            <h1>Components</h1>

            {components.map((v, i) => (
              <div key={i} className={v.style}>
                <img src={v.icon} className={style.component_icon} />
                <a href='#'>{v.text}</a>
                <img src={v.more} className={v.mores} />
              </div>
            ))}
            <ul>
              {array.map((v, i) => (
                <li key={i} className={v.style}>
                  <a href='#'>{v.text}</a>
                </li>
              ))}
            </ul>
            <div className={style.component}>
              <img src={ic9} className={style.component_icon} />
              <a href='#'>Maps</a>
              <img src={more} className={style.more} />
            </div>
          </div>

          <div className={style.extras}>
            <h1>Extras</h1>

            {extras.map((v, i) => (
              <div key={i} className={v.style}>
                <img src={v.icon} className={style.component_icon} />
                <a href='#'>{v.text}</a>
                <img src={v.more} className={v.mores} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
