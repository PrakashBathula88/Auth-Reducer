import { createStore } from "redux";

const initalstate = { counter: 0 };

const countreducer = (state = initalstate, action) => {
  switch (action.type) {
    case "increment":
      return {
        ...state,
        counter: state.counter + 1,
      };

    case "decrement":
      return {
        ...state,

        counter: state.counter - 1,
      };

    case "incrementby2":
      return {
        ...state,
        couter: state.counter + 2,
      };

    case "Decrementby2":
      return {
        ...state,
        counter: state.counter - 2,
      };
      default:
        return state;
  }
};

const store = createStore(countreducer);

console.log(state.getState());

store.dispatch({type: "increment"});
console.log(store.getState());

store.dispatch({type: "decrement"});
console.log(store.getState());

store.dispatch({type: "incrementby2"});
console.log(store.getState());

store.dispatch({type: "Decrementby2"});
console.log(store.getState());