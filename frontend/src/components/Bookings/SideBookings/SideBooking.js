import DateRange from "../DateRange/DateRange";
import "./SideBookings.css";
// import Calendar from "react-calendar";

import svgexport35 from "../../../images/svgexport35.svg";
import { useState } from "react";
// import GuestTracker from "../GuestTracker/GuestTracker";
import AdultGuestTracker from "../AdultGuestTracker/AdultGuestTracker";
import ChildGuestTracker from "../ChildGuestTracker/ChildGuestTracker";
import DatePicker from "react-date-picker";
import { useSelector } from "react-redux";
// import booking from "../../../../../backend/db/models/booking";
function SideBookings({ showCal, setShowCal, spotPrice, spotId, user, guestNum }) {
  let remainingSpots = guestNum;

  const userId = useSelector((state) => state?.session?.user?.id)
  // console.log("I'm this user!", userId)

  // console.log("This is my ID!", spotId)

  const [dropDown, setDropDown] = useState(false);
  const [adult, setAdult] = useState(1);
  const [child, setChild] = useState(0);
  // calendar
  const [value, onChange] = useState(new Date());
  // console.log("Check in-->", value)

  const [checkIn, setCheckIn] = useState(new Date());
  console.log("Check in DAY!", checkIn.getDate())
  console.log("Check in YEAR", checkIn.getFullYear())
  console.log("Check in MONTH", checkIn.getMonth())


  // let startDate = "";
  // startDate += checkIn.getFullYear().toString() +
  // // if (checkIn.getMonth === 11){
  // //   startDate+=12
  // // }
  //  (checkIn.getMonth().toString() )+ checkIn.getUTCDate().toString()
  // console.log("I'm the string of start date!",startDate);

  


  const [checkOut, setCheckOut] = useState(new Date());
  console.log("check out", checkOut)

  //change from add date -> cal
  const [showCalCompo, setShowCalCompo] = useState(false);

  //Booking information
  // const [spotId, setSpotId] = useState();
  // const [userId, setUserId] = useState();
  // const [startDate, setStateDate] = useState();
  const [endDate, setEndDate] = useState();

  const makeBooking = async(e)=>{
    e.preventDefault();

    const booking = {
      spotId,
      userId,
      startDate,
      endDate

    }
    console.log("What is a 'booking'?", booking)
  }



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
                <div onClick={() => setShowCalCompo(true)}>
                  <p className="c-text">CHECK-IN</p>

                  <DatePicker
                    onChange={setCheckIn}
                    value={checkIn}
                    calendarIcon={false}
                    clearIcon={false}
                    minDate={new Date()}
                    // format={"y-MM-DD"}
                  />
                </div>
              </div>

              <div onClick={() => setShowCal(true)} id="ch-out">
                <div onClick={() => setShowCalCompo(true)}>
                  <p className="c-text">CHECKOUT</p>
                  <DatePicker
                    onChange={setCheckOut}
                    value={checkOut}
                    calendarIcon={false}
                    clearIcon={false}
                    minDate={new Date()}
                  />
                </div>
              </div>
            </div>
            <div onClick={() => setDropDown(true)} id="num-of-g">
              <p>Guests {child + adult}</p>
              {!dropDown && <i className="fa-solid fa-angle-down"></i>}
              {dropDown && <i className="fa-solid fa-angle-up"></i>}
            </div>

            {dropDown && (
              <>
                <div className="gst-drop">
                  <div className="gst-d">
                    <div>
                      <p className="bg-tx">Adults</p>
                      <p className="sml-tx">Ages 13+</p>
                    </div>

                    <div className="trk">
                      <AdultGuestTracker
                        adult={adult}
                        setAdult={setAdult}
                        guestNum={guestNum}
                        child={child}
                      />
                    </div>
                  </div>

                  <div className="gst-d">
                    <div>
                      <p className="bg-tx">Children</p>
                      <p className="sml-tx">Ages 2-12</p>
                    </div>

                    <div className="trk">
                      <ChildGuestTracker
                        child={child}
                        setChild={setChild}
                        guestNum={guestNum}
                        adult={adult}
                      />
                    </div>
                  </div>
                  <div className="c-cls">
                    <div onClick={() => setDropDown(false)} id="c-gst">
                      <p>
                        <u>CLOSE</u>
                      </p>
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
