const action = {
  type: "ADD_CASH",
  payload: 100,
};

const initialState = {
  // первоначальное состояние
  cash: 0,
};

export const cashReducer = (store = initialState, action) => {
  switch (action.type) {
    case "ADD_CASH":
      return { ...store, cash: store.cash + action.payload };
    case "GET_CASH":
      return { ...store, cash: store.cash - action.payload };
  }
};
