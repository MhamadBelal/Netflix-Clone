import { useEffect, useState } from 'react'
import MovieList from './MovieList'

function Home() {

    const [terndingMoviesData, setTerndingMoviesData] = useState([])
    const getAllTrendingMovies = () => {
        const serverURL = `http://localhost:3001/trending`;
    
        fetch(serverURL)
            .then(response => {
                response.json().then(data => {
                    console.log(data)
                    setTerndingMoviesData(data)
                })
            })
    }

    useEffect(()=>{
        getAllTrendingMovies()
    },[])

    return (
      <>
        <MovieList terndingMoviesData={terndingMoviesData} />
      </>
    );
  }
  
  export default Home;