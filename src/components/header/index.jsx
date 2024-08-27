import style from "./style.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { navReducer } from "../../redux/slices/navSlice";
import { themeReducer } from "../../redux/slices/themeSlice";

import button from "../../assets/Icon buttons.png";
import flag from "../../assets/flag.png";
import heart from "../../assets/heart.png";
import notify from "../../assets/Notifications.png";
import chat from "../../assets/chat.png";
import settings from "../../assets/settings.png";
import avatar from "../../assets/avatar.png";

export default function Header() {
  const dispatch = useDispatch();
  const isNavOpen = useSelector((state) => state.nav.isNavVisible);
  const isThemeAct = useSelector((state) => state.theme.isThemeAct);

  return (
    <header className={isThemeAct ? style.header_dark : ""}>
      <div
        className={`${style.header_left} ${
          isNavOpen ? style.header_open : style.header_close
        }`}>
        <img
          src={button}
          onClick={() => dispatch(navReducer())}
          alt='Toggle Nav'
        />
        <input type='text' placeholder='Search' />
      </div>

      <div className={style.header_right}>
        <div className={style.header_opt}>
          <img src={flag} alt='Flag' />
          <img src={heart} alt='Heart' />
          <img src={notify} alt='Notify' />
          <img src={chat} alt='Chat' />
          <img
            src={settings}
            alt='Settings'
            onClick={() => dispatch(themeReducer())}
          />
        </div>
        <img src={avatar} className={style.header_avatar} alt='Avatar' />
      </div>
    </header>
  );
}
