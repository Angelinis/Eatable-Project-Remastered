import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { HomePage } from './Pages/HomePage/Home'
import { Profile } from './Pages/ProfilePage/Profile'
import { Login } from './Pages/LoginPage/Login'

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/home' element={<HomePage/>}></Route>
      <Route path='/profile' element={<Profile/>}></Route>
      <Route path='/' element={<Login/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
