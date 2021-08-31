import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Loader from 'react-loader-spinner'
import { useSelector, useDispatch } from 'react-redux'
import { setPhotoDetails } from '../store/actionCreators'
import { Link } from 'react-router-dom'

export default function Details() {
  const { id } = useParams();
  const dispatch = useDispatch()
  const photoDetails = useSelector(state => state.photosReducer.photoDetails)
  const loading = useSelector(state => state.loadingReducer.loading) 
  
  useEffect(() => {
   dispatch(setPhotoDetails(id))
    // eslint-disable-next-line
  },[])

  
   return(
     <>
     {loading || !photoDetails.urls ? 
     ( <div style={{textAlign:"center", paddingTop:"32px"}}><Loader
      type="MutatingDots"
      color="#475e6e"
      height={100}
      width={100}
      timeout={1000}
      /></div>) 
     : 
      ( 
       <div className="container-fluid" id="like-section">
        <div className="row">
          <div className="col-md-10 col-11 mx-auto">
            <div className="row mt-5 gx-3">
        
              <div className="col-md-12 col-lg-8 col-11 mx-auto main-like mb-lg-0 mb-5 shadow">
                <div className="col-md-12 col-8 col-11 mx-auto main-like mb-lg-0 mb-5 shadow d-flex justify-content-center align-items-center product-cart">
                  <img src={photoDetails.urls.regular} className="img-fluid" alt=""/>
                </div>
              </div>
          
          <div className="col-md-12 col-lg-4 col-11 mx-auto mt-lg-0 mt-md-5">
            <div className="right-side p-3 shadow bg-white"><h3>{photoDetails.user.name}</h3>
              <div className="text-indiv d-flex justify-content-between">
                <p>Location:</p>
                <p>{photoDetails.location.name || 'Somehwere on Earth'}</p>
              </div>
              <div className="text-indiv d-flex justify-content-between">
                <h5>Description</h5>            
              </div>
              <div className="text-indiv d-flex justify-content-between">
                <p>{photoDetails.alt_description || 'Nothing'}</p>
              </div>

               <div className="total-amount d-flex justify-content-between font-weight-bold">
                 <p>@{photoDetails.user.username}</p>
                 <img src={photoDetails.user.profile_image.medium} className="img-fluid rounded-circle" alt=""/>
               </div>
            </div>
            <div className="justify-content-center d-flex" style={{padding: "8rem"}}>
            <Link to="/"><h3 style={{color: "grey"}}><i className="bi bi-arrow-left">  Home</i></h3></Link>
            </div>
          </div>
          </div>
      </div>
    </div> 
   </div>)}
  </>
  )
} 

