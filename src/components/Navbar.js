import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function NavbarFunction()
{
return(
    <>
     <Navbar bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Movies List</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/favoriteList">FavList</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
    </>
)
}

export default NavbarFunction;