"use client"
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addnowplaying, addpopular } from "./redux/movieslice";
import { useEffect } from "react";
import Maincon from "@/components/Maincon";
import Moviecard from "@/components/Moviecard";
async function getnomplaying() {
  try {
    const response = await axios.get("http://localhost:3000/api/movie/nowplaying");
    return response.data;
  } catch (e) {
    console.log(e);
    return null; 
  }
}
async function getpopular() {
  try {
    const response = await axios.get("http://localhost:3000/api/movie/popular");
    return response.data;
  } catch (e) {
    console.log(e);
    return null; 
  }
}

export default function Home() {
  interface MovieState {
    movie: {
      nowplaying: {
        results: any[]; 
      },
      popular:{
        results:any[];
      }
    };
  }

  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchData() {
      const userData = await getnomplaying();
      const pop = await getpopular();
      if (userData) {
        dispatch(addnowplaying(userData));
      }
      if(pop){
        dispatch(addpopular(pop))
      }
    }
    fetchData();
  }, [dispatch]);

  const nowplaying = useSelector((state: MovieState) => state.movie.nowplaying.results);
  const popular = useSelector((state:MovieState)=> state.movie.popular.results)
  if(nowplaying)

  return (
    <div className="flex flex-col">
      
        
          <Maincon/>
          <div className="-mt-48 flex flex-col z-20 ">
          
            <div className="flex  p-12  overflow-x-scroll overflow-y-hidden h-auto">
              
            {nowplaying && nowplaying.map((movies: any, index: number) => (
             <Moviecard key={index} movie={movies}/>
            ))}
            </div>
            <div className="text-white font-bold text-xl pl-12 ">Popular</div>
            <div className="flex  p-12  overflow-x-scroll overflow-y-hidden h-auto">
              
            {popular && popular.map((movies: any, index: number) => (
             <Moviecard key={index} movie={movies}/>
            ))}
            </div>

          </div>
          
       
     
    </div>
  );
}
