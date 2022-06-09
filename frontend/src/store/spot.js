import { csrfFetch } from "./csrf";

const LOAD_ALL_SPOTS = 'spots/loadAllSpots'
// const GET_ONE_SPOT = 'spots/getOneSpot'
const CREATE_SPOT = 'spots/createSpot'
const DELETE_SPOT = 'spot/deleteSpot'

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

export const deleteSpot = (spotId) => ({
    type: DELETE_SPOT,
    spotId
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
export const deleteSpotThunk = (spotId) => async (dispatch) => {
    const response = await csrfFetch(`/api/spots/${spotId}/delete`, {
        method: 'DELETE'
    });
    const spotId = await response.json();
    dispatch(deleteSpot(spotId))
    return response;
}

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
        case DELETE_SPOT:
            newState = {...state}
            const id = action.spotId.id
            delete newState[id]
        default:
            return state;
    };
};

export default spotReducer;
