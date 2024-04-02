import React from "react";
import { Link } from "react-router-dom";
import ElectricityBillingSystem from "../../ElectricityBillingSystem";
import styles from "./Home.css";
import Login from "../Login/Login";
import Footer from "../Footer/Footer"

function Home(props) {
  return (
    <div>
      <h1 className="Title">Bihar State Power Holding Company Limited</h1>
      <p><strong>(A Government of Bihar Undertaking)</strong></p>
      <h4>ABOUT BSPTCL</h4>
      <p>
        <strong>Bihar State Power Transmission Company Limited</strong>, a
        subsidiary company of Bihar State Power (Holding) Company Limited, is a
        wholly owned corporate entity incorporated under the Companies Act 1956
        on 1st Nov, 2012 after restructuring of erstwhile Bihar State
        Electricity Board.
      </p>
      <p>
        Presently the company is carrying on intra-state transmission and
        wheeling of electricity under license issued by the Bihar Electricity
        Regulatory Commission. The company is also discharging the functions of
        State Load Dispatch Center (SLDC).
      </p>
      <p>
        <strong>BSPTCL</strong> operates a transmission network of 12182 km of
        132 kV lines and 5103 km of 220 kV lines as well as 152 no. of EHV
        sub-stations with 25640 MVA transformation capacity. The company is
        operating through its 5 transmission zones i.e. Patna, Muzaffarpur,
        Bhagalpur, Gaya & Koshi, 15 transmission circles and 31 transmission
        divisions
      </p>
      <p>
        In order to increase the evacuation capacity, BSPTCL is implementing
        large number of sub-station and transmission line projects. BSPTCL is
        also working towards installation of Gas Insulated Sub-Station,
        Sub-Station Automation System and High Capacity Conductors in
        transmission lines.
      </p>
      <p>
        <strong>BSPTCL</strong> has also undertaken various projects of
        augmentation, renovation and modernization of existing Grids and
        Transmission Lines. To ensure stable and uninterrupted power supply to
        the people of state, company has taken up projects for connecting its
        GSS to multiple sources of power and making them N-1 compliant. All the
        GSSs and Transmission Lines are on GIS map. The State Load Dispatch
        Center has the latest technology of real time data control and
        communication. Besides continual technical up-gradation, the company
        lays emphasis on imbibing required skills in its people and therefore it
        has invested in creating training infrastructure. It has recently
        established a “Power Training Center” at Gaurichak, Patna, where
        employees and students are trained on various power system protection
        and equipment testing techniques.
      </p>
      <p>
        <strong>'BSPTCL: The Life Line of Bihar'</strong> is committed to the
        goal of Quality Power to all.
      </p>
      <div className="next">
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
