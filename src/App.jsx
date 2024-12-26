

import { Route, Routes } from 'react-router-dom';
import Hero from './components/Hero';
import Login from './components/Login';
import Repository from './components/Repository';
import Sidebar from './components/Sidebar';
import { useState } from 'react';

function App() {

   const [color, setColor] = useState('#6C6C6C4D');
   

  return (
    <main className='h-full w-[100vw] flex flex-col items-center'>
      
      <Routes>
         <Route path='/' element={<Repository/>}/>
         <Route path='/p' element={<Login className=' w-full h-full flex justify-center items-center'></Login>}/>
      </Routes>

    </main>
  )
}

export default App
