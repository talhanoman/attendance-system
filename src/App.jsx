import { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Welcome from './components/Welcome';
import Signup from './components/Signup';
import Login from './components/Login';
import Admin from './components/Admin';
import './App.css'


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Welcome />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/admin' element={<Admin />} />
      </Routes>
    </Router>
    // <section>
    //   <h1>Face Authentication by FaceIO</h1>
    //   <button onClick={handleSignUp}>Sign-Up</button>
    //   <button onClick={handleLogIn}>Log-in</button>
    // </section>
  )
}

export default App
