import { Routes, Route } from 'react-router-dom'
import { HomePage } from './Pages/HomePage/Home'
import { Profile } from './Pages/ProfilePage/Profile'
import { Login } from './Pages/LoginPage/Login'

function App() {

  return (
    <>
    <Routes>
      <Route path='/home' element={<HomePage/>}></Route>
      <Route path='/profile' element={<Profile/>}></Route>
      <Route path='/' element={<Login/>}></Route>
    </Routes>
    </>
  )
}

export default App
