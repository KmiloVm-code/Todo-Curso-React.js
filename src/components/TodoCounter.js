import React from 'react'

function TodoCounter({ total, completed }) {
  return (

    total == completed && completed != 0 ?

    <h1 className='TodoCounter'>
      Felicitaciones has completado todo los TODOs 🎉
    </h1>

    :

    <h1 className='TodoCounter'>
      Has completado 
      <span> {completed} </span> 
      de 
      <span> {total} </span> 
      TODOs
      </h1>
  )
}

export { TodoCounter }