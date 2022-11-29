import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setUpdate } from "../redux/slicers/updateAllSlicer";
import useInterval from "@use-it/interval";

function NewVakans() {
  const dispatch = useDispatch();
  function random() {
    let min = 2.1,
      max = 4.99;
    return (Math.random() * (max - min) + min).toFixed(2);
  }
  function randomJumor() {
    let min = 3.1,
      max = 4.99;
    return (Math.random() * (max - min) + min).toFixed(2);
  }
  function new_vak() {
    let formData = new FormData();
    formData.append("otv", random());
    formData.append("jumor", randomJumor());
    formData.append("kommun", random());
    formData.append("new", "true");

    axios({
      method: "post",
      url: "http://localhost:80/PCYRP/api/newVakans.php",
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
  function randomTimer() {
    let min = 240000,
      max = 300000;
    return (Math.random() * (max - min) + min).toFixed(1);
  }
  const [Timer, setTimer] = useState(140000);
  const [RefreshTimer, setRefreshTimer] = useState(false);

  useEffect(() => {
    setRefreshTimer(false);
    setTimer(randomTimer());
  }, [RefreshTimer]);
  useInterval(() => {
    console.log(Timer);
    setRefreshTimer(true);
    new_vak();
  }, Timer);
  return (
    <div className="forc_major">
      <h2>Добавить новую вакансию</h2>
      <div className="btn_major">
        <button className="new_major" onClick={() => new_vak()}>
          Добавить
        </button>
      </div>
    </div>
  );
}

export default NewVakans;
