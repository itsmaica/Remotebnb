import DateRange from "../DateRange/DateRange";
import "./SideBookings.css";

import svgexport35 from "../../../images/svgexport35.svg";

function SideBookings({ spotPrice, user }) {
  console.log(spotPrice);
  return (
    <>
      <div id="top-b" className="booking-box">

        <div className="inner-box">

            <div id="pri-and-ni">

                <p id="cost">${Math.round(spotPrice)} night</p>

            </div>

          <div id="checkin-dates">
            <DateRange />
          </div>

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
