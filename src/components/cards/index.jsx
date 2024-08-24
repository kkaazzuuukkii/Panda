import style from "./style.module.scss";

import ic15 from "../../assets/icons/ic15.png";
import ic16 from "../../assets/icons/ic16.png";

export default function Cards() {
  return (
    <div className={style.statistic_cards}>
      {[...Array(4)].map(() => (
        <div className={style.statistic_card}>
          <div className={style.statistic_container}>
            <div className={style.statistic_link}>
              <p className={style.stat_profit}>Total Profit</p>
              <p>$559.25k</p>
              <a href='#'>View all orders</a>
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
