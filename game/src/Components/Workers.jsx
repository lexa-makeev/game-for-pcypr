import React from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setUpdate } from "../redux/slicers/updateAllSlicer";

function Workers({ obj }) {
  const dispatch = useDispatch();
  function deleteWorkers(id) {
    let formData = new FormData();
    formData.append("id", id);

    axios({
      method: "post",
      url: "http://localhost:80/PCYRP/api/deleteVakans.php",
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
  function deleteWork(id, id_usluga) {
    let formData = new FormData();
    formData.append("id", id);
    formData.append("id_usluga", id_usluga);
    axios({
      method: "post",
      url: "http://localhost:80/PCYRP/api/deleteWork.php",
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
  return (
    <div className="vakans">
      <h2>Текущие работники</h2>
      <div className="vakans__wrapper">
        <table>
          <tr>
            <th>Имя</th>
            <th>Отвественность</th>
            <th>Юмор</th>
            <th>Коммуникативность</th>
            <th>Заказ</th>
          </tr>
          {obj !== null &&
            obj.map((data) => (
              <tr key={data.id_workers}>
                <td>Аниматор №{data.id_workers}</td>
                <td>{data.otv}</td>
                <td>{data.jumor}</td>
                <td>{data.kommun}</td>
                <td>
                  {data.usluga_id_usluga !== null ? "Выполняет" : "Свободен"}
                </td>
                <td>
                  <button onClick={() => deleteWorkers(data.id_workers)}>
                    Уволить
                  </button>
                </td>
                <td>
                  {data.usluga_id_usluga !== null && (
                    <button
                      onClick={() =>
                        deleteWork(data.id_workers, data.usluga_id_usluga)
                      }
                    >
                      Закончить
                    </button>
                  )}
                </td>
              </tr>
            ))}
        </table>
      </div>
    </div>
  );
}

export default Workers;
