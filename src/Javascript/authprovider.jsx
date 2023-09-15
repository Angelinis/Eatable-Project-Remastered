import { createContext, useContext, useEffect, useState } from 'react';
import * as auth from './sessionservice';
import { TOKEN_KEY as tokenKey } from '../../config';

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const _token = sessionStorage.getItem(tokenKey)

  useEffect(() => {
    if (_token){
      auth
      .getProfile()
      .then((u) => {
        if (u) {
          setUser(u);
        } else {
          setUser(null);
        }
      })
      .catch((error) => {
        console.error("Error fetching user profile:", error);
      });
    }
  }, []);

  function login(credentials) {
    auth
      .loginProfile(credentials)
      .then((u) => setUser(u))
      .catch(console.log);
  }

  function logout() {
    auth
      .logoutProfile()
      .then((u) => {
        sessionStorage.removeItem(tokenKey);
        setUser(null);
      })
      .catch(console.log);
  }

  // function signup(userData) {
  //   createUser(userData)
  //     .then((u) => setUser(u))
  //     .catch(console.log);
  // }

  function update(data) {
    auth
    .updateProfile(data)
      .then((u) => setUser(u))
      .catch(console.log)
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  return useContext(AuthContext);
}

export { AuthProvider, useAuth };