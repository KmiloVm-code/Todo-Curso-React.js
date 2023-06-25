import React from 'react'
import { TodoContext } from '../TodoContext'

function TodoSearch() {

  const { searchValue, setSearchValue} = React.useContext(TodoContext)

  return (
    <input 
    className='TodoInput' 
    placeholder='Cortar cebolla'
    value={searchValue}
    onChange={ (event) => setSearchValue(event.target.value)}
    ></input>
  )
}

export { TodoSearch }