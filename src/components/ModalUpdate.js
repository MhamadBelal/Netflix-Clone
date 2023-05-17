import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

function ModalUpdate(props){

    const updateMovie = async (e) =>{
        e.preventDefault();
        // console.log(e.target.name.value)

        const obj = {
            name : e.target.name.value,
            character : e.target.image.value,
            original_name : e.target.date.value,
            popularity : e.target.overview.value
        }
        console.log(obj)
        
        const serverURL = `http://localhost:3001/updateMovie/${props.clickedMovie.id}`;
        const result = await axios.put(serverURL,obj);
        console.log('done',result.data)

        // To close our model 
        props.closeUpdateModal();

        props.takeNewDataFromUpdatedModal(result.data)
    }

    return(
        <>
         <Modal show={props.updateFlag} onHide={props.closeUpdateModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <Form onSubmit={updateMovie}>
                        <Form.Group className="mb-3">
                            <Form.Label>Name</Form.Label>
                            <Form.Control name="name" type="text" defaultValue={props.clickedMovie.name}/>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Image Path</Form.Label>
                            <Form.Control name="image" type="text" defaultValue={props.clickedMovie.character}/>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Date</Form.Label>
                            <Form.Control name="date" type="text" defaultValue={props.clickedMovie.original_name}/>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Overview</Form.Label>
                            <Form.Control name="overview" type="text" defaultValue={props.clickedMovie.popularity}/>
                        </Form.Group>

                        <Button variant="primary" type="submit">Submit</Button>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={props.closeUpdateModal}>
                        Close
                    </Button>
                    <Button variant="primary">
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ModalUpdate;