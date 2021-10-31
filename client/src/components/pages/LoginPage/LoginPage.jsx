import "./LoginPage.css"
import { Button, Col, Container, Form, Row } from "react-bootstrap"
import loginImage from "./../../../images/loginImage.png"
import { Link } from "react-router-dom"
import appleLogo from "./../../../images/appleLogo.svg"
import facebookLogo from "./../../../images/facebookLogo.svg"
import googleLogo from "./../../../images/googleLogo.png"


const LoginPage = () => {

  return (
    <Container className="login-page">
      <Row>
        <Col>
          <img
            className="login-page__mainImg"
            src={loginImage}
            alt="login"
          />
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Text>Email or Phone Number</Form.Text>

              <Form.Control
                type="email"
                placeholder="example@gmail.com"
                className="mt-2"
              />
            </Form.Group>

            <Form.Group
              className="mb-2"
              controlId="formBasicPassword"
            >
              <Form.Text>Password</Form.Text>
              <Form.Control
                type="password"
                placeholder="Input your password"
                className="mt-2"
              />
            </Form.Group>

            <Link className="forgot-pwd__link">
              ¿Has olvidado tu contraseña?
            </Link>
            <Link className="mt-4 d-flex justify-content-center submit-btn__link ">
              <Button className="btn">Iniciar sesión</Button>
            </Link>
          </Form>
          <Row className="mt-4 justify-content-center">
            <Col
              sm={8}
              className="d-flex justify-content-around align-items-center"
            >
              <hr />
              <p className="text-center">o conecta con</p>
              <hr />
            </Col>
          </Row>
          <Row>
            <Col className="d-flex justify-content-center">
              <img
                className="login-page__logo"
                src={googleLogo}
                alt="login with google"
              />

              <img
                className="login-page__logo"
                src={facebookLogo}
                alt="login with fb"
              />
              <img
                className="login-page__logo"
                src={appleLogo}
                alt="login with apple"
              />
            </Col>
          </Row>
          <Row className="mt-5 mb-2">
            <p className="text-center login-page__footer-text">
              ¿Qué pasa si mi clínica aún no me ha invitado?
            </p>
          </Row>
        </Col>
      </Row>
    </Container>
  )

}


export default LoginPage
