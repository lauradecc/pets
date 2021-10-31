import { Link } from 'react-router-dom'


const AnimalItem = ({ getPets, pet }) => {

  return (
    pet &&
    <>
      <div className="d-flex flex-row justify-content-center">
        <img src={pet.img} alt={pet.race} className="me-3" />
        <div>
          <p>{pet.race}</p>
          <h2>{pet.name}</h2>
          <p>{pet.weight} kg</p>
        </div>
      </div>
      <Link to={`/mascotas/${pet._id}`}><button>Ver detalles</button></Link>
    </>
  )

}


export default AnimalItem
