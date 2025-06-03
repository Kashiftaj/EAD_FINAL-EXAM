
import React from 'react'

import { useState, useEffect } from 'react'
function TrafficLightSimulator() {
    const [lights,setLights]=useState({
      "red":true,
      "yellow":false,
      "green":false
    })
    console.log(lights["yellow"]);

    useEffect(()=>{

      
      
      setInterval(()=>{
        if(lights["red"]){
        setLights(()=>{
          lights["yellow"]=true
          lights["green"]=false
        })
      }else if(lights["yellow"]){
        lights["red"]=false
          lights["green"]=true
      }else{
        lights["red"]=true
          lights["yellow"]=false
      }
        console.log(lights["red"]);
        console.log(lights["yellow"]);
        console.log(lights["green"]);
      },3000)
      
      
    },[lights])
    
  return (
    <>
    <div >
      <h1>Traffic Light Simulator</h1>
      <div  className='flex justify-center items-center flex-col outline rounded h-50 bg-gray-300 w-50'>
      <div className='flex justify-center items-center flex-col outline rounded h-35 bg-gray-800 w-25'>
      <div className='outline-rounded rounded-sm bg-red-400 w-10 h-10'  ></div>  
      <div className='outline rounded-sm bg-yellow-400 w-10 h-10'></div>
      <div className='outline rounded-sm bg-green-400 w-10 h-10'></div>
      </div>
      </div>
      </div>
    </>
  )
}

export default TrafficLightSimulator
