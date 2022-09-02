import { useState } from "react";
import "./ChildGuestTracker.css";

function ChildGuestTracker({child, setChild}) {





    const add =()=>{ setChild(child+1) }
    const sub=()=>{ setChild(child-1) }


  return (
    <>
      {/* <p>Maica is the greatest of all time!</p> */}
      <div id="g-count">
        {child === 0 ? (
        <div
        id="sub-grey"
        className="round">
            { child === 0 ? (
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
            { child === 0 ? (
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
          <p>{child}</p>
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

export default ChildGuestTracker;
