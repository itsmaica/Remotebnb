import { csrfFetch } from "./csrf";

const LOAD_ALL_IMAGES = 'images/loadAllImages'
const CREATE_IMAGES = "images/createImages"

// //------ Actions -----

const createImages = (pic) => ({
    type: CREATE_IMAGES,
    payload: pic
})

export const loadAllImages = (images) => ({
    type: LOAD_ALL_IMAGES,
    images
});

//------ Thunks -------

// export const createImagesThunk = (spot) => async (dispatch) => {
//     console.log("Hello from createImagesThunk! what is spot? \n\n", spot)
//     const { images, image } = spot;
//     const formData = new FormData();
//     // formData.append("spotId", spotId);
//     // formData.append("url", url);
//     formData.append("images", images)


//     if(images && images.length !== 0) {
//         for(let i = 0; i < images.length; i++){
//             formData.append("images", images[i])
//         }
//     }

//     if (image) formData.append("image", image);

//     const res = await csrfFetch(`/api/users/`, {
//         method: "POST",
//         headers: {
//         "Content-Type": "multipart/form-data",
//         },
//         body: formData,
//     });

//     const pic = await res.json();
//     dispatch(createImages(pic))
// }

export const loadAllImagesThunk = () => async (dispatch) => {
    // console.log("WHat is spot Id? \n\n", spotId)
    const response = await csrfFetch(`/api/images/`)
    if (response.ok) {
        const images = await response.json();
        // console.log('images \n\n', images)
        dispatch(loadAllImages(images));
        return images;
    };
    return response
};

// //----- Reducer -----
const initialState = {}

const imageReducer = (state=initialState, action) => {
    let newState;
    switch(action.type) {
        // case CREATE_IMAGES:
        //         return { ...state, image: action.pic };
        case LOAD_ALL_IMAGES:
            newState={...state}
            newState["images"] = action.images
            return newState;
        default:
            return state;
    };

};

export default imageReducer;
