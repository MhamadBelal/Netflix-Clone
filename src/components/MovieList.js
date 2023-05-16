
import Movie from './Movie';

function MovieList(props)
{
    return(
        <>
        {
            props.terndingMoviesData.map(item=>{
                return(                 
                    <Movie terndingMoviesData={item} key={item.id}/>
                )
            })
        }
         
        </>
    )
}

export default MovieList;