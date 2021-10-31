import { ANIMALS_PAGE } from "./../../../utils/paths"
import { useState, useEffect } from "react"
import { Col, Container, Row } from "react-bootstrap"
import { Link, useParams } from "react-router-dom"
import UsersService from "./../../../services/users.service"
import "./PetDetailsPage.css"
import contacts from "./../../../images/contacts.svg"

const usersService = new UsersService();


const PetDetailsPage = () => {

  const [pet, setPet] = useState(null)
  const { id } = useParams()

  const getPet = () => {
    usersService
      .getPets()
      .then((res) => setPet(res.data.pets[id]))
      .catch((err) => console.error(err))
  }

  useEffect(() => {
    getPet()
  }, [])

  return (
    pet &&
    <Container className="pet-details-page mt-3">
      <Row>
        <Col className="mx-4">
          <Row>
            <Col>
              <img
                className="pet-details-page__img me-3"
                src={pet.img}
                alt={pet.race}
              />
            </Col>
            <Col>
              <p>{pet.race}</p>
              <h2>{pet.name}</h2>
              {pet.sterilized ? <p>Esterilizado</p> : <p>Sin esterilizar</p>}
              <p>{pet.weight} kg</p>
            </Col>
          </Row>
          <Row>
            <Col>
              <Link
                className="pet-details-page__regular-link d-flex justify-content-center"
                to="#"
              >
                <button className="green-btn mt-2 d-flex justify-content-center align-content-center">
                  <i>
                    <img src={contacts} alt="contacts" />{" "}
                  </i>
                  &nbsp; Compartir datos
                </button>
              </Link>
              <Link
                className="pet-details-page__regular-link  d-flex justify-content-center"
                to="#"
              >
                <button className="white-btn mt-2">
                  Ver calendario de citas
                </button>
              </Link>
              <Row className="mt-3">
                <Col className="d-flex flex-row justify-content-between">
                  <p>Microchip: </p>
                  <p className="pet-details-page__paragraph">
                    {pet.microchip}
                  </p>
                  <p>NHC: </p>
                  <p className="pet-details-page__paragraph">{pet.NHC}</p>
                </Col>
              </Row>
              <Link className="pet-details-page__green-link" to="#">
                Ver información de contacto
              </Link>
              <Link
                className="pet-details-page__regular-link"
                to={ANIMALS_PAGE}
              >
                <button className="white-btn">Volver</button>
              </Link>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  )

}


export default PetDetailsPage
