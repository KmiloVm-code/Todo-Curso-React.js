import { ReactComponent as CheckSVG } from './Icons/Check.svg'
import { ReactComponent as DeleteSVG } from './Icons/delete.svg'
import React from 'react'

const iconTypes = {
  "check": (color) => <CheckSVG className='Icon-svg' fill={color}/>,
  "delete": (color) => <DeleteSVG className='Icon-svg' fill={color}/>
};

function TodoIcon({type, color, onClick}) {
  return (
    <span className={`Icon Icon-${type}`} onClick={onClick}>
      {iconTypes[type](color)}
    </span>
  )
}

export { TodoIcon }