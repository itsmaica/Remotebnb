import DateRange from "../DateRange/DateRange";
import "./SideBookings.css";
import Calendar from "react-calendar";

import svgexport35 from "../../../images/svgexport35.svg";
import { useState } from "react";
// import GuestTracker from "../GuestTracker/GuestTracker";
import AdultGuestTracker from "../AdultGuestTracker/AdultGuestTracker"
import ChildGuestTracker from "../ChildGuestTracker/ChildGuestTracker"

function SideBookings ({ spotPrice, user }) {
  const [showCal, setShowCal] = useState(false);

  const [downAngle, setUpAngle] = useState(false);

  const [dropDown, setDropDown] = useState(false);

  //universal var that can be passed to both components

  // const [guest, setGuest] = useState(0)

  let guest = 0;


  // const [plus, setPlus] =();
  // const [let,]

  // let plus;
  // let minus

  const [adult, setAdult] = useState(guest)
  console.log("I am a grown up",adult)

  const [child, setChild] = useState(guest)
  // console.log("I am a kiddo", child)

  // guest = (plus && minus)
  // console.log("Guest Number",guest)
  return (
    <>
      <div id="top-b" className="booking-box">
        <div className="inner-box">
          <div id="pri-and-ni">
            <p id="cost">${Math.round(spotPrice)} night</p>
          </div>

          <div id="checkin-dates">
            <div className="dt-holder">
              <div onClick={() => setShowCal(true)} id="ch-in">
                <p className="c-text">CHECK-IN</p>
              </div>

              <div onClick={() => setShowCal(true)} id="ch-out">
                <p className="c-text">CHECK-OUT</p>
              </div>
            </div>
            <div onClick={() => setDropDown(true)} id="num-of-g">
              <p>Guests {child+adult}</p>
              {!dropDown && <i class="fa-solid fa-angle-down"></i>}
              {dropDown && <i class="fa-solid fa-angle-up"></i>}
            </div>
            {/* <Calendar/> */}
          {dropDown && (
            <>
              <div className="gst-drop">
                <div className="gst-d">

                  <div>
                    <p className="bg-tx">Adults</p>
                    <p className="sml-tx">Ages 13+</p>
                  </div>

                  <div className="trk">
                    <AdultGuestTracker adult={adult} setAdult={setAdult}/>
                  </div>
                </div>

                <div className="gst-d">
                  <div>
                    <p className="bg-tx">Children</p>
                    <p className="sml-tx">Ages 2-12</p>
                  </div>

                  <div className="trk">
                    <ChildGuestTracker child={child} setChild={setChild}/>
                  </div>
                </div>
                <div className="c-cls">
                  <div onClick={()=> setDropDown(false)} id="c-gst">
                    <p><u>CLOSE</u></p>
                  </div>
                </div>
              </div>
            </>
          )}
            </div>



          <button id="reserve-button">Reserve</button>

          <p>You won't be charged yet.</p>
        </div>
      </div>

      <div className="booking-box">
        <div id="rare-box" className="inner-box">
          <p id="find-txt">
            <strong>This is a rare find.</strong> {user}'s place on Remotebnb is
            usually fully booked.
          </p>
          <div id="dia-div">
            <img id="diamond" src={svgexport35} />
          </div>
        </div>
      </div>
    </>
  );
}

export default SideBookings;
