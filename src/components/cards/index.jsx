import style from "./style.module.scss";
import { useSelector } from "react-redux";

import ic15 from "../../assets/icons/ic15.png";
import ic16 from "../../assets/icons/ic16.png";

export default function Cards() {
  const isThemeAct = useSelector((state) => state.theme.isThemeAct);

  const isMemAct1 = useSelector((state) => state.mem.isMemAct1);
  const isMemAct2 = useSelector((state) => state.mem.isMemAct2);
  const isMemAct3 = useSelector((state) => state.mem.isMemAct3);
  const memText = useSelector((state) => state.mem.memText);
  const memHref1 = useSelector((state) => state.mem.memHref1);
  const memHref2 = useSelector((state) => state.mem.memHref2);
  const memHref3 = useSelector((state) => state.mem.memHref3);

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
              <a
                href={
                  isMemAct1
                    ? memHref1
                    : isMemAct2
                    ? memHref2
                    : isMemAct3
                    ? memHref3
                    : "#"
                }
                target='_blank'>
                {isMemAct1
                  ? memText
                  : isMemAct2
                  ? memText
                  : isMemAct3
                  ? memText
                  : "View all orders"}
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
