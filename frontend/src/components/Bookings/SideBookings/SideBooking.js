import DateRange from "../DateRange/DateRange";
import "./SideBookings.css";
import Calendar from 'react-calendar'

import svgexport35 from "../../../images/svgexport35.svg";
import { useState } from "react";

function SideBookings({ spotPrice, user }) {
  const [showCal, setShowCal] = useState(false);

  const [downAngle, setUpAngle] = useState(false);

  const [dropDown, setDropDown] = useState(false);

  // console.log(spotPrice);
  return (
    <>
      <div id="top-b" className="booking-box">

        <div className="inner-box">

            <div id="pri-and-ni">

                <p id="cost">${Math.round(spotPrice)} night</p>

            </div>

          <div id="checkin-dates">

            <div className="dt-holder">
              <div onClick={()=>setShowCal(true)} id="ch-in">
                <p>CHECK-IN</p>
              </div>

              <div id="ch-out">
                <p>CHECK-OUT</p>
              </div>

            </div>



            {/* <div onClick={()=> setUpAngle(true)} id="num-of-g">
              <p>Guests</p>
              {downAngle && (
              <i class="fa-solid fa-angle-down"></i>
              )}
              {!downAngle && (
                <i class="fa-solid fa-angle-up"></i>
              )}
            </div> */}


            <div onClick={()=>setDropDown(true)}id="num-of-g">
              <p>Guests</p>
                {!dropDown && (
                <i class="fa-solid fa-angle-down"></i>
                )}
                {dropDown && (
                <i class="fa-solid fa-angle-up"></i>
                )}
            </div>
            {/* <Calendar/> */}
          </div>
          {dropDown && (
              <>
              <div>
                Hello?
                <div>
                  <p>Adults</p>
                </div>
                <div>
                  <p>Children</p>
                </div>
                <div>
                  <p>CLOSE</p>
                </div>
              </div>
              </>
            )}

          <button id="reserve-button">Reserve</button>

          <p>You won't be charged yet.</p>
        </div>
      </div>

      <div className="booking-box">
        <div id="rare-box"  className="inner-box">
          <p id="find-txt">
            <strong>This is a rare find.</strong> {user}'s place on Remotebnb is
            usually fully booked.
          </p>
          <div id="dia-div">
            <img id="diamond"src={svgexport35} />
          </div>
        </div>
      </div>
    </>
  );
}

export default SideBookings;
