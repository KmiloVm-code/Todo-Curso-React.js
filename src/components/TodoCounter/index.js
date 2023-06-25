import React from 'react'
import { TodoContext } from '../TodoContext';

function TodoCounter() {

  const { completedTodos, totalTodos } = React.useContext(TodoContext);

  return (

    totalTodos === completedTodos && completedTodos !== 0 ?

    <h1 className='TodoCounter'>
      Felicitaciones has completado todcompletedTodoso los TODOs 🎉
    </h1>

    :

    <h1 className='TodoCounter'>
      Has completado 
      <span> {completedTodos} </span> 
      de 
      <span> {totalTodos} </span> 
      TODOs
      </h1>
  )
}

export { TodoCounter }