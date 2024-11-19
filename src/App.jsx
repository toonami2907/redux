import React from 'react'
import AddToDo from './components/AddToDo'
import Todos from './components/Todos'


const App = () => {
  return (
    <div className='max-w-2xl mx-auto h-screen flex flex-col justify-center items-center'>
      <AddToDo />
      <Todos/>
    </div>
  )
}

export default App