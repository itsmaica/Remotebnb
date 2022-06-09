import { csrfFetch } from "./csrf";

const LOAD_USER_SPOTS = 'user/loadUserSpots'
const DELETE_SPOT = 'spot/deleteSpot'

export const loadUserSpots = (userSpots) => ({
    type: LOAD_USER_SPOTS,
    //useSpots
    userSpots
})

export const deleteSpot = (spotId) => ({
    type: DELETE_SPOT,
    spotId
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

export const deleteSpotThunk = (userId, spotId) => async (dispatch) => {
    const response = await csrfFetch(`/api/users/${userId}/spots/${spotId}/delete`, {
        method: 'DELETE'
    });
    if (response.ok) {
        const spotId = await response.json();
        dispatch(deleteSpot(spotId))
        return response;
    }
    return response
};

const initialState = {};

const userSpotsReducer = (state=initialState, action) => {
    let newState;
    switch(action.type){
        case LOAD_USER_SPOTS:
            // newState = {...state}
            // action.userSpots.forEach(userSpot => )
            // console.log(newState)

            newState = {...state} // {}
            action.userSpots.forEach(userSpot=>{
              newState[userSpot.id] = userSpot
            })
            // console.log(newState, "this is initial state")
            return newState
        case DELETE_SPOT:
            newState = {...state}
            const id = action.spotId.id
            delete newState[id]

            // 1
            // console.log("HEllo from the REDUCER\n\n")
            // newState = {...state};
            // newState["userSpots"] = action.userSpots;
            // return newState

            //2
            // newState = {...state, ...action.userSpots}
            // return newState;

            //3
            // newState = {...state};
            // // console.log("Reducer please :(", action.userSpots)
            // newState["userSpots"] = action.userSpots

            //4
            // return {...state, ["userSpots"]: action.userSpots}
            // return newState;

            //5
            // newState = {...state}
            // console.log("THis is new STate \n\n", newState)
            // console.log("This is actions \n\n", action.userSpots)
            // newState = action.userSpots.forEach(userSpot => newState[userSpot.id] = userSpot)
            // return {...newState}

            // newState = {...state};
            // newState["userSpots"] = action.payload.userSpots;
            // return newState;

            // return newState = {...state.userSpots, [action.userSpot.id]: action.payload};


            // const spotData = {}
            // for(let spot of action.payload) {
            //     spotData[spot.id] = spot
            // }
            // return {...spotData}
        default:
            return state
    }
}

export default userSpotsReducer;
