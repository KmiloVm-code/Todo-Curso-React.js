import React from 'react'
import { TodoContext } from '../TodoContext'

function CreateTodoButton() {

  const {setOpenModal, openModal} = React.useContext(TodoContext);

  return (
    <button 
    className='CreateTodoButton' 
    onClick={ () => setOpenModal(!openModal) }>
      +
    </button>
  )
}

export { CreateTodoButton }