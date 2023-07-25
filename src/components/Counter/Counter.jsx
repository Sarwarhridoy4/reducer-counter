import { useReducer } from "react";
import "./Counter.css";

const Counter = () => {
  const initialCount = 0;

  const reducer = (state, action) => {
    switch (action.type) {
      case "INCREMENT":
        return state + action.payload;
      case "DECREMENT":
        return state - action.payload;
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialCount);

  return (
    <div className='counter-container'>
      <h1>Beautiful Counter</h1>
      <div className='counter'>
        <button onClick={() => dispatch({ type: "DECREMENT", payload: 2 })}>-</button>
        <span>{state}</span>
        <button onClick={() => dispatch({ type: "INCREMENT", payload: 2 })}>+</button>
      </div>
    </div>
  );
};

export default Counter;
