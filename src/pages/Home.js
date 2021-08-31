import Heading from '../components/Heading'
import Content from '../components/Content'
import Loader from 'react-loader-spinner'

import { useSelector, useDispatch } from 'react-redux'
import { setPhotosData } from '../store/actionCreators'
import { useEffect } from 'react'


export default function Home (){

  const dispatch = useDispatch()
  const photosData = useSelector(state => state.photosReducer.photosData)
  const loading = useSelector(state => state.loadingReducer.loading)

  useEffect(() => {
  
    dispatch(setPhotosData())
  // eslint-disable-next-line
  }, [])

  return (
      
    <div className="container py-5 text-center">
     <Heading/>    
      {loading ? (
        <Loader
        type="Grid"
        color="#475e6e"
        height={100}
        width={100}
        timeout={1000}
      />) : (<Content photosData={photosData}/>)}
    </div>
  )
} 