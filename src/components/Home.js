import { useEffect, useState } from 'react'
import MovieList from './MovieList'

function Home() {

    const [terndingMoviesData, setTerndingMoviesData] = useState([])
    const getAllTrendingMovies = () => {
        const serverURL = `${process.env.REACT_APP_serverURL}/trending`;
    
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