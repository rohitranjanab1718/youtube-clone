import React from 'react'
import Button from './Button';
const Buttonlist = ({name}) => {
  return (
    <div className="flex">
      <Button name={name} />
    </div>
  )
}

export default Buttonlist;