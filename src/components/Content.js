import React from 'react'
import ContentImage from './ContentImage'

function Content (props) {
    return (
      // <div className="container">
        <div className="row">
          {  
            props.photosData.map(photo => {
              return(
                <ContentImage 
                key={photo.id}
                photo={photo.urls.regular}
                id={photo.id}
                />
              )
            })
          }
      </div>
    // </div> 
    )
}

export default Content