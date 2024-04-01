import React from "react";
import { Link } from "react-router-dom";
import ElectricityBillingSystem from "../../ElectricityBillingSystem"
import styles from "./Home.css"

function Home(props) {
  return (
    <div className="container">
      <div>
        <h1>
          <Link to="/login">Login</Link>
        </h1>
        <br />
        <h1>
          <Link to="/signup">Signup</Link>
        </h1>
      </div>

      <br />
      <br />
      <br />
        <h2>{props.name ? `Welcome - ${props.name}` : "Login please"}</h2>
        {/* <ElectricityBillingSystem /> */}
    </div>
  );
}

export default Home;