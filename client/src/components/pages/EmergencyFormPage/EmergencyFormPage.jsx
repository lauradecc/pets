import { useState, useEffect } from 'react'
import { Container, Button, Form } from 'react-bootstrap'
import UsersService from './../../../services/users.service'
import AnimalsList from './AnimalsList'
import './EmergencyFormPage.css'
import weight from './../../../images/weight.svg'
import hunger from './../../../images/hunger.svg'
import thirst from './../../../images/water.png'
import catdog from './../../../images/catdog.png'
import { Link } from 'react-router-dom'

const usersService = new UsersService()


const EmergencyFormPage = () => {

  const [stage, setStage] = useState(0)
  const [pets, setPets] = useState(null)
  const [pet, setPet] = useState(null)
  const [whenSymptomsStarted, setWhenSymptomsStarted] = useState(null)
  const [weightChanges, setWeightChanges] = useState(null)
  const [hungerChanges, setHungerChanges] = useState(null)
  const [thirstChanges, setThirstChanges] = useState(null)
  const [symptoms, setSymptoms] = useState([])

  useEffect(() => {
    getPets()
  }, [])


  const getPets = () => {
    usersService
      .getPets()
      .then(res => setPets(res.data.pets))
      .catch(err => console.error(err))
  }

  const handleClick = e => {
    e.preventDefault()
    setStage(stage + 1)
  }

  const handleSymptoms = e => {
    // e.preventDefault()
    const { value } = e.target

    let newValue = [...symptoms]
    if (e.target.checked) newValue.push(value)
    if (!e.target.checked) newValue.splice(newValue.indexOf(value), 1)

    setSymptoms(newValue)

  }

  const whenSymptomsStartedArr = [
    'Hoy',
    'Ayer',
    'Hace un par de días',
    'No lo sé'
  ]

  const changes = [
    'Pérdida',
    'Aumento',
    'Sin cambios',
  ]

  const possibleSymptoms = [
    'Ya no viene a recibirme a la puerta',
    'Duerme más de día, menos de noche',
    'Dificultad para levantarse, subir escaleras',
    'Dificultad para saltar, caminar o correr',
    'Dificultad para comer',
    'Manchas rojas, pérdida de pelo',
    'Caída de dientes, encías enrojecidas',
    'Vómitos o diarrea',
    'Flatulencia o estreñimiento',
    'Pelaje sin brillo',
    'Picor (se lame, se rasca)',
    'Mal olor de la piel',
    'Mal aliento, sarro',
    'Accidentes con el adiestramiento en casa',
    'Orina con más frecuencia'
  ]


  return (
    <Container className="emergency-form">

      {
        pets?.length && stage === 0 &&

        <div className="d-flex flex-column align-items-center">
          <h1 className="mb-5">Seleccione a su mascota:</h1>
          {
            <AnimalsList
              getPets={getPets}
              pets={pets}
              setPet={setPet}
            />
          }
          <Button onClick={e => handleClick(e,)}>Continuar</Button>
        </div>
      }

      {
        pets?.length && stage === 1 &&

        <>
          <h1 className="mb-3">¿Cuándo empezó a tener síntomas?</h1>

          <Container>
            {whenSymptomsStartedArr.map(symptom => (
              <div key={symptom} className="mb-3">
                <Form.Check
                  type='radio'
                  name="symptom"
                  id={symptom}
                  label={symptom}
                  value={symptom}
                  onChange={() => { setWhenSymptomsStarted(symptom) }}
                />
              </div>
            ))}
          </Container>
          <Button onClick={e => handleClick(e)}>Continuar</Button>
        </>
      }

      {
        pets?.length && stage === 2 &&

        <>
          <h1 className="mb-3">¿Has notado cambios en...?</h1>

          <Container>

            <h2><img src={weight} alt="weight" />  Peso</h2>

            {changes.map(weightChanges => (
              <div key={weightChanges} className="mb-3">
                <Form.Check
                  type='radio'
                  name="weightChanges"
                  id={weightChanges}
                  label={weightChanges}
                  value={weightChanges}
                  onChange={() => { setWeightChanges(weightChanges) }}
                />
              </div>
            ))}

            <h2><img src={hunger} alt="hunger" />  Apetito</h2>

            {changes.map(hungerChanges => (
              <div key={hungerChanges} className="mb-3">
                <Form.Check
                  type='radio'
                  name="hungerChanges"
                  id={hungerChanges}
                  label={hungerChanges}
                  value={weightChanges}
                  onChange={() => { setHungerChanges(hungerChanges) }}
                />
              </div>
            ))}

            <h2><img src={thirst} alt="thirst" />  Consumo de agua</h2>

            {changes.map(thirstChanges => (
              <div key={thirstChanges} className="mb-3">
                <Form.Check
                  type='radio'
                  name="thirstChanges"
                  id={thirstChanges}
                  label={thirstChanges}
                  value={weightChanges}
                  onChange={() => { setThirstChanges(thirstChanges) }}
                />
              </div>
            ))}

          </Container>
          <Button onClick={e => handleClick(e)}>Continuar</Button>
        </>
      }

      {
        pets?.length && stage === 3 &&

        <>
          <h1 className="mb-3">¿Qué síntomas presenta?</h1>

          {possibleSymptoms.map(symptom => (
            <div key={symptom} className="mb-3">
              <Form.Check
                type='checkbox'
                name="symptom"
                id={symptom}
                label={symptom}
                value={symptom}
                onChange={(e) => handleSymptoms(e)}
              />
            </div>
          ))}
          <Button onClick={e => handleClick(e)}>Continuar</Button>
        </>
      }

      {
        pets?.length && stage === 4 &&

        <>
          <Container>
            <h1 className="mb-5">Confirme que los datos están bien:</h1>
            <p><b>Mascota: </b>{pet}</p>
            <p><b>Empezó a tener síntomas: </b>{whenSymptomsStarted}</p>
            <p><b>Cambios: </b></p>
            <ul>
              {(weightChanges !== 'Sin cambios' && weightChanges !== null) && <li>{`${weightChanges} peso`}</li>}
              {(hungerChanges !== 'Sin cambios' && hungerChanges !== null) && <li>{`${hungerChanges} apetito `}</li>}
              {(thirstChanges !== 'Sin cambios' && thirstChanges !== null) && <li>{`${thirstChanges} consumo de agua`}</li>}
            </ul>
            <p><b>Síntomas: </b></p>
            <ul>
              {symptoms.map(symptom => <li>{symptom}</li>)}
            </ul>
          </Container>
          <Button onClick={e => handleClick(e)}>Confirmar</Button>
        </>
      }

      {
        pets?.length && stage === 5 &&

        <Container>
          <img src={catdog} alt="cad and dog draw" className="centered-img mt-3" />
          <h1 className="mb-3">Su mascota puede estar en peligro</h1>
          <p>Por favor, acuda a su veterinario de urgencias más cercano o concierte una cita cuanto antes</p>

          <article>
            <h3>Veterinarios de urgencia</h3>
            <p>Encuentre el centro más cercano.</p>
            <a href='https://www.google.com/maps' target="_blank">Ver veterinarios de urgencia</a>
          </article>

          <article>
            <h3>Concertar cita</h3>
            <p>Consulte el horario de su clínica habitual y concierte una cita desde la app.</p>
            <Link href='#'>Ver horario</Link>
          </article>

          <article>
            <h3>Videollamada</h3>
            <p>Realice una videollamada con su veterinario.</p>
            <a href={`https://wa.me/${process.env.REACT_APP_PHONE_NUMBER_WHATSAPP}?text=%C2%A1Hola!%20Tengo%20una%20duda%20sobre%20mi%20mascota`} target="_blank">Iniciar videollamada</a>
          </article>
        </Container>
      }

    </Container>
  )

}


export default EmergencyFormPage
