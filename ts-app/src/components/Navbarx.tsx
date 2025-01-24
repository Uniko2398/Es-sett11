import { Nav,Navbar, NavLink } from "react-bootstrap";


const Navbarx = function() {

  return(


<Navbar bg="black" variant="dark" expand="lg" className="p-3">
        
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav" >
          <Nav className="me-auto ">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">Novità</Nav.Link>
            <Nav.Link href="#">Radio</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Brand href="#"> <img src="../public/assets/logos/music.svg" className="icon"/></Navbar.Brand>
        <NavLink href="#" className="text-danger">Accedi</NavLink>
      </Navbar>
  )
}


      export default Navbarx