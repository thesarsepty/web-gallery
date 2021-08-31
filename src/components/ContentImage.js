import React from 'react'
import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { setLikedPhotos } from '../store/actionCreators'

function ContentImage(props) {
  // console.log(props.id);
  const history = useHistory();
  const dispatch = useDispatch()
  const likedPhotos = useSelector(state => state.photosReducer.likedPhotos)
    
  function handleGetLiked() {
    if(likedPhotos.length < 1){
      dispatch(setLikedPhotos([props]))
    } else {
      // console.log('masuk else');
      let moreData = [...likedPhotos, props]
      dispatch(setLikedPhotos(moreData))
    }
    history.push('/liked')
    // console.log(likedPhotos);
  }  
    return ( 
      <div className="col-lg-3" style={{height:"100%"}}>
        <div className="card-product border-0 bg-light mb-2">
          <div className="pt-3 px-3 text-end">
            <span onClick={handleGetLiked}><i className="bi bi-heart-fill"></i></span>
          </div>
          <div onClick={()=> {history.push(`/details/${props.id}`)}} className="card-body" style={{padding: '1.5rem'}}>
            <img src={props.photo} className="img-fluid" alt="" style={{objectFit:'cover', height:"300px"}}/>
          </div>
        </div>
      </div>
    )
  
}


export default ContentImage

