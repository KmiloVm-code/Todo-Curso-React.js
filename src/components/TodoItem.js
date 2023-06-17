import React from 'react'

function TodoItem({ text, completed, onCompleted, onDelete }) {
  return (
    <li className='TodoItem'>
      <span className={`Icon Icon-Check 
      ${completed && 'Icon-Check--active'}`}
      onClick={onCompleted}
      >
        V
      </span>
      <p className={`TodoItem-p 
      ${completed && 'TodoItem-p--complete'}`}>
        {text}
      </p>
      <span className='Icon Icon-Delete'
      onClick={onDelete}
      >
        X
      </span>
    </li>
  )
}

export { TodoItem }