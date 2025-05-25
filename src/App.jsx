
import { Outlet } from 'react-router'
import './App.css'

function App() {

  return (
    <>
  <h1 class="text-3xl font-bold underline">
    Navbar
  </h1>
  <button className='btn btn-primary'>Content</button>
  <br/>
  <button className='btn btn-primary'>Footer</button>
  <Outlet></Outlet>
    </>
  )
}

export default App
