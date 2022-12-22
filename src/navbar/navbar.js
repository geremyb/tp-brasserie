import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function NavbarComponent() {
  return (
   <container className=''>
      <Navbar className="nav justify-content-center">
          <Navbar.Brand as={Link} to="/" className='colorNav mr-auto'>Accueil</Navbar.Brand>
            <Nav>
              <Nav.Link as={Link} to="/ListePagine" assName='colorNav'>Liste des Brasseries</Nav.Link>
            </Nav>
      </Navbar>  
    </container>
  );
}

export default NavbarComponent;

