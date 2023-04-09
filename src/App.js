import React, { useEffect, createContext, useReducer, useContext } from 'react'
import './App.css';
import Navbar from './components/Navbar'
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
import Home from './components/screens/Home'
import Signin from './components/screens/Login'
import Profile from './components/screens/Profile'
import Signup from './components/screens/Signup'
import Createpost from './components/screens/Createpost';
import { reducer, initialState } from './reducer/userReducer'

export const UserContext = createContext()

const Routing = () => {
  const navigate = useNavigate()
  const { state, dispatch } = useContext(UserContext)
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'))
    if (user) {
      dispatch({ type: "USER", payload: user })
      navigate('/')
    } else {
      navigate('/signin')
    }
  }, [])
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/Signin' element={<Signin />} />
      <Route path='/Profile' element={<Profile />} />
      <Route path='/Signup' element={<Signup />} />
      <Route path='/create' element={<Createpost />} />
    </Routes>
  )
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <UserContext.Provider value={{ state, dispatch }}>
      <BrowserRouter>
        <Navbar />
        <Routing />
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
