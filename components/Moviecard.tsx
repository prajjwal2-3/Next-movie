import React, { useState } from "react";
import { IMG_URL } from "@/constants/constant";

const Moviecard = ({ movie }: { movie: any }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="sm:mx-4 mx-2 flex-shrink-0 relative sm:w-64 w-32 justify-center flex "
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={IMG_URL + movie.poster_path}
        alt="poster image"
        className={`w-full rounded-xl hover:scale-125 duration-200 `}
      />
      {isHovered && (
        <>
          <div className="absolute sm:w-80 w-40 sm:block hidden bottom-36 bg-gradient-to-t from-slate-900 pointer-events-none text-white py-2 text-center sm:text-xl  font-bold">
            {movie.title}
          </div>
          <div className="absolute -bottom-12 sm:w-80 w-40 sm:h-2/4 rounded-b-xl  bg-slate-900 text-white py-2 text-center pointer-events-none">
            <div className="flex justify-around px-1">
              <button className="bg-white sm:m-2 w-10/12  sm:px-6 sm:py-3 mx-1 py-1 rounded-md text-black shadow-md on hover:opacity-75 ">
                ▶️ Watch Now
              </button>
              <button className="bg-gray-500 sm:m-2 w-2/12  rounded-md opacity-65 on hover:opacity-75  shadow-md text-xl text-white">
                ➕
              </button>
            </div>
            <div className=" text-white/80 text-left  sm:block hidden p-3 overflow-hidden text-ellipsis">
              {movie.overview}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Moviecard;
