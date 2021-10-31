import { useState } from 'react'


const AnimalItem = ({ getPets, pet, setPet }) => {
  
  const [hasBorder, setHasBorder] = useState(false)

  const handleClick = (e, id) => {
    e.preventDefault()
    setPet(id)
    setHasBorder(true)
    // setStage(1) al hacer clic en el botón
  }

  return (
    <>
      <h2>{pet?.name}</h2>
      <img src={pet?.img} alt={pet?.race}
        onClick={e => handleClick(e, pet?.name)} // Should be id
        className={`circle ${hasBorder ? "selected" : ""}`}
      />
    </>
  )

}


export default AnimalItem
