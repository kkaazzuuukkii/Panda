import { useState } from "react";
import button from "../../assets/Icon buttons.png";
import flag from "../../assets/flag.png";
import heart from "../../assets/heart.png";
import notify from "../../assets/Notifications.png";
import chat from "../../assets/chat.png";
import settings from "../../assets/settings.png";
import avatar from "../../assets/avatar.png";

import style from "./style.module.scss";

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <header>
      <div
        className={`${style.header_left} ${
          isNavOpen ? style.header_open : style.header_close
        }`}>
        <img src={button} onClick={() => setIsNavOpen(!isNavOpen)} />
        <input type='text' placeholder='Search' />
      </div>

      <div className={style.header_right}>
        <div className={style.header_opt}>
          <img src={flag} />
          <img src={heart} />
          <img src={notify} />
          <img src={chat} />
          <img src={settings} />
        </div>
        <img src={avatar} className={style.header_avatar} />
      </div>
    </header>
  );
}
