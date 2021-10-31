import { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap'
import UsersService from './../../../services/users.service'
import AnimalsList from './AnimalsList'
import './AnimalsPage.css'

const usersService = new UsersService()


const AnimalsPage = () => {

  const [pets, setPets] = useState(null)

  const getPets = () => {
    usersService
      .getPets()
      .then(res => setPets(res.data.pets))
      .catch(err => console.error(err))
  }

  useEffect(() => {
    getPets()
  }, [])

  return (
    <Container className="pets-page">
      <h1 className="text-center mb-4">Mis Mascotas</h1>
      {pets?.length ?
        <AnimalsList getPets={getPets} pets={pets} />
        :
        <p>No pets to show.</p>
      }
    </Container>
  )

}


export default AnimalsPage
