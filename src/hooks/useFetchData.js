import {useState, useEffect} from 'react'

export default function useFetchData(url) {
  
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState({})
  
    useEffect(() => {
      setLoading(true)
      fetch(url)
      .then(response => response.json())
      .then(newData => {
        // console.log(newData)
        setData(newData)
      })
      .catch(err => {
        console.log(err);
      })
      .finally((_) => {
        setLoading(false)
      })
      // eslint-disable-next-line
    },[])
  return [data, loading]
}