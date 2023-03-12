const API_KEY = "62a180a69534e897ac8301547340b8e4"

const requests = {
    fetchTrending: `/trending/all/day?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/movie?api_key=${API_KEY}&language=en-US`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovier: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovier: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovier: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovier: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
}

export default requests;