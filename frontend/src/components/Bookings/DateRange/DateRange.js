import DateRangePicker from '@wojtekmaj/react-daterange-picker'

import { useState } from 'react'
import "@wojtekmaj/react-daterange-picker/dist/DateRangePicker.css"
// import DateRangePicker from 'rsuite/DateRangePicker'
// import 'rsuite/dist/styles/rsuite-default.css';

function DateRange(){
    const [dates, setDates] = useState([new Date(), new Date()]);
    console.log(dates)

    return(
        <>
        {/* <h1>Testing rsuite</h1> */}
        <div>
            <DateRangePicker
            onChange={setDates}
            value={dates}

            />
        </div>

        {/* <div>
            <h2>TEST</h2>
            <DateRangePicker block/>
        </div> */}
        </>
    )
}
export default DateRange
