import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { HomePage } from './Pages/HomePage/Home'
import { Profile } from './Pages/ProfilePage/Profile'

function AuthenticatedApp() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/home' element={<HomePage/>}></Route>
      <Route path='/' element={<Profile/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default AuthenticatedApp
