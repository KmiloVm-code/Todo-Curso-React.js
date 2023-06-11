import React from 'react'

function TodoItem({ text, completed }) {
  return (
    <li className='TodoItem'>
      <span className={`Icon Icon-Check 
      ${completed && 'Icon-Check--active'}`}>
        V
      </span>
      <p className={`TodoItem-p 
      ${completed && 'TodoItem-p--complete'}`}>
        {text}
      </p>
      <span className='Icon Icon-Delete'>
        X
      </span>
    </li>
  )
}

export { TodoItem }