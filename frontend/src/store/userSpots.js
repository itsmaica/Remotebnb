import { csrfFetch } from "./csrf";

const CREATE_SPOT = 'users/createSpot'
const LOAD_USER_SPOTS = 'users/loadUserSpots'
const DELETE_SPOT = 'users/deleteSpot'
const EDIT_SPOT = 'users/editSpot'


export const loadUserSpots = (userSpots) => ({
    type: LOAD_USER_SPOTS,
    userSpots
})

export const createSpot = (spot) => ({
    type: CREATE_SPOT,
    spot
})

export const deleteSpot = (spot) => ({
    type: DELETE_SPOT,
    spot
})

export const editSpot = (update) => ({
    type: EDIT_SPOT,
    update
})

// Get the User Spots
export const loadUserSpotsThunk = (userId) => async (dispatch) => {
    const response = await csrfFetch(`/api/users/${userId}/spots`);
    if(response.ok) {
        const userSpots = await response.json();
        // console.log("Hello from userSpots Thunk! \n\n", userSpots)
        dispatch(loadUserSpots(userSpots));
        return userSpots
    };
    return response;
};

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

// Delete Thunk
export const deleteSpotThunk = (userId, spotId) => async (dispatch) => {
    // console.log("Hello from DELETE Thunk \n\n")
    const response = await csrfFetch(`/api/users/${userId}/spots/${spotId}/delete`, {
        method: 'DELETE',
        headers: {'Content-Type': 'application/json'}
    });
    if (response.ok) {
        const spot = await response.json();
        dispatch(deleteSpot(spot))
        return response;
    }
    return response
};

//Edit Thunk
export const editSpotThunk = (newSpot, userId, spotId) => async (dispatch) => {
    console.log("HELLO FROM THE EDIT THUNK! \n\n", newSpot, userId, spotId)
    // might need to change url
    const response = await csrfFetch(`/api/users/${userId}/spots/${spotId}/edit`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(newSpot)
    })
    console.log("WHAT IS THE RESPONSE", response)

    if (response.ok) {
        const update = await response.json()
        dispatch(editSpot(update));
        return response;
    }
    return response
}

const initialState = {};

const userSpotsReducer = (state=initialState, action) => {
    let newState;
    switch(action.type){
        case LOAD_USER_SPOTS:
            newState = {...state}
            action.userSpots.forEach(userSpot=>{
              newState[userSpot.id] = userSpot
            })
            return newState
        case CREATE_SPOT:
            return newState = {...state.spots, [action.spot.id]: action.spot};
        case DELETE_SPOT:
            newState = {...state};
                const id = action.spot.id
                delete newState[id]
            return newState
        case EDIT_SPOT:
            newState = {...state}
            newState.spot = action.update
            return newState
        default:
            return state
    }
}

export default userSpotsReducer;
