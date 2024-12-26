import React from 'react'
import Sidebar from './Sidebar'
import Hero from './Hero'
import { useState } from 'react'

const Repository = () => {
    const [color, setColor] = useState('#6C6C6C4D');
  return (
    <div className=' w-full md:w-11/12 h-fit flex md:flex-row flex-col'>
          <Sidebar setColor={setColor} />
          <Hero color={color}/>
       </div>
  )
}

export default Repository