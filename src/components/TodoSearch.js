import React from 'react'

function TodoSearch({ searchValue, setSearchValue}) {
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