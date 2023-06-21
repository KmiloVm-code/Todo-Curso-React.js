import { CreateTodoButton } from '../components/CreateTodoButton';
import { TodoCounter } from '../components/TodoCounter';
import { TodoItem } from '../components/TodoItem';
import { TodoList } from '../components/TodoList';
import { TodoSearch } from '../components/TodoSearch';
import React from 'react'

function AppUI({ totalTodos, completedTodos, searchValue, setSearchValue, searchedTodos, completeTodo, deleteTodo }) {
  return (
    <>
      <TodoCounter completed={completedTodos} total={totalTodos} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      <TodoList>
        {searchedTodos.map(todo => (
          <TodoItem key={todo.text} text={todo.text} completed={todo.completed} onCompleted={() => completeTodo(todo.text)} onDelete={() => deleteTodo(todo.text)} />
        ))}
      </TodoList>
      <CreateTodoButton />
    </>
  );
}

export { AppUI }