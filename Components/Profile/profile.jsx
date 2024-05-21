import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { authActions } from "../Listitem/List";
export default function Profile() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  const loginhandler = () => {
    dispatch(authActions.login());
  };

  const logouhandler = () => {
    dispatch(authActions.logout());
  };
  return (
    <div>
      {isAuthenticated ? (
        <div>
          <h1>Welcome! You are logged</h1>
          <button onClick={loginhandler}>Logout</button>
        </div>
      ) : (
        <div>
          <h1>You are not logged</h1>
          <button onClick={logouhandler}>Login</button>
        </div>
      )}
    </div>
  );
}


