import React from 'react'
import './TodosLoading.css'

function TodosLoading() {
  return (
    <div className='Loader-container'>
      <div className='loader'/>
      <p className='loader-text'>Cargando...</p>
    </div>
  )
}

export { TodosLoading }