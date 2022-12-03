import { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Welcome from './components/Welcome';
import Signup from './components/Signup';
import Login from './components/Login';
import './App.css'


function App() {
  let faceio;
  useEffect(() => {
    faceio = new faceIO("fioa4bf3");
  }, []);



  const handleLogIn = async () => {
    try {
      let response = await faceio.authenticate({
        locale: "auto",
      })

      console.log(` Unique Facial ID: ${response.facialId}
          PayLoad: ${response.payload}
          `);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Welcome />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
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
