import DateRange from "../DateRange/DateRange";
import "./SideBookings.css";

import svgexport35 from "../../../images/svgexport35.svg";

function SideBookings({ spotPrice, user }) {
  console.log(spotPrice);
  return (
    <>
      <div id="top-b" className="booking-box">

        <div className="inner-box">
          <div>
            <p id="cost">${Math.round(spotPrice)}</p>
            <p id="night">night</p>

          <div id="checkin-dates">
            <DateRange />
          </div>

          <button id="reserve-button">Reserve</button>
          </div>
          <p>You won't be charged yet.</p>
        </div>
      </div>

      <div id="rare-box" className="booking-box">
        <div className="inner-box">
          <p>
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
