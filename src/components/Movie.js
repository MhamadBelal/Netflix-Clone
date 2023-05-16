import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ModalMovie from './ModalMovie';
import { useState } from 'react';


function Movie(props) {
    
    const posterPathURL='http://image.tmdb.org/t/p/w500/'

    const [showFlag, setShowFlag] = useState(false);
    const [clickedMovie, setClickedMovie] = useState({});

    const handleShow = (item) => {
        setShowFlag(true)
        // console.log(item)
        setClickedMovie(item)
    }

    const handleClose = () => {
        setShowFlag(false)
    }


    return (
        <>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={posterPathURL+props.terndingMoviesData.character} width="100%" height="300px"/>
                <Card.Body>
                    <Card.Title>{props.terndingMoviesData.name}</Card.Title>
                    <Card.Text>
                        {props.terndingMoviesData.original_name}
                    </Card.Text>
                    <Card.Text>
                        {props.terndingMoviesData.popularity}
                    </Card.Text>
                    <Button variant="primary" onClick={()=>{handleShow(props.terndingMoviesData)}}>Add to Favorite</Button>
                </Card.Body>
            </Card>

            <ModalMovie showFlag={showFlag} handleClose={handleClose} clickedMovie={clickedMovie}/>
        </>
    )
}

export default Movie;