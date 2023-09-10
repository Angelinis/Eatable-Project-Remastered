import UnauthenticatedApp from './UnauthenticatedApp.jsx'
import AuthenticatedApp from './AuthenticatedApp'
import { useAuth } from './Javascript/authprovider'

function App() {
  const {user} = useAuth()
  return (
    <>
    {user ? <AuthenticatedApp></AuthenticatedApp> : <UnauthenticatedApp></UnauthenticatedApp>}
    </>
  )
}

export default App
