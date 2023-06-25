import { CreateTodoButton } from '../components/CreateTodoButton';
import { TodoCounter } from '../components/TodoCounter';
import { TodoItem } from '../components/TodoItem';
import { TodoList } from '../components/TodoList';
import { TodoSearch } from '../components/TodoSearch';
import { TodosLoading } from '../components/TodosLoading';
import { TodosError } from '../components/TodosError';
import { EmptyTodos } from '../components/EmptyTodos';

import React from 'react'
import { TodoContext } from '../components/TodoContext';
import { Modal } from '../Modal';
import { TodoForm } from '../components/TodoForm';

function AppUI() {

  const {
    error, loading, searchedTodos, completeTodo, deleteTodo, openModal
  } = React.useContext(TodoContext);

  return (
    <>
      <TodoCounter />
      <TodoSearch />

      <TodoList>
        {loading && <TodosLoading />}
        {error && <TodosError />}
        {(!loading && !searchedTodos.length) && <EmptyTodos />}
        {searchedTodos.map(todo => (
          <TodoItem key={todo.text} text={todo.text} completed={todo.completed} onCompleted={() => completeTodo(todo.text)} onDelete={() => deleteTodo(todo.text)} />
        ))}
      </TodoList>

      <CreateTodoButton />

      {openModal &&
        <Modal>
          <TodoForm />
        </Modal>
      }
    </>
  );
}

export { AppUI }