import React from "react"
import { Container, Nav, Navbar } from "react-bootstrap"
import { Link } from "react-router-dom"
import "./Navigation.css"
import * as PATHS from "./../../../utils/paths"


const NavBar = () => {

  return (
    <Navbar className="navbar" expand={false}>
      <Container fluid>
        <Navbar.Brand as={Link} to={"/"} className="navbar__logo">
          Petsbook
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" navbarScroll>
            <Nav.Link as={Link} to={PATHS.HOME_PAGE}>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to={PATHS.LOGIN_PAGE}>
              Iniciar sesión
            </Nav.Link>
            <Nav.Link as={Link} to={PATHS.EMERGENCY_FORM_PAGE}>
              Realizar consulta
            </Nav.Link>
            <Nav.Link as={Link} to={PATHS.CALENDAR_PAGE}>
              Calendario de citas
            </Nav.Link>
            <Nav.Link as={Link} to={PATHS.ANIMALS_PAGE}>
              Mis mascotas
            </Nav.Link>
            <Nav.Link as={Link} to={PATHS.BLOG_PAGE}>
              Blog
            </Nav.Link>
            <Nav.Link as={Link} to={PATHS.FAQ_PAGE}>
              Preguntas frecuentes
            </Nav.Link>
            <Nav.Link>
              <hr />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )

}


export default NavBar
