import { useDispatch, useSelector } from "react-redux";

export default function Counter() {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.Counter);
  const incrementhandler = () => {
    dispatch({ type: "incrementby2" });
  };
  const decrementhandler = () => {
    dispatch({ type: "Decrementby2" });
  };
  const togglecout = () => {};
  return (
    <div>
      <main>
        <h1>Reduc Counter</h1>
        <div>{counter}</div>
        <div>
          <button onClick={incrementhandler}>Icrement</button>
          <button onClick={decrementhandler}>Decrement</button>
        </div>
        <button onClick={togglecout}></button>
      </main>
    </div>
  );
}
