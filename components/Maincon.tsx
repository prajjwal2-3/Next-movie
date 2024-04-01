import React from 'react'
import { useSelector } from 'react-redux'
import Video from './Video';
const Maincon = () => {
    interface MovieState {
        movie: {
          nowplaying: {
            results: any[]; 
          };
        };
      }
    
    const info = useSelector((state:MovieState)=>state.movie?.nowplaying)
    
    const {title,id,overview,release_date} = info.results[0]
  return (
    <div className="">
         
    <div className=" sm:py-48 sm:px-16 px-8 py-16 absolute z-10 text-white">
    <div className="sm:text-5xl text-md font-extrabold  ">{title}</div>
    <div className="sm:w-1/4  sm:text-lg text-xs font-bold my-1 opacity-80 ">{release_date}</div>
     <div className="sm:w-1/4  sm:text-lg text-xs my-2 opacity-80 ">{overview}</div>
     <button className="bg-white sm:m-2 mx-1 sm:px-6 sm:py-3 px-2 py-1 rounded-md text-black shadow-md on hover:opacity-75">▶️Play</button>
     <button className="bg-gray-500 sm:m-2  sm:px-6 sm:py-3 px-2 py-1 rounded-md opacity-65 on hover:opacity-75 shadow-md">More info</button>
    </div>
    <div className=""><Video /> </div>
     </div>
  )
}

export default Maincon
