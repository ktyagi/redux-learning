import React from "react";
import { render } from "react-dom";
import Counter from "./Counter";
import { createStore } from "redux";
import { Provider } from "react-redux";

import "./index.css";
const initialState = {
  count: 0
};
const App = () => (
  <div>
    <Provider store={store}>
      <Counter />
    </Provider>
  </div>
);


function reducer(state = initialState, action) {
  console.log("reducer", state, action);
  // reducer undefined Object {type: "@@redux/INITh.p.s.r.9.k"}
  switch(action.type) {
    case 'INCREMENT':
      return {
        count: state.count + 1
      };
    case 'DECREMENT':
      return {
        count: state.count - 1
      };
    case 'RESET':
      return {
        count: 0
      };
    default:
      return state;
  }
}

const store = createStore(reducer);
console.log(store);
// Object {dispatch: function dispatch(), subscribe: function subscribe(), getState: function getState(), replaceReducer: function replaceReducer()}
// store.dispatch({ type: "INCREMENT" });
// store.dispatch({ type: "INCREMENT" });
// store.dispatch({ type: "DECREMENT" });
// store.dispatch({ type: "RESET" });
render(<App />, document.getElementById("root"));

// const App = () => (
//   <div>
//     <Counter/>
//   </div>
// );
