import React from "react";
import axios from "axios";

function NewVakans() {
  function random() {
    let min = 1.1,
      max = 4.99;
    return (Math.random() * (max - min) + min).toFixed(2);
  }

  function newVakans() {
    let formData = new FormData();
    formData.append("otv", random());
    formData.append("jumor", random());
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
      })
      .catch(function () {
        console.log("Ошибка");
      });
  }
  return (
    <div className="forc_major">
      <h2>Добавить новую вакансию</h2>
      <div className="btn_major">
        <button className="new_major" onClick={() => newVakans()}>
          Добавить
        </button>
      </div>
    </div>
  );
}

export default NewVakans;
