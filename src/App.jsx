import "./App.css";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const cash = useSelector((state) => state.cash); // Вытаскиваем состояние
  const dispatch = useDispatch();

  const addCash = (cash) => {
    dispatch({ type: "ADD_CASH", payload: cash }); // Передаём объект с ключами
  };

  const getCash = (cash) => {
    dispatch({ type: "GET_CASH", payload: cash });
  };

  return (
    <div className="App">
      <div className="container">
        <h1>{cash}</h1>
        <div className="buttons">
          <button onClick={() => addCash(+prompt())}>Положить деньги</button>
          <button onClick={() => getCash(+prompt())}>Снять деньги</button>
        </div>
      </div>
    </div>
  );
}

export default App;
