import { Fragment } from "react";
import "./App.css";
import Counter from "./Components/dispatch/dispatches";
import Navitems from "./Components/Header/header";
import Profile from "./Components/Profile/profile";
function App() {
  return (
    <div className="App">
      <Fragment>
        <Navitems />
        <Profile />
        <Counter />
      </Fragment>
    </div>
  );
}

export default App;
