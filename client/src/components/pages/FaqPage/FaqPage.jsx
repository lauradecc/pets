import { Button, Col, Container, Row } from "react-bootstrap"
import { Link } from "react-router-dom"
import "./FaqPage.css"
import * as PATHS from "./../../../utils/paths"


const FaqPage = () => {

  return (
    <Container className="faq-page">
      <Row>
        <Col className="mb-5">
          <h1 className="text-center">Preguntas frecuentes</h1>
          <br />
          <hr className="mb-0" />
          <div className="faq-page__title ">
            <h3>¿En qué consiste?</h3>
          </div>
          <hr className="mt-0" />
          <div className="faq-page__description">
            <p>
              Petsbook es una plataforma que reúne todos los datos
              de tus peludos amigos para ayudarte a cuidar de
              ellos.
            </p>
            <p>
              Normalmente son las clínicas veterinarias quienes
              almacenan toda la información referente a la salud
              de los animales.
            </p>
            <p>
              Cuando éstas necesitan ser vacunadas o
              desparasitadas, se les envía un mensaje a sus dueños
              o responsables para que acudan a la clínica.
            </p>
            <p>
              Desde Petsbook pensamos que tienes derecho a saberlo
              todo sobre la salud de tu mascota o animales a tu
              cargo.
            </p>
          </div>
          <hr className="mb-0" />
          <div className="faq-page__title">
            <h3>¿Qué obtienes?</h3>
          </div>
          <hr className="mt-0" />
          <div className="faq-page__description">
            <li>
              <strong>Historial clínico electrónico.</strong>{" "}
              Vacunas, desparasitaciones, intervenciones,
              tratamientos, su vida antes de llegar a ti... TODO.
            </li>
            <li>
              <strong>Informes veterinarios.</strong> Recibe un
              informe desde de cada visita al veterinario con
              todos los detalles y resultados de la misma.
            </li>
            <li>
              <strong>Pide cita.</strong> Con tu veterinario
              habitual o el más cercano.
            </li>
            <li>
              <strong>Veterinarios de urgencia.</strong>{" "}
              Dispuestos a ayudarte en cualquier momento y siempre
              que tu mascota lo necesite.
            </li>
            <li>
              <strong>Y mucho más.</strong> Desde un calendario
              para visualizar todas las citas con tu clínica hasta
              guías y artículos para ayudarte a cuidar de tu
              mascota.
            </li>
          </div>
          <hr className="mb-0" />
          <div className="faq-page__title">
            <h3>¿Y si soy una casa de acogida?</h3>
          </div>
          <hr className="mt-0" />
          <div className="faq-page__description">
            <p>
              Debe de ser muy duro encargarse de tantos animales y
              llevar un seguimiento de cada uno de ellos.
            </p>
            <p>
              Por eso, las casas de acogida disfrutan de
              funcionalidades especiales como:
            </p>
            <li>
              Crear varios perfiles dentro de una misma cuenta.
            </li>
            <li>
              Ver en que proceso de adopción se encuentran los
              animales acogidos.
            </li>
            <li>
              Descuentos especiales en artículos para animales.
            </li>
          </div>
          <hr className="mb-0" />
          <div className="faq-page__title">
            <h3>
              ¿Por qué necesito la invitación de mi veterinario?
            </h3>
          </div>
          <hr className="mt-0" />
          <div className="faq-page__description">
            <p>
              Esta aplicación se conecta directamente con el
              software de tu clínica veterinaria, pudiendo tener
              así, y en tiempo real, toda la información de tu
              mascota.
            </p>
            <p>
              Por otro lado, y para asegurar la veracidad de la
              información que mostramos a nuestros usuarios, todos
              los datos de tu mascota deben ser introducidos por
              un profesional -sobretodo a la hora de aplicar
              tratamientos-.
            </p>
          </div>
          <div className="faq-page__login-btn d-flex justify-content-center">
            <Link to={PATHS.LOGIN_PAGE}>
              <Button className="btn">Empezar sesión</Button>
            </Link>
          </div>
        </Col>
      </Row>
    </Container>
  )
}


export default FaqPage
