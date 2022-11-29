import React, { useEffect, useState } from "react";
import "./Popupnaz.css";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setUpdate } from "../../redux/slicers/updateAllSlicer";
function Popupnaz({ setShowZnach, idButtonUsluga }) {
  const dispatch = useDispatch();
  const { update } = useSelector((state) => state);
  const [isFreeWorkers, setFreeWorkers] = useState(null);
  useEffect(() => {
    axios({
      method: "post",
      url: "http://localhost:80/PCYRP/api/getFreeWorkers.php",
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then(function (response) {
        setFreeWorkers(response.data);
      })
      .catch(function () {
        console.log("Ошибка");
      });
  }, [update]);
  function deleteUsluga() {
    let formData = new FormData();
    formData.append("id", idButtonUsluga);
    axios({
      method: "post",
      url: "http://localhost:80/PCYRP/api/deleteUsluga.php",
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then(function (response) {
        console.log(response);
        setShowZnach(false);
        dispatch(setUpdate(true));
      })
      .catch(function () {
        console.log("Ошибка");
      });
  }
  return (
    <div className="poup_up">
      <div className="und_popup">
        <h2>Назначение аниматора на услугу</h2>
        <div className="label_input">
          <label htmlFor="">Выбрать свободного аниматора</label>
          <select name="choice">
            <option value="null"></option>
            {isFreeWorkers !== null &&
              isFreeWorkers.map((data) => (
                <>
                  <option value={data.id_workers}>
                    Аниматор №{data.id_workers}
                  </option>
                </>
              ))}
          </select>
          <button>Назначить</button>
          <button onClick={() => deleteUsluga()}>Отказаться</button>
          <button onClick={() => setShowZnach(false)}>Закрыть</button>
        </div>
      </div>
    </div>
  );
}

export default Popupnaz;
