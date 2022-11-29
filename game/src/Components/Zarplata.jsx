import React from "react";
import axios from "axios";
import { setUpdate } from "../redux/slicers/updateAllSlicer";
import { useDispatch } from "react-redux";

function Zarplata(props) {
  const dispatch = useDispatch();
  function SetZarplata() {
    axios({
      method: "post",
      url: "http://localhost:80/PCYRP/api/zarplata.php",
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
  return (
    <div className="forc_major">
      <h2>Выплатить всем зарплату</h2>
      <div className="btn_major">
        <button className="new_major" onClick={() => SetZarplata()}>
          Выплатить
        </button>
      </div>
    </div>
  );
}

export default Zarplata;
