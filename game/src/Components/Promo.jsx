import React from "react";
import axios from "axios";
import { setUpdate } from "../redux/slicers/updateAllSlicer";
import { useDispatch } from "react-redux";

function Promo(props) {
  const dispatch = useDispatch();
  function buyReklama() {
    axios({
      method: "post",
      url: "http://localhost:80/PCYRP/api/promo.php",
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
      <h2>Купить рекламу за 30000р.</h2>
      <div className="btn_major">
        <button className="new_major" onClick={() => buyReklama()}>
          Купить
        </button>
      </div>
    </div>
  );
}

export default Promo;
