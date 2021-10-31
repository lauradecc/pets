import { Col, Container, Row } from "react-bootstrap"
import "./HomePage.css"
import logo from "./../../../images/logo.png"
import Button from "@restart/ui/esm/Button"
import { Link } from "react-router-dom"
import * as PATHS from "./../../../utils/paths"


const HomePage = () => {

  return (
    <Container className="home-page">
      <Row>
        <Col>
          <img src={logo} alt="logo" />
          <Link to={PATHS.LOGIN_PAGE}>
            <Button className="btn">Iniciar sesión</Button>
          </Link>
          <p>
            Recuerda que necesitas la invitación de tu clínica
            veterinaria para acceder. <Link to={PATHS.FAQ_PAGE}>Más info</Link>
          </p>
        </Col>
      </Row>
    </Container>
  )

}


export default HomePage
