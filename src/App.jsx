import { Routes, Route } from 'react-router-dom'
import { HomePage } from './Pages/HomePage/Home'
import { Profile } from './Pages/ProfilePage/Profile'

function App() {

  return (
    <>
    <Routes>
      <Route path='/home' element={<HomePage/>}></Route>
      <Route path='/' element={<Profile/>}></Route>
    </Routes>
    </>
  )
}

export default App
