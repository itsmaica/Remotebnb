import { useState } from "react";
import Calendar from "react-calendar"
import 'react-calendar/dist/Calendar.css';
function CalendarComponent(){
    const [dateA, setDateA] = useState(new Date());
    // const [dateB, setDateB] = useState(new Date());
    // const onChange = dateA => {
    //     setDateA(dateA)
    // };
    console.log("This is dateA", dateA)
    // console.log("This is dateB", dateB)


    // const preDates > new Date()

    // const disabledDates = [tomorrow];

    // const tileDisabled = ({ date, view }) => {
    //     if (view === 'month') {
    //         return disabledDates.find(dDate => isSameDay(dDate, date));
    //     }
    // }

    return (
        <>
        <h1>Hi Maica</h1>
        <Calendar
        // showNeighboringMonth
        selectRange
        onChange={setDateA}
        value={dateA}
        // tileDisabled={tileDisabled}
        />
        {/* <Calendar onChange={setDateB} value={dateB}/> */}


        </>
    )
}
export default CalendarComponent;
