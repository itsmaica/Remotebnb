import { useState } from "react";
import "./AdultGuestTracker.css";

function AdultGuestTracker({ adult, setAdult, guestNum }) {
  const add = () => {
    setAdult(adult + 1);
  };
  const sub = () => {
    setAdult(adult - 1);
  };

  return (
    <>
      <div id="g-count">
        {adult === 1 ? (
          <div id="sub-grey" className="round">
            {adult === 1 ? (
              <div id="sub-disable" className="fill">
                <i id="dis-i" class="fa-solid fa-minus"></i>
              </div>
            ) : (
              <div className="fill">
                <i class="fa-solid fa-minus"></i>
              </div>
            )}
          </div>
        ) : (
          <div onClick={sub} id="sub" className="round">
            {adult === 1 ? (
              <div id="sub-disable" className="fill">
                <i class="fa-solid fa-minus"></i>
              </div>
            ) : (
              <div className="fill">
                <i class="fa-solid fa-minus"></i>
              </div>
            )}
          </div>
        )}

        <div id="g-ct-num">
          <p>{adult}</p>
        </div>

        {/* disable the + click for max adult guests */}
        {/* <div onClick={add} id="add" className="round">
            <div className="fill">
              <i class="fa-solid fa-plus"></i>
            </div>
          </div> */}

        {adult !== guestNum ? (
          <div onClick={add} id="add" className="round">
            <div className="fill">
              <i class="fa-solid fa-plus"></i>
            </div>
          </div>
        ) : (
          <div id="add-disable" className="round">
            <div className="fill">
              <i class="fa-solid fa-plus"></i>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default AdultGuestTracker;
