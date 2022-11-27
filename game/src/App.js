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
  const [isUsluga, setUsluga] = useState(null);
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
    axios({
      method: "post",
      url: "http://localhost:80/PCYRP/api/getUsluga.php",
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then(function (response) {
        setUsluga(response.data);
      })
      .catch(function () {
        console.log("Ошибка");
      });
  }, [update]);
  function newUsluga() {
    if (activeMajor === true) {
      updateCost(6000);
    } else {
      updateCost(10000);
    }
    axios({
      method: "post",
      url: "http://localhost:80/PCYRP/api/newUsluga.php",
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then(function (response) {
        dispatch(setUpdate(true));
        console.log(response);
      })
      .catch(function () {
        console.log("Ошибка");
      });
  }
  function updateCost(cost) {
    let formData = new FormData();
    formData.append("cost", cost);
    axios({
      method: "post",
      url: "http://localhost:80/PCYRP/api/updateCost.php",
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then(function (response) {
        console.log(response);
        dispatch(setUpdate(true));
      })
      .catch(function () {
        console.log("Ошибка");
      });
  }
  const [valuemin, setMin] = useState(140000);
  const [valuemax, setMax] = useState(250000);
  function randomTimer() {
    let min = valuemin,
      max = valuemax;
    return (Math.random() * (max - min) + min).toFixed(1);
  }
  const [Timer, setTimer] = useState(140000);
  const [RefreshTimer, setRefreshTimer] = useState(false);
  const [activeMajor, setActiveMajor] = useState(false);
  useEffect(() => {
    setRefreshTimer(false);
    setTimer(randomTimer());
  }, [RefreshTimer]);
  useInterval(() => {
    setRefreshTimer(true);
    console.log(Timer);
    newUsluga();
  }, Timer);
  function setForcmajor() {
    setRefreshTimer(true);
    setMin(60000);
    setMax(100000);
    setActiveMajor(true);
  }
  function delForcmajor() {
    setRefreshTimer(true);
    setMin(140000);
    setMax(250000);
    setActiveMajor(false);
  }
  return (
    <>
      <Header obj={isInfo} />
      <section id="main">
        <div className="container">
          <div className="all_forcmajor">
            <div className="forc_major">
              <h2>Уменьшить цены на услугу и повысить спрос:</h2>
              <div className="btn_major">
                <button className="new_major" onClick={() => setForcmajor()}>
                  Начать
                </button>
                <button className="stop_major" onClick={() => delForcmajor()}>
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
                  {isUsluga !== null &&
                    isUsluga.map((data) => (
                      <tr key={data.id_usluga}>
                        <td>
                          Услуга № <span>{data.id_usluga}</span>
                        </td>
                        <td>
                          Цена <span>{data.cost}</span>
                        </td>
                        <td>
                          <button>Принять</button>
                        </td>
                      </tr>
                    ))}
                </table>
              </div>
            </div>
            <VakansTable obj={isVakans} />
          </div>
          <div className="wrapper__down">
            <div className="p_down">
              <p>
                Текущая цена за услугу:{" "}
                <span>
                  {activeMajor === false ? "10000 рублей" : "6000 рублей"}
                </span>
              </p>
              <p>
                В работе аниматоров: <span>3</span>
              </p>
              <p>
                Уменьшена цена на услугу и повышен спрос:
                <span>{activeMajor === false ? "Нет" : "Да"}</span>
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
