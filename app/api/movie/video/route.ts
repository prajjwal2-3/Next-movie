import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';

export async function GET(req: NextRequest) {
    const id = req.headers
    const options = {
        method: 'GET',
        url: `https://api.themoviedb.org/3/movie/${id}/videos`,
        params: {
            include_video:'true',
            language: 'en-US', 
            page: '1'},
        headers: {

          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMGRkMDlkZWM0ZDczNjM2Njk2Nzk3ODFhMWVlMDBjOCIsInN1YiI6IjY1ZDYzNzYyOTk3NGVlMDE3YjA1NjIzNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OJRc_SaCQ-2Fmm4GrUs45cU7un1Vqt55vy4ttrrV42U'
        }
      };
  
  try {
    const response = await axios.request(options);
    return NextResponse.json(response.data);
  } catch (error) {
    console.error(error);
    return NextResponse.error();
  }
}
