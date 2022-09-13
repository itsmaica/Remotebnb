import { useState } from "react";
import "./GuestTracker.css";

function GuestTracker({guest, setGuest}) {

  // guest = setGuest
  // console.log("happy bday", guest)
    // const [counter, setCounter] = useState(guest)

    // console.log(counter)

    // console.log("GuestTracker compo", guest)


    const add =()=>{setGuest(guest+1)}
    // guest(add)
    const sub =()=>{ (setGuest(guest-1)) }
    // guest(sub)

    // guest(sub, add)



    // guest = counter


  return (
    <>
      {/* <p>Maica is the greatest of all time!</p> */}
      <div id="g-count">
        {guest === 0 ? (
        <div
        id="sub-grey"
        className="round">
            { guest === 0 ? (
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
            { guest === 0 ? (
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
          <p>{guest}</p>
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

export default GuestTracker;
