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
        console.log("Hello from userSpots Thunk! \n\n", userSpots)
        dispatch(loadUserSpots(userSpots));
        return userSpots
    };
    return response;
};

//Create a spot
export const createSpotThunk = (spot) => async (dispatch) => {
    const {
        userId, name, description, guests, beds,
        baths, address, city, state, country, price, images
    } = spot;

    // console.log("--------userSpots.js -spot-\n\n", images)

    const formData = new FormData();
    // console.log("THIS IS FROMDATA 1 ---__---_---> \n\n", formData)


    formData.append("userId", userId)
    formData.append("name", name)
    formData.append("description", description)
    // console.log("THIS IS FROMDATA 2 ---__---_---> \n\n", formData)

    formData.append("guests", guests)
    formData.append("beds", beds)
    formData.append("baths", baths)
    formData.append("address", address)
    formData.append("city", city)
    formData.append("state", state)
    // console.log("THIS IS FROMDATA 3 ---__---_---> ", formData)

    formData.append("country", country)
    formData.append("price", price)

    // formData.append("images", images)

    if (images && images.length !== 0) {
        for (let i = 0; i < images.length; i++) {
          formData.append("images", images[i]);
        // console.log("THIS IS FROMDATA 4 see i---__---_--->", formData, `${i}`)

        }
        // console.log("BEFORE RESPONSE --")
    }

    // if (image) formData.append("image", image);

    const response = await csrfFetch(`/api/spots/new`, {
        method: 'POST',
        headers: {
            "Content-Type": "multipart/form-data"
        },
        body: formData,
    });

    // console.log("Response from THUNK \n\n",response)

    // console.log("AFTER RESPONSE -- \n\n")

    if (response.ok) {
        // const spot = await response.json();
        // dispatch(createSpot(spot));
        // return spot;

        const data = await response.json();
        // console.log("What is data? if res.ok \n\n", data)
        dispatch(createSpot(data.spot));
        return response;
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
            // console.log("What is action.userSpots", action.userSpots)
            action.userSpots.forEach(userSpot=>{
              newState[userSpot.id] = userSpot
            })
            return newState
        case CREATE_SPOT:
            newState={...state}
            // console.log("THIS IS NEW STATE ---- \n\n", newState)
            // console.log("actions.spot \n\n", action.spot)
            newState[`${action.spot.id}`] = action.spot
            // return newState = {...state.spots, [action.spot.id]: action.spot};
            // return { ...state, spot: action.payload };
            return newState
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
