import { SET_PHOTOS, SET_LOADING, SET_PHOTO_DETAILS, SET_LIKED_PHOTOS } from '../constant/actionTypes'
 
const access_key = process.env.REACT_APP_ACCESSKEY

export function setPhotosData(){
  return (dispatch, getState) => {
    dispatch(setLoading(true))
    fetch(`https://api.unsplash.com/photos/random/?client_id=${access_key}&count=20`)
    .then(response => response.json())
    .then(newPhotosData => {
      dispatch({
        type: SET_PHOTOS,
        payload: newPhotosData
      })
    })
    .catch(err => {
      console.log(err);
    })
    .finally((_) => {
     dispatch(setLoading(false))
    })
  } 
}

export function setPhotoDetails(id){
  
  return (dispatch, getState) => {
    dispatch(setLoading(true))
    fetch(`https://api.unsplash.com/photos/${id}/?client_id=${access_key}`)
    .then(response => response.json())
    .then(selectedPhoto => {
      // console.log(selectedPhoto)
      dispatch({
        type: SET_PHOTO_DETAILS,
        payload: selectedPhoto
      })
    })
    .catch(err => {
      console.log(err);
    })
    .finally((_) => {
      dispatch(setLoading(false))
    })
  }
}

export function setLikedPhotos(input){
  return {
    type: SET_LIKED_PHOTOS,
    payload: input
  }
}

export function setLoading(input){
  return {
    type: SET_LOADING,
    payload: input
  }
}
