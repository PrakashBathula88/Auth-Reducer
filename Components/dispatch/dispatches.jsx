import { useDispatch, useSelector } from "react-redux";
import { counterActions } from "../Listitem/List"
import styles from "../dispatch/dispatch.css"
const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter);
  const show = useSelector((state) => state.counter.showCounter);

  const incrementhandler = () => {
    dispatch(counterActions.increment());
  };
  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };
  const incrementingHandler = () => {
    dispatch(counterActions.increment(50));
  };

  const toggleHandlerinc = () => {
    dispatch(counterActions.toggle());
  };
  return (
    <div className={styles.counter}>
      {show && <div className={styles.counterDisplay}>Counter: {counter}</div>}
      <div className={styles.buttonGroup}>
        <button onClick={incrementhandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
        <button onClick={incrementingHandler}>Increment by 50</button>
        <button onClick={toggleHandlerinc}>Toggle Counter</button>
      </div>
    </div>
  );
};

export default Counter;
