import { useState } from 'react'

import Header from './components/Header';
import Home from './components/Home';

function App() {
  

  return (
    
      <div>

      
      <div className ="bg-gray-500 h-4/5">
      <Header className=""/>
      </div>
      <div className='p-9 bg-gray-200 h-screen'>

      
      <Home />

      </div>
      </div>
  )
}

export default App;
