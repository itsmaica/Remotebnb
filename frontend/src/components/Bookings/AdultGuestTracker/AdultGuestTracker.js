import { useState } from "react";
import "./AdultGuestTracker.css";

function AdultGuestTracker({counter, setAdultCounter}) {




    const add =()=>{ setAdultCounter(counter+1) }
    const sub=()=>{ setAdultCounter(counter-1) }


  return (
    <>
      {/* <p>Maica is the greatest of all time!</p> */}
      <div id="g-count">
        {counter === 0 ? (
        <div
        id="sub-grey"
        className="round">
            { counter === 0 ? (
                 <div id="sub-disable"className="fill">
                    <i id="dis-i"class="fa-solid fa-minus"></i>
                </div>
                ) :
                <div className="fill">
                <i class="fa-solid fa-minus"></i>
                </div>
                }
        </div>
        ) :
        <div
        onClick={sub}
        id="sub"
        className="round">
            { counter === 0 ? (
                 <div id="sub-disable"className="fill">
                    <i class="fa-solid fa-minus"></i>
                </div>
                ) :
                <div className="fill">
                <i class="fa-solid fa-minus"></i>
                </div>
                }
        </div>
        }

        <div id="g-ct-num">
          <p>{counter}</p>
        </div>

        <div
        onClick={add}
        id="add"
        className="round">
            <div className="fill">

          <i class="fa-solid fa-plus"></i>
            </div>
        </div>
      </div>
    </>
  );
}

export default AdultGuestTracker;
