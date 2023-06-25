import React from 'react'
import './TodoForm.css'
import { TodoContext } from '../TodoContext';

function TodoForm() {

  const {
    addTodo,
    setOpenModal
  } = React.useContext(TodoContext);

  const [newTodoValue, setNewTodoValue] = React.useState('');

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  }

  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(false);
  }

  const onCancel = () => {
    setOpenModal(false);
  }

  return (
    <form onSubmit={onSubmit}>
      <label>Escribe tu nuevo TODO</label>
      <textarea
        placeholder='Cortar la cebolla para el almuerzo'
        value={newTodoValue}
        onChange={onChange}
      />
      <div className='TodoForm-buttonContainer'>
        <button
          type='button'
          className='TodoForm-button--cancel'
          onClick={onCancel}>
          Cancelar
        </button>
        <button
          type='submit'
          className='TodoForm-button--add'>
          Añadir
        </button>
      </div>
    </form>
  )
}

export { TodoForm }