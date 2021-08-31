import React from 'react'

export default function LikedPhoto(props) {
  
  return (
    <div className="card col-4 shadow border-0 m-2" style={{maxWidth: "30%"}}>
      <img
        src={props.data.photo}
        className="img-fluid"
        alt=""
      />
    </div>
  )
}
