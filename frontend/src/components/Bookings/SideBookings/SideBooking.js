import DateRange from "../DateRange/DateRange"
import "./SideBookings.css"


function SideBookings(){
    return(
        <>
        <h1>Hi Maica</h1>

        <div className="box">
            <span className="price-night">
                <p id='cost'>$1000</p>
                <p id='night'>night</p>
            </span>
            <div id='checkin-dates'>
                <DateRange />
            </div>
            <button id='reserve-button'>Reserve</button>
        </div>
        </>
    )
}

export default SideBookings
