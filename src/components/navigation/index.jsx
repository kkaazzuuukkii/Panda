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

import style from "./style.module.scss";

export default function Nav() {
  const array = [
    { text: "Sass", style: style.li },
    { text: "Finance", style: style.li },
    { text: "Sass", style: style.li_act },
    { text: "Finance", style: style.li },
    { text: "Finance", style: style.li },
  ];
  return (
    <nav className={style.nav_open}>
      <div className={style.logo_container}>
        <p className={style.header_logo}>Panda</p>
      </div>
      <div className={style.nav_container}>
        {/* <div className={style.line2}></div> */}

        <div className={style.nav_content}>
          <div className={style.main}>
            <h1>Main</h1>
            <div className={style.component}>
              <img src={ic1} className={style.component_icon} />
              <a href='#'>Dashboard</a>
            </div>
            <div className={style.component}>
              <img src={ic2} className={style.component_icon} />
              <a href='#'>Calendar</a>
            </div>
            <div className={style.component}>
              <img src={ic3} className={style.component_icon} />
              <a href='#'>Email</a>
              <img src={more} className={style.more} />
            </div>
          </div>

          <div className={style.components}>
            <h1>Components</h1>
            <div className={style.component}>
              <img src={ic4} className={style.component_icon} />
              <a href='#'>Ui Elements</a>
              <img src={more} className={style.more} />
            </div>
            <div className={style.component}>
              <img src={ic5} className={style.component_icon} />
              <a href='#'>Forms</a>
              <img src={more} className={style.more} />
            </div>
            <div className={style.component}>
              <img src={ic6} className={style.component_icon} />
              <a href='#'>Charts</a>
              <img src={more} className={style.more} />
            </div>
            <div className={style.component}>
              <img src={ic7} className={style.component_icon} />
              <a href='#'>Tables</a>
              <img src={more} className={style.more} />
            </div>
            <div className={style.component_act}>
              <img src={ic8} className={style.component_icon} />
              <a href='#'>Icons</a>
              <img src={more_act} className={style.more_act} />
            </div>
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
            <div className={style.component}>
              <img src={ic10} className={style.component_icon} />
              <a href='#'>Layouts</a>
              <img src={more} className={style.more} />
            </div>
            <div className={style.component}>
              <img src={ic11} className={style.component_icon} />
              <a href='#'>Authentication</a>
              <img src={more} className={style.more} />
            </div>
            <div className={style.component}>
              <img src={ic12} className={style.component_icon} />
              <a href='#'>Experienxes</a>
              <img src={more} className={style.more} />
            </div>
            <div className={style.component}>
              <img src={ic13} className={style.component_icon} />
              <a href='#'>File Manager</a>
              <img src={more} className={style.more} />
            </div>
            <div className={style.component}>
              <img src={ic14} className={style.component_icon} />
              <a href='#'>E-Commerce</a>
              <img src={more} className={style.more} />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
