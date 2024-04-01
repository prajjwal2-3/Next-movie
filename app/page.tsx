"use client"

import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addnowplaying } from "./redux/movieslice";
import { useEffect } from "react";

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

  return (
    <div className="flex flex-col justify-center h-screen">
      <div className="flex justify-center">
        <div className="border p-8 rounded">
          <div>
            {nowplaying && nowplaying.map((e: any, index: number) => (
              <h1 key={index}>hi</h1>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
