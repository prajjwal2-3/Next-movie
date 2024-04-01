import axios from "axios";

async function getvideodetails() {
  try {
    const response = await axios.get("http://localhost:3000/api/movie/video");
    return response.data;
  } catch (e) {
    console.log(e);
  }
}
export default async function Video() {
  const videodata = await getvideodetails();
 const videoid = videodata.results.filter(
    (data: { type: string; size:number }) => data.type === "Trailer" && data.size === 2160
  );
  const id = videoid?.[0]?.key
  return (
    <div className="relative -mt-28">
        <div className="absolute inset-0 bg-gradient-to-b from-black "></div>
      <iframe
       className="w-full aspect-video"
        src={`https://www.youtube.com/embed/${id}/?playlist=${id}&loop=1&autoplay=1&mute=1&controls=0`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
}
