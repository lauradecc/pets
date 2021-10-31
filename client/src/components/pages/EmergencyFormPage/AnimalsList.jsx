import AnimalItem from './AnimalItem'


const AnimalsList = ({ getPets, pets, setPet }) => {

  const displayPets = () => pets.map(pet => {
    return <AnimalItem
      key={pet._id}
      pet={pet}
      getPets={getPets}
      setPet={setPet}
    />
  })

  return (
    <>
      {displayPets()}
    </>
  )

}


export default AnimalsList
