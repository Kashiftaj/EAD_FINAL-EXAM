
import React from 'react'

import { useState, useEffect } from 'react'
function TrafficLightSimulator() {
    const [lights,setLights]=useState({
      "red":true,
      "yellow":false,
      "green":false
    })

    useEffect(()=>{

      
      setInterval(()=>{

      },3000)

    },[lights])
    
  return (
    <>
    <div >
      <h1>Traffic Light Simulator</h1>
      <div className='flex justify-center items-center flex-col outline rounded h-50 bg-gray-900 w-50'>
      <div className='outline rounded-sm bg-red-400 w-10 h-10'  ></div>  
      <div className='outline rounded-sm bg-yellow-400 w-10 h-10'></div>
      <div className='outline rounded-sm bg-green-400 w-10 h-10'></div>
      </div>
      </div>
    </>
  )
}

export default TrafficLightSimulator
