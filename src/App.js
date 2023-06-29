import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Courses from './components/Courses';
import Login from './components/Login';
import Signup from './components/Signup';
import Alert from './components/Alert';
import { CourseProvider } from './context/Coursecontext';
import Subscribed from './components/Subscribed';

function App() {

  const [alert, setAlert] = useState(null)
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1800)
  }

  return (
    <>
      <CourseProvider>
        <BrowserRouter>
          <Navbar showAlert={showAlert} />
          <Alert alert={alert} />
          <div>
            <Routes>
              <Route element={<Home />} path='/' />
              <Route element={<Courses showAlert={showAlert} />} path='/courses' />
              <Route element={<Login showAlert={showAlert} />} path='/Login' />
              <Route element={<Signup showAlert={showAlert} />} path='/Signup' />
              <Route element={<Subscribed showAlert={showAlert} />} path='/subscribed' />
            </Routes>
          </div>
        </BrowserRouter>
      </CourseProvider>
    </>
  );
}

export default App;
