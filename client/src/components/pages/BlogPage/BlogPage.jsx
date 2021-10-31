import { Col, Container, Row } from "react-bootstrap"
import "./BlogPage.css"
import blogIcon from "./../../../images/blogIcon.svg"
import blog1 from "./../../../images/blog1.png"
import blog2 from "./../../../images/blog2.png"
import blog3 from "./../../../images/blog3.png"
import blog4 from "./../../../images/blog4.png"


const BlogPage = () => {

  return (
    <Container className="blog-page">
      <div className="d-flex justify-content-start align-conntent-center mx-1 mt-4">
        <img
          className="blog-page__icon"
          src={blogIcon}
          alt="blog icon"
        />
        <h5>Blog</h5>
      </div>
      <p className="mx-1 mb-4">
        Artículos y guías para darle a tu <br /> pequeño amigo los
        mejores cuidados
      </p>
      <Row className="blog-page__row m-3">
        <Col className="d-flex flex-column justify-content-center align-content-center">
          <h6>Alimentación</h6>
          <p>Descubre cual es la mejor alimentación para tu perro.</p>
        </Col>
        <Col className="d-flex flex-column justify-content-center align-items-center">
          <img src={blog1} alt="Alimentación" />
        </Col>
      </Row>
      <Row className="blog-page__row m-3">
        <Col className="d-flex flex-column justify-content-center">
          <h6>Higiene</h6>
          <p>¿Sabías que existen juguetes que limpian los dientes de tu mascota?</p>
        </Col>
        <Col className="d-flex flex-column justify-content-center align-items-center">
          <img src={blog2} alt="Higiene" />
        </Col>
      </Row>
      <Row className="blog-page__row m-3">
        <Col className="d-flex flex-column justify-content-center ">
          <h6>Jugar</h6>
          <p>Un perro en movimiento sin duda está vivo</p>
        </Col>
        <Col className="d-flex flex-column justify-content-center align-items-center">
          <img src={blog3} alt="Jugar" />
        </Col>
      </Row>
      <Row className="blog-page__row m-3">
        <Col className="d-flex flex-column justify-content-center">
          <h6>Y mucho más</h6>
          <p>Conviértete en un experto en animales gracias a nuestro blog.</p>
        </Col>
        <Col className="d-flex flex-column justify-content-center align-items-center">
          <img src={blog4} alt="Y mucho más" />
        </Col>
      </Row>
    </Container>
  )

}


export default BlogPage
