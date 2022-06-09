import { csrfFetch } from "./csrf";

const LOAD_ALL_SPOTS = 'spots/loadAllSpots'
// const GET_ONE_SPOT = 'spots/getOneSpot'
const CREATE_SPOT = 'spots/createSpot'


//------ Actions -----

export const loadAllSpots = (spots) => ({
    type: LOAD_ALL_SPOTS,
    spots
});

// export const getOneSpot = (oneSpot) => ({
//     type: GET_ONE_SPOT,
//     spot
// })

export const createSpot = (spot) => ({
    type: CREATE_SPOT,
    spot
})



//------ Thunks -------

//All Spots
export const loadAllSpotsThunk = () => async (dispatch) => {
    // console.log('Hello from all spots thunks \n\n')
    const response = await csrfFetch('/api/spots');
    if (response.ok) {
        const spots = await response.json();
        dispatch(loadAllSpots(spots));
        return spots;
    };
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

//Create a spot
export const createSpotThunk = (spot) => async (dispatch) => {
    // console.log("CREATE SPOT THUNK \n\n")
    const response = await csrfFetch(`/api/spots/new`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(spot)
    });

    if (response.ok) {
        const spot = await response.json();
        dispatch(createSpot(spot));
        return spot;
    }
    return response;
}

//Delete a Post


const initialState = {};

const spotReducer = ( state=initialState, action ) => {
    let newState;
    switch(action.type) {
        case LOAD_ALL_SPOTS:
            newState = {...state};
            newState["spots"] = action.spots;
            return newState;
        case CREATE_SPOT:
            return newState = {...state.spots, [action.spot.id]: action.spot};
        default:
            return state;
    };
};

export default spotReducer;
