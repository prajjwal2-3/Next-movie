"use client"
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addnowplaying } from "./redux/movieslice";
import { useEffect } from "react";
import Maincon from "@/components/Maincon";
import Moviecard from "@/components/Moviecard";
async function getUserDetails() {
  try {
    const response = await axios.get("http://localhost:3000/api/movie/nowplaying");
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
      };
    };
  }

  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchData() {
      const userData = await getUserDetails();
      if (userData) {
        dispatch(addnowplaying(userData));
      }
    }
    fetchData();
  }, [dispatch]);

  const nowplaying = useSelector((state: MovieState) => state.movie.nowplaying.results);
  if(nowplaying)

  return (
    <div className="flex flex-col">
      
        
          <Maincon/>
            <div className="flex -mt-48 p-12 overflow-x-scroll h-auto z-20">
            {nowplaying && nowplaying.map((movies: any, index: number) => (
             <Moviecard key={index} movie={movies}/>
            ))}
            </div>
          
       
     
    </div>
  );
}
