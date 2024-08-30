import style from "./style.module.scss";
import { useSelector } from "react-redux";

import ic15 from "../../assets/icons/ic15.png";
import ic16 from "../../assets/icons/ic16.png";

export default function Cards() {
  const isThemeAct = useSelector((state) => state.theme.isThemeAct);

  const link = useSelector((state) => state.mem.link);

  return (
    <div
      className={`${style.statistic_cards} ${
        isThemeAct ? style.statistic_cards_dark : ""
      }`}>
      {[...Array(4)].map((v, i) => (
        <div key={i} className={style.statistic_card}>
          <div className={style.statistic_container}>
            <div className={style.statistic_link}>
              <p className={style.stat_profit}>Total Profit</p>
              <p>$559.25k</p>
              <a href={link} target='_blank'>
                {link ? "нажми на меня!1!" : "View all orders"}
              </a>
            </div>
            <div className={style.statistic_base}>
              <div>
                <img src={ic15} />
                <p>+16.24%</p>
              </div>
              <img src={ic16} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
