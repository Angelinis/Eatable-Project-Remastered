import { Routes, Route } from 'react-router-dom'
import { HomePage } from './Pages/HomePage/Home'
import { Profile } from './Pages/ProfilePage/Profile'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<HomePage/>}></Route>
      <Route path='/profile' element={<Profile/>}></Route>
    </Routes>
    </>
  )
}

export default App
