import React from "react";
import Header from "./Components/Header/Header";
import "./App.css";
function App() {
  return (
    <>
      <Header />

      <section id="main">
        <div className="container">
          <div className="forc_major">
            <h2>Уменьшить цены на услугу и повысить спрос:</h2>
            <div className="btn_major">
              <button className="new_major">Начать</button>
              <button className="stop_major">Остановить</button>
            </div>
          </div>
          <div className="wrapper__up">
            <textarea name="null" id="" cols="30" rows="10"></textarea>
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
                  <tr>
                    <td>Аниматор №5</td>
                    <td>3.0</td>
                    <td>4.0</td>
                    <td>5.0</td>
                    <td>
                      <button>Принять</button>
                    </td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
          <div className="wrapper__down">
            <div className="p_down">
              <p>
                Текущая цена за услугу: <span>10000 рублей</span>
              </p>
              <p>
                В работе аниматоров: <span>3</span>
              </p>
              <p>
                Уменьшена цена на услугу и повышен спрос:
                <span>Нет</span>
              </p>
            </div>
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
                  <tr>
                    <td>Аниматор №5</td>
                    <td>3.0</td>
                    <td>4.0</td>
                    <td>5.0</td>
                    <td>Выполняет</td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
