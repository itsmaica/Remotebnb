import { csrfFetch } from "./csrf";

const LOAD_ALL_IMAGES = 'images/loadAllImages'

// //------ Actions -----

export const loadAllImages = (images) => ({
    type: LOAD_ALL_IMAGES,
    images
});

// //------ Thunks -------
export const loadAllImagesThunk = (spotId) => async (dispatch) => {
    // console.log("WHat is spot Id? \n\n", spotId)
    const response = await csrfFetch(`/api/images/${spotId}`)
    if (response.ok) {
        const images = await response.json();
        // console.log('images \n\n', images)
        // dispatch(loadAllImages(images));
        return images;
    };
    return response
};

// //----- Reducer -----
const initialState = {}

const imageReducer = (state=initialState, action) => {
    let newState;
    switch(action.type) {
        case LOAD_ALL_IMAGES:
            newState={...state}
            // action.spots.forEach(image => {
            //     newState[image.id] = image
            // });
            newState["images"] = action.images
            return newState
        default:
            return state
    }

}

export default imageReducer;
