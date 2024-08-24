import style from "./style.module.scss";

import ic17 from "../../assets/icons/ic17.png";
import ic18 from "../../assets/icons/ic18.png";
import good1 from "../../goods/good1.png";
import good2 from "../../goods/good2.png";
import good3 from "../../goods/good3.png";
import good4 from "../../goods/good4.png";
import good5 from "../../goods/good5.png";
import ic19 from "../../assets/icons/ic19.png";
import ic20 from "../../assets/icons/ic20.png";

import ic21 from "../../assets/icons/ic21.png";
import ic22 from "../../assets/icons/ic22.png";
import comp1 from "../../goods/comp1.png";
import comp2 from "../../goods/comp2.png";
import comp3 from "../../goods/comp3.png";
import comp4 from "../../goods/comp4.png";
import comp5 from "../../goods/comp5.png";

export default function Tables() {
  const table1arr = [
    {
      name: "Branded T-Shirt",
      image: good1,
      date: "24 Apr 2021",
      price: "$29.00",
      orders: "62",
      stock: "510",
      amount: "$1,798",
    },
    {
      name: "Bentwood Chair",
      image: good2,
      date: "19 Mar 2021",
      price: "$85.20",
      orders: "35",
      stock: "505",
      amount: "$2,982",
    },
    {
      name: "Borosil Paper Cup",
      image: good3,
      date: "01 Mar 2021",
      price: "$14.00",
      orders: "80",
      stock: "749",
      amount: "$1,120",
    },
    {
      name: "One Seater Sofa",
      image: good4,
      date: "11 Feb 2021",
      price: "$127.50",
      orders: "56",
      stock: "777",
      amount: "$7,140",
    },
    {
      name: "Stillbrid Helmet",
      image: good5,
      date: "17 Jan 2021",
      price: "$54.00",
      orders: "74",
      stock: "805",
      amount: "$3,996",
    },
  ];

  const table2arr = [
    {
      name: "iTest Factory",
      author: "Oliver Tyler",
      image: comp1,
      type: "Bags and Wallets",
      stock: "8547",
      price: "$541,200",
      percent: "32%",
    },
    {
      name: "Digitech Galaxy",
      author: "John Roberts",
      image: comp2,
      type: "Watches",
      stock: "895",
      price: "$75,030",
      percent: "79%",
    },
    {
      name: "Nesta Technologies",
      author: "Harley Fuller",
      image: comp3,
      type: "Bike Acces-sories",
      stock: "3470",
      price: "$45,600",
      percent: "90%",
    },
    {
      name: "Zoetic Fashion",
      author: "James Bowen",
      image: comp4,
      type: "Clothes",
      stock: "5488",
      price: "$29,456",
      percent: "40%",
    },
    {
      name: "Mota4Systems",
      author: "Zoe Dennis",
      image: comp5,
      type: "Furniture",
      stock: "4100",
      price: "11,260",
      percent: "57%",
    },
  ];

  return (
    <div className={style.statistic_tables}>
      <div className={style.statistic_table}>
        <div className={style.table_title1}>
          <div className={style.title_container}>
            <p>Best Selling Products</p>
            <div className={style.title_drop}>
              <p>
                <span className={style.span1}>Sort By:</span>
                <span className={style.span2}>Today</span>
              </p>
              <img src={ic17} className={style.ic17} />
              <img src={ic18} className={style.ic18} />
            </div>
          </div>
        </div>
        {table1arr.map((item) => (
          <div className={style.table_list}>
            <div className={style.list_container}>
              <div className={style.cell1}>
                <img src={item.image} />
                <div className={style.name}>
                  <p className={style.head}>{item.name}</p>
                  <p>{item.date}</p>
                </div>
              </div>

              <div className={style.cell2}>
                <p className={style.head}>{item.price}</p>
                <p>Price</p>
              </div>

              <div className={style.cell3}>
                <p className={style.head}>{item.orders}</p>
                <p>Orders</p>
              </div>

              <div className={style.cell4}>
                <p className={style.head}>{item.stock}</p>
                <p>Stock</p>
              </div>

              <div className={style.cell5}>
                <p className={style.head}>{item.amount}</p>
                <p>Amount</p>
              </div>
            </div>
          </div>
        ))}

        <div className={style.table_pagi}>
          <p>Showing 5 of 25 Results</p>
          <div className={style.pagination}>
            <img src={ic19} className={style.ic19} />
            <p className={style.pagip_act}>1</p>
            <p>2</p>
            <p>3</p>
            <p>...</p>
            <p>10</p>
            <img src={ic20} className={style.ic20} />
          </div>
        </div>
      </div>

      <div className={style.statistic_table}>
        <div className={style.table_title2}>
          <div className={style.title_container2}>
            <p>Top Sellers</p>
            <div className={style.field}>
              <div className={style.dropdown}>
                <div className={style.dropdown_container}>
                  <p>Report</p>
                  <img src={ic21} />
                </div>
              </div>
              <img src={ic18} />
            </div>
          </div>
        </div>
        {table2arr.map((item) => (
          <div className={style.table_list2}>
            <div className={style.list_container2}>
              <div className={style.cell1t}>
                <img src={item.image} />
                <div className={style.name}>
                  <p className={style.head}>{item.name}</p>
                  <p>{item.author}</p>
                </div>
              </div>

              <div className={style.cell2t}>
                <p className={style.head}>
                  Branded <br />
                  T-Shirts
                </p>
              </div>

              <div className={style.cell3t}>
                <p className={style.head}>{item.type}</p>
              </div>

              <div className={style.cell4t}>
                <p className={style.head}>{item.stock}</p>
                <p>Stock</p>
              </div>

              <div className={style.cell5t}>
                <p className={style.head}>{item.price}</p>
              </div>

              <div className={style.cell6t}>
                <p className={style.head}>{item.percent}</p>
                <img src={ic22} />
              </div>
            </div>
          </div>
        ))}
        <div className={style.table_pagi2}>
          <p>Showing 5 of 25 Results</p>
          <div className={style.pagination2}>
            <img src={ic19} className={style.ic19} />
            <p className={style.pagip_act}>1</p>
            <p>2</p>
            <p>3</p>
            <p>...</p>
            <p>10</p>
            <img src={ic20} className={style.ic20} />
          </div>
        </div>
      </div>
    </div>
  );
}
