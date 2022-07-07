import DateRangePicker from '@wojtekmaj/react-daterange-picker'
import { useState } from 'react'

function DateRange(){
    const [dates, setDates] = useState([new Date(), new Date()]);
    console.log(dates)

    return(
        <>
        <h1>Testing dateRange</h1>
        <DateRangePicker
        onChange={setDates}
        value={dates}
        />
        </>
    )
}
export default DateRange
