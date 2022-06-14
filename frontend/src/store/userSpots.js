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
    // payload: spot
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
    const {
        userId, name, description, guests, beds,
        baths, address, city, state, country, image
    } = spot;

    // console.log("WHAT IS BEING CREATED WITH THAT IMAGE? userSpots.js -spot-\n\n", spot)

    const formData = new FormData();

    formData.append("userId", userId)
    formData.append("name", name)
    formData.append("description", description)
    formData.append("guests", guests)
    formData.append("beds", beds)
    formData.append("baths", baths)
    formData.append("address", address)
    formData.append("city", city)
    formData.append("state", state)
    formData.append("country", country)
    formData.append("image", image)

    // if (images && images.length !== 0) {
    //     for (let i = 0; i < images.length; i++) {
    //       formData.append("images", images[i]);
    //     }
    // }

    if (image) formData.append("image", image);

    // console.log("CREATE SPOT THUNK \n\n")
    const response = await csrfFetch(`/api/spots/new`, {
        method: 'POST',
        headers: {
            "Content-Type": "multipart/form-data"
        },
        body: formData,
    });

    // console.log("My created spot and image --after csrfFetch-- \n\n",response)

    if (response.ok) {
        // const spot = await response.json();
        // dispatch(createSpot(spot));
        // return spot;
        const data = await response.json();
        // console.log("What is data? if res.ok \n\n", data)
        dispatch(createSpot(data.spot));
    }
    return response
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
        return spot;
    }
    return response
};

//Edit Thunk
export const editSpotThunk = (newSpot, userId, spotId) => async (dispatch) => {
    // console.log("HELLO FROM THE EDIT THUNK! \n\n", newSpot, userId, spotId)
    // might need to change url
    const response = await csrfFetch(`/api/users/${userId}/spots/${spotId}/edit`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(newSpot)
    })
    // console.log("WHAT IS THE RESPONSE", response)

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
            // console.log("action.spot.id??", action.spot)
            return newState = {...state.spots, [action.spot.id]: action.spot};
            // return { ...state, spot: action.payload };
        case DELETE_SPOT:
            newState = {...state};
                const id = action.spot.id
                delete newState[id]
            return newState
        case EDIT_SPOT:
            newState = {...state}
            newState[action.update.id] = action.update
            return newState;
        default:
            return state
    }
}

export default userSpotsReducer;
