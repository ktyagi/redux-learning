 const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
 const RESET = "RESET";

export function increment() {
  return { type: INCREMENT };
}

export const decrement = () => ({ type: DECREMENT });

export const reset = () => ({ type: RESET });