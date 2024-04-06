"use client"
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addnowplaying, addpopular, addtoprated, addupcoming } from "./redux/movieslice";
import { useEffect } from "react";
import Maincon from "@/components/Maincon";
import Moviecard from "@/components/Moviecard";
async function getnomplaying() {
  try {
    const response = await axios.get("https://next-movie-ruby.vercel.app/api/movie/nowplaying");
    return response.data;
  } catch (e) {
    console.log(e);
    return null; 
  }
}
async function getpopular() {
  try {
    const response = await axios.get("https://next-movie-ruby.vercel.app/api/movie/popular");
    return response.data;
  } catch (e) {
    console.log(e);
    return null; 
  }
}
async function gettoprated() {
  try {
    const response = await axios.get("https://next-movie-ruby.vercel.app/api/movie/toprated");
    return response.data;
  } catch (e) {
    console.log(e);
    return null; 
  }
}
async function getupcoming() {
  try {
    const response = await axios.get("https://next-movie-ruby.vercel.app/api/movie/upcoming");
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
      },
      toprated:{
        results:any[];
      },
      upcoming:{
        results:any[]
      }
    };
  }

  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchData() {
      const userData = await getnomplaying();
      const pop = await getpopular();
      const top = await gettoprated();
      const up = await getupcoming();
      if (userData) {
        dispatch(addnowplaying(userData));
      }
      if(pop){
        dispatch(addpopular(pop))
      }
      if(top){
        dispatch(addtoprated(top))
      }
      if(up){
        dispatch(addupcoming(up))
      }
    }
    fetchData();
  }, [dispatch]);

  const nowplaying = useSelector((state: MovieState) => state.movie.nowplaying.results);
  const popular = useSelector((state:MovieState)=> state.movie.popular.results)
  const toprated = useSelector((state:MovieState)=>state.movie.toprated.results)
  const upcoming = useSelector((state:MovieState)=>state.movie.upcoming.results)
  if(nowplaying)

  return (
    <div className="flex flex-col">
      
        
          <Maincon/>
          <div className="sm:-mt-48 flex flex-col z-20 ">
          
            <div className="flex  sm:py-12 py-11 sm:mb-0 px-4 overflow-x-scroll overflow-y-hidden ">
              
            {nowplaying && nowplaying.map((movies: any, index: number) => (
             <Moviecard key={index} movie={movies}/>
            ))}
            </div>
            <div className="text-white font-bold text-xl px-4 ">Popular</div>
            <div className="flex px-4 py-12  overflow-x-scroll overflow-y-hidden h-auto">
              
            {popular && popular.map((movies: any, index: number) => (
             <Moviecard key={index} movie={movies}/>
            ))}
            </div>
            <div className="text-white font-bold text-xl px-4 ">Top rated</div>
            <div className="flex px-4  py-12  overflow-x-scroll overflow-y-hidden h-auto">
              
            {toprated && toprated.map((movies: any, index: number) => (
             <Moviecard key={index} movie={movies}/>
            ))}
            </div>
            <div className="text-white font-bold text-xl px-4">Top rated</div>
            <div className="flex px-4 py-12  overflow-x-scroll overflow-y-hidden h-auto">
              
            {upcoming && upcoming.map((movies: any, index: number) => (
             <Moviecard key={index} movie={movies}/>
            ))}
            </div>

          </div>
          
       
     
    </div>
  );
}
