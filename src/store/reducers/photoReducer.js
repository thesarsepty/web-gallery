import { SET_PHOTOS, SET_PHOTO_DETAILS, SET_LIKED_PHOTOS } from '../constant/actionTypes'

const intialState = {
  photosData: [],
  photoDetails: {},
  likedPhotos: [],
}

function photosReducer(state = intialState, action) {
  
  switch (action.type) {
    case SET_PHOTOS:
      return { ...state, photosData: action.payload }
      
    case SET_PHOTO_DETAILS:
      return { ...state, photoDetails: action.payload }

    case SET_LIKED_PHOTOS:
      return { ...state, likedPhotos: action.payload }  
      
    default:
      return state     
  } 
}

export default photosReducer