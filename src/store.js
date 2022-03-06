import { createStore, action } from "easy-peasy";

const store = createStore({
  rating: null,
  upDateRating: action((state, payload) => {
    state.rating = payload;
  }),
  adults: 2,
  upDateAdults: action((state, payload) => {
    state.adults = payload;
  }),
  children: null,
  upDateChildren: action((state, payload) => {
    state.children = payload;
  }),
});

export default store;
