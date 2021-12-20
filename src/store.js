import { action, createStore } from "easy-peasy";

const store = createStore({
  bill: 0,
  tip: null,
  people: 0,

  updateBill: action((state, payload) => {
    state.bill = payload;
  }),
  updateTip: action((state, payload) => {
    state.tip = payload;
  }),
  updatePeople: action((state, payload) => {
    state.people = payload;
  }),

  // addTodo: action((state, payload) => {
  //   state.todos.push(payload);
  // }),
});

export default store;
