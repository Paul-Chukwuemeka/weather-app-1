import React from 'react'
import { useContext,useEffect,useState } from 'react'
import { WeatherContextProvider } from '../contexts/context'

const Time = () => {
    const {response} = useContext(WeatherContextProvider)

    const date = response.location ? response.location.localtime.split(" "): null
    const [loadedDate,setLoadedDate] = useState([])
    // useEffect(()=>{
        
    // },[date])
  return (
    <div className='border rounded-xl p-4 col-span-2'>
        <h1>{response.location ? response.location.name : "Loading ..."}
        </h1>
        {
            // loadedDate
        }
    </div>
  )
}

export default Time