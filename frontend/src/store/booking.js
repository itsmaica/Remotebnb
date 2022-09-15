import { csrfFetch } from "./csrf";

const LOAD_BOOKINGS = "booking/loadBookings";
const GET_BOOKING = "booking/getBooking";
const CREATE_BOOKING = "booking/createBooking";
const UPDATE_BOOKING = "booking/updateBooking";
const DELETE_BOOKING = "booking/deleteBooking";


const initialState={};
export const bookingReducer = (state=initialState, action)=>{
    let newState;
    switch (action.type){
        case LOAD_BOOKINGS:
            return newState;
        case GET_BOOKING:
            return newState;
        case CREATE_BOOKING:
            return newState;
        case UPDATE_BOOKING:
            return newState;
        case DELETE_BOOKING:
            return newState;
        default:
            return state;
    }
};

export default bookingReducer;
