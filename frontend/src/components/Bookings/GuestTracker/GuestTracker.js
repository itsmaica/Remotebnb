import "./GuestTracker.css";

function GuestTracker() {
  let count = 0;
  return (
    <>
      {/* <p>Maica is the greatest of all time!</p> */}
      <div id="g-count">
        <div id="sub" className="round">
          <i class="fa-solid fa-minus"></i>
        </div>
        <div>
          <p>{count}</p>
        </div>
        <div id="add" className="round">
          <i class="fa-solid fa-plus"></i>
        </div>
      </div>
    </>
  );
}

export default GuestTracker;
