const initialState = {
  // первоначальное состояние
  cash: 1000,
};

export const cashReducer = (store = initialState, action) => {
  switch (action.type) {
    case "ADD_CASH":
      return { ...store, cash: store.cash + action.payload }; // Добавляем деньги на счёт
    case "GET_CASH":
      return { ...store, cash: store.cash - action.payload }; // Снимаем деньги со счёта
    default:
      return store;
  }
};
