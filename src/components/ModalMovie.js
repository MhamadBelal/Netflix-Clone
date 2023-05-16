import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image'
import Form from 'react-bootstrap/Form';
import axios from 'axios';

function ModalMovie(props) {

    const addToFav = (item) =>{
        const serverURL = `http://localhost:3001/addMovie`;
        axios.post(serverURL , item )
        .then(response=>{
            console.log(response.data)
        })
        .catch((error)=>{
            console.log(error)
        })
        // console.log(item)
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
                        <Form.Control as="textarea" rows={3} />
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