import React from 'react'
import "./HomeScreen.css"
import Nav from "../Nav"
import Banner from '../Banner'
import requests from '../Request'
import Row from '../Row'

function HomeScreen() {
  return ( 
    <div className='homeScreen'>
      <Nav />

      <Banner />

      <Row 
        title="CSTV ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow //true return the movie poster
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action" fetchUrl={requests.fetchActionMovier} />
      <Row title="Comedy" fetchUrl={requests.fetchComedyMovier} />
      <Row title="Horror" fetchUrl={requests.fetchHorrorMovier} />
      <Row title="Romance" fetchUrl={requests.fetchRomanceMovier} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  )
}

export default HomeScreen