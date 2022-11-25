import React, { useEffect, useState } from "react";
import Header from "./Components/Header/Header";
import "./App.css";
import axios from "axios";
import VakansTable from "./Components/VakansTable";
import Workers from "./Components/Workers";
import NewVakans from "./Components/NewVakans";
import useInterval from "@use-it/interval";

import { useDispatch, useSelector } from "react-redux";
import { setUpdate } from "./redux/slicers/updateAllSlicer";
function App() {
  const dispatch = useDispatch();
  const { update } = useSelector((state) => state);
  const [isInfo, setInfo] = useState("");
  const [isVakans, setVakans] = useState(null);
  const [isWorkers, setWorkers] = useState(null);
  const [isTime, setTime] = useState(60000);
  useEffect(() => {
    dispatch(setUpdate(false));
    let formData = new FormData();
    axios({
      method: "post",
      url: "http://localhost:80/PCYRP/api/getInfo.php",
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then(function (response) {
        setInfo(response.data);
      })
      .catch(function () {
        console.log("Ошибка");
      });
    axios({
      method: "post",
      url: "http://localhost:80/PCYRP/api/getVakans.php",
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then(function (response) {
        setVakans(response.data);
      })
      .catch(function () {
        console.log("Ошибка");
      });
    axios({
      method: "post",
      url: "http://localhost:80/PCYRP/api/getWorkers.php",
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then(function (response) {
        setWorkers(response.data);
      })
      .catch(function () {
        console.log("Ошибка");
      });
  }, [update]);

  useInterval(() => {
    alert("1");
  }, isTime);
  function setForcmajor() {}
  return (
    <>
      <Header obj={isInfo} />
      <section id="main">
        <div className="container">
          <div className="all_forcmajor">
            <div className="forc_major">
              <h2>Уменьшить цены на услугу и повысить спрос:</h2>
              <div className="btn_major">
                <button className="new_major" onClick={() => setTime(6000)}>
                  Начать
                </button>
                <button className="stop_major" onClick={() => setTime(60000)}>
                  Остановить
                </button>
              </div>
            </div>
            <NewVakans />
          </div>

          <div className="wrapper__up">
            <div className="vakans">
              <h2>Заказ услуги</h2>
              <div className="vakans__wrapper uslug_wrapper">
                <table>
                  <tr>
                    <th>№</th>
                    <th>Цена</th>
                    <th>Действие</th>
                  </tr>
                  <tr>
                    <td>
                      Услуга № <span></span>
                    </td>
                    <td>
                      Цена <span></span>
                    </td>
                    <td>
                      <button>Принять</button>
                    </td>
                  </tr>
                </table>
              </div>
            </div>
            <VakansTable obj={isVakans} />
          </div>
          <div className="wrapper__down">
            <div className="p_down">
              <p>
                Текущая цена за услугу: <span>10000 рублей</span>
              </p>
              <p>
                В работе аниматоров: <span>3</span>
              </p>
              <p>
                Уменьшена цена на услугу и повышен спрос:
                <span>{isTime === 60000 ? "Нет" : "Да"}</span>
              </p>
            </div>
            <Workers obj={isWorkers} />
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
