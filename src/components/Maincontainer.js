import React from 'react'
import Buttonlist from './Buttonlist';
import Videocontainer from './Videocontainer';
const Maincontainer = () => {
  const list = ["all","live","gaming","songs","soccer","cricket","cooking","valentines"]
  return (
    <div className="flex flex-wrap">
        {list.map((li, index) => (
        <Buttonlist key={index} name={li} />
      ))}
        <Videocontainer />
    </div>
  )
}

export default Maincontainer