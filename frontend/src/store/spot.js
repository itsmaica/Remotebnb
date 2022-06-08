import { csrfFetch } from "./csrf";

const LOAD_ALL_SPOTS = 'spots/loadAllSpots'
const GET_ONE_SPOT = 'spots/getOneSpot'

//------ Actions -----

export const loadAllSpots = (spots) => ({
    type: LOAD_ALL_SPOTS,
    spots
});

// export const getOneSpot = (oneSpot) => ({
//     type: GET_ONE_SPOT,
//     spot
// })

//------ Thunks -------

//All Spots
export const loadAllSpotsThunk = () => async (dispatch) => {
    // console.log('Hello from all spots thunks \n\n')
    const response = await csrfFetch('/api/spots');
    if (response.ok) {
        const spots = await response.json();
        dispatch(loadAllSpots(spots));
        return spots;
    }
    return response;
};

//One Spot
// export const getOneSpotThunk = (spotId) => async (dispatch) => {
//     const response = await csrfFetch(`/api/spots/${spotId}`)
//     if (response.ok) {
//         const spot = await response.json();
//         dispatch(getOneSpot(spot));
//         return spot;
//     }
//     return response;
// }


const initialState = {}

const spotReducer = ( state=initialState, action ) => {
    let newState;
    switch(action.type) {
        case LOAD_ALL_SPOTS:
            newState = {...state}
            // // console.log('This is new state', newState)
            // action.spots.forEach(spot => {
            //     newState[spot.id] = spot
            // });
            newState["spots"] = action.spots
            return newState;
        default:
            return state;
    };
};

export default spotReducer;
