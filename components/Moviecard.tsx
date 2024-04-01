import React from 'react';
import { IMG_URL } from '@/constants/constant';

const Moviecard = ({ movie }: { movie: any }) => {
  return (
    <div className="sm:mx-4 mx-2 flex-shrink-0 relative hover:scale-125 duration-200 ">
      <img src={IMG_URL + movie.poster_path} alt="poster image" className="w-64  rounded-xl " />
      <p className="absolute bottom-0 left-0 right-0 rounded-b-xl bg-black bg-opacity-50 text-white text-center py-2">{movie.title}</p>
    </div>
  );
};

export default Moviecard;
