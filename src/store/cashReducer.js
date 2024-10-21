const initialState = {
  // первоначальное состояние
  cash: 1000,
};

// Принимаем два аргумента ( состояние и функция )
export const cashReducer = (store = initialState, action) => {
  // Событие смотрит на условие ключа type
  switch (action.type) {
    case "ADD_CASH":
      return { ...store, cash: store.cash + action.payload }; // Добавляем деньги на счёт. Ещё мы тут распарсили initialState, который равен store
    case "GET_CASH":
      return { ...store, cash: store.cash - action.payload }; // Снимаем деньги со счёта
    default:
      return store;
  }
};
