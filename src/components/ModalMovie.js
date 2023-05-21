import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image'
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { useState } from 'react';

function ModalMovie(props) {

    const [comment, setComment] = useState('');

    const addToFav = (item) =>{
        const serverURL = `${process.env.REACT_APP_serverURL}/addMovie`;
        const dataMovie = { ...item, comment: comment };
        axios.post(serverURL , dataMovie )
        .then(response=>{
            console.log(response.data)
        })
        .catch((error)=>{
            console.log(error)
        })
        // console.log(item)
        props.handleClose();
    }

    const posterPathURL = 'http://image.tmdb.org/t/p/w500/'
    return (
        <>
            <Modal show={props.showFlag} onHide={props.handleClose} >
                <Modal.Header closeButton>
                    <Modal.Title>{props.clickedMovie.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Image src={posterPathURL + props.clickedMovie.character} width='100%'></Image>
                    {props.clickedMovie.popularity}
                    <Form>
                    <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlTextarea1"
                    >
                        <Form.Label>Type your Comment</Form.Label>
                        <Form.Control as="textarea" rows={3} name="comment" value={comment}
                                onChange={(e) => setComment(e.target.value)}/>
                    </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={props.handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={()=>{addToFav(props.clickedMovie)}}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ModalMovie;