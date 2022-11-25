import React from "react";

function Workers({ obj }) {
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
              <tr>
                <td>Аниматор №{data.id_workers}</td>
                <td>{data.otv}</td>
                <td>{data.jumor}</td>
                <td>{data.kommun}</td>
                <td>Выполняет</td>
              </tr>
            ))}
        </table>
      </div>
    </div>
  );
}

export default Workers;
