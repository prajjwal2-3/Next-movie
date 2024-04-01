import axios from 'axios'


async function getvideodetails() {
    
    try {
      
      const response = await axios.get("http://localhost:3000/api/movie/video")
        return response.data;
    }  catch(e) {
      console.log(e);
    }
  }


export default async function Video(){
    const videodata = await getvideodetails()

    return(
        <div>

            hello from video component
        </div>
    )
}