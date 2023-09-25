import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { HomePage } from './Pages/HomePage/Home'
import { Profile } from './Pages/ProfilePage/Profile'
import { HistoryPage } from './Pages/HistoryPage/History'
import { Cart } from './Pages/CartPage/Cart'
import { Edit } from './Pages/ProfilePage/Edit'
import { Show } from './Pages/ShowPage/Show'


function AuthenticatedApp() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomePage/>}></Route>
      <Route path='/profile' element={<Profile/>}></Route>
      <Route path='/edit' element={<Edit/>}></Route>
      <Route path='/history' element={<HistoryPage/>}></Route>
      <Route path='/cart' element={<Cart/>}></Route>
      <Route path='/show/:id' element={<Show/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default AuthenticatedApp
