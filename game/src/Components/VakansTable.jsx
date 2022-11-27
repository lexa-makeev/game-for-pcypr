import React from "react";
import axios from "axios";
import { setUpdate } from "../redux/slicers/updateAllSlicer";
import { useDispatch } from "react-redux";

function VakansTable({ obj }) {
  const dispatch = useDispatch();
  function setVakans(id) {
    let formData = new FormData();
    formData.append("id", id);

    axios({
      method: "post",
      url: "http://localhost:80/PCYRP/api/setVakans.php",
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

  function deleteVakans(id) {
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
  return (
    <div className="vakans">
      <h2>Вакансии</h2>
      <div className="vakans__wrapper">
        <table>
          <tr>
            <th>Имя</th>
            <th>Отвественность</th>
            <th>Юмор</th>
            <th>Коммуникативность</th>
          </tr>

          {obj !== null &&
            obj.map((data) => (
              <>
                <tr key={data.id_workers}>
                  <td>Аниматор №{data.id_workers}</td>
                  <td>{data.otv}</td>
                  <td>{data.jumor}</td>
                  <td>{data.kommun}</td>
                  <td>
                    <button onClick={() => setVakans(data.id_workers)}>
                      Принять
                    </button>
                    <button onClick={() => deleteVakans(data.id_workers)}>
                      Отклонить
                    </button>
                  </td>
                </tr>
              </>
            ))}
        </table>
      </div>
    </div>
  );
}

export default VakansTable;
