import React, { useEffect, useState } from 'react'
import "./Banner.css"
import axios from "./axios"
import requests from './Request'

function Banner() {

    const [movie, setMovie] = useState([])

    useEffect(() => {
        async function fetchData(){
            // local axios
            const request = await axios.get(requests.fetchNetflixOriginals)
            setMovie(
                request.data.results[
                    // looking for a number between 0 to total...
                    Math.floor(Math.random()*request.data.results.length-1)
                ]
            );
            return request //good practice
        }

        fetchData()
    },[])

    // console.log(movie)

    function truncate(string, n){
        //trunking the description.....   CHECK THIS
        return string?.length > n ? string.substr(0, n-1) + '...' : string;
    }

  return (
    <header 
        className='banner'
        style={{
            backgroundSize: "cover",
            backgroundImage: `url("https://image.tmdb.org/t/p/w500/${movie?.backdrop_path}")`,
            // backgroundColor: "black",
            backgroundPosition: "center center",
        }}
    >
        <div className='banner__contents'>
        {/* // hace el llamado al titulo, el key depende del JSON */}
            <h1 className='banner__title'>
                {movie?.title || movie?.name || movie?.original_title}
            </h1>
            <div className='banner_buttons'>
                <button className='banner_button'>Play</button>
                <button className='banner_button'>My List</button>
            </div>
            <h1 className='banner_description'>
                {truncate(movie?.overview,150)}
            </h1>
        </div>
        <div className='banner_fadeBottom' />
    </header>
  )
}

export default Banner