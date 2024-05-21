import React from "react";
import "../Header/header.css"
export default function Navitems() {
  return (
    <div>
      <header>
        <h1>REDUX & REDUCX TOOLKIT</h1>
        <nav>
          <ul>
            <li>
              <a href="/">My Productuts</a>
            </li>
            <li>
              <a href="/">My sales</a>
            </li>
            <li>
              <a href="/">Profile</a>
            </li>
            <li>
              <button>Logout</button>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
