import { csrfFetch } from "./csrf";

const LOAD_ALL_IMAGES = 'images/loadAllImages'
const CREATE_IMAGES = "images/createImages"

// //------ Actions -----

const createImages = (images) => ({
    type: CREATE_IMAGES,
    payload: images
})

export const loadAllImages = (images) => ({
    type: LOAD_ALL_IMAGES,
    images
});

//------ Thunks -------

export const createImagesThunk = (pics) => async (dispatch) => {
    const { images, image, spotId } = pics;
    const formData = new FormData();
    // formData.append("spotId", spotId);
    // formData.append("url", url);

    if(images && images.length !== 0) {
        for(let i = 0; i < images.length; i++){
            formData.append("images", images[i])
        }
    }

    if (image) formData.append("image", image);

    const res = await csrfFetch(`/api/users/`, {
        method: "POST",
        headers: {
        "Content-Type": "multipart/form-data",
        },
        body: formData,
    });

    const data = await res.json();
    dispatch(createImages(data.pics))
}

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
        // case CREATE_IMAGES:
        //     return {...state, pics: action.payload}
        default:
            return state
    }

}

export default imageReducer;
