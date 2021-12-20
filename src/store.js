import { action, createStore, computed } from "easy-peasy";

const store = createStore({
  bill: 0,
  tip: 0,
  people: 1,
  hasBeenUsed: computed((state) => {
    return state.bill !== 0 || state.tip !== 0 || state.people !== 1;
  }),

  reset: action((state) => {
    state.bill = 0;
    state.tip = 0;
    state.people = 1;
  }),

  updateBill: action((state, payload) => {
    if (!payload) {
      state.bill = 0;
    } else {
      state.bill = +payload;
    }
  }),
  updateTip: action((state, payload) => {
    state.tip = payload;
  }),
  updatePeople: action((state, payload) => {
    if (payload < 1) {
      state.people = 1;
    } else {
      state.people = payload;
    }
  }),
});

export default store;
