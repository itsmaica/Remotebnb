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

  // LOGIC FOR CHECKIN DATE
  const [checkIn, setCheckIn] = useState(new Date());

  let checkInDay = checkIn.getDate().toString()
  // console.log("Check in DAY!", checkInDay)

  let checkInYear = checkIn.getFullYear().toString()
  // console.log("Check in YEAR", checkInYear)

  //need to add 1 to month to offset
  let checkInMonth = (checkIn.getUTCMonth() + 1)

  // if (Math.abs(checkInMonth).charAt(0) == checkInMonth) {
  //   "0" + checkInMonth
  // }
  // console.log("Month!",checkInMonth)


  function isDigit(val) {
    return String(+val).charAt(0) == val;
  }

  // console.log("Function test",isDigit(checkInDay))
  // console.log("Function test",isDigit(checkInDay))

  let startDate = "";

  // function checkinDateParse(checkInYear, checkInDay, checkInMonth) {
    //add the year
    startDate += checkInYear

    // add the month and account for single digit
    if (String(+checkInMonth).charAt(0) == checkInMonth) {
      startDate+= "0" + checkInMonth
    } else {
      startDate += checkInMonth
    }

    //add the day and account for single digit
    if (String(+checkInDay).charAt(0) == checkInDay) {
      startDate += "0" + checkInDay
    } else {
      startDate += checkInDay
    }



    // return startDate;

    // if ()
  // }

  console.log("Hey, I'm startdate", startDate)
  // if (checkInDay)
  // startDate += checkInYear + checkInMonth + checkInDay

  // startDate += checkIn.getFullYear().toString() +
  // // if (checkIn.getMonth === 11){
  // //   startDate+=12
  // // }
  //  checkInMonth + checkIn.getDate().toString()
  // console.log("Logic test", String(+checkInDay).charAt(0) == checkInDay);


  const [checkOut, setCheckOut] = useState(new Date());
  // console.log("check out", checkOut)

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
      // startDate,
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
