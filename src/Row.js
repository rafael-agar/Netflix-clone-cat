import React, { useEffect, useState } from 'react'
import "./Row.css"
import axios from './axios'

function Row({title, fetchUrl, isLargeRow=false}) {
    const [movies, setMovies] = useState([])

    const base_url = 'https://image.tmdb.org/t/p/w500/'

    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(fetchUrl)
            setMovies(request.data.results)
            return request
        }

        fetchData()
    },[fetchUrl])

    // console.log(movies)

    return (
        <div className='row'>
            <h2>{title}</h2>
            
            <div className='row__posters'>
                {/* recorremos el objeto */}
                {movies.map(movie => (

                    // before render, avoid dead links
                    ((isLargeRow && movie.poster_path) || (!isLargeRow && movie.poster_path)) && (
                        <img 
                            //className={`row__ everytime render bounch, back a key, make clean
                            //interpolation
                            //isLargeRow ?  verifying if movie exist (objects keys)
                            className={`row__poster ${isLargeRow && "row__posterLarge"}`} 
                            key={movie.id}
                            src={`${base_url}${ 
                            isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name}>
                        </img>
                    )  
                ))}
            </div>
        </div>
    )
}

export default Row