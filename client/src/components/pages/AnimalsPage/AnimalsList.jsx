import AnimalItem from './AnimalItem'


const AnimalsList = ({ getPets, pets }) => {

  const displayPets = () => pets.map(pet => {
    return <AnimalItem key={pet._id} pet={pet} getPets={getPets} />
  })

  return (
    <>
      {displayPets()}
    </>
  )

}


export default AnimalsList
