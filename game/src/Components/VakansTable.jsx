import React from "react";

function VakansTable({ obj }) {
  console.log(obj);
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
                <tr>
                  <td>Аниматор №{data.id_workers}</td>
                  <td>{data.otv}</td>
                  <td>{data.jumor}</td>
                  <td>{data.kommun}</td>
                  <td>
                    <button>Принять</button>
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
