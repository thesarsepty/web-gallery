import React from 'react'
import { useSelector } from 'react-redux'
import LikedPhoto from '../components/LikedPhoto'
import { Link } from 'react-router-dom'

export default function Liked() {
  const likedPhotos = useSelector(state => state.photosReducer.likedPhotos)
  return (
    // <div>
    //    <p>{JSON.stringify(likedPhotos)}</p>
    // </div>

    <div className="bg-light shadow p-5  mt-4 d-flex flex-column justify-content-center">
      {likedPhotos.length < 1 ?
        (<div>
          <center>
            <h2 className="uk-h2 uk-text-center">You dont have a favourite Photo yet</h2>
          </center>
       </div>) :
       (<>
       <div className="py-4">
          <center>
            <Link to="/"><h3 style={{color: "grey"}}><i className="bi bi-arrow-left">  Home</i></h3></Link>
            <h2 className="uk-h2 uk-text-center">Here Your Liked Photos</h2>
          </center>
       </div>
       <div className="container d-flex justify-content-center align-items-center"> 
          <div className="row d-flex justify-content-center">
        {
          likedPhotos.map(photo => {
            return(
              <LikedPhoto
               key={photo.id}
               data={photo} 
             />
            )
          })
        }
        
        </div>
      </div>
      </>
      )
      }
  </div>      
  )
}
