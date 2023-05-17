import { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ModalUpdate from './ModalUpdate';
import axios from 'axios';

function FavList() {

    const posterPathURL='http://image.tmdb.org/t/p/w500/'
    const [favArr, setFavArr] = useState([]);
    
    const [clickedMovie, setClickedMovie] = useState({});
    const [updateFlag, setUpdateFlag] = useState(false);
    const [newArr,setNewArr] = useState([])


    const getFavMovies = () => {
        const serverURL = `http://localhost:3001/getMovies`;
        fetch(serverURL)
            .then((response) => {
                response.json()
                    .then(data => {
                        setFavArr(data)
                        console.log(data)
                    })
            })
    }

    const deleteFavMovies =async (item)=>{
            const serverURL = `http://localhost:3001/deleteMovie/${item.id}`;
            const result = await axios.delete(serverURL , item )
            console.log(item)
            const serverURL2 = `http://localhost:3001/getMovies`;
            fetch(serverURL2)
                .then((response) => {
                    response.json()
                        .then(data => {
                            setFavArr(data)
                            console.log(data)
                        })
                }) 
    }



    // Update Modal 
    const showUpdateModal = (item) => {
        setUpdateFlag(true);
        setClickedMovie(item);
        console.log(item);
    }

    const closeUpdateModal = () => {
        setUpdateFlag(false)
    }

    const takeNewDataFromUpdatedModal = (arr)=>{
        setNewArr(arr)
        console.log(newArr)
    }


    useEffect(() => {
        getFavMovies()
    }, [])

    useEffect(()=>{
        setNewArr(favArr)
    },[favArr])

    return (
        <>
            {newArr.map(item => {
                return (
                    <Card style={{ width: '18rem' }} key={item.id}>
                        <Card.Img variant="top" src={posterPathURL+item.character} />
                        <Card.Body>
                            <Card.Title>{item.name}</Card.Title>
                            <Card.Text>
                                {item.popularity}
                            </Card.Text>
                            <Button variant="success" onClick={() => { showUpdateModal(item) }}>Update</Button>
                            <Button variant="danger" onClick={() => { deleteFavMovies(item) }}>Delete</Button>
                        </Card.Body>
                    </Card>
                )
            })}

    <ModalUpdate updateFlag={updateFlag} closeUpdateModal={closeUpdateModal} clickedMovie={clickedMovie} takeNewDataFromUpdatedModal={takeNewDataFromUpdatedModal}/>
        </>
    )
}

export default FavList;